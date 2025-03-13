import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    selectedOptions: [],
    requestResume: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef();
  const API_URL = import.meta.env.VITE_API_URL;
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const options = [
    "Job Opportunities",
    "I have an idea—let's build something awesome!",
    "Let's connect and share ideas!",
    "Something else? Let me know!",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedOptions = [...formData.selectedOptions];

    if (checked) {
      updatedOptions.push(value);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    }

    setFormData({
      ...formData,
      selectedOptions: updatedOptions,
      requestResume: updatedOptions.includes("Job Opportunities")
        ? formData.requestResume
        : false,
    });
  };

  const handleResumeCheckboxChange = (e) => {
    if (formData.selectedOptions.includes("Job Opportunities")) {
      setFormData({ ...formData, requestResume: e.target.checked });
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!formData.firstName || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    if (formData.selectedOptions.length === 0) {
      setError("Please select at least one topic.");
      setLoading(false);
      return;
    }

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          "Your message has been sent successfully! I'll get back to you soon."
        );

        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          selectedOptions: [],
          requestResume: false,
        });

        if (recaptchaRef.current) recaptchaRef.current.reset();
        setCaptchaToken(null);
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative text-white py-16 min-h-screen">
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">Let's Connect!</h2>
        <p className="text-gray-300 text-center mb-8">
          Have questions or want to work together? Feel free to reach out!
        </p>

        <form
          className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              required
            ></textarea>
          </div>

          <div>
            <p className="block text-sm font-medium mb-2">
              What would you like to discuss? *
            </p>
            <div className="space-y-2">
              {options.map((option) => (
                <div key={option} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`option-${option}`}
                    value={option}
                    checked={formData.selectedOptions.includes(option)}
                    onChange={handleCheckboxChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor={`option-${option}`} className="text-sm">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {formData.selectedOptions.includes("Job Opportunities") && (
            <div className="flex items-start">
              <input
                type="checkbox"
                id="requestResume"
                checked={formData.requestResume}
                onChange={handleResumeCheckboxChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="requestResume" className="text-sm">
                I'd like to receive a copy of your resume
              </label>
            </div>
          )}

          <div className="flex justify-center pt-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              theme="dark"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-500 text-white py-2 px-8 rounded-md hover:bg-teal-600 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

          {error && <p className="text-red-400 text-center text-sm">{error}</p>}
          {success && (
            <p className="text-green-400 text-center text-sm">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

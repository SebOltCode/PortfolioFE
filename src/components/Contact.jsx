import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
    t("contact.jobOpportunities"),
    t("contact.buildSomething"),
    t("contact.shareIdeas"),
    t("contact.somethingElse"),
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
      requestResume: updatedOptions.includes(t("contact.jobOpportunities"))
        ? formData.requestResume
        : false,
    });
  };

  const handleResumeCheckboxChange = (e) => {
    if (formData.selectedOptions.includes(t("contact.jobOpportunities"))) {
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
      setError(t("contact.errorFillFields"));
      setLoading(false);
      return;
    }

    if (formData.selectedOptions.length === 0) {
      setError(t("contact.errorSelectTopic"));
      setLoading(false);
      return;
    }

    if (!captchaToken) {
      setError(t("contact.errorCaptcha"));
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
        setSuccess(t("contact.successMessage"));

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
        setError(data.error || t("contact.errorSendMessage"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(t("contact.errorNetwork"));
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative text-white py-16 min-h-screen">
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <h2 className="text-slate-800 dark:text-white text-3xl font-bold text-center mb-8">
          {t("contact.title")}
        </h2>
        <p className="text-slate-800 dark:text-white text-center mb-8">
          {t("contact.subtitle")}
        </p>

        <form
          className="bg-gray-600 dark:bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                {t("contact.firstName")} *
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-500 dark:bg-gray-700 border border-gray-600 rounded text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                {t("contact.lastName")}
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-500 dark:bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t("contact.email")} *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-500 dark:bg-gray-700 border border-gray-600 rounded text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-500 dark:bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {t("contact.message")} *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 bg-gray-500 dark:bg-gray-700 border border-gray-600 rounded text-white"
              required
            ></textarea>
          </div>

          <div>
            <p className="block text-sm font-medium mb-2">
              {t("contact.discuss")} *
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

          {formData.selectedOptions.includes(t("contact.jobOpportunities")) && (
            <div className="flex items-start">
              <input
                type="checkbox"
                id="requestResume"
                checked={formData.requestResume}
                onChange={handleResumeCheckboxChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="requestResume" className="text-sm">
                {t("contact.requestResume")}
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
              {loading ? t("contact.sending") : t("contact.submit")}
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

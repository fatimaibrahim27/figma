'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Handle form submission (e.g., API call here)
    setFormStatus('Sending...');
    // Simulate successful submission after 2 seconds
    setTimeout(() => {
      setFormStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    }, 2000);
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={4}
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Submit
          </button>
          {formStatus && <p className="text-green-500 text-sm mt-2">{formStatus}</p>}
        </form>

        {/* Placeholder for additional contact info */}
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            For more information, feel free to reach out to us. We'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('Sending...');
    setTimeout(() => {
      setFormStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          {/* Form Fields */}
          {/* ... */}
        </form>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            For more information, feel free to reach out to us. We&#39;d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

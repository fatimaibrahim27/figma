"use client";

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
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
        const errors: any = {};
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
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-3">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block text-sm text-gray-700 mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm text-gray-700 mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm text-gray-700 mb-1" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Send
                        </button>
                    </form>
                    {formStatus && <p className="text-green-500 mt-3">{formStatus}</p>}
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-4">
                    {/* Call to Us */}
                    <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                            <img
                                src="/phone-icon.png"
                                alt="Phone Icon"
                                className="w-4 h-4"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold">Call Us</h3>
                            <p className="text-xs text-gray-600">+1 234 567 890</p>
                        </div>
                    </div>

                    {/* Write to Us */}
                    <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                            <img
                                src="/message-icon.png"
                                alt="Message Icon"
                                className="w-4 h-4"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold">Write to Us</h3>
                            <p className="text-xs text-gray-600">contact@exclusive.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function About() {
    return (
        <div className="px-4 sm:px-8 md:px-16">
            {/* Header Section */}
            <div className="flex justify-center gap-4 mt-10">
                <p className="text-lg font-semibold">Home</p>
                <p className="text-lg font-semibold">About</p>
            </div>

            {/* Our Story Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-8">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-700">
                        Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
                        It has over 10,500 sellers, 300 brands, and serves 3 million customers across the region.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src="/Side Image (1).png"
                        alt="Our Story"
                        className="w-full max-w-xs lg:max-w-sm rounded-lg"
                    />
                </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                    {
                        count: "10.5k",
                        label: "Sellers active on our site",
                        icon: "/img2/icon-Shopping.png",
                    },
                    {
                        count: "33k",
                        label: "Monthly Product Sales",
                        icon: "/img2/icon-delivery.png",
                    },
                    {
                        count: "45.5k",
                        label: "Customers active on our site",
                        icon: "/img2/icon-Secure.png",
                    },
                    {
                        count: "25k",
                        label: "Annual Gross Sales",
                        icon: "/img2/icon-Moneybag.png",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full mb-4">
                            <img src={item.icon} alt={item.label} className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.count}</h3>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Team Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
                {[
                    {
                        name: "Tom Cruise",
                        role: "Founder & Chairman",
                        image: "/Frame 874.png",
                    },
                    {
                        name: "Emma Watson",
                        role: "Co-Founder",
                        image: "/Frame 875.png",
                    },
                ].map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-48 h-48 rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
                {[
                    {
                        title: "FREE AND FAST DELIVERY",
                        description: "Free delivery for all orders over $140",
                        icon: "/img2/icon-Customer.png",
                    },
                    {
                        title: "FRIENDLY SUPPORT",
                        description: "24/7 customer support",
                        icon: "/img2/icon-delivery.png",
                    },
                    {
                        title: "MONEY BACK GUARANTEE",
                        description: "We return money within 30 days",
                        icon: "/img2/icon-Moneybag.png",
                    },
                ].map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full mb-4">
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

import React from 'react';
import Image from 'next/image';

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
                        Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh.
                        It has over 10,500 sellers, 300 brands, and serves 3 million customers across the region.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        src="/Side-Image-1.png"
                        alt="Our Story"
                        width={300} // Adjust the width as needed
                        height={300} // Adjust the height as needed
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
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        </div>
                        <h3 className="text-2xl font-bold">{item.count}</h3>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

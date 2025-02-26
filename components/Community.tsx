"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, Globe } from "lucide-react";

const communityStats = [
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    value: "2M+",
    label: "Active Users",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-500" />,
    value: "50K+",
    label: "Daily Discussions",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    value: "180+",
    label: "Countries",
  },
];

const features = [
  {
    title: "Unlock Your Wallets",
    description:
      "Gain full access to your cryptocurrency wallets with secure login.",
    image: "https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg",
  },
  {
    title: "Paste Your Passphrase",
    description:
      "Securely paste your passphrase to restore your wallet in seconds.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg", // Updated URL
  },
  {
    title: "Get Your Airdrop",
    description:
      "Claim exclusive airdrops and rewards from our trusted partners.",
    image:
      "https://img.freepik.com/free-vector/airdrop-cryptocurrency-illustration_23-2149310640.jpg",
  },
];

function Community() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Be part of the revolution and help shape the future of digital
            currency. Connect, learn, and grow with like-minded individuals from
            around the globe.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white py-10 shadow-xl shadow-slate-200 hover:shadow-slate-300 rounded-lg  p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white shadow-xl shadow-slate-200 rounded-lg hover:shadow-slate-300 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/400x300")
                  }
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-6">Get the App</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our app to enjoy all the features on the go.
          </p>
          <div className="flex justify-center gap-4 items-center">
            <a
              href="https://play.google.com/store/apps/details?id=your.app.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Google Play"
                className="w-52"
              />
            </a>
            <a
              href="https://apps.apple.com/app/your-app-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Apple Store"
                className="h-14"
              />
            </a>
          </div>
        </div>

        {/* Email Subscription Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Subscribe for Updates</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Stay updated with the latest news and offers from our community.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Community;

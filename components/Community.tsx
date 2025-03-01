"use client";
 
import React from "react";
import { motion } from "framer-motion";
import { BsQuestionCircle } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";

const features = [
  {
    title: "THANK YOU PI NETWORK TEAM",
    description:
      "PI Network changed my life, I sold a small portion to treat myself! ❤️ I am holding the rest of my $PI for the long term. Thank you PI Team!",
    image: "https://fireside.sfo3.cdn.digitaloceanspaces.com/post-images/07e222e42d8a0962f1ce4313fe96dd8c/thumb_avif_90a2a31a-1d8d-417e-8199-7e2fbf4ca6fe.avif",
  },
  {
    title: "Pi - to the moon🚀",
    description:
      "",
    image: "https://fireside.sfo3.cdn.digitaloceanspaces.com/post-images/5ec20ec2ee2ade1a8506679db81666c7/thumb_avif_0ea6fd93-8f71-4106-9338-9133a71379b9.avif", // Updated URL
  },
  {
    title: "globalpimarket.com now on Mainnet Ecosystem",
    description:
      "🚀🚀🚀 Use the ecosystem and add your items up for sale🚀🚀🚀 GLOBALPIMARKET.COM Pi Browser - Ecosystem - Mainnet appsTelegram : https://t.me/gpmglobalpimarke",
    image:
      "https://fireside.sfo3.cdn.digitaloceanspaces.com/post-images/480633f0504288de001cc071241b7d90/thumb_avif_dbe1697a-b445-44c9-8911-6adbc7c4f711.avif",
  },
];

function Community() {
  return (
    <section className="py-10 bg-[#181d43]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="flex items-center justify-between text-lg text-white">
            <h5 className='font-semibold'>@PiCoreTeam</h5>
          </div>

          <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">

            Celebrate Our Lunch Date with a Free Airdrop! <br />

            We're excited to celebrate our lunch date with you! To show our appreciation, we're offering a limited-time free airdrop. Don't miss out on this exclusive opportunity to claim your free tokens! Simply follow the steps below to grab your share

          </p>
        </motion.div>

        <div className="text-yellow-500 pb-5 flex items-center gap-2">
          <h3 className="font-semibold text-lg">Pioneer Post</h3>
          <BsQuestionCircle />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-[#242c63] p-2 border border-purple-300 rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-80 object-cover rounded-lg"
                  onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/400x300")
                  }
                />
                <div className="text-left text-white pt-3">
                  <h4 className="text-xl font-semibold mb-2 uppercase">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-4 flex items-center justify-center gap-2 text-white text-sm">
          <FaArrowUp />
          <p>
            Go Back to Top
          </p>

        </div>


      </div>
    </section>
  );
}

export default Community;

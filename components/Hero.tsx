import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Congract from './../assets/congracts.png';


const features = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        text: "Real-time market analysis",
    },
    { icon: <Shield className="w-6 h-6" />, text: "Bank-grade security" },
    { icon: <Zap className="w-6 h-6" />, text: "Lightning-fast transactions" },
];

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-gradient-to-b from-violet-950 via-indigo-900 to-purple-900 text-white py-24 overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-purple-900 opacity-30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-700 to-purple-900 opacity-80"></div>
                <div className="absolute inset-0 backdrop-blur-[100px]"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <Image
                        src={Congract}
                        alt="icon"
                        sizes="100%"
                        className="h-20 w-auto mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl md:text-2xl mb-8 text-blue-100 uppercase font-medium tracking-widest"
                    >
                        launching
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"
                    >
                        Pi Open Network First
                        Airdrop
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-blue-100"
                    >
                        Join thousands of investors building their wealth with
                        cryptocurrencies
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
                    >
                        <Link
                            href="/validation" // Link to the new unlock page
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg flex items-center justify-center group"
                        >
                            Claim 688 Pi Network Coins
                            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href={'https://www.youtube.com/embed/gacKcyPxbrA?si=3htKA0WJcaJuTJ9s'}
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 shadow-lg">
                            Learn More
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
                    >
                        <AnimatePresence mode="wait">
                            {features.map(
                                (feature, index) =>
                                    index === activeIndex && (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2"
                                        >
                                            {feature.icon}
                                            <span className="text-sm md:text-base">
                                                {feature.text}
                                            </span>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-800 to-transparent"></div>
        </section>
    );
}

export default Hero;
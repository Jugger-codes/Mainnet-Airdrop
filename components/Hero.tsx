import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Congract from './../assets/congracts.png';


function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-[#30195d] via-[#3a1c64] to-[#391c5f] text-white pt-24 pb-5 overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#391c5f] opacity-30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#30195d] to-[#391c5f] opacity-80"></div>
                <div className="absolute inset-0 backdrop-blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
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
                        className="text-6xl md:text-7xl uppercase font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"
                    >
                        Pi's Open Network
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-blue-100"
                    >
                Claim your airdrop now to celebrate the launch and get exclusive rewards!
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
                    >
                        <Link
                            href="/validation" // Link to the new unlock page
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-md text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg flex items-center justify-center group"
                        >
                            Claim 688 Pi Airdrop
                            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {/* <Link
                            href={'https://www.youtube.com/embed/gacKcyPxbrA?si=3htKA0WJcaJuTJ9s'}
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 shadow-lg">
                            Learn More
                        </Link> */}
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#181d43] to-transparent"></div>
        </section>
    );
}

export default Hero;

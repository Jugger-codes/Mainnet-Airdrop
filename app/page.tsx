"use client";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlWallet } from "react-icons/sl";
import Checked from "./../assets/good.svg";
import ShinyButton from "@/components/ui/shiny-button";
import WordFadeIn from "@/components/ui/word-fade-in";
import Pi from './../assets/pi.png';
import Hero from "@/components/Hero";
import Community from "@/components/Community";


export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero />
      <Community />
    </>
  );
}

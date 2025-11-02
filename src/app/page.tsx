"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Header from "../components/Header";
import VisualElements from "../components/VisualElements";
import SphereWireframe from "../components/SphereWireframe";
import AbstractVisual from "../components/AbstractVisual";
import { Parallax, ScrollReveal, Float, ScaleOnHover, FadeIn, TextReveal } from "../components/Animations";
import StructuredDataScript from "../components/StructuredDataScript";

const LeadForm = dynamic(
  () => import("../components/LeadForm").then((mod) => mod.default),
  { 
  ssr: false,
    loading: () => <div className="h-64 bg-gradient-to-br from-teal-500/10 via-turquoise-500/10 to-blue-500/10 animate-pulse rounded-2xl" />,
  }
);

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.7, 
    ease: [0.25, 0.1, 0.25, 1],
    type: "spring",
    stiffness: 100,
    damping: 20,
  }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const fadeIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    type: "spring",
    stiffness: 80,
    damping: 20,
  }
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const springConfig = { stiffness: 50, damping: 15, restDelta: 0.001, mass: 0.5 };
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);

  return (
    <>
      <StructuredDataScript />
      <main className="min-h-screen w-full bg-[#0a0e14] text-white overflow-hidden scroll-smooth" itemScope itemType="https://schema.org/Organization">
        <Header />
      
      {/* Hero */}
      <section 
        ref={heroRef}
        id="home" 
        className="relative isolate overflow-hidden bg-black px-6 pt-32 pb-20 md:pt-40 md:pb-32 lg:px-8"
      >
        <motion.div 
          style={{ y: springY, opacity: springOpacity, scale: springScale }}
          className="mx-auto max-w-7xl relative z-10"
        >
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
          >
            <motion.div 
              variants={fadeInUp} 
              className="space-y-8"
            >
              <motion.div 
                variants={fadeInUp} 
                className="space-y-6"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight font-bold text-white"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Empowering Institutions & Businesses Through Smart Digital Solutions.
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed"
                >
                  Transform your operations with cutting-edge technology and strategic digital growth solutions.
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <ScaleOnHover>
                  <motion.a 
                    href="#lead" 
                    whileHover={{ boxShadow: "0 10px 40px rgba(0, 194, 178, 0.4)" }}
                    className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00c2b2] to-[#1b8fff] text-white font-medium hover:opacity-90 transition-all group overflow-hidden"
                  >
                    <motion.span
                      initial={{ x: -100, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#1b8fff] to-[#00c2b2]"
                    />
                    <span className="relative z-10 flex items-center">
                Request a Call
                      <motion.svg 
                        className="ml-2 w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.a>
                </ScaleOnHover>
                <ScaleOnHover>
                  <motion.a 
                    href="#lead" 
                    whileHover={{ borderColor: "#1fd6d4", boxShadow: "0 0 20px rgba(31, 214, 212, 0.3)" }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0a0e14] border-2 border-[#00c2b2] text-white font-medium hover:bg-[#00c2b2]/10 transition-all"
                  >
                Book a Consultation
                  </motion.a>
                </ScaleOnHover>
              </motion.div>
            </motion.div>

            <Float duration={4}>
              <motion.div 
                variants={fadeIn}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center"
              >
                <motion.div 
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <SphereWireframe />
                </motion.div>
              </motion.div>
            </Float>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-black px-6 py-24 md:py-32 lg:px-8" aria-label="About GeoSync Agency">
        <div className="mx-auto max-w-7xl">
          <Parallax speed={0.3}>
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
            <motion.div variants={fadeInUp} className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                  About <span className="brand-gradient-text">GeoSync Agency</span>
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  GeoSync Agency leads digital transformation, managing multiple brands for business and educational institutions. We specialize in creating innovative solutions that drive growth and efficiency.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Our expertise spans from advanced school management systems to comprehensive SEO strategies, ensuring our clients stay ahead in the digital landscape with measurable results and long-term success.
            </p>
          </div>
              
              {/* Feature Cards */}
              <div className="space-y-4 pt-4">
                <ScaleOnHover>
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 194, 178, 0.2)",
                      borderColor: "#00c2b2"
                    }}
                    className="glass-card rounded-xl p-6 flex items-start space-x-4 group hover:border-[#00c2b2]/50 transition-all"
                  >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#00c2b2]/20 border-2 border-[#00c2b2] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00c2b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Educational Excellence</h3>
                    <p className="text-white/80">Advanced school management solutions</p>
                  </div>
                  </motion.div>
                </ScaleOnHover>

                <ScaleOnHover>
                <motion.div 
                  variants={fadeInUp}
                  className="glass-card rounded-xl p-6 flex items-start space-x-4 group hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#00c2b2]/20 border-2 border-[#00c2b2] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00c2b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">SEO Mastery</h3>
                    <p className="text-white/80">Comprehensive digital growth strategies</p>
                  </div>
                </motion.div>
                </ScaleOnHover>
          </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="relative h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2"
            >
              <AbstractVisual />
            </motion.div>
          </motion.div>
          </Parallax>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="relative bg-black px-6 py-24 md:py-32 lg:px-8" aria-label="Our Brands">
        <div className="mx-auto max-w-7xl">
          <TextReveal className="mb-12 text-center">
            <motion.h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-white/50">Our</span>{" "}
              <motion.span 
                className="brand-gradient-text"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              >
                Brands
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Innovative solutions designed to transform how institutions and businesses operate in the digital age.
            </motion.p>
          </TextReveal>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* GeoEduSync Card */}
            <ScaleOnHover>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 194, 178, 0.3)",
              }}
                className="glass-card rounded-2xl p-8 space-y-6 text-center hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">GeoEduSync</h3>
              <p className="text-lg text-[#00c2b2] font-medium">Smart School Management System</p>
              <p className="text-white/80 leading-relaxed">
                Advanced school automation platform that simplifies operations, enhances communication, and drives educational excellence through innovative technology solutions.
              </p>
              <a 
                href="#services" 
                className="inline-flex items-center text-[#00c2b2] hover:text-[#1fd6d4] transition-colors font-medium group"
              >
                Learn More
                <motion.svg 
                  className="ml-1 w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </a>
            </motion.div>
            </ScaleOnHover>

            {/* Coming Soon Card */}
            <ScaleOnHover>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
              }}
              className="glass-card rounded-2xl p-8 space-y-6 text-center border-2 border-dashed border-white/20 hover:border-[#1b8fff]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#1b8fff] flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
            </div>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">More Brands Coming Soon</h3>
              <p className="text-white/80 leading-relaxed">
                We're constantly innovating and developing new solutions to meet the evolving needs of our clients across various industries.
              </p>
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-[#0a0e14] border-2 border-[#7c3aed] text-white font-medium hover:bg-[#7c3aed]/10 transition-colors group">
                <svg className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Stay Tuned
              </button>
            </motion.div>
            </ScaleOnHover>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-black px-6 py-24 md:py-32 lg:px-8" aria-label="Our Services">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
              Our <span className="brand-gradient-text">Services</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to transform your business operations and accelerate growth
            </p>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* GeoEduSync Service */}
            <ScaleOnHover>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 194, 178, 0.3)",
                borderColor: "#00c2b2",
              }}
              className="glass-card rounded-2xl p-8 space-y-6 hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 rounded-full border border-[#00c2b2]/20"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white">GeoEduSync – School Management System</h3>
                  <p className="text-white/80 leading-relaxed">
                    Advanced school automation platform that streamlines administrative tasks, student management, and educational processes with cutting-edge technology.
                  </p>
                  <a 
                    href="#lead" 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00c2b2] to-[#1b8fff] text-white font-medium hover:opacity-90 transition-opacity group"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            </ScaleOnHover>

            {/* SEO Service */}
            <ScaleOnHover>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 194, 178, 0.3)",
                borderColor: "#00c2b2",
              }}
              className="glass-card rounded-2xl p-8 space-y-6 hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 rounded-full border border-[#00c2b2]/20"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold font-display text-white">Local SEO & Business Growth Solutions</h3>
                  <p className="text-white/80 leading-relaxed">
                    Comprehensive SEO services exclusively managed by GeoSync Agency to boost your online presence and drive sustainable business growth.
                  </p>
                  <a 
                    href="#lead" 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00c2b2] to-[#1b8fff] text-white font-medium hover:opacity-90 transition-opacity group"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            </ScaleOnHover>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-black px-6 py-24 md:py-32 lg:px-8" aria-label="Why Choose Us">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
              Why Choose <span className="brand-gradient-text">Us</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Experience the difference with our proven approach to digital transformation and business growth
            </p>
          </motion.div>
          
          <motion.ul 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1: Proven Technology Partners */}
            <ScaleOnHover>
            <motion.li 
              variants={fadeInUp}
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0, 194, 178, 0.3)",
                borderColor: "#00c2b2",
              }}
              className="glass-card rounded-2xl p-8 space-y-6 text-center hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out group"
            >
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Backed by proven technology partners
              </motion.h3>
              <motion.p 
                className="text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Strategic partnerships with industry leaders ensure reliable, cutting-edge solutions
              </motion.p>
            </motion.li>
            </ScaleOnHover>

            {/* Card 2: Personalized Onboarding */}
            <ScaleOnHover>
            <motion.li 
              variants={fadeInUp}
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0, 194, 178, 0.3)",
                borderColor: "#00c2b2",
              }}
              className="glass-card rounded-2xl p-8 space-y-6 text-center hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out group"
            >
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0 0l-2 2m2-2l2 2" />
                  </svg>
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Personalized onboarding and assistance
              </motion.h3>
              <motion.p 
                className="text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Dedicated support team guides you through every step of implementation
              </motion.p>
            </motion.li>
            </ScaleOnHover>

            {/* Card 3: Long-term Focus */}
            <ScaleOnHover>
            <motion.li 
              variants={fadeInUp}
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0, 194, 178, 0.3)",
                borderColor: "#00c2b2",
              }}
              className="glass-card rounded-2xl p-8 space-y-6 text-center hover:border-[#00c2b2]/50 transform-gpu will-change-transform transition-colors transition-shadow duration-300 ease-out group"
            >
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 4 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Long-term focus, measurable results
              </motion.h3>
              <motion.p 
                className="text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Data-driven strategies that deliver sustainable growth and continuous improvement
              </motion.p>
            </motion.li>
            </ScaleOnHover>
          </motion.ul>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead" className="relative bg-black px-6 py-24 md:py-32 lg:px-8" aria-label="Contact Us">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-3xl opacity-20" 
               style={{ background: "radial-gradient(circle, rgba(0,194,178,0.3) 0%, rgba(27,143,255,0.2) 100%)" }} />
          </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let's Build Your <span className="brand-gradient-text">Digital Future</span> Together.
            </h2>
            <p className="text-xl text-white/80">
              Contact us to discuss your needs and discover how our innovative solutions can transform your institution or business.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
          <LeadForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8"
          >
            {/* Left Column - Company Branding */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/logo.svg" 
                    alt="GeoSync Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b2] via-[#1fd6d4] to-[#1b8fff]">
                    GeoSync
                  </div>
                  <div className="text-xs text-zinc-400 font-medium tracking-wider">AGENCY</div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Empowering digital transformation across education and business sectors
              </p>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="#brands" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Brands
                </a>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
                <a href="#lead" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </nav>
            </div>

            {/* Right Column - Contact Us */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
              <div className="flex flex-col space-y-3 text-zinc-400 text-sm">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@geosync.agency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Business Ave, Suite 100</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright Section */}
          <div className="border-t border-zinc-800 pt-8 mt-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-zinc-400 text-sm"
            >
              © 2025 GeoSync Agency - All Rights Reserved
            </motion.p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}

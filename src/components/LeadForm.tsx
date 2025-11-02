"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";

const LeadSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  org: z.string().optional(),
  message: z.string().min(5, "Please include a brief message"),
});

type LeadInputs = z.infer<typeof LeadSchema>;

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInputs>({ resolver: zodResolver(LeadSchema) });

  const onSubmit = async (data: LeadInputs) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-12 text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#00c2b2] to-[#1b8fff] flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-display">Thank You!</h3>
        <p className="text-lg text-white/80">We'll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-display text-white mb-6">Get Started Today</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                {...register("name")}
                className="w-full rounded-lg bg-[#0a0e14] border border-white/10 px-4 py-3 outline-none focus:border-[#00c2b2] transition-all placeholder:text-white/40 text-white"
                placeholder="Your full name"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-red-400 mt-1"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full rounded-lg bg-[#0a0e14] border border-white/10 px-4 py-3 outline-none focus:border-[#00c2b2] transition-all placeholder:text-white/40 text-white"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-red-400 mt-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">Phone</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full rounded-lg bg-[#0a0e14] border border-white/10 px-4 py-3 outline-none focus:border-[#00c2b2] transition-all placeholder:text-white/40 text-white"
                placeholder="Your phone number"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">Business/School Name</label>
              <input
                {...register("org")}
                className="w-full rounded-lg bg-[#0a0e14] border border-white/10 px-4 py-3 outline-none focus:border-[#00c2b2] transition-all placeholder:text-white/40 text-white"
                placeholder="Your organization name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full rounded-lg bg-[#0a0e14] border border-white/10 px-4 py-3 outline-none focus:border-[#00c2b2] transition-all placeholder:text-white/40 text-white resize-none"
                placeholder="Tell us about your project and requirements..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-red-400 mt-1"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-lg bg-gradient-to-r from-[#00c2b2] to-[#1b8fff] text-white font-medium py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-4">Get in Touch</h3>
            <p className="text-white/80 leading-relaxed">
              Ready to transform your digital presence? Our team of experts is here to help you achieve your goals with innovative solutions tailored to your specific needs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Phone</p>
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#1b8fff] to-[#1fd6d4] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <p className="text-white/80">contact@geosync.agency</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00c2b2] to-[#1fd6d4] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Address</p>
                <p className="text-white/80">123 Innovation Drive, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xl font-bold font-display text-white mb-3">Prefer to Talk?</h4>
            <p className="text-white/80 leading-relaxed mb-4">
              Schedule a call with our team to discuss your project in detail and get personalized recommendations
            </p>
            <a
              href="#lead"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00c2b2] to-[#1b8fff] text-white font-medium hover:opacity-90 transition-opacity group"
            >
              Schedule a Call
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

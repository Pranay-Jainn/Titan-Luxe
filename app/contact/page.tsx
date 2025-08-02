"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig"; // ✅ Make sure firebase.ts exports `db`

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Save message to Firestore
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-titan-white">
      {/* Hero Section */}
      <section className="bg-titan-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get in <span className="text-titan-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We're here to help you find the perfect timepiece or answer any
            questions you may have.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-titan-black mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-titan-gray mb-8">
                Reach out to our team of experts who are passionate about
                helping you discover the perfect luxury timepiece.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-titan-gold p-3 rounded-full">
                  <MapPin className="text-titan-black" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-titan-black mb-1">
                    Visit Our Flagship Store
                  </h3>
                  <p className="text-titan-gray">
                    1234 Luxury Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-titan-gold p-3 rounded-full">
                  <Phone className="text-titan-black" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-titan-black mb-1">
                    Call Us
                  </h3>
                  <p className="text-titan-gray">
                    +1 (555) 123-4567
                    <br />
                    Toll-free: 1-800-TITAN-LX
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-titan-gold p-3 rounded-full">
                  <Mail className="text-titan-black" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-titan-black mb-1">
                    Email Us
                  </h3>
                  <p className="text-titan-gray">
                    info@titanluxe.com
                    <br />
                    support@titanluxe.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-titan-gold p-3 rounded-full">
                  <Clock className="text-titan-black" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-titan-black mb-1">
                    Business Hours
                  </h3>
                  <p className="text-titan-gray">
                    Monday - Friday: 9:00 AM - 8:00 PM
                    <br />
                    Saturday: 10:00 AM - 6:00 PM
                    <br />
                    Sunday: 12:00 PM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-titan-black mb-6">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-titan-black mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-titan-gray">
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-titan-black mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-gold focus:border-titan-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-titan-black mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-gold focus:border-titan-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-titan-black mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-gold focus:border-titan-gold transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="service">Customer Service</option>
                    <option value="warranty">Warranty & Repairs</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-titan-black mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-gold focus:border-titan-gold transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-titan-black text-white hover:bg-titan-gold hover:text-titan-black"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

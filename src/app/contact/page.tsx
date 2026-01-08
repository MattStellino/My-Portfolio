"use client";
import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree endpoint
      const response = await fetch('https://formspree.io/f/mandygdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-dvh">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <section className="py-12 md:py-16 pb-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600 shadow-lg shadow-rose-500/25 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <MessageCircle className="size-8 text-white" />
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              I&apos;m always open to new opportunities, collaboration, or just chatting tech!
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content Grid */}
        <section className="py-6 md:py-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name/Company
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s connect</h2>
                <p className="text-gray-600 mb-8">
                  I&apos;m open to full-time opportunities and collaborations. 
                  Whether you have a question about my work or want to discuss a potential opportunity, 
                  I&apos;d love to hear from you!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Mail className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">m_stellino@outlook.com</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                      <Phone className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (647) 949-8138</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <MapPin className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Bolton, Ontario, Canada</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Availability */}
              <motion.div 
                className="bg-white rounded-2xl border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="font-semibold text-gray-900 mb-4">Current Availability</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm">
                    Open for full-time positions.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Available for both remote and on-site opportunities in the Greater Toronto Area.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Also interested in freelance projects and part-time opportunities.
                  </p>
                  <div className="pt-2">
                    <p className="text-gray-500 text-xs">
                      Response time: Usually within 24 hours
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Input } from '../molecules/Input';
import { TextArea } from '../molecules/TextArea';

export const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('🎉 Messaggio inviato con successo!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contacts = [
    { icon: '📧', title: 'Email', info: 'hello@portfoliohub.com', color: 'from-blue-400 to-purple-400' },
    { icon: '📱', title: 'Telefono', info: '+39 123 456 7890', color: 'from-purple-400 to-pink-400' },
    { icon: '📍', title: 'Location', info: 'Milano, Italia', color: 'from-pink-400 to-red-400' },
  ];

  const socials = [
    { icon: '💼', href: '#', color: 'from-blue-400 to-blue-600' },
    { icon: '🐱', href: '#', color: 'from-gray-400 to-gray-600' },
    { icon: '🐦', href: '#', color: 'from-blue-400 to-blue-500' },
    { icon: '📷', href: '#', color: 'from-pink-400 to-purple-600' },
  ];

  return (
    <motion.section
      id="contact"
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-3xl">💬</span>
          </motion.div>

          <Heading
            level={2}
            className="text-6xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"
          >
            Get in Touch
          </Heading>
          <Text className="text-xl text-gray-300 max-w-xl mx-auto">
            Hai un progetto in mente? Parliamone! Sono sempre aperto a nuove opportunità e collaborazioni interessanti.
          </Text>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${c.color} mb-4`}>
                <span className="text-xl">{c.icon}</span>
              </div>
              <Text className="text-white font-semibold mb-1">{c.title}</Text>
              <Text className="text-gray-400 text-sm">{c.info}</Text>
            </motion.div>
          ))}
        </div>

        {/* Main Form Card */}
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-white font-semibold mb-2">Nome *</label>
                <Input
                  type="text"
                  placeholder="Il tuo nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-white font-semibold mb-2">Email *</label>
                <Input
                  type="email"
                  placeholder="la-tua-email@esempio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="block text-white font-semibold mb-2">Messaggio *</label>
              <TextArea
                rows={6}
                placeholder="Raccontami del tuo progetto..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </motion.div>

            <motion.div
              className="text-center pt-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="px-12 py-4 text-lg relative overflow-hidden"
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center gap-3"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Invio in corso...
                  </motion.div>
                ) : (
                  <span className="flex items-center gap-2">🚀 Invia Messaggio</span>
                )}
              </Button>
              <Text className="text-gray-400 text-sm mt-4">
                Risponderò entro 24 ore • I tuoi dati sono al sicuro 🔒
              </Text>
            </motion.div>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Text className="text-gray-400 mb-6">Oppure seguimi sui social</Text>
          <div className="flex justify-center space-x-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${s.color} text-white text-xl`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

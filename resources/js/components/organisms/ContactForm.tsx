// resources/js/components/organisms/ContactForm.tsx
import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { useForm, usePage } from '@inertiajs/react'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'
import { Input } from '../molecules/Input'
import { TextArea } from '../molecules/TextArea'

interface ContactFormPageProps {
  flash?: {
    success?: string
  }
  [key: string]: any
}

export const ContactForm: FC = () => {
  // Prendiamo flash da Inertia, ma assicuriamoci sempre un fallback {}
  const { flash: maybeFlash } = usePage<ContactFormPageProps>().props
  const flash = maybeFlash ?? {}

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route('contact.store'), {
      onSuccess: () => reset(),
    })
  }

  return (
    <motion.section
      id="contact"
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background blobs (optional) */}
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

        {/* Flash Success Message */}
        {flash.success && (
          <div className="mb-6 text-center text-green-400 font-semibold">
            {flash.success}
          </div>
        )}

        {/* Form Card */}
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nome *</label>
                <Input
                  type="text"
                  placeholder="Il tuo nome completo"
                  value={data.name}
                  onChange={e => setData('name', e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                  required
                />
                {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email *</label>
                <Input
                  type="email"
                  placeholder="la-tua-email@esempio.com"
                  value={data.email}
                  onChange={e => setData('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                  required
                />
                {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Messaggio *</label>
              <TextArea
                rows={6}
                placeholder="Raccontami del tuo progetto..."
                value={data.message}
                onChange={e => setData('message', e.target.value)}
                className={errors.message ? 'border-red-500' : ''}
                required
              />
              {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
            </div>

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
                disabled={processing}
                className="px-12 py-4 text-lg relative overflow-hidden"
              >
                {processing ? 'Invio in corso…' : '🚀 Invia Messaggio'}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Social Links (facoltativo) */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Text className="text-gray-400 mb-6">Oppure seguimi sui social</Text>
          <div className="flex justify-center space-x-4">
            {/* Inserisci qui le icone social */}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

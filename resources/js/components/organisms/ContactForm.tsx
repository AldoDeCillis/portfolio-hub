// resources/js/components/organisms/ContactForm.tsx
import React, { FC, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
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
  const [isHovered, setIsHovered] = useState(false)
  const { flash: maybeFlash } = usePage<ContactFormPageProps>().props
  const flash = maybeFlash ?? {}

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route('contact.store'), {
      onSuccess: () => reset(),
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <motion.section
      id="contact"
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Caption Section */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Cyber Header */}
            <div className="relative">
              <motion.div
                className="inline-flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                  <span className="text-2xl relative z-10">⚡</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-sm">ONLINE</span>
                </div>
              </motion.div>

              <Heading
                level={2}
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="block text-white">Let's Build</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  The Future
                </span>
                <span className="block text-white">Together</span>
              </Heading>

              {/* Glitch Effect Lines */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-purple-500 to-pink-500 opacity-60" />
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-px h-16 bg-cyan-400 opacity-80" />
            </div>

            <div className="space-y-6">
              <Text className="text-xl text-gray-300 leading-relaxed">
                Ready to transform your ideas into <span className="text-purple-400 font-semibold">cutting-edge reality</span>?
                I specialize in creating innovative solutions that push the boundaries of what's possible.
              </Text>

              {/* Cyber Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <motion.div
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-purple-400 font-mono">24H</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(236, 72, 153, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-pink-400 font-mono">100%</div>
                  <div className="text-sm text-gray-400">Commitment</div>
                </motion.div>
              </div>

              {/* Social Preview */}
              <div className="flex items-center gap-4 pt-6">
                <Text className="text-gray-400 text-sm">Connect:</Text>
                <div className="flex gap-3">
                  {['🌐', '💼', '📧'].map((icon, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderColor: 'rgba(139, 92, 246, 0.3)'
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-lg">{icon}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Flash Success Message */}
            {flash.success && (
              <motion.div
                className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ✅ {flash.success}
              </motion.div>
            )}

            {/* Form Container */}
            <motion.div
              className="relative perspective-1000"
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {/* Holographic Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-px">
                <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur-xl" />
              </div>

              {/* Form Card */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 overflow-hidden">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center gap-2 text-purple-400 font-mono text-sm mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    INITIALIZING CONNECTION...
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Send Transmission</h3>
                  <p className="text-gray-400 text-sm">Encrypt your message and send it to the void</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider">
                        Identity.name *
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Enter your designation..."
                          value={data.name}
                          onChange={e => setData('name', e.target.value)}
                          className={`${errors.name ? 'border-red-500' : ''}`}
                          required
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      </div>
                      {errors.name && <p className="mt-1 text-red-400 text-xs font-mono">ERROR: {errors.name}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider">
                        Network.email *
                      </label>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="your@digital.address"
                          value={data.email}
                          onChange={e => setData('email', e.target.value)}
                          className={`bg-black/50 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/20 backdrop-blur-sm ${errors.email ? 'border-red-500' : ''}`}
                          required
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      </div>
                      {errors.email && <p className="mt-1 text-red-400 text-xs font-mono">ERROR: {errors.email}</p>}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider">
                      Transmission.data *
                    </label>
                    <div className="relative">
                      <TextArea
                        rows={6}
                        placeholder="Encode your message in the digital realm..."
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                        className={`${errors.message ? 'border-red-500' : ''}`}
                        required
                      />
                      <div className="absolute right-3 top-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    {errors.message && <p className="mt-1 text-red-400 text-xs font-mono">ERROR: {errors.message}</p>}
                  </motion.div>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={processing}
                        className="w-full relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-mono text-lg rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {processing ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              TRANSMITTING...
                            </>
                          ) : (
                            <>
                              <span>⚡</span>
                              SEND TRANSMISSION
                              <span>⚡</span>
                            </>
                          )}
                        </span>

                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />

                        {/* Glitch lines */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute h-px bg-white"
                              style={{
                                top: `${30 + i * 20}%`,
                                left: 0,
                                right: 0,
                              }}
                              animate={{
                                scaleX: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 2,
                              }}
                            />
                          ))}
                        </div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>

                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {/* Floating particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, -40, -20],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Scanning line */}
                  <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
                    animate={{
                      top: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
    </motion.section>
  )
}

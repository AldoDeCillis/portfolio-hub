// resources/js/components/organisms/CVWizard.tsx
import React, { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'
import { Input } from '../molecules/Input'
import { TextArea } from '../molecules/TextArea'

interface Education {
  title: string
  year: string
  institution: string
  description: string
}

interface Experience {
  description: string
  role: string
  skills: string
}

export const CVWizard: FC = () => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [educations, setEducations] = useState<Education[]>([
    { title: '', year: '', institution: '', description: '' },
  ])
  const [experiences, setExperiences] = useState<Experience[]>([
    { description: '', role: '', skills: '' },
  ])

  const next = () => setStep((s) => Math.min(4, s + 1))
  const back = () => setStep((s) => Math.max(1, s - 1))

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('🎉 CV generato con successo!')
    }, 2000)
  }

  // Education handlers
  const addEducation = () =>
    setEducations((eds) => [
      ...eds,
      { title: '', year: '', institution: '', description: '' },
    ])
  const removeEducation = () =>
    setEducations((eds) => eds.slice(0, -1))
  const handleEducationChange = (
    idx: number,
    field: keyof Education,
    value: string
  ) => {
    const copy = [...educations]
    copy[idx][field] = value
    setEducations(copy)
  }

  // Experience handlers
  const addExperience = () =>
    setExperiences((exs) => [
      ...exs,
      { description: '', role: '', skills: '' },
    ])
  const removeExperience = () =>
    setExperiences((exs) => exs.slice(0, -1))
  const handleExperienceChange = (
    idx: number,
    field: keyof Experience,
    value: string
  ) => {
    const copy = [...experiences]
    copy[idx][field] = value
    setExperiences(copy)
  }

  const steps = [
    { title: 'Informazioni Personali', icon: '👤', color: 'from-blue-400 to-purple-400' },
    { title: 'Formazione',           icon: '🎓', color: 'from-purple-400 to-pink-400' },
    { title: 'Esperienza & Skills',  icon: '💼', color: 'from-pink-400 to-red-400' },
    { title: 'Anteprima & Generazione', icon: '✨', color: 'from-green-400 to-blue-400' },
  ]

  return (
    <motion.section
      id="cv"
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header & Progress */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            level={2}
            className="text-6xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"
          >
            🧙‍♂️ CV Wizard AI
          </Heading>
          <Text className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Crea il tuo CV professionale in 4 semplici passaggi con l'aiuto dell'intelligenza artificiale
          </Text>

          <div className="flex justify-center items-center space-x-4 mb-12">
            {steps.map((info, idx) => (
              <div key={idx} className="flex items-center">
                <motion.div
                  className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 ${
                    step > idx + 1
                      ? 'bg-gradient-to-r from-green-400 to-blue-400 border-green-400'
                      : step === idx + 1
                      ? `bg-gradient-to-r ${info.color} border-purple-400`
                      : 'bg-white/5 border-white/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: step === idx + 1 ? 1.1 : 1,
                    boxShadow: step === idx + 1 ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none',
                  }}
                >
                  <span className="text-lg">{step > idx + 1 ? '✓' : info.icon}</span>
                </motion.div>
                {idx < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all duration-500 ${
                      step > idx + 1 ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input placeholder="Nome completo" />
                    <Input placeholder="Email professionale" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input placeholder="Titolo professionale" />
                    <Input placeholder="Telefono" />
                  </div>
                  <Input placeholder="LinkedIn Profile URL" />
                </div>
              )}

              {/* Step 2: Education */}
              {step === 2 && (
                <div className="space-y-6">
                  {educations.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          placeholder="Titolo di studio"
                          value={edu.title}
                          onChange={(e) =>
                            handleEducationChange(i, 'title', e.target.value)
                          }
                        />
                        <Input
                          placeholder="Anno di conseguimento"
                          value={edu.year}
                          onChange={(e) =>
                            handleEducationChange(i, 'year', e.target.value)
                          }
                        />
                      </div>
                      <Input
                        placeholder="Istituzione/Università"
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(i, 'institution', e.target.value)
                        }
                      />
                      <TextArea
                        placeholder="Descrizione del percorso formativo"
                        rows={4}
                        value={edu.description}
                        onChange={(e) =>
                          handleEducationChange(i, 'description', e.target.value)
                        }
                      />
                    </motion.div>
                  ))}
                  <div className="flex justify-between items-center">
                    {educations.length > 1 && (
                      <Button
                        variant="secondary"
                        className="text-red-500 border-red-500 hover:bg-red-600 hover:text-white"
                        onClick={removeEducation}
                      >
                        − Rimuovi formazione
                      </Button>
                    )}
                    <Button variant="ghost" onClick={addEducation} className="text-sm">
                      + Aggiungi formazione
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Experience */}
              {step === 3 && (
                <div className="space-y-6">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="space-y-4"
                    >
                      <TextArea
                        placeholder="Esperienza professionale"
                        rows={5}
                        value={exp.description}
                        onChange={(e) =>
                          handleExperienceChange(i, 'description', e.target.value)
                        }
                      />
                      <Input
                        placeholder="Ruolo"
                        value={exp.role}
                        onChange={(e) =>
                          handleExperienceChange(i, 'role', e.target.value)
                        }
                      />
                      <Input
                        placeholder="Skills tecniche"
                        value={exp.skills}
                        onChange={(e) =>
                          handleExperienceChange(i, 'skills', e.target.value)
                        }
                      />
                    </motion.div>
                  ))}
                  <div className="flex justify-between items-center">
                    {experiences.length > 1 && (
                      <Button
                        variant="secondary"
                        className="text-red-500 border-red-500 hover:bg-red-600 hover:text-white"
                        onClick={removeExperience}
                      >
                        − Rimuovi esperienza
                      </Button>
                    )}
                    <Button variant="ghost" onClick={addExperience} className="text-sm">
                      + Aggiungi esperienza
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="text-center space-y-8">
                  <motion.div
                    className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-6xl mb-4">🎯</div>
                    <Heading level={4} className="text-2xl mb-4 text-white">
                      Perfetto! Il tuo CV è pronto per essere generato
                    </Heading>
                    <Text className="text-gray-300 text-lg mb-6">
                      L'AI analizzerà le tue informazioni e creerà un CV professionale ottimizzato.
                    </Text>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-2xl mb-2">⚡</div>
                        <Text className="text-white font-semibold">Ottimizzato ATS</Text>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-2xl mb-2">🎨</div>
                        <Text className="text-white font-semibold">Design Professionale</Text>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-2xl mb-2">📊</div>
                        <Text className="text-white font-semibold">Multiple Formats</Text>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={back}
              disabled={step === 1}
              className={`${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              ← Indietro
            </Button>
            <Text className="text-sm text-gray-400">Passaggio {step} di {steps.length}</Text>
            <Button
              variant="primary"
              onClick={step < 4 ? next : handleSubmit}
              disabled={isSubmitting}
              className="relative overflow-hidden"
            >
              {isSubmitting ? 'Generando...' : step < 4 ? 'Avanti →' : '✨ Genera CV'}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

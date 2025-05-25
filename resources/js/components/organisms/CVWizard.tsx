// resources/js/components/organisms/CVWizard.tsx
import React, { FC, useState } from 'react'
import axios from 'axios'
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
  const [isGenerating, setIsGenerating] = useState(false)
  const [cvText, setCvText] = useState<string | null>(null)

  // **Personal info**
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    title: '',
    phone: '',
    linkedin: '',
  })

  // **Education & Experience**
  const [educations, setEducations] = useState<Education[]>([
    { title: '', year: '', institution: '', description: '' },
  ])
  const [experiences, setExperiences] = useState<Experience[]>([
    { description: '', role: '', skills: '' },
  ])

  const steps = [
    { title: 'Informazioni Personali', icon: '👤', color: 'from-blue-400 to-purple-400' },
    { title: 'Formazione',           icon: '🎓', color: 'from-purple-400 to-pink-400'  },
    { title: 'Esperienza & Skills',  icon: '💼', color: 'from-pink-400 to-red-400'    },
    { title: 'Generazione CV',       icon: '✨', color: 'from-green-400 to-blue-400'  },
  ]

  const next = () => setStep(s => Math.min(4, s + 1))
  const back = () => setStep(s => Math.max(1, s - 1))

  // handlers for personal
  const handlePersonalChange = (field: keyof typeof personal, value: string) => {
    setPersonal(p => ({ ...p, [field]: value }))
  }

  // education handlers
  const addEducation = () =>
    setEducations(eds => [...eds, { title: '', year: '', institution: '', description: '' }])
  const removeEducation = () =>
    setEducations(eds => (eds.length > 1 ? eds.slice(0, -1) : eds))
  const handleEducationChange = (idx: number, field: keyof Education, value: string) => {
    const copy = [...educations]
    copy[idx][field] = value
    setEducations(copy)
  }

  // experience handlers
  const addExperience = () =>
    setExperiences(exs => [...exs, { description: '', role: '', skills: '' }])
  const removeExperience = () =>
    setExperiences(exs => (exs.length > 1 ? exs.slice(0, -1) : exs))
  const handleExperienceChange = (idx: number, field: keyof Experience, value: string) => {
    const copy = [...experiences]
    copy[idx][field] = value
    setExperiences(copy)
  }

  // **Generate CV via API**
  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const payload = {
        personal,
        education: educations,
        experience: experiences,
      }
      const response = await axios.post(route('cv.generate'), payload)
      setCvText(response.data.cv)
      window.location.href = route('cv.preview', response.data.cv.id)
      setStep(4)
    } catch (e) {
      console.error(e)
      alert('Si è verificato un errore durante la generazione del CV.')
    } finally {
      setIsGenerating(false)
    }
  }

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
            Crea il tuo CV professionale in 3 passi e generalo con l'AI
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
                    boxShadow: step === idx + 1 ? '0 0 20px rgba(168,85,247,0.5)' : 'none',
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

        {/* Card */}
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
              {/* Step 1: Personal */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Nome completo"
                      value={personal.name}
                      onChange={e => handlePersonalChange('name', e.target.value)}
                    />
                    <Input
                      placeholder="Email professionale"
                      value={personal.email}
                      onChange={e => handlePersonalChange('email', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Titolo professionale"
                      value={personal.title}
                      onChange={e => handlePersonalChange('title', e.target.value)}
                    />
                    <Input
                      placeholder="Telefono"
                      value={personal.phone}
                      onChange={e => handlePersonalChange('phone', e.target.value)}
                    />
                  </div>
                  <Input
                    placeholder="LinkedIn Profile URL"
                    value={personal.linkedin}
                    onChange={e => handlePersonalChange('linkedin', e.target.value)}
                  />
                </div>
              )}

              {/* Step 2: Education */}
              {step === 2 && (
                <div className="space-y-6">
                  {educations.map((edu, i) => (
                    <div key={i} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          placeholder="Titolo di studio"
                          value={edu.title}
                          onChange={e => handleEducationChange(i, 'title', e.target.value)}
                        />
                        <Input
                          placeholder="Anno di conseguimento"
                          value={edu.year}
                          onChange={e => handleEducationChange(i, 'year', e.target.value)}
                        />
                      </div>
                      <Input
                        placeholder="Istituzione/Università"
                        value={edu.institution}
                        onChange={e => handleEducationChange(i, 'institution', e.target.value)}
                      />
                      <TextArea
                        placeholder="Descrizione del percorso formativo"
                        rows={4}
                        value={edu.description}
                        onChange={e => handleEducationChange(i, 'description', e.target.value)}
                      />
                    </div>
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
                    <div key={i} className="space-y-4">
                      <TextArea
                        placeholder="Esperienza professionale"
                        rows={5}
                        value={exp.description}
                        onChange={e => handleExperienceChange(i, 'description', e.target.value)}
                      />
                      <Input
                        placeholder="Ruolo"
                        value={exp.role}
                        onChange={e => handleExperienceChange(i, 'role', e.target.value)}
                      />
                      <Input
                        placeholder="Skills tecniche"
                        value={exp.skills}
                        onChange={e => handleExperienceChange(i, 'skills', e.target.value)}
                      />
                    </div>
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

              {/* Step 4: Generate & Preview */}
              {step === 4 && (
                <div className="text-center space-y-8">
                  {!cvText && (
                    <Button
                      variant="primary"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                    >
                      {isGenerating ? 'Generazione in corso…' : '✨ Genera il tuo CV'}
                    </Button>
                  )}
                  {cvText && (
                    <motion.pre
                      className="bg-black/50 p-6 rounded-lg text-white overflow-auto max-h-[60vh]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {cvText}
                    </motion.pre>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={back}
              disabled={step === 1 || isGenerating}
              className="opacity-50:disabled"
            >
              ← Indietro
            </Button>
            <Text className="text-sm text-gray-400">
              Passaggio {step} di {steps.length}
            </Text>
            <Button
              variant="primary"
              onClick={step < 4 ? next : handleGenerate}
              disabled={isGenerating}
            >
              {step < 4 ? 'Avanti →' : (isGenerating ? '…' : 'Genera')}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

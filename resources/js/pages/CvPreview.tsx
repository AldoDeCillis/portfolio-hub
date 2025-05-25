import React, { FC } from 'react'
import { usePage, Link } from '@inertiajs/react'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'

export const CvPreview: FC = () => {
  const { cv } = usePage<{ cv: any }>().props

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Heading level={1} className="text-4xl mb-6">
        Anteprima CV
      </Heading>

      {/* Personal */}
      <section className="mb-8">
        <Heading level={2}>Informazioni Personali</Heading>
        <Text>Nome: {cv.personal.name}</Text>
        <Text>Email: {cv.personal.email}</Text>
        <Text>Telefono: {cv.personal.phone}</Text>
        <Text>LinkedIn: {cv.personal.linkedin}</Text>
      </section>

      {/* Education */}
      <section className="mb-8">
        <Heading level={2}>Formazione</Heading>
        {cv.education.map((e: any, i: number) => (
          <div key={i} className="mb-4">
            <Text><strong>{e.title}</strong> — {e.year}</Text>
            <Text>{e.institution}</Text>
            <Text>{e.description}</Text>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-8">
        <Heading level={2}>Esperienze & Skills</Heading>
        {cv.experience.map((x: any, i: number) => (
          <div key={i} className="mb-4">
            <Text>{x.description}</Text>
            <Text>Ruolo: {x.role}</Text>
            <Text>Skills: {x.skills}</Text>
          </div>
        ))}
      </section>

      {/* CV AI Text */}
      <section className="mb-8">
        <Heading level={2}>CV Generato</Heading>
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{cv.cv_text}</pre>
      </section>

      <div className="flex justify-end space-x-4">
        <Link href={route('cv.download', cv.id)}>
          <Button variant="primary">📄 Scarica PDF</Button>
        </Link>
        <Link href={route('home')}>
          <Button variant="secondary">🏠 Torna alla Home</Button>
        </Link>
      </div>
    </div>
  )
}
export default CvPreview

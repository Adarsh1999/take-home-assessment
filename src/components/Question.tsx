import React from 'react'

import NumberField from './fields/NumberField'
import TextField from './fields/TextField'
import ChoiceField from './fields/ChoiceField'
import { QuestionProps } from '../types'
import BooleanField from './fields/BooleanField'
import PercentField from './fields/PercentField'

function Question({ question, onChange }: QuestionProps) {
  const renderField = (field: string | string[], index: number) => {
    if (Array.isArray(field)) {
      // when field is array, its multiple choices
      return (
        <ChoiceField
          name={question.id.toString()}
          onChange={onChange}
          choices={field as string[]}
          fieldId={index}
        />
      )
    }
    switch (field) {
      case 'text':
        return (
          <TextField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={index}
          />
        )
      case 'number':
        return (
          <NumberField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={index}
          />
        )
      case 'boolean':
        return (
          <BooleanField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={index}
          />
        )
      case 'percentage':
        return (
          <PercentField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={index}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl">
      <h2 className="mb-10 text-3xl font-bold">{question.title}</h2>
      {question.fields.map((field, idx) => renderField(field, idx))}
      {question.description && (
        <>
          <p className="mt-10 text-gray-600">{question.description}</p>
          <a
            className="mt-2 block font-medium text-gray-600"
            href="//atmos.ai"
            target="_blank"
            rel="noreferrer"
          >
            Learn More &rarr;
          </a>
        </>
      )}
    </div>
  )
}

export default Question

import React from 'react'

type FieldT = string | string[]

export type Question = {
  id: number
  title: string
  description: string
  fields: FieldT[]
  modals?: {
    [key: string]: string
  }
}

export interface QuestionProps {
  question: Question
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FieldProps {
  name: string
  initialValue?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fieldId: number
}

export const FieldDefaultProps = {
  initialValue: ''
}

import React from 'react'

type FieldT = string | string[]

export type Question = {
  options?: string[]
  id: number
  title: string
  description: string
  fields: FieldT[]
  fields_id:number[]
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
  onBlur?: () => void;

}

export const FieldDefaultProps = {
  initialValue: ''
}

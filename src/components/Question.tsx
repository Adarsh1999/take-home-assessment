import React from 'react';

import NumberField from './fields/NumberField';
import TextField from './fields/TextField';
import ChoiceField from './fields/ChoiceField';
import { QuestionProps } from '../types';
import BooleanField from './fields/BooleanField';
import PercentField from './fields/PercentField';

function Question({ question, onChange }: QuestionProps) {
  // Render the appropriate field based on its type
  const renderField = (field: string | string[], index: number) => {
    switch (field) {
      case 'text':
        return (
          <TextField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={question.fields_id[index]}
          />
        );
      case 'number':
        return (
          <NumberField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={question.fields_id[index]}
          />
        );
      case 'boolean':
        return (
          <BooleanField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={question.fields_id[index]}
          />
        );
      case 'percentage':
        return (
          <PercentField
            name={question.id.toString()}
            onChange={onChange}
            key={index}
            fieldId={question.fields_id[index]}
          />
        );
      default:
        return null;
    }
  };

  // Render the options for a choice field
  const renderOptions = (field: string[], index: number) => {
    if (Array.isArray(field)) {
      // When the field is an array, it represents multiple choices
      return (
        <ChoiceField
          name={question.id.toString()}
          onChange={onChange}
          options={field as string[]}
          fieldId={question.fields_id[index]}
        />
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="mb-6 text-3xl font-bold">{question.title}</h2>
      
      {/* Render each field */}
      {question.fields.map((field, idx) => (
        <div key={idx} className="mb-4">
          {renderField(field, idx)}
        </div>
      ))}
      
      {/* Render options for a choice field */}
      {renderOptions(question.options || [], 1)}
      
      {/* Render question description and learn more link */}
      {question.description && (
        <div className="mt-8">
          <p className="text-gray-600">{question.description}</p>
          <a
            className="mt-2 block text-blue-600 font-medium hover:underline"
            href="//atmos.ai"
            target="_blank"
            rel="noreferrer"
          >
            Learn More &rarr;
          </a>
        </div>
      )}
    </div>
  );
  
}

export default Question;

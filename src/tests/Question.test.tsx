import { vi } from "vitest";

import Question from "../components/Question";
import { render, screen } from "./testing-lib";

const question = {
  id: 1,
  title: 'What is the capital of the United States?',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint ex odio et consectetur ullam placeat ea in alias corporis quam, facilis fugiat ipsum, adipisci veritatis, quas natus ipsam nam repellat aliquid expedita. Accusamus non provident perspiciatis nostrum!',
  modals: {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint ex odio et consectetur ullam placeat ea in alias corporis quam, facilis fugiat ipsum, adipisci veritatis, quas natus ipsam nam repellat aliquid expedita. Accusamus non provident perspiciatis nostrum!',
  },
  fields: ['text', 'percentage'],
  fields_id: [2, 1],
}


describe('Question', () => {
  it('renders the title of the question', () => {
    render(<Question question={question} onChange={vi.fn()} />)
    expect(screen.getByText(question.title)).toBeInTheDocument()
  })

  it('renders the description of the question', () => {
    render(<Question question={question} onChange={vi.fn()} />)
    expect(screen.getByText(question.description)).toBeInTheDocument()
  })

  it('renders the learn more link', () => {
    render(<Question question={question} onChange={vi.fn()} />)
    // This would use data from the question object if it was available
    expect(screen.getByRole('link')).toHaveAttribute('href', '//atmos.ai')
  })

  it('renders the correct field', () => {
    render(<Question question={question} onChange={vi.fn()} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('renders the description of the modal', () => {
    render(<Question question={question} onChange={vi.fn()} />)
    expect(screen.getByText(question.modals.description)).toBeInTheDocument()
  })
})


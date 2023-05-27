import { vi } from 'vitest';
import BooleanField from '../components/fields/BooleanField';
import { render, screen, fireEvent } from './testing-lib';

const question = {
  id: 1,
  title: 'What is the capital of the United States?',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint ex odio et consectetur ullam placeat ea in alias corporis quam, facilis fugiat ipsum, adipisci veritatis, quas natus ipsam nam repellat aliquid expedita. Accusamus non provident perspiciatis nostrum!',
  modals: {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint ex odio et consectetur ullam placeat ea in alias corporis quam, facilis fugiat ipsum, adipisci veritatis, quas natus ipsam nam repellat aliquid expedita. Accusamus non provident perspiciatis nostrum!',
  },
  fields: ['text', 'percentage'],
  fields_id: [2, 1],
};

describe('BooleanField', () => {
  it('buttons should be clickable', () => {
    const onChange = vi.fn();
    render(<BooleanField name={question.id.toString()} onChange={onChange} fieldId={1} />);

    const yesButton = screen.getByText('Yes');
    fireEvent.click(yesButton);

    expect(onChange).toHaveBeenCalled(); // Expect onChange to be called
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({
      target: {
        name: question.id.toString(),
        value: true,
        dataset: { fieldId: question.id.toString() }
      }
    })); // Expect onChange to be called with the expected arguments
  });
});

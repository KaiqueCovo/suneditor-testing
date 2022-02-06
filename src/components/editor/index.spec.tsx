import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import { Editor } from '.'

interface IEditorProps {
  onChange: jest.Mock;
}

jest.mock('next/dynamic', () => () => {
  const Dynamic = ({ onChange }: IEditorProps) => {
    return (
      <textarea
        data-testid='editor'
        onChange={onChange}
      />
    );
  };

  return Dynamic;
});

interface ISetup {
  onChange: (value: string) => void;
}

const setup = ({ onChange }: ISetup): RenderResult => render(<Editor onChange={onChange} />);

describe('Editor', () => {

  it('renders correctly', () => {
    const onChange = jest.fn();

    const { baseElement } = setup({ onChange });
  
    expect(baseElement).toBeInTheDocument();
  })

  it('calls on change on editor', () => {
    const onChange = jest.fn();
    
    setup({ onChange });

    const editor = screen.getByTestId('editor');
    fireEvent.change(editor, { target: { value: 'editor-update' } });

    expect(onChange).toHaveBeenCalled();
  });
})

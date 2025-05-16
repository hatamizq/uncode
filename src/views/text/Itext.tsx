export interface ITextViewProps {
    input: string;
    output: string;
    method: string;
    setInput: (val: string) => void;
    setMethod: (val: string) => void;
    handleSubmit: () => void;
  }
  
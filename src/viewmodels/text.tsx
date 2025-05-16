import { useState } from 'react';
import { ITextViewModel } from './Itext';
import { useBase64TextModel } from '../models/base64text';

export const useTextViewModel = (): ITextViewModel => {
  const base64Encoder = useBase64TextModel()
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [method, setMethod] = useState('base64');

  const handleSubmit = () => {
    try {
      const encoded = base64Encoder.encode(input);
      const decoded = base64Encoder.decode(input);
      setOutput(input === decoded ? encoded : decoded);
    } catch {
      setOutput('Invalid input');
    }
  };

  return { input, output, method, setInput, setMethod, handleSubmit };
};

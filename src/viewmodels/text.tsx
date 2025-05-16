import { useState } from 'react';
import { ITextViewModel } from './Itext';
import { useBase64TextModel } from '../models/base64text';

export const useTextViewModel = () => {
  const base64M = useBase64TextModel();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [method, setMethod] = useState('base64');

  const encode = (text: string, method: string): string => {
    if (method === 'base64') {
      return base64M.encode(text);
    }
    return 'Invalid Input';
  };

  const decode = (text: string, method: string): string => {
    if (method === 'base64') {
      try {
        return base64M.decode(text);
      } catch {
        return 'Invalid Base64 string';
      }
    }
    return '';
  };

  const handleSubmit = (text: string, method: string, type: 'encode' | 'decode'): string => {
    return type === 'encode' ? encode(text, method) : decode(text, method);
  };

  return {
    input,
    output,
    method,
    setInput,
    setOutput,
    setMethod,
    encode,
    decode,
    handleSubmit,
  };
};


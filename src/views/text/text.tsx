import React from 'react';
import { useTextViewModel } from '../../viewmodels/text';

const TextView: React.FC = () => {
  const {
    input,
    output,
    method,
    setInput,
    setOutput,
    setMethod,
    handleSubmit,
  } = useTextViewModel();

  const handleInputChange = (value: string) => {
    setInput(value);
    const encoded = handleSubmit(value, method, 'encode');
    setOutput(encoded);
  };

  const handleOutputChange = (value: string) => {
    setOutput(value);
    const decoded = handleSubmit(value, method, 'decode');
    setInput(decoded);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Textarea */}
      <textarea
        style={{
          flex: 1,
          height: '60%',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '1rem',
          resize: 'none',
          color: '#000',
        }}
        value={input}
        onChange={(e) => handleInputChange((e.target as HTMLTextAreaElement).value)}
        placeholder="Input Original Text Here"
      />

      {/* Center Method Selector */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <label style={{ fontWeight: 'bold', fontSize: '1rem', color: '#000' }}>Method</label>
        <select
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          value={method}
          onChange={(e) => setMethod((e.target as HTMLSelectElement).value)}
        >
          <option value="base64">Base64</option>
        </select>
      </div>

      {/* Right Textarea */}
      <textarea
        style={{
          flex: 1,
          height: '60%',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '1rem',
          resize: 'none',
          color: '#000',
        }}
        value={output}
        onChange={(e) => handleOutputChange((e.target as HTMLTextAreaElement).value)}
        placeholder="Input Encoded Text Here"
      />
    </div>
  );
};

export default TextView;

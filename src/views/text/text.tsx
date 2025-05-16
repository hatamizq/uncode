import React from 'react';
import { useTextViewModel } from '../../viewmodels/text';

const TextView: React.FC = () => {
  const { input, output, method, setInput, setMethod, handleSubmit } = useTextViewModel();

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <textarea
        style={{ width: '30%', height: '200px' }}
        value={input}
        onChange={(e) => setInput((e.target as HTMLTextAreaElement).value)}
        placeholder="Enter text here"
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <select value={method} onChange={(e) => setMethod((e.target as HTMLSelectElement).value)}>
          <option value="base64">Base64</option>
        </select>
        <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>Submit</button>
      </div>
      <textarea
        style={{ width: '30%', height: '200px' }}
        readOnly
        value={output}
        placeholder="Result"
      />
    </div>
  );
};

export default TextView;

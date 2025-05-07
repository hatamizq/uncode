import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useBase64TextViewModel } from '../viewmodels/base64text';

export function Base64TextView() {
  const vm = useBase64TextViewModel();

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    setOutput(vm.encode(input));
  };

  const handleDecode = () => {
    setOutput(vm.decode(input));
  };

  return (
    <div>
      <h2>Base64 Encoder / Decoder</h2>

      <input
        type="text"
        value={input}
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        placeholder="Enter text or Base64"
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode}>Decode</button>
      </div>

      {output && (
        <p>
          <strong>Result:</strong> {output}
        </p>
      )}
    </div>
  );
}

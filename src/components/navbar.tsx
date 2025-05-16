import React from 'react';
import { INavbarProps } from './Inavbar';

const Navbar: React.FC<INavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div style={{ display: 'flex', cursor: 'pointer', marginBottom: '1rem' }}>
      <div
        onClick={() => setActiveTab('text')}
        style={{
          padding: '1rem',
          borderBottom: activeTab === 'text' ? '2px solid blue' : 'none',
        }}
      >
        Text Encode/Decode
      </div>
      <div
        onClick={() => setActiveTab('image')}
        style={{
          padding: '1rem',
          borderBottom: activeTab === 'image' ? '2px solid blue' : 'none',
        }}
      >
        Base64 to Image
      </div>
    </div>
  );
};

export default Navbar;

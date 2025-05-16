import React from 'react';
import { INavbarProps } from './Inavbar';

const Navbar: React.FC<INavbarProps> = ({ activeTab, setActiveTab }) => {
  const getTabStyle = (tab: string) => ({
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    borderRadius: '6px',
    margin: '0 0.25rem',
    backgroundColor: activeTab === tab ? '#000' : 'transparent',
    color: activeTab === tab ? '#fff' : '#000',
    transition: 'background-color 0.2s, color 0.2s',
  });

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        backgroundColor: '#f5f5f5',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        zIndex: 1000,
      }}
    >
      <div
        onClick={() => setActiveTab('text')}
        style={getTabStyle('text')}
        onMouseEnter={(e) => {
          if (activeTab !== 'text') {
            e.currentTarget.style.backgroundColor = '#e0e0e0';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== 'text') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        Text
      </div>
      <div
        onClick={() => setActiveTab('image')}
        style={getTabStyle('image')}
        onMouseEnter={(e) => {
          if (activeTab !== 'image') {
            e.currentTarget.style.backgroundColor = '#e0e0e0';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== 'image') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        Base64 to Image
      </div>
    </div>
  );
};

export default Navbar;

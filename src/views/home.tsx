import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { TabType } from '../components/Inavbar';
import TextView from './text/text';
import ImageView from './image/image';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('text');

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'text' ? <TextView /> : <ImageView />}
    </div>
  );
};

export default Home;

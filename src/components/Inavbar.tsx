export type TabType = 'text' | 'image';

export interface INavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

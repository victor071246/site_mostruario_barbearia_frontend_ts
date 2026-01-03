import { useTabStore } from '../../stores/tabStore';
import style from './TabsHeader.module.css';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'servico', label: 'Produtos/Serviços' },
  { id: 'localizacao', label: 'Localização' },
] as const;

export function TabsHeader() {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <nav className={style.tabs_header}>
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={
            tab.id === activeTab
              ? `${style.active_tab} ${style.tab}`
              : `${style.tab}`
          }
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

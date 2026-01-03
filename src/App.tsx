import { TopHeader } from './components/layout/TopHeader';
import { TabsHeader } from './components/layout/TabsHeader';
import { useTabStore } from './stores/tabStore';
import style from './App.module.css';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/layout/Footer';

export function App() {
  const { activeTab } = useTabStore();

  return (
    <div className={style.main_div}>
      <TopHeader></TopHeader>
      <TabsHeader></TabsHeader>
      <main className="app-main">
        {activeTab === 'home' && <HomePage></HomePage>}
        {activeTab === 'servico' && <div>Serviços</div>}
        {activeTab === 'localizacao' && <div>Localização</div>}
      </main>
      <Footer></Footer>
    </div>
  );
}

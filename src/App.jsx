import React, { useState, useEffect } from 'react';
import './App.css';
import Snowfall from './components/Snowfall';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GallerySection from './components/GallerySection';
import NewsSection from './components/NewsSection';
import Leaderboard from './components/Leaderboard';
import GuiaComandos from './components/GuiaComandos';
import ServerStatus from './components/ServerStatus';
import DailyRewards from './components/DailyRewards';
import VipSection from './components/VipSection';
import CashShop from './components/CashShop';
import FaqSection from './components/FaqSection';
import RegrasSection from './components/RegrasSection';
import StaffSection from './components/StaffSection';
import Newsletter from './components/Newsletter';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

function App() {
  // Inicialização do carrinho a partir da cache local
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem('twnetwork_carrinho');
    return salvo ? JSON.parse(salvo) : [];
  });

  const [modalAberto, setModalAberto] = useState(false);
  const [toastInfo, setToastInfo] = useState(null);

  // Sincronização automática com o localStorage sempre que o carrinho muda
  useEffect(() => {
    localStorage.setItem('twnetwork_carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const exibirNotificacao = (mensagem, tipo = 'sucesso') => {
    setToastInfo({ mensagem, tipo });
  };

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]);
    exibirNotificacao(`"${item.nome}" foi adicionado ao seu carrinho!`, 'sucesso');
  };

  const removerDoCarrinho = (indiceParaRemover) => {
    setCarrinho((prev) => prev.filter((_, index) => index !== indiceParaRemover));
    exibirNotificacao('Artigo removido do carrinho.', 'info');
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem('twnetwork_carrinho');
  };

  return (
    <div className="App">
      <Snowfall />

      <Navbar 
        contagemCarrinho={carrinho.length} 
        onAbrirCarrinho={() => setModalAberto(true)} 
      />
      
      <main>
        <Hero />
        <Features />
        <GallerySection />
        <NewsSection />
        <Leaderboard />
        <GuiaComandos />
        <ServerStatus />
        <DailyRewards />
        <VipSection onAdicionarAoCarrinho={adicionarAoCarrinho} />
        <CashShop onAdicionarAoCarrinho={adicionarAoCarrinho} />
        <FaqSection />
        <RegrasSection />
        <StaffSection />
        <Newsletter />
      </main>

      <CheckoutModal 
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        itens={carrinho}
        onRemoverItem={removerDoCarrinho}
        onLimparCarrinho={limparCarrinho}
      />

      <Footer />
      <BackToTop />

      {/* Alerta toast flutuante */}
      {toastInfo && (
        <Toast 
          mensagem={toastInfo.mensagem} 
          tipo={toastInfo.tipo} 
          onClose={() => setToastInfo(null)} 
        />
      )}
    </div>
  );
}

export default App;
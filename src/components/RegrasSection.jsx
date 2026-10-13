import React, { useState } from 'react';
import './RegrasSection.css';

export default function RegrasSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('geral');

  const categorias = [
    { id: 'geral', nome: 'Conduta & Chat' },
    { id: 'hacks', nome: 'Trapaças & Clientes' },
    { id: 'economia', nome: 'Economia & Comércio' },
    { id: 'terrenos', nome: 'Terrenos & Clãs' }
  ];

  const regrasPorCategoria = {
    geral: [
      {
        infracao: 'Ofensas, assédio ou discriminação',
        detalhe: 'Qualquer discurso de ódio, discriminação étnica, religiosa ou desrespeito grave a jogadores e à equipa.',
        punicao: 'Mute de 24h até Ban Permanente',
        nivel: 'critico'
      },
      {
        infracao: 'Divulgação de outros servidores',
        detalhe: 'Mencionar endereços IP, ligações de comunidades externas ou fazer publicidade não autorizada no chat.',
        punicao: 'Ban Permanente imediato',
        nivel: 'critico'
      },
      {
        infracao: 'Spam e Flood sistemático',
        detalhe: 'Envio repetitivo de caracteres, maiúsculas excessivas ou mensagens idênticas em curto intervalo.',
        punicao: 'Aviso verbal → Mute de 1h',
        nivel: 'leve'
      }
    ],
    hacks: [
      {
        infracao: 'Clientes modificados / Modos ilícitos (KillAura, Fly, Speed)',
        detalhe: 'Uso de qualquer software, mod ou script que conceda vantagem mecânica injusta sobre os demais utilizadores.',
        punicao: 'Banimento Permanente da Rede',
        nivel: 'critico'
      },
      {
        infracao: 'Aproveitamento de Bugs ou Duplicação',
        detalhe: 'Ocultar ou tirar proveito de falhas do mapa, plugins ou do sistema económico sem reportar à administração.',
        punicao: 'Ban Permanente + Reset de Conta',
        nivel: 'critico'
      },
      {
        infracao: 'Macro / Autoclick com valor abusivo',
        detalhe: 'Configurações de cliques por segundo (CPS) superiores ao limite permitido pelas diretrizes do servidor.',
        punicao: 'Ban Temporário (7 dias)',
        nivel: 'medio'
      }
    ],
    economia: [
      {
        infracao: 'Comércio externo não oficial',
        detalhe: 'Trocar moedas ou itens in-game por dinheiro real fora da loja oficial e das regras dos torneios sazonais.',
        punicao: 'Ban Permanente de ambas as contas',
        nivel: 'critico'
      },
      {
        infracao: 'Esquemas de burla (Scam) a novos jogadores',
        detalhe: 'Enganar jogadores em trocas falsas, leilões fictícios ou combinações ilícitas.',
        punicao: 'Ban Temporário (14 dias) + Remoção dos bens',
        nivel: 'medio'
      }
    ],
    terrenos: [
      {
        infracao: 'Griefing ou invasão de terrenos delimitados',
        detalhe: 'Construir armadilhas involuntárias em acessos públicos ou bloquear visualmente lotes adjacentes.',
        punicao: 'Remoção da estrutura + Aviso formal',
        nivel: 'leve'
      },
      {
        infracao: 'Construções inadequadas ou ofensivas',
        detalhe: 'Representação de símbolos ofensivos ou conteúdos desrespeitosos em lotes particulares.',
        punicao: 'Ban de 3 dias + Limpeza do lote',
        nivel: 'medio'
      }
    ]
  };

  return (
    <section id="regras" className="regras-section">
      <div className="regras-header">
        <h2>Diretrizes & <span className="highlight">Regulamento Oficial</span></h2>
        <p>A integridade e o respeito são pilares na TW Network. Conheça as normas vigentes para manter a sua conta em segurança.</p>
      </div>

      <div className="regras-tabs">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            className={`tab-regra-btn ${categoriaAtiva === cat.id ? 'ativa' : ''}`}
            onClick={() => setCategoriaAtiva(cat.id)}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      <div className="regras-grid">
        {regrasPorCategoria[categoriaAtiva].map((item, index) => (
          <div key={index} className="regra-card">
            <div className="regra-topo">
              <h3 className="regra-titulo">{item.infracao}</h3>
              <span className={`badge-punicao ${item.nivel}`}>
                {item.punicao}
              </span>
            </div>
            <p className="regra-detalhe">{item.detalhe}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import './FaqSection.css';

export default function FaqSection() {
  const [perguntaAberta, setPerguntaAberta] = useState(null);

  const faqs = [
    {
      id: 1,
      pergunta: 'Quanto tempo demora para receber o meu VIP ou Cash após a compra?',
      resposta: 'Os pagamentos via Pix são aprovados instantaneamente e os benefícios são ativados na sua conta do jogo em menos de 2 minutos. Compras efetuadas via cartão de crédito costumam demorar entre 2 a 5 minutos após a confirmação pela operadora.'
    },
    {
      id: 2,
      pergunta: 'Como funcionam os pagamentos dos prémios em dinheiro real?',
      resposta: 'No encerramento de cada temporada (todos os domingos às 23:59h), a nossa equipa recolhe a lista oficial dos primeiros classificados no RankUP e contacta os jogadores in-game ou pelo Discord para efetuar a transferência direta via chave Pix.'
    },
    {
      id: 3,
      pergunta: 'Quais versões do Minecraft são compatíveis com a TW Network?',
      resposta: 'O servidor aceita conexões desde a versão 1.8 até à versão 1.20+. No entanto, recomendamos a utilização da versão 1.8.9 ou 1.20 com OptiFine ou mods de desempenho para uma experiência mais fluida.'
    },
    {
      id: 4,
      pergunta: 'Comprei para o Nick errado por engano. O que devo fazer?',
      resposta: 'Entre de imediato no nosso canal de suporte com o comprovativo de pagamento e o nome da conta correto antes de os artigos serem utilizados no jogo para efetuarmos a transferência manual da licença.'
    },
    {
      id: 5,
      pergunta: 'O servidor suporta contas originais e não-originais (piratas)?',
      resposta: 'Sim! A rede TW Network conta com autenticação mista, permitindo a entrada com segurança de qualquer cliente oficial ou de terceiros.'
    }
  ];

  const alternarPergunta = (id) => {
    setPerguntaAberta(perguntaAberta === id ? null : id);
  };

  return (
    <section id="suporte" className="faq-section">
      <div className="faq-header">
        <h2>Perguntas <span className="highlight">Frequentes</span></h2>
        <p>Tire as suas dúvidas sobre pagamentos, prazos de entrega e mecânicas da TW Network.</p>
      </div>

      <div className="faq-lista">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-item ${perguntaAberta === faq.id ? 'aberto' : ''}`}
            onClick={() => alternarPergunta(faq.id)}
          >
            <div className="faq-pergunta">
              <h3>{faq.pergunta}</h3>
              <span className="faq-seta">{perguntaAberta === faq.id ? '−' : '+'}</span>
            </div>
            
            {perguntaAberta === faq.id && (
              <div className="faq-resposta">
                <p>{faq.resposta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
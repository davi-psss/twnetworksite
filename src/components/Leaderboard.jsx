import React from 'react';
import './Leaderboard.css';

export default function Leaderboard() {
  const topJogadores = [
    {
      posicao: 1,
      nick: 'TeDabliukkkkk',
      nivelRank: 'Deus Supremo',
      saldo: 'R$ 150.000.000',
      premio: 'R$ 250,00 via Pix',
      coroa: '🥇'
    },
    {
      posicao: 2,
      nick: 'Minerador_Pro',
      nivelRank: 'Titã III',
      saldo: 'R$ 112.450.000',
      premio: 'R$ 100,00 via Pix',
      coroa: '🥈'
    },
    {
      posicao: 3,
      nick: 'ShadowCrafter',
      nivelRank: 'Campeão I',
      saldo: 'R$ 88.900.000',
      premio: 'R$ 50,00 via Pix',
      coroa: '🥉'
    },
    {
      posicao: 4,
      nick: 'Alex_Master',
      nivelRank: 'Lorde II',
      saldo: 'R$ 64.200.000',
      premio: 'VIP Supremo + 50k Cash',
      coroa: '4º'
    },
    {
      posicao: 5,
      nick: 'ValkyriePvP',
      nivelRank: 'Lorde I',
      saldo: 'R$ 51.700.000',
      premio: 'VIP Esmeralda + 25k Cash',
      coroa: '5º'
    }
  ];

  return (
    <section className="leaderboard-section">
      <div className="leaderboard-header">
        <span className="badge-temporada">Temporada 1 • Em Disputa</span>
        <h2>Classificação & <span className="highlight">Prémios em Dinheiro</span></h2>
        <p>Os jogadores no topo da economia no encerramento da temporada recebem transferências diretas via Pix.</p>
      </div>

      <div className="leaderboard-card-container">
        <div className="leaderboard-aviso">
          <span>⏳ <strong>Fecho da Temporada:</strong> Domingo às 23:59h</span>
          <span className="total-premiacao">Total em Prémios: <strong>R$ 400,00+</strong></span>
        </div>

        <div className="tabela-wrapper">
          <table className="tabela-ranking">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Jogador</th>
                <th>Rank Atual</th>
                <th>Fortuna Acumulada</th>
                <th>Recompensa Sazonal</th>
              </tr>
            </thead>
            <tbody>
              {topJogadores.map((jogador) => (
                <tr key={jogador.posicao} className={`linha-pos-${jogador.posicao}`}>
                  <td className="col-pos">
                    <span className="pos-icone">{jogador.coroa}</span>
                  </td>
                  <td className="col-jogador">
                    <img 
                      src={`https://mc-heads.net/avatar/${jogador.nick}/32`} 
                      alt={jogador.nick} 
                      className="tabela-avatar"
                    />
                    <strong>{jogador.nick}</strong>
                  </td>
                  <td className="col-rank">
                    <span className="tag-rank">{jogador.nivelRank}</span>
                  </td>
                  <td className="col-saldo">{jogador.saldo}</td>
                  <td className="col-premio">
                    <span className="premio-destaque">{jogador.premio}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
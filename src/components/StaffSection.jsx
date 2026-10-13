import React from 'react';
import './StaffSection.css';

export default function StaffSection() {
  const membros = [
    {
      nick: 'TeDabliukkkkk',
      cargo: 'Fundador & Desenvolvedor',
      classe: 'fundador',
      responsabilidade: 'Gestão geral da infraestrutura, programação de plugins e economia da rede.'
    },
    {
      nick: 'AdminTW',
      cargo: 'Administrador Geral',
      classe: 'admin',
      responsabilidade: 'Supervisão de eventos sazonais, suporte à loja e coordenação da equipa.'
    },
    {
      nick: 'ModCraft',
      cargo: 'Moderador Sénior',
      classe: 'mod',
      responsabilidade: 'Fiscalização de denúncias, aplicação das diretrizes e combate a modificações ilícitas.'
    },
    {
      nick: 'AjudanteTW',
      cargo: 'Ajudante / Suporte',
      classe: 'ajudante',
      responsabilidade: 'Acolhimento a novos jogadores, esclarecimento de dúvidas no chat e tickets.'
    }
  ];

  return (
    <section className="staff-section">
      <div className="staff-header">
        <h2>Equipa da <span className="highlight">TW Network</span></h2>
        <p>Conheça os responsáveis pela administração, suporte técnico e integridade das partidas.</p>
      </div>

      <div className="staff-grid">
        {membros.map((membro, index) => (
          <div key={index} className="staff-card">
            <div className="staff-avatar-box">
              <img
                src={`https://mc-heads.net/avatar/${membro.nick}/80`}
                alt={membro.nick}
                className="staff-avatar"
              />
            </div>

            <h3 className="staff-nick">{membro.nick}</h3>
            <span className={`staff-badge ${membro.classe}`}>{membro.cargo}</span>
            <p className="staff-desc">{membro.responsabilidade}</p>
          </div>
        ))}
      </div>

      <div className="recrutamento-banner">
        <div className="recrutamento-info">
          <h3>Quer fazer parte da equipa da TW Network?</h3>
          <p>
            Estamos à procura de jogadores dedicados e prestáveis para os cargos de Ajudante e Suporte.
          </p>
        </div>
        <a
          href="#discord"
          className="btn-candidatura"
          onClick={() => alert('As candidaturas oficiais abrem no nosso Discord antes do início da temporada!')}
        >
          Enviar Candidatura 📋
        </a>
      </div>
    </section>
  );
}
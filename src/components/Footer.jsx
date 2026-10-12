import { Link } from 'react-router-dom';
import { SERVER_INFO } from '../data/serverData';
import { MessageSquare, PhoneCall, Send, Headphones, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#060a14] border-t border-white/10 text-slate-400 text-sm">
      {/* Decorative top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-emerald-600 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Server Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-emerald-700 p-0.5 flex items-center justify-center shadow-lg shadow-red-600/30">
                <div className="w-full h-full bg-[#0a0f20] rounded-[10px] flex items-center justify-center font-black text-lg text-white">
                  Tw
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  Tw<span className="text-red-500">Network</span>
                </span>
                <p className="text-xs text-slate-500 font-semibold">{SERVER_INFO.company}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              O melhor servidor de RankUp temático de Natal do Brasil na versão 1.8! 
              Minas congeladas, bosses festivos, presentes diários e economia feita para durar.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono bg-slate-900/90 px-3 py-2 rounded-lg border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200">{SERVER_INFO.ip}</span>
              <span className="text-slate-500">(v{SERVER_INFO.version})</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Navegação Rápida</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">
                  Início (Página Principal)
                </Link>
              </li>
              <li>
                <Link to="/loja" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <span>Loja Oficial de VIPs</span>
                  <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.2 rounded font-bold">10% OFF</span>
                </Link>
              </li>
              <li>
                <Link to="/ranks" className="hover:text-red-400 transition-colors">
                  Progressão de Ranks & Prestígios
                </Link>
              </li>
              <li>
                <Link to="/comunidade" className="hover:text-red-400 transition-colors">
                  Central de Suporte & Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>Comunidade & Suporte</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href={SERVER_INFO.discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Discord Oficial (Sorteios & Chat)</span>
                </a>
              </li>
              <li>
                <a
                  href={SERVER_INFO.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Headphones className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ticket / Atendimento ao Jogador</span>
                </a>
              </li>
              <li>
                <a
                  href={SERVER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-green-400" />
                  <span>WhatsApp da TwStudios</span>
                </a>
              </li>
              <li>
                <a
                  href={SERVER_INFO.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Canal de Avisos no Telegram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Disclaimer */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Segurança & Pagamentos</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Todos os pagamentos por PIX possuem ativação automática imediata. Pagamentos por Cartão são processados com criptografia ponta a ponta.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-[11px] text-slate-400">
              🎄 <strong>Boas Festas!</strong> Toda a equipe da TwStudios deseja um Natal repleto de diversão e conquistas.
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Notice */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-300">TwNetwork</strong> — Desenvolvido por <strong className="text-red-400 font-semibold">{SERVER_INFO.company}</strong>. Todos os direitos reservados.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-400">
            Não somos afiliados à Mojang Studios nem à Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}

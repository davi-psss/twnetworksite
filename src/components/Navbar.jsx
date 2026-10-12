import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Copy, Check, Sparkles, MessageSquare, Menu, X, ShoppingBag, Trophy, Home, Users } from 'lucide-react';
import { SERVER_INFO } from '../data/serverData';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_INFO.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { label: 'Início', path: '/', icon: Home },
    { label: 'Loja VIP', path: '/loja', icon: ShoppingBag, badge: 'Promo' },
    { label: 'Ranks & Prestígios', path: '/ranks', icon: Trophy },
    { label: 'Comunidade & Suporte', path: '/comunidade', icon: Users },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080d1a]/85 border-b border-white/10 transition-all">
      {/* Top Holiday Banner */}
      <div className="bg-gradient-to-r from-red-700 via-emerald-700 to-red-700 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
        <span>🎄 <strong>Temporada RankUp Natal Aberta!</strong> Use o cupom <strong>NATAL10</strong> na loja para 10% OFF</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse hidden sm:inline" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-emerald-700 p-0.5 shadow-lg shadow-red-600/20 group-hover:shadow-red-600/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-full h-full bg-[#0b1021] rounded-[10px] flex items-center justify-center font-black text-xl text-white tracking-wider group-hover:scale-105 transition-transform">
                  <span className="text-red-500">Tw</span>
                </div>
              </div>
              {/* Santa Hat decoration dot */}
              <span className="absolute -top-1 -right-1 text-sm select-none animate-bounce">
                🎅
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                  Tw<span className="text-red-500">Network</span>
                </span>
                <span className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                  1.8
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <span>RankUp Natal</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span className="text-slate-500 text-[11px] font-semibold">{SERVER_INFO.company}</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? 'text-white bg-white/10 shadow-sm border border-white/15'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-red-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-red-500/90 text-[10px] uppercase font-extrabold text-white px-1.5 py-0.2 rounded-full tracking-wider animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Copy IP Button & Discord */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Copy IP */}
            <button
              onClick={handleCopyIp}
              title="Clique para copiar o IP do servidor"
              className="relative group bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-red-500/50 px-3.5 py-2 rounded-xl text-left transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-md"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {copied ? 'IP COPIADO!' : 'JOGAR AGORA'}
                </span>
                <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-white transition-colors">
                  {SERVER_INFO.ip}
                </span>
              </div>
              <div className="ml-1 text-slate-400 group-hover:text-red-400 transition-colors">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>

            {/* Discord Button */}
            <a
              href={SERVER_INFO.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-600/90 hover:bg-indigo-500 text-white p-2.5 rounded-xl border border-indigo-400/30 transition-all hover:scale-105 shadow-md shadow-indigo-600/20"
              title="Entrar no Discord"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleCopyIp}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{copied ? 'Copiado!' : 'IP'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1428] border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-base font-semibold ${
                  active
                    ? 'text-white bg-red-600/20 border border-red-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${active ? 'text-red-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-[10px] uppercase font-bold text-white px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={handleCopyIp}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4 text-slate-400" />
              <span>{copied ? 'IP Copiado com Sucesso!' : `Copiar IP: ${SERVER_INFO.ip}`}</span>
            </button>
            <a
              href={SERVER_INFO.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Comunidade Discord</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

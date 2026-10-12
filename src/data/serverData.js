export const SERVER_INFO = {
  name: "TwNetwork",
  company: "TwStudios",
  gameName: "RankUp Natal",
  ip: "twnetwork.jogar.br",
  port: "25565",
  version: "1.8",
  season: "Temporada de Natal",
  discordUrl: "https://discord.gg/twnetwork", // link editável
  whatsappUrl: "https://chat.whatsapp.com/twnetwork", // link editável
  telegramUrl: "https://t.me/twnetwork", // link editável
  ticketUrl: "https://discord.gg/twnetwork", // suporte
  storeUrl: "/loja",
};

export const RANKS_DATA = [
  {
    id: "carvao",
    name: "Carvão",
    order: 1,
    cost: "Grátis (Inicial)",
    tag: "[Carvão]",
    color: "#6b7280",
    gradient: "from-gray-700 to-gray-900",
    border: "border-gray-600/40",
    icon: "Pickaxe",
    description: "O primeiro passo na sua jornada natalina. Comece nas minas recolhendo combustíveis para o inverno.",
    perks: [
      "Acesso à Mina Carvão",
      "Kit Inicial Básico",
      "Comando /spawn e /sethome (1)",
      "Multiplicador de moedas 1.0x"
    ]
  },
  {
    id: "neve",
    name: "Neve",
    order: 2,
    cost: "15.000 Coins",
    tag: "[Neve]",
    color: "#93c5fd",
    gradient: "from-sky-600 to-blue-900",
    border: "border-sky-400/40",
    icon: "Snowflake",
    description: "Você dominou o frio inicial e desbloqueou minérios cobertos por geada fresca.",
    perks: [
      "Acesso à Mina Neve",
      "Kit Diário Neve",
      "Acesso a 2 /sethomes",
      "Multiplicador de moedas 1.1x"
    ]
  },
  {
    id: "sino",
    name: "Sino",
    order: 3,
    cost: "45.000 Coins",
    tag: "[Sino]",
    color: "#fbbf24",
    gradient: "from-amber-500 to-yellow-800",
    border: "border-amber-400/40",
    icon: "Bell",
    description: "Os sinos anunciam sua evolução no RankUp com novos desafios e minas brilhantes.",
    perks: [
      "Acesso à Mina Sino",
      "Comando /echest (Baú Virtual)",
      "Multiplicador de moedas 1.25x",
      "1x Chave Caixa Natalina"
    ]
  },
  {
    id: "biscoito",
    name: "Biscoito",
    order: 4,
    cost: "120.000 Coins",
    tag: "[Biscoito]",
    color: "#d97706",
    gradient: "from-amber-700 to-orange-950",
    border: "border-amber-600/40",
    icon: "Cookie",
    description: "Biscoitos de gengibre e canela! Suas habilidades de forja ganham um sabor especial.",
    perks: [
      "Acesso à Mina Biscoito",
      "Kit Doces Natalinos",
      "Multiplicador de moedas 1.4x",
      "Venda automática nas minas (/autosell)"
    ]
  },
  {
    id: "duende",
    name: "Duende",
    order: 5,
    cost: "300.000 Coins",
    tag: "[Duende]",
    color: "#10b981",
    gradient: "from-emerald-600 to-teal-950",
    border: "border-emerald-400/40",
    icon: "Sparkles",
    description: "Trabalhador incansável da oficina mágica, você agora ganha bônus de velocidade e eficiência.",
    perks: [
      "Acesso à Mina Duende",
      "Efeito Velocidade I constante nas minas",
      "Multiplicador de moedas 1.6x",
      "Acesso a 3 /sethomes"
    ]
  },
  {
    id: "rena",
    name: "Rena",
    order: 6,
    cost: "750.000 Coins",
    tag: "[Rena]",
    color: "#b45309",
    gradient: "from-amber-600 to-amber-900",
    border: "border-amber-500/40",
    icon: "Footprints",
    description: "Rápido como Rudolph! Atravesse as minas mais fundas e guie os novatos da TwNetwork.",
    perks: [
      "Acesso à Mina Rena",
      "Kit Rena com armadura mágica",
      "Multiplicador de moedas 1.85x",
      "Comando /craft em qualquer lugar"
    ]
  },
  {
    id: "treno",
    name: "Trenó",
    order: 7,
    cost: "1.800.000 Coins",
    tag: "[Trenó]",
    color: "#dc2626",
    gradient: "from-red-600 to-rose-950",
    border: "border-red-500/40",
    icon: "Send",
    description: "Carregando presentes pesados, o trenó traz capacidade máxima para seus inventários.",
    perks: [
      "Acesso à Mina Trenó",
      "Baú duplo no /echest",
      "Multiplicador de moedas 2.1x",
      "2x Chaves Caixa Mítica"
    ]
  },
  {
    id: "quebra-nozes",
    name: "Quebra-Nozes",
    order: 8,
    cost: "4.500.000 Coins",
    tag: "[Quebra-Nozes]",
    color: "#7c3aed",
    gradient: "from-purple-600 to-indigo-950",
    border: "border-purple-400/40",
    icon: "ShieldAlert",
    description: "A guarda real de brinquedo protege as minas mais valiosas de todo o reino gelado.",
    perks: [
      "Acesso à Mina Quebra-Nozes",
      "Resistência e Força aumentadas",
      "Multiplicador de moedas 2.5x",
      "Acesso à Sala VIP Pública"
    ]
  },
  {
    id: "estrela",
    name: "Estrela",
    order: 9,
    cost: "10.000.000 Coins",
    tag: "[Estrela]",
    color: "#f59e0b",
    gradient: "from-yellow-400 to-amber-700",
    border: "border-yellow-300/50",
    icon: "Star",
    description: "A luz guia do topo da árvore de Natal. Um dos postos mais lendários do servidor.",
    perks: [
      "Acesso à Mina Estrela",
      "Brilho dourado no chat e prefixo especial",
      "Multiplicador de moedas 3.0x",
      "4 /sethomes permitidas"
    ]
  },
  {
    id: "noel",
    name: "Noel",
    order: 10,
    cost: "25.000.000 Coins",
    tag: "[Noel]",
    color: "#ef4444",
    gradient: "from-red-500 via-rose-600 to-red-950",
    border: "border-red-400/70",
    icon: "Crown",
    description: "O rank supremo da progressão comum! Apenas os jogadores mais dedicados alcançam a coroa natalina.",
    perks: [
      "Acesso à Mina Noel (A mina comum mais lucrativa)",
      "Prefixo Lendário [Noel]",
      "Multiplicador de moedas 4.0x",
      "Acesso liberado para ascensão a PRESTÍGIO",
      "Comando /repair diário"
    ]
  }
];

export const VIPS_DATA = [
  {
    id: "vip-festivo",
    name: "VIP Festivo",
    badge: "Popular",
    price: "R$ 19,90",
    oldPrice: "R$ 29,90",
    duration: "30 dias ou Vitalício (+ R$15)",
    tag: "[Festivo]",
    tagColor: "text-emerald-400",
    glowColor: "glow-emerald",
    cardGradient: "from-emerald-950/80 via-slate-900/90 to-emerald-900/30",
    accentColor: "border-emerald-500/50",
    btnColor: "bg-emerald-600 hover:bg-emerald-500 text-white",
    description: "Perfeito para quem deseja começar a época festiva com vantagens incríveis e kits poderosos.",
    perks: [
      "Comando /fly no Spawn e Terrenos",
      "Prefixo exclusivo verde natalino [Festivo]",
      "Kit VIP Festivo com Armadura Proteção IV",
      "Acesso à Mina VIP Festiva exclusiva",
      "Multiplicador Global de 2.0x Coins",
      "Entrar no servidor mesmo se estiver lotado",
      "3x /sethome adicionais",
      "3x Chaves da Caixa Festiva"
    ]
  },
  {
    id: "vip-nevasca",
    name: "VIP Nevasca",
    badge: "Mais Vendido",
    isFeatured: true,
    price: "R$ 39,90",
    oldPrice: "R$ 55,00",
    duration: "30 dias ou Vitalício (+ R$20)",
    tag: "[Nevasca]",
    tagColor: "text-sky-300",
    glowColor: "glow-ice",
    cardGradient: "from-sky-950/90 via-slate-900/95 to-cyan-900/40",
    accentColor: "border-sky-400/70 shadow-lg shadow-sky-500/20",
    btnColor: "bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold",
    description: "O pacote mais equilibrado para dominar a economia com gelo no sangue e picaretas lendárias.",
    perks: [
      "Todos os benefícios do VIP Festivo",
      "Comando /fly em todas as minas liberado",
      "Prefixo gelado brilhante [Nevasca]",
      "Kit VIP Nevasca (Armadura P5 + Picareta Eficiência VI)",
      "Mina VIP Nevasca com minérios ultra valiosos",
      "Multiplicador Global de 3.5x Coins",
      "Comando /hat (Colocar qualquer bloco na cabeça)",
      "Comando /feed e /heal instantâneos",
      "6x /sethome adicionais",
      "6x Chaves da Caixa Nevasca Suprema"
    ]
  },
  {
    id: "vip-polar",
    name: "VIP Polar",
    badge: "Supremo",
    price: "R$ 69,90",
    oldPrice: "R$ 99,90",
    duration: "Vitalício",
    tag: "[Polar]",
    tagColor: "text-amber-300",
    glowColor: "glow-gold",
    cardGradient: "from-amber-950/80 via-slate-900/95 to-red-950/40",
    accentColor: "border-yellow-400/70 shadow-xl shadow-yellow-500/25",
    btnColor: "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black",
    description: "A autoridade máxima do polo norte. Vantagens sem limites, prioridade absoluta e poder irrestrito.",
    perks: [
      "Todos os benefícios de todos os VIPs anteriores",
      "Acesso a TODAS as minas VIPs exclusivas",
      "Prefixo com transição mítica [Polar]",
      "Kit VIP Polar Deus (Armaduras com encantamentos únicos)",
      "Multiplicador Global de 5.0x Coins",
      "Reparação de itens ilimitada com /repair all",
      "Criar e gerenciar Clã com benefícios gratuitos",
      "Chat VIP privado e cores exclusivas no chat global",
      "10x /sethome adicionais",
      "12x Chaves da Caixa Lendária do Papai Noel",
      "Tag exclusiva no Discord oficial do TwNetwork"
    ]
  }
];

export const PRESTIGES_DATA = [
  {
    id: "grinch",
    name: "Grinch",
    badge: "Prestígio I",
    requirement: "Alcançar Rank Noel + 50.000.000 Coins",
    tag: "[Grinch]",
    color: "#22c55e",
    gradient: "from-emerald-950 via-green-950/80 to-slate-950",
    border: "border-green-500/50",
    icon: "Ghost",
    quote: "\"Ele roubou o Natal e agora domina toda a economia obscura.\"",
    lore: "Ao atingir o Rank Noel e sacrificar sua fortuna, você renasce com o rancor verde do Grinch, obtendo habilidades de roubo e bônus desmedidos.",
    buffs: [
      "+50% de ganho de minérios ao minerar",
      "Chance de 10% de duplicar drops de bosses de Natal",
      "Prefixo exclusivo [Grinch] com efeitos de partículas ácidas",
      "Mina Secreta do Grinch"
    ]
  },
  {
    id: "yeti",
    name: "Yeti",
    badge: "Prestígio II",
    requirement: "Alcançar Prestígio Grinch + 150.000.000 Coins",
    tag: "[Yeti]",
    color: "#38bdf8",
    gradient: "from-cyan-950 via-sky-950/80 to-slate-950",
    border: "border-sky-400/60",
    icon: "Mountain",
    quote: "\"O abominável homem das neves das profundezas da montanha congelada.\"",
    lore: "Força bruta incontrolável. As tempestades de gelo dobram seus ataques e suas picaretas destroem múltiplos blocos simultaneamente.",
    buffs: [
      "Habilidade Passiva Fúria do Yeti (Mineração em área 3x3 ativável)",
      "+100% de ganho de moedas em todas as fontes",
      "Acesso ao covil congelado e Mina do Yeti",
      "Prefixo Mítico [Yeti] azul glaciar"
    ]
  },
  {
    id: "krampus",
    name: "Krampus",
    badge: "Prestígio III (Final)",
    requirement: "Alcançar Prestígio Yeti + 500.000.000 Coins",
    tag: "[Krampus]",
    color: "#ef4444",
    gradient: "from-red-950 via-stone-950 to-black",
    border: "border-red-600/70 shadow-2xl shadow-red-700/30",
    icon: "Flame",
    quote: "\"A punição para os desobedientes. O senhor supremo do pesadelo natalino.\"",
    lore: "O ápice absoluto da evolução no RankUp Natal. Poucos jogadores na história da TwNetwork ousam encarar os chifres e o poder infernal do Krampus.",
    buffs: [
      "Acesso à Mina Infernal de Krampus (Maior rentabilidade do servidor)",
      "Multiplicador final INSANO de 8.0x permanente",
      "Efeito de chamas negras e passos sombrios por onde caminha",
      "Título de Lenda no Discord e no Tab do Servidor",
      "Dano crítico aumentado em 35% contra todos os chefes"
    ]
  }
];

export const COMMUNITY_LINKS = [
  {
    title: "Discord Oficial",
    subtitle: "Comunidade com mais de 5.000 membros, sorteios diários e avisos",
    icon: "MessageSquare",
    color: "from-indigo-600 to-indigo-900",
    border: "border-indigo-500/40",
    btnText: "Entrar no Discord",
    url: "https://discord.gg/twnetwork",
    isRecommended: true
  },
  {
    title: "Ticket / Suporte",
    subtitle: "Precisa de ajuda com compras, bugs ou dúvidas? Nossa equipe atende 24/7",
    icon: "Headphones",
    color: "from-emerald-600 to-teal-900",
    border: "border-emerald-500/40",
    btnText: "Abrir um Ticket",
    url: "https://discord.gg/twnetwork",
    isRecommended: false
  },
  {
    title: "WhatsApp da Equipe",
    subtitle: "Grupo exclusivo para novidades, avisos de reinicialização e eventos",
    icon: "PhoneCall",
    color: "from-green-600 to-emerald-950",
    border: "border-green-500/40",
    btnText: "Entrar no WhatsApp",
    url: "https://chat.whatsapp.com/twnetwork",
    isRecommended: false
  },
  {
    title: "Canal no Telegram",
    subtitle: "Receba alertas imediatos de promoções relâmpago de VIPs e cupons",
    icon: "Send",
    color: "from-sky-500 to-blue-900",
    border: "border-sky-400/40",
    btnText: "Seguir no Telegram",
    url: "https://t.me/twnetwork",
    isRecommended: false
  }
];

export const SERVER_FEATURES = [
  {
    icon: "Snowflake",
    title: "Minas Natalinas Temáticas",
    description: "Cada rank possui uma mina exclusiva feita à mão com decoração natalina e blocos de valor progressivo."
  },
  {
    icon: "Gift",
    title: "Caixas Misteriosas de Natal",
    description: "Abra presentes com recompensas aleatórias: itens lendários, multipliers de moedas e cosméticos."
  },
  {
    icon: "Swords",
    title: "Bosses Festivos",
    description: "Enfrente o Boneco de Neve Enfurecido e o Grinch em arenas diárias com recompensas em dinheiro real e itens."
  },
  {
    icon: "Zap",
    title: "Economia Balanceada 1.8",
    description: "Criada por especialistas da TwStudios para garantir longevidade sem inflação descontrolada."
  },
  {
    icon: "Users",
    title: "Sistema de Clãs & Guerras",
    description: "Monte sua guilda, conquiste terrenos e domine a pontuação de temporada natalina com prêmios em PIX."
  },
  {
    icon: "ShieldCheck",
    title: "Anti-Cheats de Última Geração",
    description: "Combates limpos e justos na versão 1.8 sem vantagens ilícitas para uma gameplay competitiva."
  }
];

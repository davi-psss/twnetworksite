import { useState } from 'react';
import { X, Check, Copy, Sparkles, CreditCard, QrCode, ShieldCheck, Gift, AlertCircle } from 'lucide-react';
import { SERVER_INFO } from '../data/serverData';

export default function CheckoutModal({ item, onClose }) {
  const [nickname, setNickname] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [step, setStep] = useState(1); // 1 = info, 2 = payment screen
  const [copiedKey, setCopiedKey] = useState(false);

  if (!item) return null;

  // Calculate pricing
  const basePriceNum = parseFloat(item.price.replace('R$', '').replace(',', '.').trim()) || 29.90;
  const finalPriceNum = discountApplied ? basePriceNum * 0.9 : basePriceNum;
  const finalPriceFormatted = `R$ ${finalPriceNum.toFixed(2).replace('.', ',')}`;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'NATAL10') {
      setDiscountApplied(true);
    } else {
      alert('Cupom inválido. Tente usar NATAL10 para 10% OFF!');
    }
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert('Por favor, digite seu nick exato do Minecraft antes de continuar.');
      return;
    }
    setStep(2);
  };

  const fakePixCode = `00020126580014br.gov.bcb.pix0136twnetwork-${item.id}-natal-pay520400005303986540${finalPriceNum.toFixed(2)}5802BR5910TWSTUDIOS6009SAOPAULO62070503***6304`;

  const copyPix = () => {
    navigator.clipboard.writeText(fakePixCode);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0d1428] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Festive Header Accent */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-amber-400 to-emerald-500 w-full" />

        {/* Modal Top */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-slate-900/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                Loja Oficial • TwNetwork
              </span>
              <span className="text-xs text-slate-400">Entrega Automática</span>
            </div>
            <h3 className="text-2xl font-black mt-1 text-white flex items-center gap-2">
              <span>{item.name}</span>
              {item.tag && (
                <span className="text-sm font-mono px-2 py-0.5 rounded bg-white/10 text-amber-300">
                  {item.tag}
                </span>
              )}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 1 ? (
            <>
              {/* Product Summary */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Valor do Pacote</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-amber-400">{finalPriceFormatted}</span>
                    {discountApplied && (
                      <span className="text-sm text-slate-500 line-through">{item.price}</span>
                    )}
                  </div>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.duration || 'Vitalício'}</span>
                  </p>
                </div>
                {item.oldPrice && !discountApplied && (
                  <div className="text-right">
                    <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold">
                      Desconto de Natal
                    </span>
                  </div>
                )}
              </div>

              {/* Minecraft Nickname Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-200">
                  Seu Nick no Minecraft <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Ex: SteveGamer_123"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl text-white placeholder-slate-500 font-mono text-sm outline-none transition-all"
                    />
                  </div>
                  {/* Skin avatar preview if typed */}
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                    {nickname.trim() ? (
                      <img
                        src={`https://mc-heads.net/avatar/${nickname.trim()}/44`}
                        alt={nickname}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-xs text-slate-500 font-mono">Nick</span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Certifique-se de digitar seu nick exatamente igual ao jogo para ativação automática.</span>
                </p>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-200">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-500 bg-emerald-950/30 text-white shadow-md shadow-emerald-900/20'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                        <span>PIX</span>
                        <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-extrabold">Instantâneo</span>
                      </div>
                      <span className="text-xs text-slate-400">Ativação em segundos</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-indigo-500 bg-indigo-950/30 text-white shadow-md shadow-indigo-900/20'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-100">Cartão de Crédito</div>
                      <span className="text-xs text-slate-400">Até 12x no cartão</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Coupon Form */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-200">
                  Cupom de Desconto
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Digite seu cupom (Ex: NATAL10)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    disabled={discountApplied}
                    className="flex-1 px-4 py-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 font-mono outline-none uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    disabled={discountApplied}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      discountApplied
                        ? 'bg-emerald-600 text-white cursor-default'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    {discountApplied ? 'Aplicado!' : 'Aplicar'}
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Cupom NATAL10 aplicado com 10% de desconto!</span>
                  </p>
                )}
              </div>

              {/* Security Guarantee */}
              <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Compra 100% segura com suporte 24 horas pela equipe TwStudios no Discord.</span>
              </div>
            </>
          ) : (
            /* Step 2: Simulated Checkout Screen */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <QrCode className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">Quase lá, {nickname}!</h4>
                <p className="text-sm text-slate-300 mt-1">
                  Efetue o pagamento de <strong className="text-amber-400">{finalPriceFormatted}</strong> para ativar seu <strong>{item.name}</strong>.
                </p>
              </div>

              {/* Mock QR Code visual representation */}
              <div className="p-4 bg-white rounded-2xl w-48 h-48 mx-auto flex items-center justify-center shadow-lg relative group">
                <div className="grid grid-cols-6 gap-1 w-full h-full p-2 bg-slate-900 rounded-lg">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        (i % 2 === 0 || i % 5 === 0) ? 'bg-white' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 text-white font-black text-xs px-2 py-1 rounded shadow">
                    PIX TW
                  </div>
                </div>
              </div>

              {/* Copy Paste Key */}
              <div className="space-y-2 text-left">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Código Copia e Cola (PIX)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={fakePixCode}
                    className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 font-mono select-all"
                  />
                  <button
                    onClick={copyPix}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    {copiedKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              {/* In-game delivery instructions */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 text-left space-y-1.5 text-xs">
                <p className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Como receber seu VIP no jogo:</span>
                </p>
                <p className="text-slate-300">
                  1. Assim que o pagamento for aprovado, seu VIP será ativado automaticamente.
                </p>
                <p className="text-slate-300">
                  2. Conecte-se em <strong className="text-white font-mono">{SERVER_INFO.ip}</strong>.
                </p>
                <p className="text-slate-300">
                  3. Use o comando <strong className="text-white font-mono">/ativar</strong> ou aguarde alguns segundos caso já esteja online!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-white/10 bg-slate-900/60 flex items-center justify-between">
          {step === 1 ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleProceedToPayment}
                className="px-6 py-2.5 rounded-xl text-sm font-black text-white bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-lg shadow-red-600/30 flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
              >
                <span>Avançar para Pagamento</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Concluir & Fechar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

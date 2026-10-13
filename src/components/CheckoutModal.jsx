import React, { useState } from 'react';
import './CheckoutModal.css';
import CupomDesconto from './CupomDesconto';

export default function CheckoutModal({ isOpen, onClose, itens, onRemoverItem, onLimparCarrinho }) {
  const [nick, setNick] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('pix');
  const [compraConcluida, setCompraConcluida] = useState(false);
  const [cupomAtivo, setCupomAtivo] = useState(null);

  if (!isOpen) return null;

  // Soma base sem descontos
  const subtotal = itens.reduce((acc, item) => {
    const valorNumerico = parseFloat(item.preco.replace('R$', '').replace(',', '.').trim());
    return acc + valorNumerico;
  }, 0);

  // Aplicação da percentagem do cupão
  const descontoValor = cupomAtivo ? subtotal * cupomAtivo.desconto : 0;
  const totalFinal = Math.max(0, subtotal - descontoValor);

  const finalizarPedido = (e) => {
    e.preventDefault();
    if (!nick.trim()) {
      alert('Por favor, introduza o seu Nick do Minecraft!');
      return;
    }
    setCompraConcluida(true);
  };

  const fecharEresetar = () => {
    setCompraConcluida(false);
    setNick('');
    setCupomAtivo(null);
    if (compraConcluida) {
      onLimparCarrinho();
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={fecharEresetar}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-fechar" onClick={fecharEresetar}>×</button>

        {!compraConcluida ? (
          <>
            <h2 className="modal-titulo">Finalizar <span className="highlight">Encomenda</span></h2>

            {itens.length === 0 ? (
              <div className="carrinho-vazio">
                <p>O seu carrinho está vazio de momento.</p>
                <button className="btn-voltar" onClick={fecharEresetar}>Explorar Catálogo</button>
              </div>
            ) : (
              <form onSubmit={finalizarPedido}>
                <div className="lista-itens">
                  {itens.map((item, index) => (
                    <div key={index} className="item-carrinho">
                      <div>
                        <strong>{item.nome}</strong>
                        <span className="item-preco">{item.preco}</span>
                      </div>
                      <button 
                        type="button" 
                        className="btn-remover" 
                        onClick={() => onRemoverItem(index)}
                      >
                        Remover
                      </button>
                    </div>
                  ))}
                </div>

                {/* Secção de cupão de desconto */}
                <CupomDesconto onAplicarCupom={setCupomAtivo} cupomAtivo={cupomAtivo} />

                <div className="carrinho-resumo-detalhado">
                  {cupomAtivo && (
                    <>
                      <div className="resumo-linha">
                        <span>Subtotal:</span>
                        <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className="resumo-linha desconto">
                        <span>Desconto ({cupomAtivo.codigo}):</span>
                        <span>- R$ {descontoValor.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </>
                  )}
                  <div className="resumo-linha total">
                    <span>Total a Pagar:</span>
                    <strong>R$ {totalFinal.toFixed(2).replace('.', ',')}</strong>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="nick">Nick no Minecraft (obrigatório):</label>
                  <input
                    id="nick"
                    type="text"
                    placeholder="Ex: TeDabliukkkkk"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    required
                  />
                  <small>Os artigos serão entregues diretamente nesta conta in-game.</small>
                </div>

                <div className="form-group">
                  <label>Método de Pagamento:</label>
                  <div className="pagamento-opcoes">
                    <button
                      type="button"
                      className={`btn-opcao ${metodoPagamento === 'pix' ? 'ativo' : ''}`}
                      onClick={() => setMetodoPagamento('pix')}
                    >
                      ⚡ Pix (Instantâneo)
                    </button>
                    <button
                      type="button"
                      className={`btn-opcao ${metodoPagamento === 'cartao' ? 'ativo' : ''}`}
                      onClick={() => setMetodoPagamento('cartao')}
                    >
                      💳 Cartão de Crédito
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn-confirmar">
                  Prosseguir para Pagamento
                </button>
              </form>
            )}
          </>
        ) : (
          <div className="pedido-sucesso">
            <div className="icone-sucesso">✅</div>
            <h2>Pedido Confirmado!</h2>
            <p>Benefícios atribuídos para a conta: <strong>{nick}</strong></p>
            <div className="aviso-pix">
              {metodoPagamento === 'pix' ? (
                <p>Código Pix gerado com sucesso! Utilize o comando <code>/loja historico</code> no jogo para validar a ativação.</p>
              ) : (
                <p>A validar transação segura...</p>
              )}
            </div>
            <button className="btn-concluir" onClick={fecharEresetar}>
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
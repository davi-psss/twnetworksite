import React, { useEffect } from 'react';
import './Toast.css';

export default function Toast({ mensagem, tipo = 'sucesso', onClose }) {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      onClose();
    }, 3500);

    return () => clearTimeout(temporizador);
  }, [onClose]);

  return (
    <div className={`toast-container toast-${tipo}`}>
      <span className="toast-icone">
        {tipo === 'sucesso' && '✅'}
        {tipo === 'aviso' && '⚠️'}
        {tipo === 'info' && 'ℹ️'}
      </span>
      <span className="toast-mensagem">{mensagem}</span>
      <button className="toast-fechar" onClick={onClose}>×</button>
    </div>
  );
}
// src/components/Cotizador.js
import React from "react";

const Cotizador = () => {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f9fafb',
      minHeight: '80vh'
    }}>
      <h2 style={{
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '1.5rem'
      }}>
        Cotizador de Seguros
      </h2>
      
      <div style={{
        border: 'none',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        height: '800px',
        width: '100%'
      }}>
        <iframe 
          src="https://basyc-cotizador-kfsromqzoqnmtrbrntdyr6.streamlit.app" 
          width="100%" 
          height="100%"
          style={{ border: 'none' }}
          title="Cotizador BASYC"
          allowFullScreen
        />
      </div>
      
      <p style={{
        marginTop: '1rem',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        🔐 Tu información se procesa de forma segura a través de nuestra aplicación especializada.
      </p>
    </div>
  );
};

export default Cotizador;
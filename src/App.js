import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("inicio");
  const [selectedAseguradora, setSelectedAseguradora] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  // --- Servicios ---
  const servicios = [
    {
      titulo: "Seguro de Daños Empresariales",
      icono: "🏢",
      descripcion: "Protegemos tus activos empresariales con propuestas competitivas que respaldan tu operación. Cobertura completa para inmuebles, maquinaria, equipo y mercancías contra incendio, inundación, robo y fenómenos naturales.",
      valor: "seguridad"
    },
    {
      titulo: "Seguro de Automóvil",
      icono: "🚗",
      descripcion: "Protección completa para tu vehículo contra accidentes, robo y daños. Incluye asistencia vial 24/7, cobertura de daños materiales y responsabilidad civil.",
      valor: "seguridad"
    },
    {
      titulo: "Seguro de Vida",
      icono: "❤️",
      descripcion: "Protege a tu familia con un respaldo económico en caso de fallecimiento. Incluye cobertura por enfermedad, accidente y opciones de ahorro.",
      valor: "armonia"
    },
    {
      titulo: "Seguro de Salud",
      icono: "🏥",
      descripcion: "Acceso a la mejor red médica con cobertura de hospitalización, consultas, medicamentos y cirugías. Tranquilidad para tu bienestar.",
      valor: "confianza"
    },
    {
      titulo: "Seguro de Hogar",
      icono: "🏠",
      descripcion: "Protege tu patrimonio contra incendios, inundaciones, robo y daños estructurales. Incluye responsabilidad civil y asistencia en el hogar.",
      valor: "paz"
    },
    {
      titulo: "Seguro de Viaje",
      icono: "✈️",
      descripcion: "Protección completa durante tus viajes internacionales o nacionales. Incluye cobertura médica, cancelación de viaje y pérdida de equipaje.",
      valor: "seguridad"
    },
    {
      titulo: "Fianzas",
      icono: "💼",
      descripcion: "Soluciones de garantía para contratos, licitaciones y obligaciones fiscales. Aumenta tu competitividad en procesos comerciales.",
      valor: "confianza"
    }
  ];

  // --- Aseguradoras ---
  const aseguradoras = [
    {
      id: 1,
      nombre: "AXA Seguros",
      logo: require("./assets/logos/axa.png"),
      descripcion: "Líder global en seguros con soluciones integrales para proteger tu vida, salud y patrimonio. Ofrecemos coberturas amplias y servicio al cliente 24/7."
    },
    {
      id: 2,
      nombre: "Chubb de México",
      logo: require("./assets/logos/chubb.png"),
      descripcion: "Especialistas en seguros de alto valor y complejidad. Protegemos activos valiosos con soluciones personalizadas y atención premium."
    },
    {
      id: 4,
      nombre: "Qualitas",
      logo: require("./assets/logos/qualitas.png"),
      descripcion: "Innovadores en seguros digitales con enfoque en movilidad y protección vehicular. Soluciones modernas y fáciles de gestionar."
    },
    {
      id: 5,
      nombre: "MetLife México",
      logo: require("./assets/logos/metlife.png"),
      descripcion: "Especialistas en seguros de vida y salud con enfoque en bienestar integral. Protegemos tu futuro y el de tu familia."
    },
    {
      id: 6,
      nombre: "GNP Seguros",
      logo: require("./assets/logos/gnp.png"),
      descripcion: "Líder en seguros en México con amplia cobertura y respaldo nacional. Ideal para empresas y particulares que buscan estabilidad y confianza."
    }
  ];

  // --- Valores ---
  const valores = [
    { 
      nombre: "Seguridad", 
      icono: "🛡️",
      fondo: "https://placehold.co/600x400/0056b3/ffffff?text=Protección+Completa",
      descripcion: "Nuestra prioridad es proteger lo que más te importa. Con BASYC, tus bienes, tu familia y tu negocio están respaldados por coberturas integrales y las mejores aseguradoras del país."
    },
    { 
      nombre: "Armonía", 
      icono: "☯️",
      fondo: "https://placehold.co/600x400/4CAF50/ffffff?text=Equilibrio+Familiar",
      descripcion: "Fomentamos relaciones equilibradas entre clientes, agentes y aseguradoras. Nuestro enfoque busca soluciones que beneficien a todos."
    },
    { 
      nombre: "Confianza", 
      icono: "🤝",
      fondo: "https://placehold.co/600x400/FF9800/ffffff?text=Relación+de+Confianza",
      descripcion: "Construimos relaciones duraderas basadas en la transparencia y el cumplimiento. Más de 15 años de experiencia respaldan nuestro compromiso."
    },
    { 
      nombre: "Paz", 
      icono: "☮️",
      fondo: "https://placehold.co/600x400/9C27B0/ffffff?text=Tranquilidad+Total",
      descripcion: "Te ofrecemos tranquilidad absoluta. Al saber que estás protegido contra imprevistos, puedes enfocarte en lo que realmente importa."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hola, mi nombre es ${formData.nombre}. Me gustaría obtener información sobre seguros. Mi teléfono es ${formData.telefono} y mi correo es ${formData.email}. Mensaje: ${formData.mensaje}`;
    window.open(`https://wa.me/527224447736?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getValorColor = (valor) => {
    const colors = {
      seguridad: "#0056b3",
      armonia: "#4CAF50",
      confianza: "#FF9800",
      paz: "#9C27B0"
    };
    return colors[valor] || "#6b7280";
  };

     const openWhatsApp = () => {
     const whatsappMessage = `Hola, mi nombre es ${formData.nombre}. Me gustaría obtener información sobre seguros. Mi teléfono es ${formData.telefono} y mi correo es ${formData.email}. Mensaje: ${formData.mensaje}`;
     window.open(`https://wa.me/527224447736?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
   };

  return (
    <>
      {/* === ESTILOS GLOBALES === */}
<style>
  {`
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=30') center/cover no-repeat fixed;
      background-color: #0056b3;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .page-content {
      background: transparent;
      min-height: 100vh;
      position: relative;
      z-index: 1;
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `}
</style>

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="page-content">
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {/* Logo BASYC */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={require("./assets/brand/basyc-logo.png")}
                alt="BASYC Seguros & Fianzas"
                style={{
                  height: '144px',
                  maxWidth: '220px',
                  objectFit: 'contain'
                }}
              />
              <div>
                <h1 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: 0
                }}>BASYC</h1>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: '0.25rem 0 0',
                  fontWeight: '500'
                }}>Seguros & Fianzas</p>
              </div>
            </div>

            {/* Menú */}
            <nav style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              {["Inicio", "Valores", "Servicios", "Aseguradoras", "Nosotros", "Contacto"].map((tab) => (
  <button
    key={tab}
    onClick={() => scrollToSection(tab.toLowerCase())}
    style={{
      fontSize: '1rem',
      fontWeight: '500',
      color: activeTab === tab.toLowerCase() ? '#0056b3' : '#4b5563',
      backgroundColor: activeTab === tab.toLowerCase() ? '#e0f2fe' : 'transparent',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      padding: '0.5rem 0.875rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    }}
  >
    {tab}
  </button>
))}

{/* Botones especiales: Cotizador y Acceso a Clientes */}
<button
  onClick={() => {
    setActiveTab("under-construction");
    scrollToSection("under-construction");
  }}
  style={{
    fontSize: '1rem',
    fontWeight: '600',
    color: activeTab === "under-construction" ? '#0056b3' : '#0056b3',
    backgroundColor: '#f0f9ff',
    border: '1px solid #bae6fd',
    borderRadius: '0.5rem',
    padding: '0.5rem 0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap'
  }}
>
  Cotizador
</button>

<button
  onClick={() => {
    setActiveTab("under-construction");
    scrollToSection("under-construction");
  }}
  style={{
    fontSize: '1rem',
    fontWeight: '600',
    color: '#0056b3',
    backgroundColor: '#fef3c7',
    border: '1px solid #f59e0b',
    borderRadius: '0.5rem',
    padding: '0.5rem 0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap'
  }}
>
  Acceso a Clientes
</button>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="inicio" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#1f2937',
          position: 'relative'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              BASYC: Tu aliado en <span style={{ color: '#0056b3' }}>seguridad</span>, <span style={{ color: '#10b981' }}>armonía</span>, <span style={{ color: '#f59e0b' }}>confianza</span> y <span style={{ color: '#8b5cf6' }}>paz</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              color: '#4b5563',
              maxWidth: '768px',
              margin: '0 auto'
            }}>
              Soluciones integrales de seguros y fianzas que protegen lo que más te importa. Tranquilidad y protección para tu vida, familia y negocio.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => scrollToSection("servicios")}
                style={{
                  backgroundColor: '#0056b3',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'semibold',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Conoce nuestros servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                style={{
                  border: '2px solid #0056b3',
                  color: '#0056b3',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'semibold',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                Cotiza ahora
              </button>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section id="valores" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Nuestros Valores Fundamentales
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '768px', margin: '0 auto' }}>
                En BASYC, cada decisión que tomamos está guiada por estos cuatro pilares que definen quiénes somos y cómo servimos a nuestros clientes.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {valores.map((v, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}>
                  <div style={{ height: '12rem', position: 'relative' }}>
                    <img src={v.fondo} alt={v.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,86,179,0.7), rgba(0,86,179,0.9))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ textAlign: 'center', color: 'white' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{v.icono}</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{v.nombre}</h3>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{v.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Nuestros Servicios
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '768px', margin: '0 auto' }}>
                Ofrecemos soluciones de seguros y fianzas personalizadas que reflejan nuestros valores fundamentales.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {servicios.map((s, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    height: '12rem',
                    backgroundColor: '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '4rem' }}>{s.icono}</span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>{s.icono}</span>
                      <div style={{
                        backgroundColor: getValorColor(s.valor),
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: 'medium'
                      }}>
                        {s.valor}
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                      {s.titulo}
                    </h3>
                    <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{s.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aseguradoras */}
        <section id="aseguradoras" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Nuestras Aseguradoras Asociadas
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '768px', margin: '0 auto' }}>
                Trabajamos con las principales compañías aseguradoras del país para ofrecerte las mejores coberturas y condiciones.
              </p>
            </div>

            {/* Marquee de logos */}
            <div style={{
              backgroundColor: '#f3f4f6',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                animation: 'marquee 30s linear infinite'
              }}>
                {aseguradoras.map((a) => (
                  <div
                    key={a.id}
                    style={{
                      flexShrink: 0,
                      margin: '0 2rem',
                      opacity: selectedAseguradora?.id === a.id ? 1 : 0.8,
                      transform: selectedAseguradora?.id === a.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedAseguradora(a)}
                  >
                    <img
                      src={a.logo}
                      alt={a.nombre}
                      style={{
                        height: '5rem',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
                {/* Duplicado para bucle infinito */}
                {aseguradoras.map((a) => (
                  <div
                    key={`copy-${a.id}`}
                    style={{
                      flexShrink: 0,
                      margin: '0 2rem',
                      opacity: selectedAseguradora?.id === a.id ? 1 : 0.8,
                      transform: selectedAseguradora?.id === a.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedAseguradora(a)}
                  >
                    <img
                      src={a.logo}
                      alt={a.nombre}
                      style={{
                        height: '5rem',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {!selectedAseguradora && (
              <div style={{
                textAlign: 'center',
                padding: '3rem 0',
                color: '#6b7280',
                fontSize: '1.125rem'
              }}>
                👉 Selecciona una aseguradora para ver más detalles
              </div>
            )}

            {selectedAseguradora && (
              <div style={{
                backgroundColor: 'rgba(199, 210, 254, 0.3)',
                borderRadius: '1rem',
                padding: '2rem',
                marginTop: '2rem',
                border: '1px solid #bfdbfe',
                textAlign: 'center'
              }}>
                <img
                  src={selectedAseguradora.logo}
                  alt={selectedAseguradora.nombre}
                  style={{
                    height: '6rem',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937'
                }}>
                  {selectedAseguradora.nombre}
                </h3>
                <p style={{
                  color: '#4b5563',
                  lineHeight: 1.6
                }}>
                  {selectedAseguradora.descripcion}
                </p>
              </div>
            )}
          </div>
        </section>

{/* Under Construction Section */}
<section id="under-construction" style={{ display: activeTab === "under-construction" ? "block" : "none" }}>
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: '2rem',
    textAlign: 'center'
  }}>
    <div style={{
      maxWidth: '600px',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚧</div>
      <h1 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
        En construcción
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
        Estamos desarrollando el Cotizador interactivo y el Portal de Clientes. Pronto estarán disponibles.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <span style={{ background: '#e0f2fe', color: '#0056b3', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem' }}>
          📅 Lanzamiento estimado: Q2 2026
        </span>
        <span style={{ background: '#fef3c7', color: '#92400e', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem' }}>
          📞 ¿Necesitas cotización urgente?  
          <a href="tel:+525555555555" style={{ color: '#92400e', fontWeight: 'bold' }}>Llámanos</a>
        </span>
      </div>
      <p style={{ marginTop: '2rem', color: '#6b7280', fontStyle: 'italic' }}>
        Gracias por confiar en BASYC — tu seguridad es nuestra prioridad.
      </p>
    </div>
  </div>
</section>


        {/* Nosotros */}
        <section id="nosotros" style={{
          padding: '5rem 0',
          background: 'linear-gradient(to bottom, #dbeafe, #e0f2fe)',
          color: 'black'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Quiénes Somos
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '768px', margin: '0 auto', lineHeight: 1.6 }}>
                En <strong>BASYC</strong>, somos más que una correduría de seguros. Somos tu aliado estratégico en protección, con más de 15 años de experiencia ayudando a personas, familias y empresas.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {[
                { valor: "15+", texto: "Años de experiencia" },
                { valor: "5000+", texto: "Clientes satisfechos" },
                { valor: "8", texto: "Aseguradoras asociadas" },
                { valor: "100%", texto: "Satisfacción garantizada" }
              ].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: ['#0056b3', '#4CAF50', '#FF9800', '#9C27B0'][i],
                    marginBottom: '0.5rem'
                  }}>
                    {item.valor}
                  </div>
                  <div style={{ color: '#4b5563', fontWeight: 'medium' }}>
                    {item.texto}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button
                onClick={() => scrollToSection("contacto")}
                style={{
                  backgroundColor: '#0056b3',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'semibold',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Cotiza con nosotros
              </button>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Contáctanos
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '768px', margin: '0 auto' }}>
                Estamos aquí para ayudarte. Cotiza tu seguro o fianza sin compromiso y recibe asesoría personalizada.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div style={{ backgroundColor: '#f3f4f6', borderRadius: '0.75rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                  Envíanos un mensaje
                </h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre completo"
                    required
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo electrónico"
                    required
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem'
                    }}
                  />
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    required
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem'
                    }}
                  />
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Cuéntanos sobre tus necesidades..."
                    required
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#0056b3',
                      color: 'white',
                      padding: '0.75rem 0',
                      borderRadius: '0.375rem',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                  Otras formas de contacto
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    borderRadius: '0.75rem',
                    cursor: 'pointer'
                  }} onClick={openWhatsApp}>
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      marginRight: '1rem'
                    }}>
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67-.001-.198.15-.794.966-.966 1.164-.173.199-.347.223-.62.124-.272-.1-.966-.356-1.828-.966-.653-.472-1.089-1.001-1.458-1.58-.361-.567-.176-1.066.025-1.515.188-.42.399-.9-.1-.9-.486-.001-.83.459-1.038.65-.207.19-.793.965-1.164 1.164-.173.199-.347.248-.571.124-.226-.124-1.04-1.248-1.41-2.373-.362-1.11-.15-2.038.025-2.864.175-.81.87-2.115 1.258-2.865.396-.764.787-1.227 1.177-1.828.381-.588.851-.43 1.362-.37.508.06 1.588.399 3.091 1.227 1.5.81 2.486 2.486 2.661 2.661.175.175.025.45-.1.65-.126.199-.5.374-.966.624-.463.25-.966.499-1.091.748-.126.25-.001.499.175.748s.424.523.773.872c.35.348.773.722.972.995.199.274.374.199.723.025.35-.175.995-.924 1.17-1.099.173-.174.372-.099.621.025.25.124 1.174.923 1.423.1172.25.25.499.374.674.573.175.199.274.348.399.523.126.175.051.324-.025.499-.075.175-.67 1.573-1.04 2.096-.374.524-.698.449-.947.449z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>WhatsApp</p>
                      <p>+527224447736</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      marginRight: '1rem'
                    }}>
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Correo</p>
                      <p>fb@basyc.com</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      marginRight: '1rem'
                    }}>
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Dirección</p>
                      <p>Jaime Balmes, Col. Polanco<br />Ciudad de México, C.P. 11520</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      marginRight: '1rem'
                    }}>
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12s-4.48-10-9.99-10zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Horario</p>
                      <p>Lunes a Viernes: 9:00 - 18:00<br />Sábado: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '3rem 0'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <img
                    src={require("./assets/brand/basyc-logo.png")}
                    alt="BASYC"
                    style={{ height: '60px', marginRight: '0.75rem' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>BASYC</h3>
                    <p style={{ color: '#93c5fd' }}>Seguros & Fianzas</p>
                  </div>
                </div>
                <p style={{
                  color: '#d1d5db',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  Tu aliado estratégico en protección con más de 15 años de experiencia.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Servicios</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {["Seguro de Daños", "Seguro de Automóvil", "Seguro de Vida", "Seguro de Salud", "Fianzas"].map((s) => (
                    <li key={s} style={{ marginBottom: '0.5rem' }}>
                      <button
                        onClick={() => scrollToSection("servicios")}
                        style={{
                          color: '#d1d5db',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          width: '100%'
                        }}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contacto</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#d1d5db' }}>
                  <li>contacto@basyc.com</li>
                  <li>+52 722 4447736</li>
                  <li>Jaime Balmes, CDMX</li>
                  <li>Lun-Vie: 9:00-18:00</li>
                </ul>
              </div>
            </div>
            <div style={{
              borderTop: '1px solid #374151',
              paddingTop: '1.5rem',
              textAlign: 'center',
              color: '#9ca3af'
            }}>
              <p>&copy; 2024 BASYC Seguros & Fianzas. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

//        {/* Botón WhatsApp flotante */}
////        <button
//          onClick={openWhatsApp}
//          style={{
//            position: 'fixed',
//            bottom: '2rem',
//            right: '2rem',
 //           backgroundColor: '#25D366',
 //           color: 'white',
//            width: '60px',
//            height: '60px',
//            borderRadius: '50%',
//            display: 'flex',
//            alignItems: 'center',
//            justifyContent: 'center',
//            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
//            border: 'none',
//            cursor: 'pointer',
//            zIndex: 1000,
//            transition: 'all 0.3s ease',
//            animation: 'float 6s ease-in-out infinite'
//          }}
        >
          <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67-.001-.198.15-.794.966-.966 1.164-.173.199-.347.223-.62.124-.272-.1-.966-.356-1.828-.966-.653-.472-1.089-1.001-1.458-1.58-.361-.567-.176-1.066.025-1.515.188-.42.399-.9-.1-.9-.486-.001-.83.459-1.038.65-.207.19-.793.965-1.164 1.164-.173.199-.347.248-.571.124-.226-.124-1.04-1.248-1.41-2.373-.362-1.11-.15-2.038.025-2.864.175-.81.87-2.115 1.258-2.865.396-.764.787-1.227 1.177-1.828.381-.588.851-.43 1.362-.37.508.06 1.588.399 3.091 1.227 1.5.81 2.486 2.486 2.661 2.661.175.175.025.45-.1.65-.126.199-.5.374-.966.624-.463.25-.966.499-1.091.748-.126.25-.001.499.175.748s.424.523.773.872c.35.348.773.722.972.995.199.274.374.199.723.025.35-.175.995-.924 1.17-1.099.173-.174.372-.099.621.025.25.124 1.174.923 1.423.1172.25.25.499.374.674.573.175.199.274.348.399.523.126.175.051.324-.025.499-.075.175-.67 1.573-1.04 2.096-.374.524-.698.449-.947.449z"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
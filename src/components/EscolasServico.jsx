import ReusableCard from './ReusableCard';
import './EscolasServico.css';

const EscolasServico = () => {
  // Array com as escolas específicas solicitadas
  const escolas = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      title: "Aldeia Nova",
      horario: { semana: "08:00 - 18:00", sabado: "09:00 - 17:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Atividades de Enriquecimento Curricular", "Apoio ao Estudo", "Atividades Desportivas"],
      morada: "Aldeia Nova, Santa Maria da Feira",
      mapsQuery: "Aldeia+Nova,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2046&q=80",
      title: "Casalmeão",
      horario: { semana: "07:30 - 18:30", sabado: "09:00 - 16:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Atividades Artísticas", "Inglês para Crianças", "Educação Ambiental"],
      morada: "Casalmeão, Santa Maria da Feira",
      mapsQuery: "Casalmeão,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
      title: "Sérgio Ribeiro - PT",
      horario: { semana: "08:00 - 17:30", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Música e Expressão", "Tecnologias Educativas", "Clube de Ciências"],
      morada: "Sérgio Ribeiro, Santa Maria da Feira",
      mapsQuery: "Sérgio+Ribeiro,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Prime - PT",
      horario: { semana: "08:00 - 18:00", sabado: "09:00 - 15:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Desporto Escolar", "Teatro e Drama", "Robótica"],
      morada: "Prime, Santa Maria da Feira",
      mapsQuery: "Prime,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      title: "Aldriz",
      horario: { semana: "07:45 - 18:15", sabado: "08:30 - 16:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Expressão Plástica", "Natação", "Xadrez"],
      morada: "Aldriz, Santa Maria da Feira",
      mapsQuery: "Aldriz,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581092335878-09d9dd6c2fff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "S.Domingos - PT",
      horario: { semana: "08:00 - 17:45", sabado: "09:00 - 17:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Educação Musical", "Ginástica", "Atividades Manuais"],
      morada: "São Domingos, Santa Maria da Feira",
      mapsQuery: "São+Domingos,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Souto Nogueira",
      horario: { semana: "08:15 - 18:00", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Futebol", "Pintura", "Laboratório de Ciências"],
      morada: "Souto Nogueira, Santa Maria da Feira",
      mapsQuery: "Souto+Nogueira,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Carvalhal",
      horario: { semana: "07:30 - 18:30", sabado: "08:00 - 16:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Ballet", "Informática", "Horticultura"],
      morada: "Carvalhal, Santa Maria da Feira",
      mapsQuery: "Carvalhal,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      title: "Bairro - PT",
      horario: { semana: "08:00 - 17:30", sabado: "09:00 - 15:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Karaté", "Coro Infantil", "Origami"],
      morada: "Bairro, Santa Maria da Feira",
      mapsQuery: "Bairro,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
      title: "Outeiro Arrifana - PT",
      horario: { semana: "07:45 - 18:15", sabado: "08:30 - 17:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Voleibol", "Cerâmica", "Programação"],
      morada: "Outeiro Arrifana, Santa Maria da Feira",
      mapsQuery: "Outeiro+Arrifana,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2046&q=80",
      title: "Pigeiros",
      horario: { semana: "08:00 - 18:00", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Basquetebol", "Dança Moderna", "Culinária"],
      morada: "Pigeiros, Santa Maria da Feira",
      mapsQuery: "Pigeiros,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
      title: "Canedo - PT",
      horario: { semana: "07:30 - 17:45", sabado: "09:00 - 16:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Ténis de Mesa", "Fotografia", "Jardinagem"],
      morada: "Canedo, Santa Maria da Feira",
      mapsQuery: "Canedo,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Avenida - PT",
      horario: { semana: "08:15 - 18:30", sabado: "08:00 - 15:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Andebol", "Escultura", "Astronomia"],
      morada: "Avenida, Santa Maria da Feira",
      mapsQuery: "Avenida,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      title: "Chão do Rio",
      horario: { semana: "08:00 - 17:30", sabado: "09:30 - 16:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Atletismo", "Bordados", "Química Divertida"],
      morada: "Chão do Rio, Santa Maria da Feira",
      mapsQuery: "Chão+do+Rio,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1581092335878-09d9dd6c2fff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Caldelas - PT",
      horario: { semana: "07:45 - 18:00", sabado: "08:30 - 17:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Judo", "Banda Musical", "Reciclagem Criativa"],
      morada: "Caldelas, Santa Maria da Feira",
      mapsQuery: "Caldelas,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Vendas Novas",
      horario: { semana: "08:00 - 18:15", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Ciclismo", "Artesanato", "Matemática Lúdica"],
      morada: "Vendas Novas, Santa Maria da Feira",
      mapsQuery: "Vendas+Novas,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Gião - PT",
      horario: { semana: "07:30 - 17:45", sabado: "09:00 - 15:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Badminton", "Ilustração", "Experiências"],
      morada: "Gião, Santa Maria da Feira",
      mapsQuery: "Gião,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      title: "Igreja Lobão - PT",
      horario: { semana: "08:15 - 18:00", sabado: "08:00 - 16:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Escalada", "Moldagem", "Língua Gestual"],
      morada: "Igreja Lobão, Santa Maria da Feira",
      mapsQuery: "Igreja+Lobão,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
      title: "Louredo - PT",
      horario: { semana: "08:00 - 17:30", sabado: "09:30 - 17:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Orientação", "Tecelagem", "Biologia"],
      morada: "Louredo, Santa Maria da Feira",
      mapsQuery: "Louredo,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2046&q=80",
      title: "Póvoa Vale",
      horario: { semana: "07:45 - 18:15", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Patinagem", "Mosaicos", "Geografia"],
      morada: "Póvoa Vale, Santa Maria da Feira",
      mapsQuery: "Póvoa+Vale,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
      title: "Badoucos",
      horario: { semana: "08:00 - 18:00", sabado: "08:30 - 16:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Rugby", "Gravura", "História Local"],
      morada: "Badoucos, Santa Maria da Feira",
      mapsQuery: "Badoucos,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Espargo",
      horario: { semana: "07:30 - 17:45", sabado: "09:00 - 15:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Esgrima", "Vitrais", "Física Divertida"],
      morada: "Espargo, Santa Maria da Feira",
      mapsQuery: "Espargo,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 23,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      title: "Feira 1",
      horario: { semana: "08:15 - 18:30", sabado: "08:00 - 17:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Tiro com Arco", "Ourivesaria", "Ecologia"],
      morada: "Feira 1, Santa Maria da Feira",
      mapsQuery: "Feira+1,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 24,
      image: "https://images.unsplash.com/photo-1581092335878-09d9dd6c2fff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Feira 2",
      horario: { semana: "08:00 - 17:30", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Equitação", "Cerâmica Artística", "Meteorologia"],
      morada: "Feira 2, Santa Maria da Feira",
      mapsQuery: "Feira+2,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 25,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Milheiros da Feira",
      horario: { semana: "07:45 - 18:00", sabado: "09:00 - 16:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Tiro", "Joalharia", "Paleontologia"],
      morada: "Milheiros da Feira, Santa Maria da Feira",
      mapsQuery: "Milheiros+da+Feira,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 26,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Outeiro Travanca",
      horario: { semana: "08:00 - 18:15", sabado: "08:30 - 15:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Hipismo", "Esmaltes", "Arqueologia"],
      morada: "Outeiro Travanca, Santa Maria da Feira",
      mapsQuery: "Outeiro+Travanca,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 27,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      title: "Lamas 3",
      horario: { semana: "07:30 - 17:45", sabado: "09:30 - 17:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Polo Aquático", "Tapeçaria", "Geologia"],
      morada: "Lamas 3, Santa Maria da Feira",
      mapsQuery: "Lamas+3,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 28,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
      title: "Lamas 1",
      horario: { semana: "08:15 - 18:00", sabado: "Encerrado" },
      modalidades: ["CAF - Componente de Apoio à Família", "Vela", "Marcenaria", "Botânica"],
      morada: "Lamas 1, Santa Maria da Feira",
      mapsQuery: "Lamas+1,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 29,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2046&q=80",
      title: "Outeiro Rio Meão",
      horario: { semana: "08:00 - 17:30", sabado: "08:00 - 16:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Remo", "Vitral Artístico", "Mineralogia"],
      morada: "Outeiro Rio Meão, Santa Maria da Feira",
      mapsQuery: "Outeiro+Rio+Meão,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 30,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
      title: "Aldeia Sanfins",
      horario: { semana: "07:45 - 18:15", sabado: "09:00 - 15:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Surf", "Forja Artística", "Zoologia"],
      morada: "Aldeia Sanfins, Santa Maria da Feira",
      mapsQuery: "Aldeia+Sanfins,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 31,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Cavaco - PT",
      horario: { semana: "08:00 - 18:00", sabado: "08:30 - 16:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Taekwondo", "Cerâmica", "Inglês Avançado"],
      morada: "Cavaco, Santa Maria da Feira",
      mapsQuery: "Cavaco,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 32,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      title: "S.J.Ver - PT",
      horario: { semana: "07:30 - 17:45", sabado: "09:00 - 15:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Ginástica Rítmica", "Pintura em Tela", "Robótica Avançada"],
      morada: "São João de Ver, Santa Maria da Feira",
      mapsQuery: "São+João+de+Ver,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 33,
      image: "https://images.unsplash.com/photo-1581092335878-09d9dd6c2fff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Souto Redondo - PT",
      horario: { semana: "08:15 - 18:30", sabado: "08:00 - 16:30" },
      modalidades: ["CAF - Componente de Apoio à Família", "Natação", "Artesanato em Madeira", "Ciências Naturais"],
      morada: "Souto Redondo, Santa Maria da Feira",
      mapsQuery: "Souto+Redondo,+Santa+Maria+da+Feira,+Portugal"
    },
    {
      id: 34,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Fornos - PT",
      horario: { semana: "08:00 - 17:30", sabado: "09:30 - 17:00" },
      modalidades: ["CAF - Componente de Apoio à Família", "Futebol", "Teatro Musical", "Matemática Divertida"],
      morada: "Fornos, Santa Maria da Feira",
      mapsQuery: "Fornos,+Santa+Maria+da+Feira,+Portugal"
    }
  ];

  return (
    <section className="">
      <div className="">
        <h2 className="escolas-servico-title">Escolas onde Realizamos o Nosso Serviço</h2>
        <p className="escolas-servico-subtitle">
          Prestamos apoio educativo e de férias em 34 instituições de ensino por toda a região, 
          garantindo qualidade, proximidade e diversidade de atividades às famílias.
        </p>
        
        <div className="escolas-servico-grid">
          {escolas.map((escola) => (
            <ReusableCard
              key={escola.id}
              image={escola.image}
              title={escola.title}
              description={
                <div className="escola-info">
                  <div className="horario-section">
                    <h4>Horário de Funcionamento:</h4>
                    <p>Segunda a Sexta: {escola.horario.semana}</p>
                    <p>Sábados: {escola.horario.sabado}</p>
                  </div>
                  
                  <div className="morada-section">
                    <a 
                      href={`https://maps.google.com/maps?q=${escola.mapsQuery}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="google-maps-btn"
                    >
                      Google Maps
                    </a>
                  </div>
                </div>
              }
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default EscolasServico;

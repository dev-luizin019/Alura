import { Cards } from "../cards/cards";
import "./main.style.css";

export function Main() {
  const projects = [
    {
        id:1,
      title: "Isee Replay",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_67NqQqFhdHvRalO2CMp6GM9sRwuzu3GJow&s",
      content:
        "O proejto de replay mais simples e rápido do mercado, assista e baixe seu replay de forma simples e poste em susa redes sociais",
      date: new Date("05/04/2026").toLocaleDateString("pt-br"),
    },
    {
        id:2,
      title: "Marketing que vende",
      imgUrl:
        "https://img.freepik.com/vetores-premium/ilustracao-de-marketing-digital_112255-2905.jpg?semt=ais_hybrid&w=740&q=80",
      content:
        "O proejto de replay mais simples e rápido do mercado, assista e baixe seu replay de forma simples e poste em susa redes sociais",
      date: new Date("03/31/2026").toLocaleDateString("pt-br"),
    },
    {
        id:3,
      title: "Cripto Marketing",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6iEAzO50l3R_l61orvhAWMlFt54NrFCbeA&s",
      content:
        "O proejto de replay mais simples e rápido do mercado, assista e baixe seu replay de forma simples e poste em susa redes sociais",
      date: new Date("06/20/2026").toLocaleDateString("pt-br"),
    },
  ];

  return (
    <section className="main">
      <div>
        <span>Code Mine</span>
      </div>
      <div>
        <span>Projetos</span>
      </div>
      <div className="cards-content">
        {projects.map((item) => {
          return (
            <Cards
            key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              content={item.content}
              date={item.date}
            ></Cards>
          );
        })}
      </div>
    </section>
  );
}

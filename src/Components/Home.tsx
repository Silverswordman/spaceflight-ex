import { useEffect, useState } from "react";
import { Infos } from "../Interfaces/Infos";
import SpaceCard from "./Singlecard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [news, setNews] = useState<Infos[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore recupero dati");
        }
      })
      .then((data) => {
        console.log(data, "controllo dati");
        setNews(data.results);
      })
      .catch((error) => {
        console.log("errore", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {news.map((card) => (
          <SpaceCard key={card.id} Infos={card} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;

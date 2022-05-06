import { useEffect, useState } from "react";
import Card from "./components/Card";
import peliculas from "./services/peliculas";
import "./styles.css";
import styled from "styled-components";
import Search from "./components/Search";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
const Home = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cabecera = styled.h1`
  text-transform: uppercase;
  color: #ffd86f;
`;

const App = () => {
  const [pelis, setPelis] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  function mostrarPelis() {
    peliculas.get().then((resp) => {
      setPelis(resp.data.results);
    });
  }

  function handleSearch(value) {
    if (!value) {
      setBusqueda([]);
      return;
    }
    const pelisFiltradas = pelis.filter((peli) =>
      peli.title.toLowerCase().includes(value.toLowerCase())
    );
    setBusqueda(pelisFiltradas);
    console.log(value);
  }
  useEffect(() => {
    mostrarPelis();
  });

  return (
    <div className="App">
      <Home>
        <Cabecera>pelis estreno</Cabecera>
        <Search search={handleSearch} busqueda={busqueda} />
        <Container>
          {pelis.map((pelicula) => {
            return <Card {...pelicula} />;
          })}
        </Container>
      </Home>
    </div>
  );
};
export default App;

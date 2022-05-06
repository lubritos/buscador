import styled from "styled-components";
import { search } from "superagent";

const Buscador = styled.div`
  width: 100%;
  height: 3rem;
`;
const Listado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 14rem;
  height: 100%;
  max-height: 20rem;
  margin: 1rem;
`;
const Input = styled.input`
  width: 75%;
  height: 1.5rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = ({ search, busqueda }) => {
  function handleChange(event) {
    search(event.target.value);
  }

  return (
    <Buscador>
      <Input type="text" placeholder="Search" onChange={handleChange} />
      {busqueda && <Listado>{busqueda.map((peli) => peli.title)}</Listado>}
    </Buscador>
  );
};
export default Search;

import styled from "styled-components";
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #7c538c;
`;
const CardPeli = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const ImgCard = styled.img`
  border-radius: 10px;
  margin: 1rem;
`;

const Card = ({ title, poster_path, release_date }) => {
  return (
    <CardPeli>
      <ImgCard
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        width={150}
      />
      <Title>{title.substr(0, 12)}</Title>
      <p>{release_date}</p>
    </CardPeli>
  );
};
export default Card;

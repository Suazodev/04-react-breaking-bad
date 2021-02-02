import styled from '@emotion/styled';

const SCPhrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    font-weight: bold;
    margin-top: 2rem;
  }
`;

const Phrase = ({ phrase }) => {
  const { author, quote } = phrase;
  return (
    <SCPhrase>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </SCPhrase>
  );
};

export default Phrase;

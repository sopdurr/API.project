import styled from 'styled-components';

const Submit= styled.button`
  margin: 10px;
  width: 240px;
  height: 40px;
  font-weight: 10em;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  background-color: palevioletred;
  color: papayawhip;
`;



const Button = ({ onAdd }) => {
  return (
    <Submit type='submit' onClick={onAdd}>
      Add
    </Submit>
  );
};

export default Button;
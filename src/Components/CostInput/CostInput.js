import styled from 'styled-components';

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const CostInput = ({ cost, onChange }) => {
  return (
    <div>
      <Input
        type='number'
        value={cost}
        placeholder='Number'
        onChange={onChange}
      />
    </div>
  );
};

export default CostInput;

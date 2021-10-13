import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, CostInput, NameInput, TheList } from './Components';

import './App.css';

const Wrapper = styled.div`
  display: inline-block;
  border: 2px solid white;
  height: 300px;
  width: 260px;
  border-radius: 5px;
  margin: 20px 0px 0px 10px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TheSum = styled.div`
  margin-left: 10px;
  color: papayawhip;
`;

function App() {
  const [product, setProduct] = useState([]);
  const data = {
    cost: '',
    sum: '',
    name: '',
  };
  const [state, setState] = useState(data);
  const { cost, sum, name } = state;

  const clearInputs = () => {
    setState({
      ...state,
      cost: '',
      name: '',
    });
  };

  // Þegar ég er að reikna út heildartöluna, þá er functionið alltaf einu skrefi á eftir!
  // hvernig væri betra að gera þettta ??

  const getSum = () => {
    const result = product.reduce((total, curr) => total + curr.cost, 0);
    setState({ ...state, sum: result });
  };

  const getProduct = async () => {
    const result = await axios.get('http://localhost:4000/api/expenses');
    setProduct(result.data);
    clearInputs();
    getSum();
  };

  const addTo = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      'http://localhost:4000/api/create-expense',
      {
        name,
        cost,
      }
    );
    getSum();
    getProduct();
  };

  const handleChange = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const changeNumber = (event) => {
    setState({
      ...state,
      cost: parseInt(event.target.value),
    });
  };

  const removeExpense = async (id) => {
    const result = await axios.delete(
      `http://localhost:4000/api/expense/${id}`
    );
    getProduct();
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Center>
      <Wrapper>
        <NameInput name={name} onChange={handleChange} />
        <CostInput cost={cost} onChange={changeNumber} />
        <Button onAdd={addTo} />
        <TheSum>
          <div>Amount: {sum}</div>
          <div>List Lenght: {product.length}</div>
        </TheSum>
      </Wrapper>
      <TheList list={product} onClick={removeExpense} />
    </Center>
  );
}

export default App;

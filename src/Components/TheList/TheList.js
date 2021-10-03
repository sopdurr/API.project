import styled from 'styled-components';

const ListContainer = styled.ul`
  border: 2px solid white;
  height: 300px;
  width: 230px;
  border-radius: 5px;
  margin: 20px 0px 0px 10px;
  list-style-type: none;
  overflow: hidden;
  overflow-y: scroll;
`;
const UnLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  margin: 10px;
  border-bottom: 2px solid papayawhip;
  min-width: 50px;
  height: 30px;
  color: palevioletred;
  border-radius: 5px;
  animation-name: list;
  animation-duration: 4s;
  @keyframes list {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ButtonX = styled.button`
  height: 20px;
  width: 25px;
  font-weight: 10em;
  margin-right: 5px;
  border: none;
  border-radius: 3px;
  background-color: palevioletred;
  color: papayawhip;
`;

const TheList = ({ list, onClick, }) => {
  return (
    <ListContainer>
      {list.map((item, index) => (
        <UnLi key={item.id}>
          {index + 1}. {item.name} {item.cost} {' '}
          <ButtonX type='submit' onClick={() => onClick(item.id)}>
            X
          </ButtonX>
        </UnLi>
      ))}
    </ListContainer>
  );
};

export default TheList;

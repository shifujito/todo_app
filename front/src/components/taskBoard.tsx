import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../types';
import AddBoard from './addBoard';
import { Text, Flex, Box } from '@chakra-ui/react';
import TaskCard from './taskCard';

const TaskBoard: React.FC = () => {
  const [cardList, setCardList] = useState<Card[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/cards', {})
      .then((res) => {
        setCardList(res.data);
      })
      .catch(() => {
        axios.get('http://localhost:8888/cards', {}).then((res) => {
          setCardList(res.data);
        });
      });
  }, []);

  return (
    <Flex>
      {cardList.map((card: Card) => (
        <Box
          key={card.id}
          width={'320px'}
          backgroundColor={'green'}
          margin={'10px'}
        >
          <Text>{card.title}</Text>
          <TaskCard cardId={card.id} />
        </Box>
      ))}
      <Box>
        <AddBoard />
      </Box>
    </Flex>
  );
};

export default TaskBoard;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, PostCard } from '../types';
import AddBoard from './addBoard';
import { Text, Flex, Box } from '@chakra-ui/react';
import TaskCard from './taskCard';
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const useTaskBoard = () => {
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

  const handleAddBoard = (newBoard: PostCard) => {
    axios.post('http://localhost:8080/cards', newBoard).then((res) => {
      console.log(res);
      setCardList([...cardList, res.data]);
    });
  };

  const handleDeleteBoard = (boardId: number) => () => {
    axios.delete(`http://localhost:8080/cards/${boardId}`).then(() => {
      const newCardList = cardList.filter((card) => card.id !== boardId);
      setCardList(newCardList);
    });
  };

  return { cardList, handleAddBoard, handleDeleteBoard };
};
const TaskBoard: React.FC = () => {
  const { cardList, handleAddBoard, handleDeleteBoard } = useTaskBoard();
  return (
    <Flex>
      {cardList.map((card: Card) => (
        <Box
          key={card.id}
          width={'320px'}
          backgroundColor={'green'}
          margin={'10px'}
        >
          <Text fontSize={'lg'}>{card.title}</Text>
          <IconButton
            aria-label="delete card"
            icon={<DeleteIcon />}
            color="red.500"
            onClick={handleDeleteBoard(card.id)}
          />
          <TaskCard cardId={card.id} />
        </Box>
      ))}
      <Box>
        <AddBoard onAddCard={handleAddBoard} />
      </Box>
    </Flex>
  );
};

export default TaskBoard;

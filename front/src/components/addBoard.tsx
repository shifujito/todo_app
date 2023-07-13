import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { PostCard } from '../types';

type AddBoardProps = {
  onAddCard: (newCard: PostCard) => void;
};

const AddBoard: React.FC<AddBoardProps> = ({ onAddCard }) => {
  const [cardTitle, setCardTitle] = useState<string>('');

  const handleCardTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const handleAddCard = () => {
    const newCard: PostCard = {
      title: cardTitle,
    };
    onAddCard(newCard);
    setCardTitle('');
  };
  return (
    <Flex
      width={'320px'}
      direction="column"
      backgroundColor={'blue'}
      margin={'10px'}
    >
      <Input
        placeholder="リストを追加"
        value={cardTitle}
        onChange={handleCardTitleInput}
        margin={'10px'}
        width={'300px'}
        borderColor={'red'}
      />
      <Button
        width={'130px'}
        colorScheme="green"
        margin={'10px'}
        onClick={handleAddCard}
      >
        追加
      </Button>
    </Flex>
  );
};

export default AddBoard;

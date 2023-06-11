import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const AddBoard: React.FC = () => {
  const [cardTitle, setCardTitle] = useState<string>('');

  const handleCardTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };
  return (
    <Flex
      width={'320px'}
      direction="column"
      backgroundColor={'yellow'}
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
      <Button width={'130px'} colorScheme="green" margin={'10px'}>
        追加
      </Button>
    </Flex>
  );
};

export default AddBoard;

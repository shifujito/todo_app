import { Input, Flex, Center, Button } from '@chakra-ui/react';
import { useState } from 'react';

const AddTodoTitle: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <Flex>
      <Center>
        <Input
          placeholder="TODOを入力してください"
          value={todo}
          onChange={handelInput}
        />
        <Button colorScheme="blue">追加</Button>
      </Center>
    </Flex>
  );
};

export default AddTodoTitle;

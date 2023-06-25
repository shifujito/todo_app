import { Input, Flex, Center, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

type AddTodoTitleProps = {
  cardId: number;
};

const AddTodoTitle: React.FC<AddTodoTitleProps> = ({ cardId }) => {
  const [todo, setTodo] = useState<string>('');
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    axios
      .post('http://localhost:8080/todos', { title: todo, cardId: cardId })
      .then((res) => console.log(res));
  };

  return (
    <Flex>
      <Center>
        <Input
          placeholder="TODOを入力してください"
          value={todo}
          onChange={handelInput}
        />
        <Button colorScheme="blue" onClick={handleClick}>
          追加
        </Button>
      </Center>
    </Flex>
  );
};

export default AddTodoTitle;

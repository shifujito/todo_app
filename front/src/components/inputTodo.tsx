import { Input, Button, Flex, Text, Center } from "@chakra-ui/react";
import { useState } from "react";

const InputTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <Flex>
      <Center h="100px" paddingLeft="10px">
        <Input
          placeholder="TODOを入力してください"
          value={todo}
          onChange={handelInput}
        />
      </Center>
      <Center h="100px" paddingLeft="10px">
        <Button colorScheme="blue">追加</Button>
      </Center>
      <Center h="100px" paddingLeft="10px">
        <Text>{todo}</Text>
      </Center>
    </Flex>
  );
};

export default InputTodo;

import { Input, Button, Flex, Text, Center } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const InputTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const Today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(Today);
  const handleDateInput = (date: Date | null) => {
    setStartDate(date);
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
        <DatePicker selected={startDate} onChange={handleDateInput} />
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

import { Input, Button, Flex, Text, Center } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const InputTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const [startDate, setStartDate] = useState<Date | null>(null);
  const handleStartDateInput = (date: Date | null) => {
    setStartDate(date);
  };

  const [endDate, setEndDate] = useState<Date | null>(null);
  const handleEndDateInput = (date: Date | null) => {
    setEndDate(date);
  };
  return (
    <>
      <Flex>
        <Center>
          <Text width={"100px"}>タイトル</Text>
          <Input
            placeholder="TODOを入力してください"
            value={todo}
            onChange={handelInput}
          />
        </Center>
      </Flex>
      <Flex>
        <Center>
          <Text width={"100px"}>開始日</Text>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            locale="ja"
            selected={startDate}
            onChange={handleStartDateInput}
          />
        </Center>
      </Flex>
      <Flex>
        <Center>
          <Text width={"100px"}>期限</Text>
          <DatePicker selected={endDate} onChange={handleEndDateInput} />
        </Center>
      </Flex>
      <Flex>
        <Center h="100px" paddingLeft="10px">
          <Button colorScheme="blue">追加</Button>
        </Center>
        <Center h="100px" paddingLeft="10px">
          <Text>{todo}</Text>
        </Center>
      </Flex>
    </>
  );
};

export default InputTodo;

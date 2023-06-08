import { Input, Button, Flex, Text, Center, Textarea } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import InputTodoTitle from "./inputTodoTitle";

const InputTodo: React.FC = () => {
  const [todoContent, setTodoContent] = useState<string>("");
  const handelContentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoContent(e.target.value);
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
      <InputTodoTitle />
      <Flex>
        <Center>
          <Textarea
            placeholder="TODOを入力してください"
            value={todoContent}
            onChange={handelContentInput}
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
          <DatePicker
            dateFormat="yyyy/MM/dd"
            locale="ja"
            selected={endDate}
            onChange={handleEndDateInput}
          />
        </Center>
      </Flex>
      <Flex>
        <Center h="100px" paddingLeft="10px">
          <Button colorScheme="blue">追加</Button>
        </Center>
        <Center h="100px" paddingLeft="10px">
          {/* <Text>{todo}</Text> */}
        </Center>
      </Flex>
    </>
  );
};

export default InputTodo;

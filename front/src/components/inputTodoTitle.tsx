import { Input, Flex, Text, Center, Button } from "@chakra-ui/react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
} from "@chakra-ui/react";

const InputTodoTitle: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todo, setTodo] = useState<string>("");
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <Flex>
      <Center>
        <Input
          placeholder="TODOを入力してください"
          value={todo}
          onClick={onOpen}
          onChange={handelInput}
        />
        <Button colorScheme="blue">追加</Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>hoge</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default InputTodoTitle;

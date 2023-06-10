import React from "react";
import { Todo } from "../types";
import { Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
} from "@chakra-ui/react";

type TodoDetailProps = {
  todo: Todo;
};

const TodoDetail: React.FC<TodoDetailProps> = ({ todo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <li key={todo.id} onClick={onOpen}>
        {todo.title}
      </li>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>タイトル: {todo.title}</Text>
            <Text>内容: {todo.content}</Text>
            <Text>開始日: {todo.startDate}</Text>
            <Text>期日: {todo.endDate}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoDetail;

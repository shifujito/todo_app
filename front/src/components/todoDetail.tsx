import React, { useState } from 'react';
import { Todo } from '../types';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Text,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormLabel,
  Flex,
} from '@chakra-ui/react';

type TodoDetailProps = {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onSaveTodo: (updateTodo: Todo) => void;
};

const TodoDetail: React.FC<TodoDetailProps> = ({
  todo,
  onDeleteTodo,
  onSaveTodo,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>(todo.title);
  const [content, setContent] = useState<string>(todo.content);
  // const [startDate, setStartDate] = useState<Date>(todo.startDate);
  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  const handleSave = () => {
    // タイトルを更新
    todo.title = title;
    onSaveTodo(todo);
  };

  let isDragging = false;
  const handleDragStart = () => {
    isDragging = false;
  };

  // const handleStartDateInput = (date: any) => {
  //   setStartDate(date);
  // };
  return (
    <Flex
      bg={'gray'}
      width={'250px'}
      height={'100px'}
      margin={'10px'}
      borderRadius={'2xl'}
      onClick={onOpen}
      alignItems="center"
      cursor={'pointer'}
      draggable
      onDragStart={handleDragStart}
    >
      <Text key={todo.id} marginLeft={'10px'}>
        {todo.title}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex alignItems="center">
              <FormLabel htmlFor="title" width={'100px'}>
                タイトル
              </FormLabel>
              <Input id="title" value={title} onChange={handleTitleInput} />
            </Flex>
            <Flex alignItems="center">
              <FormLabel htmlFor="title" width={'100px'}>
                内容
              </FormLabel>
              <Textarea
                id="title"
                value={content}
                onChange={handleContentInput}
              />
            </Flex>
            <Flex alignItems="center"></Flex>
            {/* <DatePicker
              locale="ja"
              onChange={handleStartDateInput}
              value={startDate}
            /> */}
            {/* <Text>開始日: {startDate}</Text> */}
            <Text>期日: {todo.endDate}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleDelete}>
              削除
            </Button>
            <Button colorScheme="blue" marginLeft={'5px'} onClick={handleSave}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TodoDetail;

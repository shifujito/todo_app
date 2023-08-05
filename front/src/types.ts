export type Todo = {
  id: string;
  cardId: number;
  title: string;
  startDate: Date;
  endDate: string;
  content: string;
};

export type Card = {
  id: number;
  title: string;
};

export type PostTodo = {
  title: string;
  cardId: number;
};

export type UpdateTodo = {
  id: string;
  cardId: number;
  title: string;
  content: string;
};

export type PostCard = {
  title: string;
};

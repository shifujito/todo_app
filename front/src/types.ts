export type Todo = {
  id: number;
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

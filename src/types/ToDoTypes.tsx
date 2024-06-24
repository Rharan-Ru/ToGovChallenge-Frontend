export type ToDoItemStatus = "done" | "pending" | "canceled";

export type ToDoItem = {
  id: string;
  title: string;
  description: string;
  status: ToDoItemStatus;
  createdAt: string;
  updatedAt: string;
};

export type ToDoCardsProps = {
  listItems: ToDoItem[];
  handleRemoveToDo: (id: string) => void;
  handleEditToDo: (id: string, data: Partial<ToDoItem>) => void;
};

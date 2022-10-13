export type editTask = {
  done: boolean;
  title: string;
  id: number;
};

export type taskType = editTask[];

export type contextValueType = {
  tasks: taskType;
  addTask: (t: string) => void;
  deleteTask: (id: number) => void;
  edit: editTask | null;
  setEdit: (item: editTask) => void;
  setTask: React.Dispatch<React.SetStateAction<taskType>>;
};

export type ContextPropType = {
  children: React.ReactNode;
};

//PARTIAL TYPES

export type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type popupAct = {
  type: "DELETE" | "";
  payload: number;
};

//STATE TYPES

export type todoState = {
  todos: ToDo[];
  isLoading: boolean;
};

export type userState = {
  userId: number;
};

export type popupState = {
  message: string;
  confirm: boolean;
  isShown: boolean;
  popupAct: popupAct;
};

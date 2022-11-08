export interface Todo {
  id: number;
  name: string;
  completed: boolean;
  completedAt: Date;
}

export interface Meta {
  totalCount: number;
}

interface typeDataTodo {
  id: number;
  title: string;
  category: "Etude" | "Projet" | "Perso";
  priority: "Haute" | "Moyenne" | "Base";
  deadline: string; // format date ISO
  state?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type {
    typeDataTodo};
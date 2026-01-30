import type { typeDataTodo } from "../../types/typeDataTodo";
import { CheckCircle, Circle, Trash2, Pencil } from "lucide-react";
import dataTodo from "../../../data/dataTodo";

/**
 * Filtre les tâches selon la recherche (catégorie, priorité, titre, deadline)
 * @param todos Liste des tâches
 * @param search Texte de recherche
 */
function filterTodos(todos: typeDataTodo[], search: string): typeDataTodo[] {
  if (!search) return todos;
  const s = search.toLowerCase();
  return todos.filter(
    (t) =>
      t.title.toLowerCase().includes(s) ||
      t.category.toLowerCase().includes(s) ||
      t.priority.toLowerCase().includes(s) ||
      t.deadline.toLowerCase().includes(s)
  );
}

function isFinishedOnTime(todo: typeDataTodo) {
  return todo.state === "Terminée" && todo.deadline >= (todo.updatedAt ?? todo.deadline);
}

const priorities = {
  Haute: "text-red-600 font-bold",
  Moyenne: "text-yellow-600 font-semibold",
  Base: "text-green-600 font-normal",
};

interface TodoTableProps {
  search: string;
}

/**
 * Tableau des tâches Todo, groupées par catégorie et filtrées selon la recherche
 */
const TodoTable = ({ search }: TodoTableProps) => {
  const categories = ["Etude", "Projet", "Perso"];
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
      {categories.map((cat) => {
        // Filtrage par catégorie puis par recherche
        const todos = filterTodos(dataTodo.filter((t) => t.category === cat), search);
        if (todos.length === 0) return null;
        return (
          <CategoryBlock key={cat} category={cat} todos={todos} />
        );
      })}
    </div>
  );
};

/**
 * Bloc d'affichage pour une catégorie de tâches
 */
function CategoryBlock({ category, todos }: { category: string; todos: typeDataTodo[] }) {
  return (
    <div className="mb-12">
      <div className="rounded-lg bg-blue-100 py-2 mb-4">
        <h3 className="text-xl font-bold text-blue-700 text-center">{category}</h3>
      </div>
      <TodoTableContent todos={todos} />
    </div>
  );
}

/**
 * Contenu du tableau pour une liste de tâches
 */
function TodoTableContent({ todos }: { todos: typeDataTodo[] }) {
  return (
    <table className="w-full border rounded-lg overflow-hidden table-fixed">
      <thead className="bg-blue-50">
        <tr>
          <th className="w-12 text-center"></th>
          <th className="text-left px-3">Tâche (Priorité)</th>
          <th className="w-24 text-center">Temps</th>
          <th className="w-32 text-center">Deadline</th>
          <th className="w-12 text-center"></th>
          <th className="w-12 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoTableRow key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}

/**
 * Ligne du tableau pour une tâche
 */
function TodoTableRow({ todo }: { todo: typeDataTodo }) {
  const finished = isFinishedOnTime(todo);
  const elapsed = todo.createdAt && todo.updatedAt ? `${Math.round((Date.parse(todo.updatedAt)-Date.parse(todo.createdAt))/86400000)}j` : "-";
  return (
    <tr className="border-b hover:bg-blue-50">
      <td className="text-center align-middle">
        {finished ? (
          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
        ) : (
          <Circle className="w-5 h-5 text-gray-400 mx-auto" />
        )}
      </td>
      <td className={priorities[todo.priority] + " px-3 align-middle"}>{todo.title} <span className="ml-2 text-xs">({todo.priority})</span></td>
      <td className="text-center align-middle">{elapsed}</td>
      <td className="text-center align-middle">{todo.deadline}</td>
      <td className="text-center align-middle">
        <button type="button" className="text-red-500 hover:text-red-700 mx-auto"><Trash2 className="w-5 h-5" /></button>
      </td>
      <td className="text-center align-middle">
        <button type="button" className="text-blue-500 hover:text-blue-700 mx-auto"><Pencil className="w-5 h-5" /></button>
      </td>
    </tr>
  );
}

export default TodoTable;

import type { typeDataTodo } from "../src/types/typeDataTodo";

const dataTodo: typeDataTodo[] = [
	{
		id: 1,
		title: "Réviser React",
		category: "Etude",
		priority: "Haute",
		deadline: "2025-09-25",
		state: "En cours",
		createdAt: "2025-09-20T10:00:00Z",
		updatedAt: "2025-09-22T09:00:00Z",
	},
	{
		id: 2,
		title: "Rendre le projet ViteJS",
		category: "Projet",
		priority: "Moyenne",
		deadline: "2025-09-30",
		state: "Terminée",
		createdAt: "2025-09-18T14:30:00Z",
		updatedAt: "2025-09-21T16:00:00Z",
	},
	{
		id: 3,
		title: "Appeler le médecin",
		category: "Perso",
		priority: "Base",
		deadline: "2025-09-24",
		state: "Urgente",
		createdAt: "2025-09-19T08:00:00Z",
		updatedAt: "2025-09-19T08:00:00Z",
	},
	{
		id: 4,
		title: "Préparer le rapport de stage",
		category: "Projet",
		priority: "Haute",
		deadline: "2025-10-05",
		state: "En cours",
		createdAt: "2025-09-15T11:00:00Z",
		updatedAt: "2025-09-22T10:00:00Z",
	},
	{
		id: 5,
		title: "Lire un livre",
		category: "Etude",
		priority: "Base",
		deadline: "2025-09-28",
		state: "Non Accomplie",
		createdAt: "2025-09-10T09:00:00Z",
		updatedAt: "2025-09-20T09:00:00Z",
	},
];

export default dataTodo;
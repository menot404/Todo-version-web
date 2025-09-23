import { useState } from "react";
import TodoListView from "./TodoListView";
import FormTodo from "./form/Form";

const HomeTodo = () => {
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    return ( 
        showForm ? (
            <FormTodo onCancel={() => setShowForm(false)} onSuccess={() => setShowForm(false)} />
        ) : (
            <TodoListView search={search} setSearch={setSearch} onAdd={() => setShowForm(true)} />
        )
     );
}
 
export default HomeTodo;
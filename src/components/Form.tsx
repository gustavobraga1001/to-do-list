import { ChangeEvent, FormEvent, useState } from "react";

import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Form.module.css";
import { Task } from "../App";

interface FormProps {
  onSubmit: (task: Task, event: FormEvent) => void;
}

export function Form(props: FormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    const newTask: Task = {
      id: uuidv4(),
      content: newTaskText,
      isFinished: false,
    };
    props.onSubmit(newTask, event);
    setNewTaskText("");
  }

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />
      <footer>
        <button className={styles.button} type="submit">
          Criar
          <PlusCircle size={16} color="#fff" />
        </button>
      </footer>
    </form>
  );
}

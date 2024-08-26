import { FormEvent, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import Clipboard from "./assets/Clipboard.svg";

import styles from "./App.module.css";
import "./global.css";
import { TaskComponent } from "./components/Task";

export interface Task {
  id: string;
  content: string;
  isFinished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(task: Task, event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, task]);
  }

  function handleToogleStatusTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isFinished: !task.isFinished } : task
      )
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function getTaskStatusSummary(tasks: Task[]): string {
    const totalTasks = tasks.length;
    if (totalTasks <= 0) {
      return "0";
    } else {
      const completedTasks = tasks.filter((task) => task.isFinished).length;

      return `${completedTasks} de ${totalTasks}`;
    }
  }

  return (
    <div>
      <Header />
      <main className={styles.box}>
        <Form onSubmit={handleCreateNewTask} />
        <div className={styles.boxTasks}>
          <div className={styles.infos}>
            <div className={styles.description}>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.description}>
              <strong>Concluídas</strong>
              <span>{getTaskStatusSummary(tasks)}</span>
            </div>
          </div>
          <div className={styles.tasks}>
            {tasks.length > 0 ? (
              tasks.map((task: Task) => {
                return (
                  <TaskComponent
                    key={task.id}
                    task={task}
                    onToogleStatusTask={handleToogleStatusTask}
                    onDeleteTask={handleDeleteTask}
                  />
                );
              })
            ) : (
              <div className={styles.notTasks}>
                <img src={Clipboard} alt="Imagem de uma prancheta" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

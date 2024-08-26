import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { Task } from "../App";
import styles from "./Task.module.css";

interface TaskProps {
  task: Task;
  onToogleStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskComponent({
  task,
  onToogleStatusTask,
  onDeleteTask,
}: TaskProps) {
  function handleToogleStatus() {
    onToogleStatusTask(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }
  return (
    <div className={`${styles.task} ${task.isFinished ? styles.finish : ""}`}>
      <div className={styles.checkBox} onClick={handleToogleStatus}>
        {task.isFinished ? (
          <CheckCircle size={24} color="#5E60CE" weight="fill" />
        ) : (
          <Circle size={24} color="#4EA8DE" weight="bold"/>
        )}
      </div>

      {task.isFinished ? (
        <p className={styles.finished}>{task.content}</p>
      ) : (
        <p className={styles.progress}>{task.content}</p>
      )}

      <Trash className={styles.trash} size={24} onClick={handleDeleteTask} />
    </div>
  );
}

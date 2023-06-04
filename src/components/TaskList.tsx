import { ClipboardText } from "phosphor-react";
import { TaskProps } from "../App";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

type Props = {
    tasks: TaskProps[];
    onFinishTask: (task: string) => void;
    onDeleteTask: (task: string) => void;
};

export function TaskList({ tasks, onFinishTask, onDeleteTask }: Props) {
    function renderTaskList() {
        if (tasks.length === 0) {
            return (
                <div className={styles.emptyList}>
                    <ClipboardText
                        size={56}
                        color="var(--gray-300)"
                    />

                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            );
        }

        return (
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={JSON.stringify(task)}
                        task={task}
                        onFinishTask={onFinishTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </ul>
        );
    }

    const numberOfTasks = tasks.length;
    const numberOfFinishedTasks = tasks.filter((task) => task.isDone).length;

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas</span>
                    <div>{numberOfTasks}</div>
                </div>

                <div className={styles.finishedTasks}>
                    <span>Concluídas</span>
                    <div>{numberOfTasks ? `${numberOfFinishedTasks} de ${numberOfTasks}` : 0}</div>
                </div>
            </header>

            {renderTaskList()}
        </div>
    );
}

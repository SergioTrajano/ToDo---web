import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";
import "./global.module.css";

export type TaskProps = {
    content: string;
    isDone: boolean;
};

export function App() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    function addTask(content: string) {
        const newTask: TaskProps = {
            content,
            isDone: false,
        };

        setTasks((prev) => [...prev, newTask]);
    }

    function onFinishTask(finishedTask: string) {
        const updatedTasks = tasks.map((task) => {
            if (task.content !== finishedTask) {
                return task;
            }

            const updatedTask: TaskProps = { ...task, isDone: !task.isDone };

            return updatedTask;
        });

        setTasks(updatedTasks);
    }

    function onDeleteTask(content: string) {
        setTasks((prev) => prev.filter((task) => task.content !== content));
    }

    return (
        <div className={styles.wrapper}>
            <Header />

            <NewTask onNewTask={addTask} />

            <TaskList
                tasks={tasks}
                onFinishTask={onFinishTask}
                onDeleteTask={onDeleteTask}
            />
        </div>
    );
}

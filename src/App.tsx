import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import styles from "./App.module.css";
import "./global.module.css";

type TaskProps = {
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

    return (
        <div className={styles.wrapper}>
            <Header />

            <NewTask onNewTask={addTask} />
        </div>
    );
}

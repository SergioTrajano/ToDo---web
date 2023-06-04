import { CheckCircle, Circle, Trash } from "phosphor-react";

import { TaskProps } from "../App";

import styles from "./Task.module.css";

type Props = {
    task: TaskProps;
    onFinishTask: (task: string) => void;
    onDeleteTask: (task: string) => void;
};

export function Task({ task, onFinishTask, onDeleteTask }: Props) {
    function handleFinishTask() {
        onFinishTask(task.content);
    }

    function handleDeleteTask() {
        onDeleteTask(task.content);
    }

    function renderCheckBoxType() {
        if (task.isDone) {
            return (
                <CheckCircle
                    className={styles.checkBoxFill}
                    onClick={handleFinishTask}
                    size={24}
                    weight="fill"
                />
            );
        }

        return (
            <Circle
                className={styles.checkBoxOutline}
                onClick={handleFinishTask}
                size={24}
            />
        );
    }

    return (
        <div className={styles.container}>
            {renderCheckBoxType()}

            <p
                style={
                    task.isDone ? { textDecoration: "line-through", color: "var(--gray-300)" } : {}
                }
            >
                {task.content}
            </p>

            <Trash
                className={styles.deleteIcon}
                onClick={handleDeleteTask}
                size={24}
            />
        </div>
    );
}

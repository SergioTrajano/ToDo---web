import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

import styles from "./NewTask.module.css";

type Props = {
    onNewTask: (content: string) => void;
};

export function NewTask({ onNewTask }: Props) {
    const [newTaskText, setNewTaskText] = useState<string>("");

    function submit(event: FormEvent) {
        event?.preventDefault();

        onNewTask(newTaskText);
    }

    const isButtonDisabled = newTaskText.length === 0;

    return (
        <div className={styles.container}>
            <form
                className={styles.newTaskForm}
                onSubmit={submit}
            >
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(text) => setNewTaskText(text.target.value)}
                    required
                />

                <button
                    onClick={submit}
                    disabled={isButtonDisabled}
                    type="submit"
                >
                    Criar <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
}

{
    const tasks = [
        {
            content: "Zrobić obiad",
            done: true,
        },
        {
            content: "Zjeść obiad",
            done: false,
        },
    ];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        })
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=
                `<li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            ${task.content}
            </li>`
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTask = document.querySelector(".js-newTask").value.trim();

            if (newTask === "") {
                return;
            }

            addNewTask(newTask);
        })
    }
    init();
}
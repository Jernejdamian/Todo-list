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

    const toggleDoneButton=(index)=>{
        tasks[index].done = !tasks[index].done; 
                render();
    }

    const deletedTask=(index)=>{
        tasks.splice(index, 1);
                render();
    }

    const bindEvents = ()=>{
        const doneButtons = document.querySelectorAll(".js-done");
        const removeButtons = document.querySelectorAll(".js-remove");

        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                toggleDoneButton(index);
            }) 
        })

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                deletedTask();
            }) 
        }) 
    }

    const onFormSubmit=(event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask").value.trim();

        if (newTask === "") {
            return;
        }

        addNewTask(newTask);
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=
                `<li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
             <button class="js-done">Zrobione?</button>
            ${task.content}
            <button class="js-remove">Usuń</button>
            </li>`
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
        
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
    }
    init();
}
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
                deletedTask(index);
            }) 
        }) 
    }

    const onFormSubmit=(event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask");
        const addNewTask = newTask.value.trim();

        if (addNewTask !=="") {
            tasks.push({
                content: addNewTask,
            })
           newTask.value="";
           newTask.focus();
            render();
        }   
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=
                `<li class="tasks__item">
             <button class="tasks__button tasks__button--done js-done">${task.done? "✔" : ""}</button>
            <span class="tasks__content ${task.done? "tasks__content--done" : "" }">${task.content}</span>
            <button class="tasks__button task__button-delete js-remove">🗑</button>
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
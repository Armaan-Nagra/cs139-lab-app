let taskCounter = 0
function addTask(){
    const taskContainer = document.getElementById('task-container')

    //create a new div
    const wrapper = document.createElement("div");
    wrapper.id = `task-${taskCounter}`;

    //create a new input box
    const taskInputName = document.createElement("input")
    taskInputName.type = "text"
    taskInputName.placeholder = "Enter Task Name"

    const taskInputClicks = document.createElement("input")
    taskInputClicks.type = "number"
    taskInputClicks.placeholder = "Enter Number of Clicks"

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.onclick = function () {
        document.getElementById(wrapper.id).remove();
    };

    wrapper.appendChild(taskInputName)
    wrapper.appendChild(taskInputClicks)
    wrapper.appendChild(removeButton)
    taskContainer.appendChild(wrapper)
}

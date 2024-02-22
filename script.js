const addTask = () => {
  const newTask = document.getElementById('newTask');
  const taskList = document.getElementById('taskList');

  if (newTask.value.trim() !== '') {
    // Create the Task
    const task = document.createElement('div');
    task.className = 'task';

    // Create task text
    const taskText = document.createElement('input');
    taskText.value = newTask.value;
    taskText.readOnly = true;

    
    // create task buttons
    const taskBtn = document.createElement('div');
    taskBtn.className = 'taskBtn';

    // create Update Button
    const updateBtn = document.createElement('button');
    updateBtn.className = 'btnUpdate';
    updateBtn.innerText = 'update';
    updateBtn.onclick = function () {
      taskText.readOnly = !taskText.readOnly;
      taskText.readOnly
        ? ((updateBtn.innerText = 'update'), (taskText.className = ''))
        : ((updateBtn.innerText = 'save'), (taskText.className = 'active'));
    };

    // Create Task remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btnRemove';
    removeBtn.innerText = 'Remove';
    removeBtn.onclick = function () {
      if (window.confirm('Are you sure you want to remove item?')) {
        task.remove();
      }
    };

    // Append Elements to task div
    task.appendChild(taskText);
    task.appendChild(taskBtn);
    taskBtn.appendChild(updateBtn);
    taskBtn.appendChild(removeBtn);

    // Append Task to Task List
    taskList.appendChild(task);

    // Clear the input Field
    newTask.value = '';
  }
};

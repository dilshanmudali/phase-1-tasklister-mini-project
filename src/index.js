document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    createToDo(event.target.new_task.value)
    form.reset()
  })

});

  //functions

  function createToDo(todo){
    let li = document.createElement('li')
    let tasks = document.querySelector('#tasks')
    let list = document.querySelector('#list')

    //buttons
    let deleteBtn = document.createElement('button')
        deleteBtn.addEventListener('click', handleDelete)
        deleteBtn.className = 'remove'
        deleteBtn.textContent = 'X'
        deleteBtn.style.color = "orange"


    li.textContent = `${todo} `
    

    //appends
  
    li.appendChild(deleteBtn)
    tasks.append(li)
    list.appendChild(tasks)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }
const AddTodoBtn = document.getElementById("AddTodoBtn");
const inputTag = document.getElementById("TodoInput");
const todoListul = document.getElementById("todoList");
const remaining = document.getElementById("remaining-count")
const clearCompleted = document.getElementById("ClearCompleted")


let todoText;
let todos = [];
let todosString = localStorage.getItem("todos");
if (todosString) {
  todos = JSON.parse(todosString);
  remaining.innerHTML = todos.filter((item)=>{ return item.isCompleted!==true}).length;
}

const populateTodos = () => {
  let string = "";

  for (const todo of todos) {
    string += `<li id="${todo.id}" class="todo-item  ${todo.isCompleted ? "completed" : ""}">
       <input type="checkbox" class="todo-checkbox"  ${todo.isCompleted ? "checked" : ""}>
          <span class="todo-text">${todo.title}</span>
        <button class="delete-btn">❌</button>
      </li>`;
      
  }
  

  todoListul.innerHTML = string;







        // Add the checkbox loigc to populate
      
        

const todoCheckboxs = document.querySelectorAll(".todo-checkbox");

todoCheckboxs.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target)
    // console.log(e.target.value)
    // console.log(e.target.checked)
    if (e.target.checked) {
      element.parentNode.classList.add("completed");
      console.log(element.parentNode.id);
      
      todos = todos.map((todo) => {
        // console.log("todo-" + todo.id, element.parentNode.id);
        if (todo.id == element.parentNode.id) {
          console.log(todo.id, element.parentNode.id)
          return { ...todo, isCompleted: true };
        } else {
          return todo;
        }
      })


      remaining.innerHTML = todos.filter((item)=>{ return item.isCompleted!==true}).length;

      // console.log(todos)
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      element.parentNode.classList.remove("completed");

      // console.log(element.parentNode.id)
      todos = todos.map((todo) => {
        // console.log("todo-" +todo.id, element.parentNode.id)
        if ( todo.id == element.parentNode.id) {
          return { ...todo, isCompleted: false };
        } else {
          return todo;
        }
      });

      
remaining.innerHTML = todos.filter((item)=>{ return item.isCompleted!==true}).length;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
});




                 // Handle the clear completed button click

clearCompleted.addEventListener("click",()=>{
 todos = todos.filter((todo)=>todo.isCompleted == false)
 populateTodos()
})




               //  Handle the delete buttons
let deleteBtns = document.querySelectorAll(".delete-btn")

deleteBtns.forEach((element) => {
element.addEventListener("click", (e)=>{
  const confirmation = confirm("Do you want to delete this")
  if(confirmation){
    todos = todos.filter((todo)=>{
      return (todo.id) !==(e.target.parentNode.id)
    })

    remaining.innerHTML = todos.filter((item)=>{ return item.isCompleted!==true}).length;
 localStorage.setItem("todos",JSON.stringify(todos))
  populateTodos()
  }
  

 
})
})

 remaining.innerHTML = todos.filter((item)=>{ return item.isCompleted!==true}).length;

};




AddTodoBtn.addEventListener("click", () => {
  // console.log("hay I am clicked");
  todoText = inputTag.value;

  if(todoText.trim().length<4){
    alert("you cannot add a todo that small!")
    return
  }    //check if the length of todo is greater than 3
  inputTag.value = "";
  let todo = {
    
     id: "todo-" + Date.now(),
    title: todoText,
    isCompleted: false,
  };

  todos.push(todo);
  
  remaining.innerHTML = todos.filter((item)=>{ return item.isCompleted!==true}).length;
  localStorage.setItem("todos", JSON.stringify(todos));

  populateTodos();
});
populateTodos();










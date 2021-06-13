const todoinput = document.querySelector('.todoinput');
const todobutton = document.querySelector('.todobutton');
const todolist = document.querySelector('.todolist');

//Event Lisinter

todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletetodo)

//Functions
if(todoinput == "")
{
      
}

function addtodo(event)
{
  event.preventDefault();

//Creating To do

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create LI

  const newTodo = document.createElement('li');
  newTodo.innerText = todoinput.value;
  newTodo.classList.add('todoitem');
  todoDiv.appendChild(newTodo);

  //check button

  const CompletedButton = document.createElement('button');
  CompletedButton.innerHTML = '<i class="far fa-check-circle"></i>';
  CompletedButton.classList.add('complete-btn');
  todoDiv.appendChild(CompletedButton);

  todolist.append(todoDiv);
   todoinput.value=" ";
  }
   //for Deleting the todo's 
   function deletetodo(e)
   {
const item = e.target;
if(item.classList[0]=== "complete-btn")
{
  const rve = item.parentElement;
  rve.remove(); 

}
   }

  //  console.log(document.getElementsByClassName('todolist').getElementsByTagName('LI').length);
   console.log(document.querySelectorAll("todolist li").length);

  //  console.log(document.querySelectorAll("#sample li").length);


  //  for(i=0;iN)
  //  {
  //    count ++;\\
  //  }
  //  print(count);
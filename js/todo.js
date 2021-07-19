const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// 새로운 항목이 추가되어도 이전항목이 남아있어야함

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  // 클릭한 li.id와 다른 toDo는 남길것
  // toDO의id는 numeber, li.id는 string
  
  saveToDos();
}
// filter 함수는 제외함수 
// false를 리턴받으면 해당 array는 제외

//기존에는  text=> 현재는 object
function painttoDo(newToDo){

  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");

  button.type = "button";
  //!! button의 기본 type = submit이므로 반드시! 명시(동시실행 방지)
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
} 

function handleToDoSubmit(event){
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value="";
  //console.log(toDoInput.value);

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }//object 형태로 저장(중복방지)

  toDos.push(newToDoObj);
  painttoDo(newToDoObj);

  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(painttoDo);
}


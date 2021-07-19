const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//화면에 띄울 이름을 상수로 불러옴
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); // 브라우저 기본동작 방지(새로고침)
  
  logInForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,logInInput.value);
  
  paintGreetings();
  //입력된 이름을 출력
  //hidden(display:none) 클래스 사용 안함으로
}

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null){ 
  // form이 보여져야 함
  logInForm.classList.remove(HIDDEN_CLASSNAME);
  logInForm.addEventListener("submit", onLoginSubmit);
  //addEventListener내의 함수는 브라우저의 실행
}
else{
  // username이 보여져야댐
  paintGreetings();
}
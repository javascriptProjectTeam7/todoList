import taskData from "./taskData.js";

// const selectedDay = taskData.find(
//   (task) => task.date.month === "04" && task.date.day === "10"
// );
const selectedDays = [];
for (let i = 0; i < taskData.length; i++) {
  if (taskData[i].date.month === "04" && taskData[i].date.day === "10"){
    selectedDays.push(taskData[i])
  }
  
}
console.log(selectedDays);
const $taskList = document.getElementById('task_list')

function addList (){
  for (let i = 0; i < selectedDays.length; i++) {
    const $taskLi = document.createElement('li')

    $taskLi.classList.add('task_list-item')
  
    const todoList = selectedDays[i].todoList;
    todoList.array.forEach(todo => {
      $taskLi.innerHTML = `
      <span class="time">${selectedDays[i].time}</span>
      <span class="label"></span>
      <span class="text">${todo[i].title}</span>
      `
      if(todo[i].category === "일"){
        $taskLi.classList.add('task')
      } else if(todo[i].category === "휴식"){
        $taskLi.classList.add('rest')
      } else if(todo[i].category === "운동"){
        $taskLi.classList.add('exercise')
      }
    });
    
  
    $taskList.append($taskLi)
    
  }
}

const $nothingLi = document.querySelector('#task_list .task_list-item.nothing')
if (selectedDays.length === 0){
  $nothingLi.style.display = "flex"

} else {
  $nothingLi.style.display = "none"
  addList()

}
// h3
// const $h3Date = document.getElementById("h2Date");

// const date = `${selectedDays[0].date.month}월 ${selectedDays[0].date.day}일`;
// $h3Date.innerHTML = date;

// 리스트

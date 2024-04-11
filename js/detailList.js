import taskData from "./taskData.js";
import createTaskLi from "./detailListCreateLi.js";

// 캘린더에서 받아 온 선택된 날짜 == 수정 요함
const selectedDay = taskData.find(
  (task) => task.date.month === "04" && task.date.day === "20"
);
// h3 설정 == 수정 요함
const $h3Date = document.getElementById("h2Date");
$h3Date.innerHTML = `${selectedDay.date.month}월 ${selectedDay.date.day}일`;

const $taskList = document.getElementById("task_list");
function setListNull(){
const $nothingLi = document.querySelector("#task_list .task_list-item.nothing");
  console.log(selectedDay);
  if (selectedDay.todoList.length) {
    // 해당 날짜에 일정이 있는 경우 ui
    $nothingLi.style.display = "none";
    addList();
  } else {
    // 해당 날짜에 일정이 없는 경우 ui
    $nothingLi.style.display = "flex";
  }
}
setListNull()

// 리스트 추가 메서드
function addList() {
  const selectedDayTodoList = selectedDay.todoList;
  selectedDayTodoList.forEach((task) => {
    $taskList.append(createTaskLi(task));
  });
}


export {selectedDay,$taskList, setListNull};

import taskData from "./taskData.js";

console.log(taskData[2]);

// 전역변수 정의
// const $callyResponse = document.getElementById("callyResponse");
const $input = document.getElementById("input");
const $arrow = document.getElementById("arrow");

const $response = document.getElementById("response");
const $close = document.getElementById("close");
const $chatbotContainer = document.getElementById("chatbot-container");

const $chatPart = document.getElementById("chatPart");
const $option = $chatPart.querySelector("li");

// 함수 정의

// 입력받은 날짜를 기준으로 주변 7개의 task간 가장 적게한 카테고리 리턴
function countCategory(date) {
    let workCount = 0;
    let restCount = 0;
    let exceriseCount = 0;
    let min = workCount;
    
    if(true){

    }
    taskData[target];
    for (i = 1; i < 3; i++) {
        taskData[target - i];


        taskData[target + i];
    }

    // 그 날짜의 객체 날짜 전달

    return min;
}

// 함수 실행

//x누르면 화면 내리기
$close.addEventListener("click", (e) => {
    console.log(e.target);
    $chatbotContainer.classList.add("hidden");
});

// 보내기버튼 활성화
$input.addEventListener("input", (e) => {
    const trimedInput = e.target.value.trim();
    if (trimedInput !== "") {
        $arrow.classList.remove("hidden");
    }
});

const returnNewTodo = () => {
    const newTodo = $input.querySelector("input").value;
    // 저장해둔 input 값을 채팅 li에 추가
    const $newResponse = document.createElement("li");
    $newResponse.textContent = newTodo;
    $response.appendChild($newResponse);

    // 입력 후 input 값 초기화
    // 왜 안돼묘??
    // newTodo = '';
    $input.querySelector("input").value = "";
};

// 엔터누르면 전달됨
$input.parentElement.addEventListener("submit", (e) => {
    e.preventDefault();
    returnNewTodo();
});
// 보내기 버튼 누르면
$arrow.addEventListener("click", (e) => {
    e.preventDefault();
    returnNewTodo();
});

// const returnCallyResponse = () => {
//     // 첫번째 입력 받기
//     // 사용자가 직접 입력(1,2,3,4 나 일정조회, 일정추가, 일정추천, 직접입력/ 을 직접 입력하고 전송함)
//     // #chatPart 무엇을 도와드릴까요? 에서 4개중에 한개 선택함

// };

// const $userDate = (($input), e =>{
//     $realInput = $input.querySelector('input');

// })
// 유저로부터 날짜 데이터 받기
function getDateFromUser() {
    const $date = document.createElement("div");
    $date.innerHTML =
        "수정을 원하는 날짜를 입력해주세요<br>(YYYY-MM-DD 형식으로 입력해주세요)";
    $response.appendChild($date);
    $date.classList.add("callyResponse");

    // 사용자한테 날짜 입력받아야됨!!!!!
    // 즉 li태그가 추가될 때까지 기다렸다가 그 값을 $userDate로 받아야함

    const $userDate = $response.lastElementChild.textContent;
    console.log($userDate);
    const userDate = $userDate.trim();
    const userDateCopy = userDate;

    let userDateInfo = {
        year: 0,
        month: 0,
        date: 0,
    };

    if (userDate.length !== 10) {
        // 입력값이 제대로 되지 않았다면...
        console.log("error");
        const $inputError = document.createElement("div");
        $inputError.textContent = "어허~~ YYYY-MM-DD 형식으로 입력해주세요";
        $response.appendChild($inputError);
        $inputError.classList.add("callyResponse");
    } else {
        // 사용자가 입력한 날짜데이터 년도, 월, 일로 추출
        const dateParts = userDateCopy.split("-");
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const date = parseInt(dateParts[2]);

        userDateInfo.year = year;
        userDateInfo.month = month;
        userDateInfo.date = date;
    }

    console.log(userDateInfo);
    // 객체로 리턴
    return userDateInfo;
}

function getRecentTodo(date) {
    let index = date;
    // 입력받은 날짜를 기준으로 앞 뒤 3일 todoList.title 가져와서 출력

    // 출력하려면 todolist.title을 먼저 리스트에 담아서 그 갯수를 세고
    // 갯수 만큼 div 추가해야함
    // 각각의 todo를 담을 싸개
    const $chekedSs = document.createElement("div");
    $chekedSs.classList.add("callyResponse");
    $response.appendChild($chekedSs);

    // 추가하는 함수
    // todoitems todoList에서 title객체만 뺴서 가져와서 todo 에 집어넣기
    let todo = [];
    if (index > 3) {
        for (let i = 1; i <= 3; i++) {
            taskData[index - i];
            taskData[index + i];
        }
    } else {
        // ㅇㅖ외처리 해야함
        for (let i = index; i <= 7 - index; i++) {
            taskData[i];
        }
    }
    for (let i = 0; i < todo.length; i++) {
        const $chekeditem = document.createElement("div");
        $chekeditem.innerHTML = `${i + 1}. ${todo[i]}`;
        $chekedSs.appendChild($chekeditem);
    }
}
function checkSchedule() {
    getDateFromUser();

    // getRecentTodo();

    // li 묶음을 #callyResponse에 추가
}

// 채팅에서 새로운 스케줄 추가
function addSechdule() {
    // 사용자에게 일정 추가할 날짜 받기
    getDateFromUser();

    // 받은 날짜, 년도, month가 해당되는 날짜 객체 가져오기
    userDateInfo.year;
    userDateInfo.month;
    userDateInfo.date;

    // 추가할 시간, 할 일, 카테고리 입력 받기
    const $newSchedule = document.createElement("div");
    $newSchedule.textContent = `${userDateInfo.year}년 ${userDateInfo.month}월 ${userDateInfo.date}일에 추가하고 싶은 일정을 적어주세요`;
    $response.appendChild($newSchedule);
    // 입력받은 값 todo list에  또다른 객체로 추가
}
// 최근동안 어떠한 일을 적게 했는지 알아봄
function checkRecentWork(min) {}
// 챗봇에게 할일 추천 받기
function recommendTodo() {
    // 어떤 날짜에 할 일을 추가하고 싶은지 물어봄
    getDateFromUser();

    //입력 받은 날짜를 기반으로 지금까지 있는 task 중 어떠한 일을 가장 많이 했는지 알려줌
    checkRecentWork();

    // 가장 많이한 일을 출력하며, 그 날짜를 기준으로 최근 일주일간 가장많이 한 일은 땡땡 이군요!
    //
}

// 사용자가 궁금한 사항 직접 입력함
function customByUser() {
    // 아직 지원하지 않는 기능입니다.
    const $notYet = document.createElement("div");
    $notYet.textContent = "현재 지원하지 않는 기능입니다.";
    $notYet.classList.add("callyResponse");
    $response.appendChild($notYet);
}

$chatPart.addEventListener("click", (e) => {
    // Check if the clicked element is a <button> tag
    const $clicked = e.target.closest("li");
    if ($clicked) {
        // Retrieve the text content of the clicked <button> tag
        const buttonText = e.target.textContent.trim();
        // Perform different actions based on the text content
        switch (buttonText) {
            case "1. 일정 조회":
                // Code to handle "일정 조회" option
                console.log(e.target);
                console.log("일정 조회 clicked");
                checkSchedule();
                break;
            case "2. 일정 추가":
                console.log(e.target);
                console.log("일정 추가 clicked");
                addSechdule();
                break;
            case "3. 일정 추천":
                console.log(e.target);
                console.log("일정 추천 clicked");
                recommendTodo();
                break;
            case "4. 직접 입력":
                customByUser();
                getDateFromUser();
                console.log(e.target);
                console.log("직접 입력 clicked");
                break;
            default:
                printReDo();
                break;
        }
    }
});

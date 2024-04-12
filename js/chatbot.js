import taskData from "./taskData.js";

// 전역변수 정의
// const $callyResponse = document.getElementById("callyResponse");

const $input = document.getElementById("input");
const $arrow = document.getElementById("arrow");

const $response = document.getElementById("response");
const $close = document.getElementById("close");
const $chatbotContainer = document.getElementById("chatbot-container");

const $chatPart = document.getElementById("chatPart");
const $option = $chatPart.querySelector("li");

const dateObject = {};

// 함수 정의

// 입력받은 날짜를 기준으로 주변 7개의 task간 가장 적게한 카테고리 리턴
let count = 0;
let $timeInput = null;
function getDateFromUser(buttonText) {
    // 날짜를 입력받을 폼 생성
    const $dateForm = document.createElement("div");
    $dateForm.classList.add("callyResponse");

    count++;
    $dateForm.innerHTML = `
        <p class="input_wrap">
            ${buttonText}을 도와드리겠습니다. <br> 원하는 날짜를 선택해주세요: <br>
            <input type="date" id="date_input_chatbot_${count}" />
            <input type="time" id="time_input_chatbot_${count}" />
            <button id="confirm">확인</button>
        </p>`;

    $response.append($dateForm);


    const $confirmButton = document.getElementById("confirm");

    $confirmButton.addEventListener("click", () => {
        // 날짜
        const $dateInput = document.getElementById(
            `date_input_chatbot_${count}`
        );
        // 사용자가 입력한 날짜와 시간 가져오기
        const date = new Date($dateInput.value);
        const dateSet = {
            year: String(date.getFullYear()),
            month: String(date.getMonth() + 1).padStart(2, "0"),
            day: String(date.getDate()).padStart(2, "0"),
        };
        // 시간
        const $timeInput = document.getElementById(`time_input_chatbot_${count}`);
        const timeSet = $timeInput.value;
        const [hour, minute] = timeSet.split(":");
        const {year, month, day} = dateSet;

        dateObject.year = year;
        dateObject.month = month;
        dateObject.day = day;

        dateObject.hour = hour;
        dateObject.minute = minute;
        
    });
}

// 해야함..?
// 스케줄 체크하는 애
function checkSchedule(buttonText) {
    // userDate를 보냄
    const data = getDateFromUser(buttonText);

    getRecentData(data);

    // li 묶음을 #callyResponse에 추가
}

function getUserInputTitle(){
    console.log($input.value);
}

// 채팅에서 새로운 스케줄 추가
function addSechdule(buttonText) {
    // 사용자에게 일정 추가할 날짜 받기
    getDateFromUser(buttonText);
    const {year, month, day, hour, miniute} = dateObject;

    // 받은 날짜, 년도, month가 해당되는 날짜 객체 가져오기
    // 계속 gmt 시간만 가져옴 ㅠㅜㅠㅜㅠ 해결해야해~
    const $confirmButton = document.getElementById("confirm");
    $confirmButton.addEventListener("click", (e) => {
        console.log("hihi");
        const $todo_list = document.createElement("div");
        $todo_list.innerHTML = `<div>
                                    <div>어떤 일을 추가하고 싶으신가요? <br>추가하고 싶은 할 일을 적어주세요 <br>(카테고리를 선택해주세요!)</div>
                                    <p id="categoryOptions">
                                        <label>
                                        <button id="task">일</button>                              
                                        </label>
                                        <label>
                                        <button id="exercise">운동</button>
                                        </label>
                                        <label>
                                        <button id="rest">휴식</button>
                                        </label>
                                    </p>
                                </div>`;

        $todo_list.classList.add("callyResponse");

        $response.appendChild($todo_list);

        const $task = document.getElementById('task');
        const $exercise = document.getElementById('exercise');
        const $rest = document.getElementById('rest');
        
        let category = "휴식";
        if($task.checked === 'true'){
            category = "일";
        }else if($exercise.checked === 'true'){
            category = "운동"
        }
        
        getUserInputTitle();
        
        addNewTodo(category, userInputTitle);

    });
    // 할 일, 카테고리 입력 받기
    // 입력받은 값 todo list에  또다른 객체로 추가
}


function getRecentData(userDate) {
    let targetId = 0;
    const {year, month, day} = userDate.dateSet;
    const [hour, minute] = userDate.timeSet.split(":");
    
    taskData.forEach(element => {
        let {Eyear , Emonth, Eday} = element.date;
        if(year === Eyear && month === Emonth && Eday === day){
            targetId = element.id;
        }
        // 무조건 그 날에 일정이 있을것이라고 가정해야함...
        // 예외 처리 빡세기 때문...
    });
    
    let recentData = [];
    let boundary = 7;

    if (targetId < 7) {
        for (let i = 0; i < targetId; i++) {
            recentData.push(...taskData[i]);
        }
    } else {
        for (let i = targetId; i < targetId + boundary; i++) {
            recentData.push(...taskData[i]);
        }
    }
    return recentData;
}

// 최근동안 어떠한 일을 적게 했는지 알아봄
function checkRecentWork(buttonText) {
    let workCount = 0;
    let exerciseCount = 0;
    let restCount = 0;

    const userDate = getDateFromUser(buttonText);
    const date = userDate.dateSet;

    // 최근 데이터 불러오기
    const recentData = getRecentData(userDate);

    recentData.forEach((entry) => {
        entry.todoList.forEach((todo) => {
            if (todo.category === "일") {
                workCount++;
            } else if (todo.category === "운동") {
                exerciseCount++;
            } else if (todo.category === "휴식") {
                restCount++;
            }
        });
    });

    const min = Math.min(workCount, exerciseCount, restCount);

    return [min, userDate];
}

// 새로운 할일 추가(챗봇 추천 받은거로)
function addNewTodo(categoryUser) {
    // const $likeBtn = document.getElementById('likeBtn');
    
    const {year, month, day, hour, min} = dateObject;
    let newTodo = {
        id : taskData.length+1,
        date: {
            year: year,
            month: month,
            day: day,
        },
        todoList : [
            {
                time: `${hour}:${min}`,
                title: userInputTitle,
                category: categoryUser,
            }
        ]


    }
    taskData.push(newTodo)
}

// 챗봇에게 할일 추천 받기
function recommendTodo(buttonText) {
    //입력 받은 날짜를 기반으로 지금까지 있는 task 중 어떠한 일을 가장 많이 했는지 알려줌
    const returnedData = checkRecentWork(buttonText);
    let min = returnedData[0];
    let userDate = returnedData[1];
    let less = "";

    if (min === workCount) {
        less = "일";
    } else if (min === exceriseCount) {
        less = "운동";
    } else {
        less = "휴식";
    }

    const $recommendation = document.createElement("div");
    $recommendation.innerHTML = `최근동안 가장 적게 활동한 ${less}을 해보시는 건 어떨까요? 
                                <button id="likeBtn" type = "radio">좋아요</button> 
                                <button id="disBtn" type = "radio">실어요</button> `;
    $response.appendChild($recommendation);

    // 좋아요 누르면 -> taksData에 추가됨
    const $likeBtn = document.getElementById("likeBtn");
    if (($likeBtn.checked = "true")) {
        addNewTodo(less);
    } else {
        const $noNeed = document.createElement("div");
        $noNeed.innerHTML = `필요 없으시군요! 그럼 다음에 이용해보세요 ;)`;
        $response.appendChild($noNeed);
    }
}

// 사용자가 궁금한 사항 직접 입력함
function customByUser(buttonText) {
    // 아직 지원하지 않는 기능입니다.
    const $notYet = document.createElement("div");
    $notYet.innerHTML = `${buttonText}은 <br>현재 지원하지 않는 기능입니다. <br>업데이트 예정입니다.`;
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
                // console.log(e.target);
                console.log("일정 조회 clicked");
                checkSchedule(buttonText);
                break;
            case "2. 일정 추가":
                // console.log(e.target);
                console.log("일정 추가 clicked");
                addSechdule(buttonText);
                break;
            case "3. 일정 추천":
                // console.log(e.target);
                console.log("일정 추천 clicked");
                recommendTodo(buttonText);
                break;
            case "4. 직접 입력":
                customByUser(buttonText);
                break;
            default:
                showFirstChat();
                break;
        }
    }
});

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

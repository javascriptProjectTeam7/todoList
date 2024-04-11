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

function getDateFromUser(buttonText) {
    // 날짜를 입력받을 폼 생성
    const $dateForm = document.createElement("div");
    $dateForm.classList.add("callyResponse");

    $dateForm.innerHTML = `
        <p class="input_wrap">
            ${buttonText}을 선택하셨습니다. <br> 원하는 날짜를 선택해주세요: <br>
            <input type="date" id="date_input" />
            <input type="time" id="time_input" />
            <button id="confirm">확인</button>
        </p>`;

    $response.appendChild($dateForm);

    // 사용자 입력 데이터를 저장할 객체
    let userDate = {
        date: {
            year: "",
            month: "",
            day: "",
        },
        todoList: [
            {
                time: "",
                title: "",
                category: "",
            },
        ],
    };

    // 확인 버튼 클릭 이벤트 처리
    const $confirmButton = document.getElementById("confirm");
    const $dateInput = document.getElementById("date_input");
    const $timeInput = document.getElementById("time_input");
    $confirmButton.addEventListener("click", () => {
        // 사용자가 입력한 날짜와 시간 가져오기
        const selectedDate = $dateInput.value;
        const selectedTime = $timeInput.value;

        if (selectedDate !== "" && selectedTime !== "") {
            // 사용자가 날짜와 시간을 모두 선택한 경우
            const dateParts = selectedDate.split("-");
            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]);
            const date = parseInt(dateParts[2]);

            // 사용자 입력 데이터 저장
            userDate.date.year = year;
            userDate.date.month = month;
            userDate.date.day = date;
            userDate.todoList[0].time = selectedTime;
        } else {
            const currentDate = new Date();

            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
            const currentDay = currentDate.getDate();
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();
            userDate.date.year = currentYear;
            userDate.date.month = currentMonth;
            userDate.date.day = currentDay;

            userDate.todoList[0].time = `${currentHour}:${currentMinute}`;
        }

        return userDate;
    });
}

// 해야함..?
function checkSchedule(buttonText) {
    // userDate를 보냄
    getRecentTodo(buttonText);

    // li 묶음을 #callyResponse에 추가
}

// 채팅에서 새로운 스케줄 추가
function addSechdule(buttonText) {
    // 사용자에게 일정 추가할 날짜 받기
    const DateInfo = getDateFromUser(buttonText);

    // 받은 날짜, 년도, month가 해당되는 날짜 객체 가져오기
    // 계속 gmt 시간만 가져옴 ㅠㅜㅠㅜㅠ 해결해야해~
    const $confirmButton = document.getElementById("confirm");
    $confirmButton.addEventListener('click', (e)=>{
        const $todo_list = document.createElement('div');
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
    })
    // 할 일, 카테고리 입력 받기
    // 입력받은 값 todo list에  또다른 객체로 추가
}

function getRecentData(userDate) {
    const targetId = userDate.id;
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

    const min = Math.min(workCount, exceriseCount, restCount);

    return [min, userDate];
}

// 새로운 할일 추가(챗봇 추천 받은거로)
function addNewTodoBasedOnChat(less, userDate) {
    // const $likeBtn = document.getElementById('likeBtn');
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
        addNewTodoBasedOnChat(less, userDate);
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
                console.log(e.target);
                console.log("일정 조회 clicked");
                checkSchedule(buttonText);
                break;
            case "2. 일정 추가":
                console.log(e.target);
                console.log("일정 추가 clicked");
                addSechdule(buttonText);
                break;
            case "3. 일정 추천":
                console.log(e.target);
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

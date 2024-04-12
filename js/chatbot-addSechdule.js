// import getTaskByUser 
function addSechdule(buttonText) {
    // 사용자에게 일정 추가할 날짜 받기
    const DateInfo = getDateFromUser(buttonText);
    console.log(DateInfo);
    const $confirmButton = document.getElementById("confirm");
    $confirmButton.addEventListener("click", (e) => {
        const $todo_list = document.createElement("div");
        $todo_list.innerHTML = `
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
                                `;

        $todo_list.classList.add("callyResponse");

        $response.appendChild($todo_list);
    });
    
    // 입력받은 값 todo list에  또다른 객체로 추가
}

export default addSechdule;
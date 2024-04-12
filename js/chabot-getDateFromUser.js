
let count = 0;
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
        // console.log(year);
        // console.log(hour);
        // console.log("timeSet:" + JSON.stringify(timeSet));
        // console.log("dateSet:" + JSON.stringify(dateSet));
        return {dateSet, timeSet};
    });
  
}

export default getDateFromUser;
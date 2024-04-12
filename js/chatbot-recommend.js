import less from "./";
import userDate from "./chabot-getDateFromUser";
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

// 새로운 할일 추가(챗봇 추천 받은거로)
function addNewTodoBasedOnChat(less, userDate) {
    // const $likeBtn = document.getElementById('likeBtn');

}

export {recommendTodo, addNewTodoBasedOnChat};
import getDateFromUser from "./chabot-getDateFromUser.js";
import getRecentData from "./chatbot-getRecentData.js";

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

    const min = Math.min(workCount, exerciseCount, restCount);

    return [min, userDate];
}

export default checkRecentWork;
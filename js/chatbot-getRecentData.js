import userDate from "./chabot-getDateFromUser.js";

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

export default getRecentData;
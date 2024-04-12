
// 사용자가 궁금한 사항 직접 입력함
function customByUser(buttonText) {
    // 아직 지원하지 않는 기능입니다.
    const $notYet = document.createElement("div");
    $notYet.innerHTML = `${buttonText}은 <br>현재 지원하지 않는 기능입니다. <br>업데이트 예정입니다.`;
    $notYet.classList.add("callyResponse");
    $response.appendChild($notYet);
}

export default customByUser;
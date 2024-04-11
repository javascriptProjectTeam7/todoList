const date = new Date();

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector(".yearMonth").textContent = `${viewYear}. ${viewMonth + 1}`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PrevLastDate = prevLast.getDate();
  const PrevLastDay = prevLast.getDay();

  const ThisLastDate = thisLast.getDate();
  const ThisLastDay = thisLast.getDay();

  const PDates = [];
  const TDates = [...Array(ThisLastDate + 1).keys()].slice(1);
  const NDates = [];

  if (PrevLastDay !== 6) {
    for (let i = 0; i < PrevLastDay + 1; i++) {
      PDates.unshift(PrevLastDate - i);
    }
  }

  for (let i = 1; i < 7 - ThisLastDay; i++) {
    NDates.push(i);
  }

  const dates = PDates.concat(TDates, NDates);

  const modifiedDates = dates.map(date => `<div class="date">${date}</div>`);

  document.querySelector(".dates").innerHTML = modifiedDates.join("");
};

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

const goToday = () => {
  window.location.reload(); // 페이지를 다시 로드하여 오늘 날짜로 이동
};

// 초기 렌더링
renderCalendar();
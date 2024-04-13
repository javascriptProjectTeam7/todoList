const taskData = [
  {
    id: 1,
    date: {
      year: "2024",
      month: "04",
      day: "05",
    },
    todoList: [
      {
        time: "12:00",
        title: "할 일1",
        category: "일",
      },
    ],
  },
  {
    id: 2,
    date: {
      year: "2024",
      month: "04",
      day: "10",
    },
    todoList: [
      {
        time: "18:00",
        title: "할 일2",
        category: "휴식",
      },
      {
        time: "18:00",
        title: "할 일2-2",
        category: "일",
      },
    ],
  },
  {
    id: 3,
    date: {
      year: "2024",
      month: "04",
      day: "2",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },

  {
    id: 4,
    date: {
      year: "2024",
      month: "04",
      day: "13",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 5,
    date: {
      year: "2024",
      month: "04",
      day: "11",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 6,
    date: {
      year: "2024",
      month: "04",
      day: "29",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 7,
    date: {
      year: "2024",
      month: "04",
      day: "18",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 8,
    date: {
      year: "2024",
      month: "04",
      day: "24",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 9,
    date: {
      year: "2024",
      month: "04",
      day: "9",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
      {
        time: "14:00",
        title: "할 일3-1",
        category: "운동",
      },
    ],
  },
  {
    id: 10,
    date: {
      year: "2024",
      month: "04",
      day: "27",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 11,
    date: {
      year: "2024",
      month: "04",
      day: "19",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 12,
    date: {
      year: "2024",
      month: "04",
      day: "25",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
  {
    id: 13,
    date: {
      year: "2024",
      month: "04",
      day: "21",
    },
    todoList: [
      {
        time: "14:00",
        title: "할 일3",
        category: "운동",
      },
    ],
  },
];

taskData.sort((a, b) => {
  // a와 b의 년도를 비교하여 정렬
  if (a.date.year !== b.date.year) {
    return parseInt(a.date.year) - parseInt(b.date.year);
  }
  
  // 년도가 같은 경우, 월을 비교하여 정렬
  if (a.date.month !== b.date.month) {
    return parseInt(a.date.month) - parseInt(b.date.month);
  }
  
  // 년도와 월이 같은 경우, 일을 비교하여 정렬
  return parseInt(a.date.day) - parseInt(b.date.day);
});


// console.log(JSON.stringify(taskData));

export default taskData;

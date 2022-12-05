console.log(
  "Используй функцию createCalendar(год числом, месяц число). Например: createCalendar(1994, 4) "
);
function createCalendar(year, month) {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  const arrWithDays = ["пн", "вт", "cр", "чт", "пт", "cб", "вс"];
  for (let i = 0; i < 7; i++) {
    let firsRow = document.createElement("th");
    thead.appendChild(firsRow);
    firsRow.innerHTML = arrWithDays[i];
  }
  for (let i = 0; i < 6; i++) {
    let rowInTable = document.createElement("tr");
    tbody.appendChild(rowInTable);
    for (let j = 0; j < 7; j++) {
      let cellInTable = document.createElement("td");
      rowInTable.appendChild(cellInTable);
    }
  }
  let counter = 2;
  let isStart = false;
  let numberOfDays = new Date(new Date(year, month).setDate(0)).getDate();
  let date = new Date(year, month - 1);
  let firstDayInMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  document.body.appendChild(table);
  table.lastChild.firstChild.childNodes.forEach((element, index) => {
    if (firstDayInMonth == 0 && index == 6) {
      element.innerHTML = 1;
      element.className = "firstElement";
    } else if (index + 1 === firstDayInMonth) {
      element.innerHTML = 1;
      element.className = "firstElement";
    }
  });
  for (let i = 0; i < tbody.children.length; i++) {
    for (let j = 0; j < tbody.children[i].children.length; j++) {
      if (tbody.children[i].children[j].className === "firstElement") {
        isStart = true;
      }
      if (
        isStart &&
        tbody.children[i].children[j].className != "firstElement" &&
        counter <= numberOfDays
      ) {
        tbody.children[i].children[j].innerHTML = counter;
        counter++;
      }
    }
  }
}
// createCalendar(1997, 10);

import { createTableBody } from "../creators/creators.js";

export function sortTable(tableDataFormated, column, direction) {
  if (direction === "reset") {
    const defaultBody = createTableBody(tableDataFormated);
    document.getElementById("table").replaceChild(defaultBody, document.getElementById("table").children[1]);
    return;
  }

  const updatedData = [...tableDataFormated];

  updatedData.sort((userA, userB) => {
    let valueA;
    let valueB;

    if (column === "isActive") {
      valueA = userA[column];
      valueB = userB[column];
    } else if (column === "registered") {
      valueA = new Date(userA[column]);
      valueB = new Date(userB[column]);
    } else {
      valueA = userA[column].toUpperCase();
      valueB = userB[column].toUpperCase();
    }

    let comparison = 0;

    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    return direction === "desc" ? comparison * -1 : comparison;
  });

  const sortedBody = createTableBody(updatedData);
  document.getElementById("table").replaceChild(sortedBody, document.getElementById("table").children[1]);
}

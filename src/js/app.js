import { getSource, formatTableData } from "./helpers/helpers.js";
import { createTableHead, createTableBody } from "./creators/creators.js";

async function createTable(selectorId) {
  let tableDataRaw;

  try {
    tableDataRaw = await getSource();
  } catch (error) {
    document.getElementById(selectorId).textContent = "There was a problem displaying table ...";
    return;
  }

  function sortTable(column, direction) {
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

  const tableDataFormated = formatTableData(tableDataRaw);
  const table = document.createElement("table");
  table.id = "table";
  const tableHead = createTableHead(sortTable);
  const tableBody = createTableBody(tableDataFormated);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.getElementById(selectorId).appendChild(table);
}

createTable("table-wrapper");

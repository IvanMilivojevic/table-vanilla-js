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

  const tableDataFormated = formatTableData(tableDataRaw);
  const table = document.createElement("table");
  table.id = "table";
  const tableHead = createTableHead();
  const tableBody = createTableBody(tableDataFormated);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.getElementById(selectorId).appendChild(table);
}

createTable("table-wrapper");

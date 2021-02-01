const tableOrder = ["fullName", "balance", "isActive", "registered", "state", "country"];

export function createTableHead(sortTable) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  tableOrder.forEach(column => {
    const th = document.createElement("th");
    th.textContent = column;
    tr.appendChild(th);
  });

  thead.appendChild(tr);

  return thead;
}

export function createTableBody(tableData) {
  const tbody = document.createElement("tbody");

  tableData.forEach(user => {
    const tr = document.createElement("tr");

    tableOrder.forEach(column => {
      const td = document.createElement("td");
      td.textContent = user[column];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  return tbody;
}

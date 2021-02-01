const tableOrder = ["fullName", "balance", "isActive", "registered", "state", "country"];

export function createTableHead(sortTable) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  tableOrder.forEach(column => {
    const th = document.createElement("th");
    th.textContent = column;
    th.addEventListener("click", e => {
      let direction = "";
      let thToSort = e.target;

      if (thToSort.classList.contains("asc")) {
        thToSort.classList.remove("asc");
        thToSort.classList.add("desc");
        direction = "desc";
      } else if (thToSort.classList.contains("desc")) {
        thToSort.removeAttribute("class");
        direction = "reset";
      } else {
        for (const th of thToSort.parentNode.children) {
          if (thToSort === th) {
            thToSort.classList.add("asc");
            direction = "asc";
          } else {
            th.removeAttribute("class");
          }
        }
      }

      sortTable(column, direction);
    });
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

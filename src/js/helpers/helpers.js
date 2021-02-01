export async function getSource() {
  const response = await fetch("./users.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.message}`);
  } else {
    const data = await response.json();

    return data;
  }
}

export function formatTableData(rawData) {
  const tableData = [];

  rawData.forEach(countryObj => {
    countryObj.state.forEach(stateObj => {
      stateObj.users.forEach(user => {
        tableData.push({ ...user, state: stateObj.name, country: countryObj.country });
      });
    });
  });

  return tableData;
}

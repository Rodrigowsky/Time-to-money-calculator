//Element Selector

const mainForm = document.querySelector(".form-main");

//Event Listeners

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("lá vai ele");

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  mainForm.appendChild(table);

  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Amount";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Hours Needed";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);

  thead.appendChild(row_1);

  let row_2 = document.createElement("tr");

  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = "1.";
  let row_2_data_2 = document.createElement("td");
  row_2_data_2.innerHTML = "James Clerk";

  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);

  tbody.appendChild(row_2);
});

console.log("aloha");

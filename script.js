//Element Selector

const mainForm = document.querySelector(".form-main");
const salaryInput = document.querySelector("#salary");
const hoursInput = document.querySelector("#hours");

//Calculate

const hleExhangeRate = (hoursWorked, SalaryIn) => {
  let resultRate = (hoursWorked * 4) / SalaryIn
  return resultRate
};

//Element Creation

const tableCreation = () => {
  const hleRate = hleExhangeRate(salaryInput.value, hoursInput.value);

  //Table Barebones

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  mainForm.appendChild(table);

  //First Row Heading

  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Amount";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Hours Needed";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);

  thead.appendChild(row_1);

  //Second Row Data (loop)

  for (let i = 0; i <= 100; i+10) {
    //5 10 20 30 50 75 100
    if (i === 0) {
      continue;
    }
    let row_2 = document.createElement("tr");
    let row_2_data_1 = document.createElement("td");
    row_2_data_1.innerHTML = i;
    let row_2_data_2 = document.createElement("td");
    row_2_data_2.innerHTML = i * hleRate;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);

    tbody.appendChild(row_2);
  }
};

//Event Listeners

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("lá vai ele");
  
  tableCreation();
});

console.log("aloha");


//5 10 20 30 50 75 100
//HLE Hours of Life Energy
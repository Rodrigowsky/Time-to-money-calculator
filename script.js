//Element Selector

const mainForm = document.querySelector(".form-main");
const salaryInput = document.querySelector("#salary");
const hoursInput = document.querySelector("#hours");
const body = document.querySelector(".container");

//Calculate

const hleExhangeRate = (hoursWorked, SalaryIn) => {
  let resultRate = (hoursWorked * 4) / SalaryIn;
  return resultRate;
};

//Element Creation

const tableCreation = function (
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7
) {
  const hleRate = hleExhangeRate(hoursInput.value, salaryInput.value);

  //Table Barebones

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  body.appendChild(table);

  //First Row Heading

  let row_1 = document.createElement("tr");

  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Money Amount";
  heading_1.classList.add("cell_border");
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Hours Needed";
  heading_2.classList.add("cell_border");

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);

  thead.appendChild(row_1);

  //Data Rows(loop)
  //5 10 20 30 50 75 100
  for (let i = 0; i < arguments.length; i++) {
    let row_2 = document.createElement("tr");

    let row_2_data_1 = document.createElement("td");
    row_2_data_1.classList.add("cell_border");
    const data = arguments[i];
    row_2_data_1.innerHTML = data;

    let row_2_data_2 = document.createElement("td");
    row_2_data_2.innerHTML = Number(data * hleRate).toFixed(1);

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);

    tbody.appendChild(row_2);
  }

  mainForm.style.display = "none";

  //CSS inject style

  const custom_style = {
    width: "400px",
    height: "300px",
    borderRadius: "6px",
  };

  Object.assign(table.style, custom_style);

  btnCreation(body, table);
};

//Btns Elements Creation

const btnCreation = (parentElement, tableElement) => {
  const btnContainer = document.createElement("div");
  const backButton = document.createElement("button");
  const printBtn = document.createElement("button");
  parentElement.appendChild(btnContainer);
  btnContainer.classList.add("btnContainer");

  backButton.innerHTML = "Go Back";
  printBtn.innerHTML = "Save To Print";

  btnContainer.appendChild(backButton);
  btnContainer.appendChild(printBtn);

  backButton.classList.add("btn");
  printBtn.classList.add("btn");

  //Event Listener For Buttons

  backButton.addEventListener("click", () => {
    tableElement.remove();
    btnContainer.remove();
    mainForm.style.display = "flex";
  });

  printBtn.addEventListener("click", downloadPDFWithjsPDF);

  //CSS for Btns
  const custom_style = {
    width: "400px",
    paddingTop: "25px",
  };

  const backBtnStyle = {
    marginRight: "20px",
    padding: "5px",
  };
  const printBtnStyle = {
    marginLeft: "20px",
    padding: "5px",
  };

  Object.assign(backButton.style, backBtnStyle);
  Object.assign(printBtn.style, printBtnStyle);
  Object.assign(btnContainer.style, custom_style);
};

//Event Listeners

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  tableCreation(5, 10, 20, 30, 50, 75, 100);
});

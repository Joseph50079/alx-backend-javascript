
interface Student {
  firstName: string,
  lastName: string,
  age: Number,
  location: string
}

const student1: Student = {
  firstName: "Kalkidan",
  lastName: "Demes",
  age: 25,
  location: "Ethiopia"
}

const student2: Student = {
  firstName: "Tester",
  lastName: "unknown",
  age: 30,
  location: "Kenya"
}

const studentsList: Array<Student> = [ student1, student2 ];

function createStudentTable(data: Student[]): void {
  // Create the <table> element
  const table: HTMLTableElement = document.createElement("table");
  table.style.width = "50%";
  table.style.borderCollapse = "collapse";
  table.style.margin = "20px auto";

  // Create the <thead> element
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const headerRow: HTMLTableRowElement = document.createElement("tr");

  // Create and append header cells
  const headers: string[] = ["First Name", "Location"];
  headers.forEach((headerText) => {
      const th: HTMLTableCellElement = document.createElement("th");
      th.textContent = headerText;
      th.style.border = "1px solid #ddd";
      th.style.padding = "8px";
      th.style.backgroundColor = "#f4f4f4";
      th.style.textAlign = "left";
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Append <thead> to the table
  table.appendChild(thead);

  // Create the <tbody> element
  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  // Iterate through the array and append rows
  data.forEach((student) => {
      const row: HTMLTableRowElement = document.createElement("tr");

      // Create and append the first name cell
      const firstNameCell: HTMLTableCellElement = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      firstNameCell.style.border = "1px solid #ddd";
      firstNameCell.style.padding = "8px";
      row.appendChild(firstNameCell);

      // Create and append the location cell
      const locationCell: HTMLTableCellElement = document.createElement("td");
      locationCell.textContent = student.location;
      locationCell.style.border = "1px solid #ddd";
      locationCell.style.padding = "8px";
      row.appendChild(locationCell);

      // Append the row to the tbody
      tbody.appendChild(row);
  });

  // Append <tbody> to the table
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);
}

createStudentTable(studentsList);
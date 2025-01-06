var student1 = {
    firstName: "Kalkidan",
    lastName: "Demes",
    age: 25,
    location: "Ethiopia"
};
var student2 = {
    firstName: "Tester",
    lastName: "unknown",
    age: 30,
    location: "Kenya"
};
const studentsList = [student1, student2];
function createStudentTable(data) {
    // Create the <table> element
    const table = document.createElement('table');
    table.style.width = "50%";
    table.style.borderCollapse = "collapse";
    table.style.margin = "20px auto";
    // Create the <thead> element
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    // Create and append header cells
    var headers = ["First Name", "Location"];
    headers.forEach(function (headerText) {
        var th = document.createElement("th");
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
    var tbody = document.createElement("tbody");
    // Iterate through the array and append rows
    data.forEach(function (student) {
        var row = document.createElement("tr");
        // Create and append the first name cell
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        firstNameCell.style.border = "1px solid #ddd";
        firstNameCell.style.padding = "8px";
        row.appendChild(firstNameCell);
        // Create and append the location cell
        var locationCell = document.createElement("td");
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

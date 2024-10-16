export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(departmentName) {
      return Object.keys(departmentName).length;
    },
  };
  return report;
}

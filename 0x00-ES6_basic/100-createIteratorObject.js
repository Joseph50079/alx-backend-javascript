export default function createIteratorObject(report) {
  const itrableObject = Object.values(report.allEmployees).flat();
  return itrableObject;
}

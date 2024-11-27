export default function getResponseFromAPI() {
  const key = true;
  const response = new Promise((resolve, reject) => {
    if (key) {
      resolve('Success');
    } else {
      reject();
    }
  });
  return response;
}

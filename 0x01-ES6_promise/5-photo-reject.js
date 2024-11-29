export default function uploadPhoto(filename) {
  return new Promise((resovle, reject) => {
    reject(new Error(`${filename} 'cannot be processed'`));
  });
}

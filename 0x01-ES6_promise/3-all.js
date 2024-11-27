import { createUser, uploadPhoto } from './utils.js';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const [photo, user] = result;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => new Error('Signup system offline'));
}

handleProfileSignup();

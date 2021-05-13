import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // })

// // database.ref('expenses').push({
// //   description: 'Gum',
// //   note: '',
// //   amount: 100,
// //   createdAt: 984466315465
// // });



// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });


// // database.ref().set({
// //   name: 'Jaikishan Gurav',
// //   age: 30,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Engineer',
// //     company: 'JPMC'
// //   },
// //   location: {
// //     city: 'Mumbai',
// //     country: 'India'
// //   }
// // }).then(() => {
// //   console.log('Data was added');
// // }).catch((e) => {
// //   console.log('This failed with error',e);
// // });

// // database.ref().update({
// //   name: 'Jack',
// //   age: 29,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref().remove().then(() => {
// //   console.log('Data was removed');
// // }).catch((e) => {
// //   console.log('Did not remove data', e);
// // })
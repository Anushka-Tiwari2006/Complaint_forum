import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyD9AJhIAl41TCfv84IU50yNAJ_QYhmwKHI",
 authDomain: "complaint-forum-8a34d.firebaseapp.com",
 projectId: "complaint-forum-8a34d",
 storageBucket: "complaint-forum-8a34d.appspot.com",
 messagingSenderId: "214961468796",
 appId: "1:214961468796:web:c7be778a44dc65fa0b60f9"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


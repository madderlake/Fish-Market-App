import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAU7JqmzgT5c29C1KpCYsV8RytuyraemKc",
  authDomain: "maryah-s-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://maryah-s-catch-of-the-day.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

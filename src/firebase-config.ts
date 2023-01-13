// More libraries:  https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/**
 * Initialization for the ShyBye webapp in Firebase[1].
 * Also note: it is perfectly secure[2] to make expose these credentials
 * publicly (no need to set this up in a separate .env file)
 *
 * @see [1] {@link https://console.firebase.google.com/project/shybye-465c1/settings/general Firebase console}
 * @see [2] {@link https://youtu.be/q5J5ho7YUhA?t=242 Firebase - Back to the Basics @4:02}
 */
const app = initializeApp({
  apiKey: "AIzaSyCPtQzECWQLHjypxjK9iBiqngubTg5cJ6A",
  authDomain: "shybye-465c1.firebaseapp.com",
  projectId: "shybye-465c1",
  storageBucket: "shybye-465c1.appspot.com",
  messagingSenderId: "1080041909067",
  appId: "1:1080041909067:web:59623297c6548675b856ce",
});

export const auth = getAuth(app);

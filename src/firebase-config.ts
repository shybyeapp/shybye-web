import { initializeApp } from "firebase/app";

// More libraries:  https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

/**
 * Initialization for the ShyBye webapp in Firebase.
 * @see {@link https://console.firebase.google.com/project/shybyeapp/settings/general Firebase console}
 */
const app = initializeApp({
  apiKey: "AIzaSyBoyayUlmCH179VDnAudNU2b2RWYXF5rJE",
  appId: "1:20034934882:web:1965611cef54f575be193b",
  authDomain: "shybye.app",
  messagingSenderId: "20034934882",
  projectId: "shybyeapp",
  storageBucket: "shybyeapp.appspot.com",
});

export const auth = getAuth(app);

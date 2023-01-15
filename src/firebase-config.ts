import { initializeApp } from "firebase/app";

// More libraries:  https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

/**
 * Initialization for the ShyBye webapp in Firebase.
 * @see {@link https://console.firebase.google.com/project/shybyeapp/settings/general Firebase console}
 */
const app = initializeApp(
	{
		apiKey: "AIzaSyBoyayUlmCH179VDnAudNU2b2RWYXF5rJE",
		appId: "1:20034934882:web:1965611cef54f575be193b",
		authDomain: "shybye.app",
		measurementId: "G-68LMW0EZ0G",
		messagingSenderId: "20034934882",
		projectId: "shybyeapp",
		storageBucket: "shybyeapp.appspot.com",
	},
	"shybye-web"
);

export const auth = getAuth(app);

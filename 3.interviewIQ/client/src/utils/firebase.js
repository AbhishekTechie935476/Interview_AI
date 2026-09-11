
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAypYSW-i1WbopfZ0GhkLnvK8nikq1oo18",
    authDomain: "interviewagentai-dc1fb.firebaseapp.com",
  projectId: "interviewagentai-dc1fb",
  storageBucket: "interviewagentai-dc1fb.firebasestorage.app",
  messagingSenderId: "1055024166035",
  appId: "1:1055024166035:web:f052c040f2fcea6ff5c966"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
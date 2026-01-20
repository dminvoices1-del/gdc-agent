// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5bLiGkP0WZYAD3WQHYHI6_niph5Va9mU",
  authDomain: "ai-assistant-e5d58.firebaseapp.com",
  projectId: "ai-assistant-e5d58",
  storageBucket: "ai-assistant-e5d58.firebasestorage.app",
  messagingSenderId: "739341574912",
  appId: "1:739341574912:web:c698a2e43cc8f7f1a709e5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

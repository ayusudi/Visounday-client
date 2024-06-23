import { initializeApp } from "firebase/app";
const { VITE_FIREBASE_APIKEY, VITE_FIREBASE_AUTHDOMAIN, VITE_FIREBASE_PROJECTID, VITE_FIREBASE_APPID, VITE_FIREBASE_MEASUREMENTID } = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_APIKEY,
  authDomain: VITE_FIREBASE_AUTHDOMAIN,
  projectId: VITE_FIREBASE_PROJECTID,
  appId: VITE_FIREBASE_APPID,
  measurementId: VITE_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLCgpwY516N6A9UmE0w_YOZOZXihd_kHY",
  authDomain: "basic-shop-7a9bc.firebaseapp.com",
  projectId: "basic-shop-7a9bc",
  storageBucket: "basic-shop-7a9bc.appspot.com",
  messagingSenderId: "61726303554",
  appId: "1:61726303554:web:2e4b84eafedef4b4ded4db"
};


const app = initializeApp(firebaseConfig);

export default app
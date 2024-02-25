import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestingPage from "./pages/TestingPage";
import MainPageBanner from "./pages/MainPageBanner";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";

// firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "lmnop-d1562.firebaseapp.com",
  projectId: "lmnop-d1562",
  storageBucket: "lmnop-d1562.appspot.com",
  messagingSenderId: "690961635374",
  appId: "1:690961635374:web:96ef8c75342b560dcf27bf",
  measurementId: "G-KVVJ4MB9S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect to Firebase Emulator if in development mode
if (process.env.MODE !== "production") {
  const auth = getAuth(app);
  connectAuthEmulator(auth, "http://localhost:9099");

  const database = getDatabase(app);
  connectDatabaseEmulator(database, "localhost", 9000);
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageBanner />} />
          <Route path="/test" element={<TestingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

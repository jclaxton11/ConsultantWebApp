import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Users from './Users';

const firebaseConfig = {
  apiKey: "AIzaSyDSpV-t2d-OkNNPGlFOE47_E3Cvw9nUIlU",
  authDomain: "consultantapp-80d84.firebaseapp.com",
  projectId: "consultantapp-80d84",
  storageBucket: "consultantapp-80d84.appspot.com",
  messagingSenderId: "1093894743131",
  appId: "1:1093894743131:web:bd8f7556a1a4646ca98b7e",
  measurementId: "G-2YRP0B9YCK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firestore Data</h1>
        <Users />
      </header>
    </div>
  );
}

export default App;
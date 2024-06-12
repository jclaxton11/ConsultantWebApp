import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

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
const db = getFirestore(app);

function Users() {
  const [users, setUsers] = useState([]);
//   const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchUsersAndScores = async () => {
        debugger;
      const userCollection = collection(db, "Users");
      const usersSnapshot = await getDocs(userCollection);
      const usersList = [];

      for (const userDoc of usersSnapshot.docs) {
        const userData = userDoc.data();
        const scoresCollection = collection(db, "Users", userDoc.id, 'Scores');
        const scoresSnapshot = await getDocs(scoresCollection);
        const scoresList = [];
        scoresSnapshot.docs.forEach(scoreDoc => {
            const scoreData = scoreDoc.data();
            for (const score in scoreData) {
                scoresList.push(scoreData[score]);
                console.log("Score: ", scoreData[score]);
            }
      });

        usersList.push({
          ...userData,
          id: userDoc.id,
          scores: scoresList,
        });
      }
        console.log(usersList); 
      setUsers(usersList);
    };

    fetchUsersAndScores();
  }, []);


  return (
    <div className="App">
        {users.map((user) => (
        <div key={user.id}>
          <h2>{user.id}</h2>
          <h3>Scores:</h3>
          <ul>
            {user.scores.map((score, index) => (
              <li key={index}>Value: {score.score}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Users;

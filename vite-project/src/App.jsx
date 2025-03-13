import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


      function handleLogin() {
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            
            if (login === "admin" && password === "1234") {
                localStorage.setItem('isLoggedIn', 'true'); 
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid login or password");
            }
        }

        function goToSignUp() {
            window.location.href = "signup.html";
        }

        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = "dashboard.html";
        }
} 

export default App

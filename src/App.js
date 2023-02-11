import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import SignInPage from './Pages/SignInPage';



function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/signup" element={<SignupPage />} />
        <Route  path="/login" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

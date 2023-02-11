import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './Pages/SignInPage';
import SignupPage from './Pages/SignupPage';


function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage />} />
        <Route path="/login"  element={ <SignInPage /> } />
        <Route path="/signup"  element={ <SignupPage /> } />
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import SignIn from './components/SignIn.js';
import ProfilPage from './components/ProfilPage.js';
import Transactions from './components/Transactions.js';

function App() {
    return(
        <div>
          <Router> 
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/sign-in" element={<SignIn/>} />
                  <Route path="/profil" element={<ProfilPage/>} />
                  <Route path="/transactions/:transtype" element={<Transactions/>} />
                  <Route path="*" element={<Home />} />
              </Routes>
          </Router>
        </div>
    );
}

export default App;
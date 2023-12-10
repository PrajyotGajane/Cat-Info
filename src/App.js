
import Dashboard from './dashboard/Dashboard';
import CatBreedDetails from './components/CatBreedDetails';
import { Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (    
      <div>
        <header>
          <Routes>
            <Route path="/" element={  <Dashboard/>} />
            <Route path="details/:id" element={<CatBreedDetails />} />
          </Routes>
        </header>        
        <Toaster/>
      </div>
  );
}

export default App;

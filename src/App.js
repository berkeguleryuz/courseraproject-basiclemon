import './App.css';
import ReservationForm from './components/ReservationForm';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <>
        <Nav />
        <Home />
        <ReservationForm />
        <footer>
        <p>&copy; 2023 Lemon Restaurant</p>
      </footer>
    </>
  );
}

export default App;

import './App.css';
import NavBar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <ItemListContainer title={'Productos destacados'} />
    </>
  );
}

export default App;

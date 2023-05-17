import { BrowserRouter } from 'react-router-dom';
import NavRouter from './Components/NavRouter';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavRouter />
      </BrowserRouter>
    </>
  );
}

export default App;

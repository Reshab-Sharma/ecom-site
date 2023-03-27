import react,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

function App() {
   const [modalOpen, setModalOpen] = useState(false);
  const[enableEditModal, setEnableEditModal] = useState(false);

  
  const handleClickToOpen = () => {
    setModalOpen(true);

  };
  return (
    <div className="App">
      <Navbar setEnableEditModal={setEnableEditModal}  handleClickToOpen={handleClickToOpen}/>
      <Products enableEditModal={enableEditModal} setEnableEditModal={setEnableEditModal} handleClickToOpen={handleClickToOpen} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
}

export default App;

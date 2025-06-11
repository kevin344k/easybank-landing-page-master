
import Navbar from "./components/Navbar";

import Main from "./components/Main";
import ModalDisclaimer from './components/ModalDisclaimer';
import Footer from "./components/Footer";
import './App.css'

function App() {


  return (
    <>
     <ModalDisclaimer />
    <Navbar></Navbar>
    <Main></Main>
    <Footer></Footer>
    </>
  )
}

export default App

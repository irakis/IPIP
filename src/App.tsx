import { Routes, Route } from 'react-router-dom';
import Header from './modules/header/Header.tsx';
import Footer from './modules/footer/Footer.tsx';
import Home from './modules/home/Home.tsx';
import './App.css'
import MainContainer from './modules/layout/MainContainer.tsx'

function App() {

  return (
   <MainContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/*<Route path='*' element={<Error404/>}/>*/}
      </Routes>
      <Footer/>
  </MainContainer>
  )
}

export default App

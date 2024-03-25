import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import CharactersList from './CharactersList'
import CharacterDetail from './CharacterDetail'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/characters' element={<CharactersList />} />
        <Route exact path='/characters/:id' element={<CharacterDetail />} />
        {/* <AuthLayout >
        </AuthLayout> */}

      </Routes>

    </>
  )
}

export default App

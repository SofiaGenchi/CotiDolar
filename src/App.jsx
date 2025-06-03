import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Noticias from './pages/Noticias/Noticias'

function App() {
  return (
    <div>
      <Header />
      <Home></Home>
      <Noticias></Noticias>
      <Footer />
    </div>
  )
}

export default App

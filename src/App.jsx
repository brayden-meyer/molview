import './App.css'
import NavBar from './components/NavBar'
import FeaturedMoleculeCardGrid from './components/FeaturedMoleculeCardGrid'

function App() {
  return (
    <>
      <NavBar/>
      <div className="py-14 px-32">
        <div className="mb-14 text-3xl font-semibold">Popular molecules</div>
        <FeaturedMoleculeCardGrid/>
      </div>
      
    </>
  )
}

export default App

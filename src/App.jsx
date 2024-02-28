import Login from './pages/Login'
import bgImage from './assets/bg-image.png'
import './style.css'


function App() {

  return (
    <>
      <div className='min-h-screen bg-cover bg-center flex items-end' style={{ backgroundImage: "url(" + bgImage + ")" }}>
        <div className="container mx-auto px-4">
          <Login />
        </div>
      </div >
    </>
  )
}

export default App

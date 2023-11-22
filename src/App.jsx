
import { useEffect, useState } from 'react'
import './App.css'
import MainPage from './page/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import "./index.css"
function App() {
  const  [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    
    const timeOut = setTimeout(()=>{
      setLoading(false)
    },3000);

    return () => clearTimeout(timeOut);

  },[])


  return (
    <Router>
      {loading && <Loading/>}
      <div className={`transition-opacity ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* tampilkan ketika loading telah selesai */}
        {
          !loading && (
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          )
        }
      </div>
        
    </Router>
  )
}

export default App

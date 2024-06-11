import './App.css'
import axios from 'axios'
function App() {
  const login = async () => {
    const res = await axios.post('http://localhost:4000/login', null, {
      withCredentials: true
    })
    console.log(res.data)
  }
  const getAccessToken = async () => {
    const res = await axios.get('http://localhost:4000', {
      withCredentials: true
    })
    console.log(res.data)
  }
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={getAccessToken}>Get Access Token</button>
    </div>
  )
}

export default App

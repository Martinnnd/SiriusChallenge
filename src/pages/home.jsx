import './App.css'
import Menu from './components/Menu'
import Tweets from './components/Tweets'
import Users from './components/Users'

function App() {

  return (
    <>
    <div className='flex justify-between h-screen'>
    <Menu />
    <Tweets />
    <Users />
    </div>
    </>
  )
}

export default App

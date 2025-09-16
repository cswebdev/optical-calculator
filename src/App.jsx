import SecondaryNav from 'components/SecondaryNav'
import './App.css'
import MainTable from './components/MainTable'
import TopNav from './components/TopNav'

function App() {


  return (
    <>
    <div className="lex flex-col items-center justify-center gap-2">
      <TopNav />
        <div className='mt-2'>
        <SecondaryNav />
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <MainTable />
      </div>
    </>
  )
}

export default App
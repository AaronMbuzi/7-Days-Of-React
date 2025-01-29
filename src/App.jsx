import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './firstComponent'
import SearchbarComponent from './SearchbarComponent'
import SearchButton from './searchButton'
import TableComponent from './TableComponent'
import DataTablesComponent from './DataTablesComponent'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent />
      <SearchbarComponent />
      <SearchButton />
      {/* <TableComponent /> */}
      {/* <DataTablesComponent /> */}
    </>
  )
}

export default App

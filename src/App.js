import './App.css';
import Select from 'react-select'
import { useDeferredValue, useEffect, useState } from 'react';

function App() {
const [datas, setDatas] = useState ([])
const [userSelect, setUserSelect] = useState("")
const [isShow, setIsShow] = useState(false)
  const getBerries = async () => {
    const berries = await fetch( "https://pokeapi.co/api/v2/berry/")
    const value = await berries.json()
    let result = value.results.map(data => {
      return {
        label : data.name,
        value : data.name
      }
    })
    setDatas(result.sort((a, b) => a.label.localeCompare(b.label)))
  
 }

  useEffect(() => {
    getBerries ()
  }, [])
  
  const handleSubmit = () => {
    setIsShow(true)
  }

    const handleChange = (value) => {
      setUserSelect (value)
    }

  
  return (
    <div className="App">
      <h1>{isShow ? userSelect : ""}</h1>
      <button onClick={() => handleSubmit ()}>show value</button>
      <br />
      <br />
    <Select options={datas} onChange={(e) => handleChange(e.value)}></Select> 
    </div>
  );
  }
  export default App;
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  
  const [crypto, setCrypto] = useState([])
  const getData = async ()=>{
      const {data} = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
      // console.log(data)
      setCrypto(data)
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (

    <>
    <div className='min-h-screen bg-black p-5'>
      {/* <button onClick={getData} className='bg-teal-600 text-white px-4 py-2 rounded font-bold'>Get Data</button> */}
      <div className='bg-gray-800 p-5 mt-5'>
        {crypto.map(function(elem){
          return <div className='bg-white rounded-xl text-center inline-block m-5'>
            <img className='rounded-t-xl' height="200px" width="200px" src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
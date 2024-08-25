import { useState } from "react"


function App() {
  const [color, setColor] = useState("#352f44")

  return (
    <div className="w-full h-screen duration-700"
    style={{backgroundColor: color}}
    >
      <div className="flex justify-center pt-20">
      <h1><b>Background Color Changer Using React</b></h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("#f95959")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#f95959"}}
          >Red</button>
          <button
          onClick={() => setColor("#02383c")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#02383c"}}
          >Green</button>
          <button
          onClick={() => setColor("#455d7a")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#455d7a"}}
          >Light Blue</button>
          <button
          onClick={() => setColor("#680747")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#680747"}}
          >Purple</button>
          <button
          onClick={() => setColor("#BC8F8F")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#BC8F8F"}}
          >RosyBrown</button>
          <button
          onClick={() => setColor("#21243d")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#21243d"}}
          >Indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
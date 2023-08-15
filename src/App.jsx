import { useState } from "react"


function App() {
  const aa = "transition-all hover:bg-teal-800 ease-in flex cursor-pointer uppercase bg-teal-700 w-[120px] p-2 text-white justify-center items-center flex rounded-lg h-fit text-2xl"
  const bb = "transition-all hover:bg-teal-800 ease-in flex cursor-pointer uppercase bg-teal-700 w-[100px] p-2 text-white justify-center items-center flex rounded-lg h-fit text-2xl"
  const equal = "transition-all hover:bg-zinc-800  flex cursor-pointer uppercase bg-zinc-600 w-[210px] p-2 text-white justify-center items-center flex rounded-lg h-fit text-2xl"

  const [result , setResult] = useState('')


  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('')
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculte = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error')
    }
  }


  return (
    <div className=" h-screen flex items-center justify-center">

    <div className="bg-slate-200 w-1/3 flex flex-col justify-center items-center mx-auto mt-7 rounded-md shadow-md">
      <div className="flex justify-end items-center bg-black w-[100%] h-[70px] rounded-md">
        <h2 className="text-white text-3xl px-3 font-bold">
          {result}
        </h2>
      </div>
      <div className="flex flex-cols-3 justify-around items-center w-full h-9 mx-auto my-6">
        <button className={aa}><h1 id="1">ON</h1></button>
        <button className={aa} onClick={backspace} name='0'><h1>del</h1></button>
        <button className={aa} onClick={clear}><h1>ac</h1></button>
      </div>

      <div className="grid grid-cols-4 justify-between items-center gap-3">
        <button onClick={handleClick}  className={bb} name='1'><h1>1</h1></button>
        <button onClick={handleClick}  className={bb} name='2'><h1>2</h1></button>
        <button onClick={handleClick} className={bb} name="3"><h1>3</h1></button>
        <button className={bb} onClick={handleClick} name='+'><h1>+</h1></button>
        <button className={bb} onClick={handleClick} name="4" ><h1>4</h1></button>
        <button className={bb} onClick={handleClick} name='5' ><h1>5</h1></button>
        <button className={bb} onClick={handleClick} name='6' ><h1>6</h1></button>
        <button className={bb} onClick={handleClick} name='-' ><h1>-</h1></button>
        <button className={bb} onClick={handleClick} name='7' ><h1>7</h1></button>
        <button className={bb} onClick={handleClick} name='8' ><h1>8</h1></button>
        <button className={bb} onClick={handleClick} name='9' ><h1>9</h1></button>
        <button className={bb} onClick={handleClick} name='/' ><h1>/</h1></button>
      </div>

      <div className="grid grid-cols-4 justify-between items-center ml-5 my-4 mx-auto">
        <button className={bb} onClick={handleClick} name='0' ><h1>0</h1></button>
        <button className={bb} onClick={handleClick} name='*' ><h1>x</h1></button>
        <button className={equal} onClick={calculte} value={result}><h1>=</h1></button>
      </div>
    </div>
    </div>
  )
}

export default App

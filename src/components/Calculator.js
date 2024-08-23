import React, { useState } from 'react'

const Calculator = () => {
    const [Input, setInput]=useState("")

    const HandleClick=(value)=>{

        if(value==="="){
            try{
                setInput(eval(Input).toString())
            } catch (error){
                setInput("Error")
            }
        }
        else if(value==="C"){
            setInput("")
        }
        else{
            setInput(Input + value)
        }
    }




    const arr=["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+"]
  return (
    <div className='flex items-center justify-center'>
      
    <div className='w-[460px] h-[460px] mt-8 bg-gray-100 flex flex-col justify-center rounded-xl' >
      
        <div>
            <div className='flex justify-center items-center bg-slate-400 h-14 rounded-md text-4xl mx-4'>
        <div className=' '>{Input}</div>
        </div>
      <div className='grid grid-cols-4'>
        {arr.map((symbol)=>(<button className=' m-4 bg-slate-500 h-12 rounded-md text-3xl text-slate-200 ' key={symbol} onClick={()=>HandleClick(symbol)} >{symbol}</button>))}
        <button className='bg-blue-500 h-12 grid col-span-4  rounded-md text-white text-3xl mx-4' onClick={()=>HandleClick("=")}>=</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Calculator

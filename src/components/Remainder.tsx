import listType from '../models/List'
import { useState } from "react";

  

const Remainder = () => {
   const [state,setstate] = useState<listType[]>([{
    id:1,
    data:"finish todo app",
    completed:false
   }])

   const [input,setinput] = useState<string>("");
   const [check,setCheck] = useState<boolean>(false);
   const handleNewNote = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setinput(e.target.value)
   }
   const newNote = () =>{
     const newTag:listType = { id:Date.now() , data:input , completed:false}
     setstate([...state,newTag])
     setinput("")
   }
   const handleToggler = (id:number) =>{
       setstate(
          state.map((item):listType=>{
            if(item.id===id){
                return{...item,completed:!item.completed}
            }
            return item
          })
        
       ) 
        setCheck(true)
   } 
   const deleteNote = (id:number) => {
       setstate((prevState):listType[]=>{
         const index = prevState.findIndex(item => item.id===id)
         if(index!=-1){
            const newState = [...prevState]
            newState.splice(index,1)
            return newState
         }
         return prevState
       })
      
   }
   return (
   
    <div className='main-div'>
       <h2>"Procrastination is the thief of time." - Edward Young</h2>
       <ul>
        {state.map(item => <li key={item.id} style={{textDecoration:item.completed?"line-through":"none"}}>{item.data}{ <input type="checkbox" onChange={()=> {handleToggler(item.id)}}/>} <i onClick={()=>deleteNote(item.id)} className="fa-regular fa-circle-xmark"></i></li>)}
       </ul>
       <input type="text" value={input} onChange={handleNewNote} name="text" id="" />
       <button type="submit" onClick={newNote} >submit</button>
    </div>
  )
}

export default Remainder

import { useState } from "react";

function Todu(){
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    const AddTo =() => {
        const newTodo ={
            id:Date.now(),
            text:input
        }
        setTodo([...todo,newTodo]);
        setInput("");
    }
    const deleteTo = (id) => {
        const updatedTodo = todo.filter((item)=> item.id !==id)
        setTodo(updatedTodo);
    }

    return<>
    <div>Todu Component</div>
    <div className="min-h-full border p-4 rounded-md ">
        <div className="p-4 m-2">
            <input 
                type="text"
                placeholder="Enter Todo"
                className="border py-2 px-1 rounded-md"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="border bg-red-300 px-1 py-2 mx-2 rounded-md" onClick={AddTo}>Add</button>
        </div>

   
            <h1 className="text-2xl font-bold mx-4 my-2">Todo List</h1>
            <div className=" border py-4 flex-col justify-center space-y-4">
                {/* {todo.map((item)=>{
                    console.log(item);
                })} */}
                   {todo.map((item)=>(
                    <div key={item.id} className="flex justify-center space-x-10">
                        <h1 className="font-bold">{item.id}</h1>
                        {console.log(item.text)}
                        <h3 className="">{item.text}</h3>
                        <button className="border bg-red-300 px-1 py-2 mx-2 rounded-md" onClick={() => deleteTo(item.id)}>Delete</button>
                    </div>
                ))}
                 
                 
            </div>
 
    </div>
    </>
}
export default Todu;
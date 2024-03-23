import { useState } from "react";
import { IoEnter } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [inputData, setInputData] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.trim() !== "") {
      if (isEdit) {
        const updatedData = [...todoData];
        updatedData[editIndex] = inputData;
        setTodoData(updatedData);
        setIsEdit(false);
      } else {
        setTodoData([...todoData, inputData]);
      }
      setInputData("");
    }
  };
  const handleDelete = (index) => {
    const updatedData = [...todoData];
    updatedData.splice(index, 1);
    setTodoData(updatedData);
  };
  const handleEdit = (index) => {
    setInputData(todoData[index]);
    setEditIndex(index);
    setIsEdit(true);
  };
  const clearAll = () => {
    setTodoData([]);
  };

  return (
    <div className="p-4 ">
      <div className="flex justify-center py-8">
        <span className="text-4xl font-bold text-blue-950 text-wrap"> Todo_App</span>
      </div>
      <div className="text-black mx-auto border md:w-3/5 w-4/5 bg-slate-300 rounded-2xl">
        
        <form
          onSubmit={handleSubmit}
          className="  p-2 md:p-3 md:text-2xl space-x-1 md:space-x-2 flex justify-center "
        >
          <input
            className=" outline-none  md:w-2/5 bg-white rounded-3xl px-1 md:px-3 py-1"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter Data"
          />
          <button type="submit" title="Save Item" className="text-xl md:text-4xl text-blue-950">
            {!isEdit ? <IoEnter /> : <FaEdit />}
          </button>
        </form>
        <div className=" ">
          {todoData.map((data, index) => (
            <div key={index} className="w-11/12 flex  mx-auto md:w-3/5 space-x-2 my-1 ">
              <span className="truncate block md:text-xl mt-2 bg-white w-full rounded-2xl px-2 md:px-3 shadow-zinc-900 hover:shadow-xl py-1 md:py-2 ">
                {data}
                {/* </span>
                <span className='flex'> */}
                </span>
                <div className="text-xl lg:text-3xl flex text-blue-950">
                  <button onClick={() => handleEdit(index)} title="Edit Item">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(index)} title="Delete Item">
                    <MdDelete />
                  </button>
                </div>
              
            </div>
          ))}
        {todoData.length >= 1 ? (
          // <button className='text-2xl p-3 borde' onClick={clearAll}>Clear_All</button>
          <div className="flex justify-center">
            <button
              onClick={clearAll}
              class="bg-blue-500 flex justify-center hover:bg-blue-500 text-white my-4 hover:text-black font-bold py-2 px-4 border-b-4 border-l-4 hover:border-r-4 hover:border-t-4 hover:border-b-0 hover:border-l-0 border-blue-700 hover:border-blue-700 rounded-lg"
            >Clear All
            </button>
          </div>
        ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;

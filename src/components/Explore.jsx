// import { useState } from "react";
// import {INDIA_MAP_IMG} from "../utils/constant"
import More from "./More";


const Explore = () => {
  // const [searchValue, setSearchValue] = useState(null);
  // const[print,setPrint] = useState(false)

  // function search(e) {
  //   console.log(e.target.value);
  //   setSearchValue(e.target.value);
  //   setPrint(false)
  // }
  // return (
  //   <>
  //     <div className="grid grid-cols-6 cursor-pointer">
  //       {
  //         print ? 
  //         <h1>{searchValue}</h1>
  //         :null
  //       }
  //       <input
  //         className="col-start-4 col-end-2  py-2 my-2 font-bold text-2xl justify-center border-black border rounded-lg bg-gray-100"
  //         type="text"
  //         onChange={search}
  //       />

  //       <button onClick={()=>setPrint(true)} className=" pl-0 py-2 my-2 font-bold text-2xl justify-center border-black border rounded-lg bg-gray-100">
  //         Search
  //       </button>
  //     </div>
  //     <div className="bg-slate-700">
  //       <img className="w-full absolute" src={INDIA_MAP_IMG} alt="INDIA_MAP_IMG"/>
  //     </div>
      <More/>
    // </>
  // );
};

export default Explore;

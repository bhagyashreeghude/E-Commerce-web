// import Link from "react-dom"

const Navbar = () => {

  function clickBtn (){
    // <Link to="/explore"></Link>

  }
  return (
    <div className=" bg-slate-200 grid grid-cols-6 w-full ">
      <img className="h-20 w-20 p-4 pl-2 col-span-1 " alt="nature-logo" src="https://cdn.vectorstock.com/i/500p/04/76/nature-landscape-mountain-logo-vector-5610476.avif"></img>
      <h1 className=" col-span-1 lg:p-4 font-serif text-green-900 lg:text-5xl pt-5 m-2 ">India</h1>
      <button className=" col-span-1 lg:p-4 lg:text-3xl font-bold ">About</button>
      <button className="col-span-1 lg:p-4 lg:text-3xl font-bold  pl-4" onClick={clickBtn()}>Explore</button>
    </div>
  )
}

export default Navbar
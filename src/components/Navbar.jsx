

const Navbar = () => {

  function clickBtn (){

  }
  return (
    <div className=" bg-slate-200 grid grid-cols-6">
      <img className="h-20 w-20 p-4 pl-2 col-span-1" alt="nature-logo" src="https://cdn.vectorstock.com/i/500p/04/76/nature-landscape-mountain-logo-vector-5610476.avif"></img>
      <h1 className=" col-span-1 p-4 font-serif text-green-900 text-5xl ">India</h1>
      <button className="border-black text-black p-2 m-2 rounded-lg"  >Search</button>
      <button className=" col-span-1 p-4 text-3xl font-bold ">About</button>
      <button className="col-span-1 p-4 text-3xl font-bold" onClick={clickBtn()}>Explore</button>
    </div>
  )
}

export default Navbar
import { IMG_URL } from "../utils/constant"
import { useEffect, useState } from "react"
import.meta.env
const SubComponent = () => {

  const [imgs, setImgs] = useState(null)


  useEffect(() => {
    fetchImg()

  }, [])

  const fetchImg = async () => {
    const data = await fetch(IMG_URL+import.meta.env.VITE_UNSPLASH_ACCESS_KEY)
    const json = await data.json()
    // console.log(json)
    // console.log(json?.results[0]?.alt_description)
    setImgs(json?.results)

  }
  return (
    <div className="flex flex-col  md:flex-row">
      {
        imgs && imgs.map((data,id)=>(
          <div key={id}>
            <img className="h-60 w-full lg:h-60  p-2 border-solid border-2 border-black rounded-lg hover:scale-125 md:h-60 md:w-[60rem] " src={data?.urls?.regular} alt={data?.alt_description}/>
            <h1 className="lg:text-2xl p-2">{data?.alt_description}</h1>
          </div>
        )

        )
      }
      
    </div>
  )
}

export default SubComponent
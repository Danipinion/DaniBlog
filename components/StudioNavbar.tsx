import Link from "next/link"
import { ArrowUturnLeftIcon }  from "@heroicons/react/24/solid"

const StudioNavbar = (props:any) => {
  return (
    <div>
        <div className="flex items-center justify-between p-3">
            <Link href="/" className="text-[#0060ff] flex items-center">
                    <ArrowUturnLeftIcon  className="h-6 w-6 text-[#0060ff] mr-2" />
                    
                    Go To Website
            </Link>

            <div className="hidden md:flex p-3 rounded-lg justify-center border-2 border-[#0060ff]">
                <h1 className="font-bold text-white">
                    See my portofolio 👉
                </h1>
                <Link href="danipinion.vercel.app" className="text-[#0060ff] font-bold ml-2">YoYic54</Link>
            </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
import { LuHash } from "react-icons/lu"
import { RxPencil1 } from "react-icons/rx"

const BookSkeletons = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center xl:justify-start gap-x-5 gap-y-8 px-4">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="w-[180px] relative flex flex-col justify-center h-[270px] font-poppins border shadow-md border-[#9F9F9F] rounded-l-[6px] rounded-r-[16px] p-4">
            <div className="w-full h-[38px] leading-snug tracking-tighter text-gray-600 bg-gray-300 animate-pulse">
            </div>
            <div className="w-full h-[173px] overflow-hidden mt-2 border rounded bg-gray-300 animate-pulse">
            </div>
            <div className="flex gap-x-2 content-center text-xs pt-2 font-medium text-gray-600">
              <div className="flex gap-0.5 justify-center items-center">
                <LuHash />
                <p className="bg-gray-300 animate-pulse">0000</p>
              </div>
              <div className="flex gap-0.5 justify-center items-center">
                <RxPencil1 />
                <p className="bg-gray-300 animate-pulse">Unknown</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookSkeletons
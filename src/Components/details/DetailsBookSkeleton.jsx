const DetailsBookSkeleton = () => {
  return (
    <section className="max-w-5xl md:mx-auto flex flex-col-reverse md:flex-row justify-between mx-4">
      <div className="mt-10 md:mt-2">
        <div className="bg-gray-300 rounded-md animate-pulse h-14 w-full md:w-[400px]">
        </div>
        
        <div className="bg-gray-300 rounded-md mt-12 animate-pulse h-[400px] w-full md:w-[400px]">
        </div>
      </div>

      <div className="rounded-md h-[300px] md:h-[300px] mx-10 md:mx-0 md:w-[200px] md:mt-[125px] border bg-gray-300 animate-pulse">
      </div>
    </section>
  )
}

export default DetailsBookSkeleton
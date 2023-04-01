const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-6xl">Dani Daily Blog</h1>
            <h2 className="mt-5 md:mt-2">
                Welcome to{' '}
                <span className="underline decoration-4 decoration-[#0060ff]">Everpeople In this Wolrd</span>{' '}
                favourite blog 
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Mikrotik, Linux, Cisco Packet Tracer, Anymore
        </p>
    </div>
  )
}

export default Banner
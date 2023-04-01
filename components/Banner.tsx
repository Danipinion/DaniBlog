const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-5 py-5 mb-0 text-center">
        <div>
            <h1 className="text-6xl">Dani Blog</h1>
            <h2 className="mt-5 md:mt-2">
                Welcome to{' '}
                <span className="underline decoration-4 decoration-[#0060ff]">This Web</span>{' '}
                Favorite Blogs
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Belajar Bareng Mikrotik, Linux, Cisco Packet Tracer, Anymore
        </p>
    </div>
  )
}

export default Banner
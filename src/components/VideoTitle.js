const VideoTitle = ({title , overview})=>{
    return(
        <div className=" w-screen aspect-video pt-[12%] px-7 md:px-10 space-y-5 absolute bg-gradient-to-r from-black text-white">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className=" hidden md:inline-block text-lg w-1/4">{overview}</p>
            <div className=" space-x-5">
                <button className="w-20 md:p-2 md:w-32 text-lg bg-white rounded-md text-black hover:bg-opacity-80">▶️Play</button>
                <button  className="hidden md:inline-block p-2 w-32 text-lg bg-gray-500 rounded-md bg-opacity-50  text-white">! More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
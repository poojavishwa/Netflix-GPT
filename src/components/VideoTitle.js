const VideoTitle = ({title , overview})=>{
    return(
        <div className=" w-screen aspect-video pt-[12%] px-10 space-y-5 absolute bg-gradient-to-r from-black text-white">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg w-1/4">{overview}</p>
            <div className=" space-x-5">
                <button className=" p-2 w-32 text-lg bg-white rounded-md text-black hover:bg-opacity-80">▶️Play</button>
                <button  className=" p-2 w-32 text-lg bg-gray-500 rounded-md bg-opacity-50  text-white">! More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
import Loader from "../ui/loader";

const Interface = () => {
    return ( 
        <>
            <div className="absolute top-1/2 left-1/2">
                <div className="flex flex-col justify-center items-center">
                    < Loader
                    w="w-25"
                    h="h-25"
                    br_color="border-blue-600"
                    />
                    <p className="text-lg">Loading...</p>
                </div>
                <div className="text-center mt-10">
                    <h1 className="text-gray-800 font-bold text-4xl">ToDo APP <p className="text-gray-400 font-normal text-sm">V-1.0</p></h1>
                </div>
            </div>
        </>
     );
}

export default Interface;
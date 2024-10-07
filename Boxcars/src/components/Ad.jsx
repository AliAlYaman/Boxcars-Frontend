export const Ad = () => {
    return (
        <div className="bg-[url('assets/images/background.png')] bg-cover bg-center h-[500px] w-full flex flex-col items-start justify-center gap-4 text-white px-8 md:px-20 lg:px-40">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-dmSans font-medium mb-4 text-start">
                We Make Finding The<br/>
                Right Car Simple
            </h1>
            <button className="px-10 md:px-12 lg:px-16 py-2 md:py-3 bg-transparent rounded-lg hover:bg-black transition duration-300 font-dmSans font-medium text-sm text-center border ">
                Find Out More
            </button>
        </div>
    );
};

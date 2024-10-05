export const ReviewCards = () => {
    return(
        <div className="flex flex-col justify-between items-start px-8 py-6 rounded-xl shadow-xl overflow-hidden max-md:w-full mb-20 w-fit bg-white gap-2">
            <div className="flex justify-start items-center">
                <img src="assets/icons/star.png" alt="" />
                <img src="assets/icons/star.png" alt="" />
                <img src="assets/icons/star.png" alt="" />
                <img src="assets/icons/star.png" alt="" />
                <img src="assets/icons/star.png" alt="" />
            </div>
            <p className="font-semibold">Sales process was simple and easy</p>
            <p>Sales process was simple and easy.<br/>
            Maximillion was friendly and I didn’t feel...</p>
            <p className="font-semibold">Ali Tufan</p>
        </div>
    );
}
import { Link } from "react-router-dom";

export const AboutAd = () => {
    return (
        <div className="flex flex-col lg:flex-row my-28 w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full lg:w-1/2 bg-[#EEF1FB] flex justify-center lg:justify-start">
                <img src="assets/images/video-image.png" alt="Video Preview" className="w-full lg:w-auto"/>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 bg-[#EEF1FB] rounded-r-xl px-6 md:px-12 gap-6 max-lg:py-16">
                <p className="font-semibold font-dmSans text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">Get A Fair Price For Your Car Sell To Us Today</p>
                <p className="font-dmSans text-center lg:text-left">We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of options.</p>
                
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-start gap-2 w-full">
                        <img src="assets/icons/check.png" alt="Check" width={20} />
                        <p className="font-dmSans font-medium">We are the UK’s largest provider, with more patrols in more places</p>
                    </div>
                    <div className="flex items-start gap-2 w-full">
                        <img src="assets/icons/check.png" alt="Check" width={20} />
                        <p className="font-dmSans font-medium">You get 24/7 roadside assistance</p>
                    </div>
                    <div className="flex items-start gap-2 w-full">
                        <img src="assets/icons/check.png" alt="Check" width={20} />
                        <p className="font-dmSans font-medium">We fix 4 out of 5 cars at the roadside</p>
                    </div>
                </div>

                <a href='/signin' className="cursor-pointer self-center lg:self-start bg-[#405FF2] px-6 py-3 rounded-xl text-white font-dmSans font-medium">
                    Get Started
                </a>
            </div>
        </div>
    );
};

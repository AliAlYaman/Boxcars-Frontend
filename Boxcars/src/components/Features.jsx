
export const Features = () => {
    const features = [
        {
            id:1,
            icon: 'assets/icons/Finance.png',
            title: 'Special Financing Offers',
            subtitle: 'Our stress-free finance department that can find financial solutions to save you money.'
        },
        {
            id:2,
            icon: 'assets/icons/Trust.png',
            title: 'Trusted Car Dealership',
            subtitle: 'Our stress-free finance department that can find financial solutions to save you money.'
        },
        {
            id:3,
            icon: 'assets/icons/Price.png',
            title: 'Transparent Pricing',
            subtitle: 'Our stress-free finance department that can find financial solutions to save you money.'
        },
        {
            id:4,
            icon: 'assets/icons/Service.png',
            title: 'Expert Car Service',
            subtitle: 'Our stress-free finance department that can find financial solutions to save you money.'
        },
    ]

    return(<>
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-48 gap-10">
        <p className="text-4xl font-dmSans font-bold">Why Choose Us?</p>
        <div className="flex justify-between max-md:flex-col gap-10 ">
            {features.map((feature)=> {
                return(<div className="flex flex-col gap-4 bg-gray-300 rounded-xl p-8">
                    <img src={feature.icon} alt="" width={55}/>
                    <p className="font-dmSans font-medium">{feature.title}</p>
                    <p className="font-dmSans text-sm">{feature.subtitle}</p>
                </div>);
            })}
        </div>
    </div>
    </>);
}
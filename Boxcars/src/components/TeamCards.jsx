export const TeamCards = () => {
    return (
      <div className="flex flex-col justify-between items-start px-8 rounded-xl shadow-xl overflow-hidden max-md:w-full mb-20 w-fit bg-white gap-2">
        <img 
          src="assets/images/team.png" 
          alt="Team member" 
          className="object-cover w-full h-full max-h-96 md:max-h-[500px]" 
        />
        <div className="p-2 w-full">
          <p className="font-semibold text-xl">Courtney Henry</p>
          <p className="text-sm font-dmSans text-gray-600">Development Manager</p>
        </div>
      </div>
    );
  };
  
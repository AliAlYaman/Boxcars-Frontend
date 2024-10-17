export const TeamCards = ({src, name, title}) => {
    return (
      <div className="flex flex-col justify-between items-start rounded-xl bg-transparent overflow-hidden max-md:w-full mb-20 w-fit  gap-2">
        <img 
          src={src}
          alt="Team member" 
          className="object-cover w-full h-full max-h-80 md:max-h-[500px]" 
        />
        <div className="p-2 w-full">
          <p className="font-semibold text-xl">{name}</p>
          <p className="text-sm font-dmSans text-gray-600">{title}</p>
        </div>
      </div>
    );
  };
  
import React from "react";
import Image from "next/image";
import CardImage2 from "../../public/images/CardImage2.svg";
import Arrow from "../../public/images/arrow-circle-right.svg";

interface SpaceCard {
  size: string;
  description: string;
}

const SizeCard = (props: SpaceCard) => {
  return (
    <div className="bg-gray p-3 relative w-[60%] lg:w-[20%] pt-[13%] lg:pt-[5%] pb-[17%] lg:pb-[8%] rounded-md">
      <Image
        src={CardImage2}
        alt="CardImage"
        className="absolute top-3 left-4 w-[20%] lg:w-[20%]"
      />
      <div className="flex flex-col space-y-3 mt-3">
        <p className="font-nuniBold text-darkGray">{props.size}</p>
        <p className="text-xs lg:text-sm">{props.description}</p>
      </div>
      <div  className="absolute bottom-3 right-4 px-2 lg:px-5 py-2 rounded-md border border-black" >
        <Image src={Arrow} alt="CardImage" className=""/>
      </div>
    </div>
  );
};

export default SizeCard;

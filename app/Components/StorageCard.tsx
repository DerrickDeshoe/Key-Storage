// import React from 'react';
// import Image, { StaticImageData } from 'next/image';
// import CardImage from '../../public/images/CardCornerImage.svg';
// import Arrow from '../../public/images/arrow-circle-right.svg';

// interface Card {
//     image: StaticImageData
//     name: string
// }

// const StorageCard = (props:Card) => {
//   return (
//     <div className={` bg-${props.image.src} bg-cover bg-no-repeat bg-center rounded-md p-3 flex flex-col lg:w-[25%] h-[100vh]`} >
//       <Image src={CardImage} alt='CardImage'/>
//       <div className='flex justify-between'>
//         <p>{props.name}</p>
//       <Image src={Arrow} alt='CardImage'/>
//       </div>
//     </div>
//   )
// }

// export default StorageCard;

// import React from 'react';
// import Image, { StaticImageData } from 'next/image';
// import CardImage from '../../public/images/CardCornerImage.svg';
// import Arrow from '../../public/images/arrow-circle-right.svg';

// interface CardProps {
//   backgroundImage: StaticImageData; // Accept the background image as a string URL
//   name: string;
// }

// const StorageCard: React.FC<CardProps> = ({ backgroundImage, name }) => {
//   return (
//     <div
//       className="rounded-md p-3 flex flex-col lg:w-[25%] h-[100vh]"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Image src={CardImage} alt="Card Corner Image"  />
//       <div className="flex justify-between">
//         <p>{name}</p>
//         <Image src={Arrow} alt="Arrow Icon" />
//       </div>
//     </div>
//   );
// };

// export default StorageCard;

import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import CardImage from '../../public/images/CardCornerImage.svg';
import Arrow from '../../public/images/arrow-circle-right.svg';

interface Card {
  image: StaticImageData;
  name: string;
  name2: string;
}

const StorageCard = (props: Card) => {
  return (
    <div className="relative lg:w-[30%]">
      <div className="absolute top-4 lg:top-6 left-[7%]">
        <Image src={CardImage} alt="CardImage" className="w-[80%]" />
      </div>
      <Image src={props.image} alt="CardBackImage" className="" />
      <div className="flex flex-col">
        <p className="absolute bottom-[18%] lg:bottom-[17%] left-[7%] text-white  text-sm lg:text-2xl">
          {props.name}
        </p>
        <p className="absolute bottom-[12%] left-[7%] text-white text-sm lg:text-2xl">
          {props.name2}
        </p>
      </div>
      <div className="absolute right-[11%] bottom-[15%]">
        <Image src={Arrow} alt="RightArrowImage" className="" />
      </div>
    </div>
  );
};

export default StorageCard;

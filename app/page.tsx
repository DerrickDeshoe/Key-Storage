import Image from "next/image";
import HomeImage from "../public/images/HomeTanks.svg";
import Link from "next/link";
import StorageCard from "./Components/StorageCard";
import Card1 from "../public/images/Card1.svg";
import KeyStorage from "./Components/KeyStorage";
import SizeCard from "./Components/SizeCard";
import Testimonials from "./Components/Testimonials";
import Isaac from "../public/images/Isaac.svg";
import Tanatswa from "../public/images/Tanatswa.svg";
import Lock from "../public/images/Lock.svg";

export default function Home() {
  return (
    <div className="w-[100%]">
      <div className="flex flex-wrap w-[100%] h-[100vh] px-[5%] lg:px-[8%] justify-between">
        <div className="lg:w-[40%] flex flex-col justify-center space-y-5">
          <h1 className=" text-lg text-center lg:text-start lg:text-5xl font-nuniBold lg:w-[90%]">
            SECURE SELF STORAGE IN STELLENBOASCH
          </h1>
          <p className="text-sm lg:text-1xl">
            At Standard Freight Solutions quality in transportation service is
            not just what our valued service it's what they deserve. That's why
            we deliver every time!
          </p>
          <div className="flex justify-evenly lg:justify-between lg:w-[80%]">
            <Link href="/Contact">
              <button className="p-2 rounded-sm px-2 lg:px-8 font-semibold text-xs text-white bg-orange">
                Get A Quote
              </button>
            </Link>
            <Link href="/Contact">
              <button className="border border-black p-2 rounded-sm px-2 lg:px-8 font-semibold text-xs text-black">
                Book Online
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] flex items-center justify-end py-5">
          <Image src={HomeImage} alt="HomeImage" />
        </div>
      </div>

      <div className="bg-orange flex flex-col lg:space-x-3 space-y-10 py-[10%] lg:py-0 lg:pt-[5%] lg:pb-[3%]  px-[5%]">
        <div className="flex flex-col items-center text-white space-y-4">
          <p className="text-center lg:w-[42%] text-sm lg:text-lg">
            At Standard Freight Solutions quality in transportation service is
            not just what our valued service partners expect, it's what they
            deserve. That's why it is our goal to meet and exceed the
            expectations of every client, every time!
          </p>
          <div className="w-[7%] h-[2px] bg-black"></div>
          <h3 className="font-nunitoBold lg:text-3xl">STORAGE SERVICE</h3>
        </div>
        <div className="flex space-x-2">
          <StorageCard image={Card1} name="VEHICLE" name2="STORAGE" />
          <StorageCard image={Card1} name="HOUSEHOLD" name2="STORAGE" />
          {/* <StorageCard image={Card1} name="BUSINESS" name2="STORAGE" />
          <StorageCard image={Card1} name="DOCUMENT" name2="STORAGE" /> */}
        </div>
      </div>

      <div className=" flex flex-col space-y-4 lg:space-x-3 lg:space-y-10 pt-[10%] lg:pt-[5%]  px-[5%]">
        <div className="flex flex-col items-center text-black space-y-4">
          <p className="text-center lg:w-[42%] text-sm lg:text-lg">
            At Standard Freight Solutions quality in transportation service is
            not just what our valued service partners expect, it's what they
            deserve. That's why it is our goal to meet and exceed the
            expectations of every client, every time!
          </p>
          <div className="w-[7%] h-[2px] bg-black"></div>
        </div>

        <div className="lg:px-[5%]">
          <KeyStorage />
        </div>
      </div>

      <div className="flex flex-col lg:space-x-3 space-y-10 py-[10%] lg:py-0 lg:pt-[5%] lg:pb-[3%]  ">
        <div className="flex flex-col items-center text-black space-y-4 px-[5%]">
          <p className="text-center lg:w-[42%] text-sm lg:text-lg">
            At Standard Freight Solutions quality in transportation service is
            not just what our valued service partners expect, it's what they
            deserve. That's why it is our goal to meet and exceed the
            expectations of every client, every time!
          </p>
          <div className="w-[7%] h-[2px] bg-orange"></div>
          <h3 className="font-nuniBold lg:text-3xl">
            WHAT SIZE STORAGE DO YOU NEED
          </h3>
        </div>
        <div className="flex space-x-3">
          <SizeCard
            size="1.1m x 1.6m"
            description="Gender equality is fundamental to the realization 
                        of human rights and a desire to benefit society as 
                        a whole, including girls and women."
          />
          <SizeCard
            size="2.3m x 3.5m"
            description="We gather resources and locate partners to ensure 
                         sustainable development in data and technology 
                         in the digital age."
          />
          <SizeCard
            size="1.1m x 1.6m"
            description="Gender equality is fundamental to the realization 
                        of human rights and a desire to benefit society as 
                        a whole, including girls and women."
          />
        </div>
        <div className="flex justify-center">
          <Link href="/Contact">
            <button className="border border-black p-2 rounded-md px-2 lg:px-6 font-semibold text-xs lg:text-sm text-black ">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-orange flex flex-wrap px-[5%] lg:px-[10%] py-[5%] lg:justify-between">
        <div className="lg:w-[48%] flex flex-col space-y-10">
          <h4 className="text-white text-[18px] lg:text-3xl font-bold">
            We Get People Saying
          </h4>
          <div className="flex flex-col space-y-5">
            <Testimonials
              image={Isaac}
              name="ISAAC SMITH"
              occupation="Insurance Consultant"
              description="I was very impressed with the service I received 
                           from [Standard Freight Solutions]. They were able to get 
                           my shipment to its destination on time and in perfect 
                           condition. I would definitely use them again in the future."
            />
            <Testimonials
              image={Tanatswa}
              name="TANATSWA CHIDZIVA"
              occupation="Insurance Broker"
              description="For the past five years, I've been using 
                           [name of the freight company] for all of my shipping 
                           requirements, and I've been very happy with their service. 
                           They are always on time, offer reasonable prices, 
                           and provide excellent customer service."
            />
          </div>
        </div>

        <div className="lg:w-[48%] flex flex-col space-y-10">
          <h4 className="text-white text-[18px] lg:text-3xl font-bold">FAQS</h4>
        </div>
      </div>

      <div className="lg:p-[8%]">
        <div className=" hidden lg:flex bg-BG bg-no-repeat bg-cover bg-center w-[100%] h-[40vh] rounded-lg items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-5 relative">
            <h4 className="text-white text-2xl w-[70%] text-center">
              Subscribe to get latest updates on storage services
            </h4>
            <input
              type="text"
              placeholder="Email"
              className="w-[70%] p-2 border border-white rounded-md bg-transparent relative"
            />
            <Link href="/Contact" className="absolute bottom-0 right-[15%]">
              <button className="bg-red py-[11px] rounded-tr-md rounded-br-md px-2 lg:px-6 font-nunito text-xs lg:text-sm text-white ">
                Subscribe
              </button>
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden h-[80vh] bg-black"></div>
      </div>

      <div className="bg-orange flex flex-wrap-reverse px-[5%] lg:px-[8%] py-[5%] justify-between gap-[5%] lg:gap-y-0">
        <div className="lg:w-[45%] flex flex-col text-black space-y-3 xl:justify-center">
          <h4 className="font-bold lg:text-2xl lg:mb-5">GET IN TOUCH WITH US</h4>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-b border-gray p-2 text-xs lg:text-sm outline-none w-[100%] bg-transparent text-black placeholder:text-black"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border-b border-gray p-2 pr-[113px] text-xs lg:text-sm outline-none bg-transparent w-[100%] placeholder:text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-b border-gray p-2 pb-[80px] pr-[113px] md:pb-[110px] lg:pb-[40px] text-xs lg:text-sm outline-none bg-transparent w-[100%] placeholder:text-black"
            required
          />
          <Link
            href="#"
            className="flex space-x-2 justify-center border border-black rounded-sm py-2 w-[37%] lg:w-[30%] xl:w-[20%]"
          >
            <button className="font-semibold text-xs text-black" type="submit">
              Send Message
            </button>
          </Link>
        </div>
        <div className="lg:w-[45%]">
          <Image src={Lock} alt="Lock" />
        </div>
      </div>
    </div>
  );
}

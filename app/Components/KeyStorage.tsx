"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StorageImage1 from "../../public/images/StorageImage1.svg";
import StorageImage2 from "../../public/images/StorageImage2.svg";



const KeyStorage = () => {
  const [activeTab, setActiveTab] = useState<"packaging" | "storage">(
    "packaging"
  );

  return (
    <div className="flex flex-wrap-reverse justify-between">
      <div className="lg:w-[43%] flex flex-col justify-center space-y-3 lg:space-y-5">
        <h1 className=" text-[20px] lg:text-4xl font-nuniBold lg:w-[90%]">KEY STORAGE</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-5 justify-center">
          <h5
            className={`font-nuniBold cursor-pointer ${
              activeTab === "packaging"
                ? "text-orange border-b-2 border-gray-500"
                : "text-black"
            }`}
            onClick={() => setActiveTab("packaging")}
          >
            Packaging Shop
          </h5>
          <h5
            className={`font-nuniBold text-sm lg:text-lg cursor-pointer ${
              activeTab === "storage"
              ? "text-orange border-b-2 border-gray-500"
              : "text-black"
            }`}
            onClick={() => setActiveTab("storage")}
          >
            Making Self Storage Easy
          </h5>
        </div>

        {/* Tab Content */}
        {activeTab === "packaging" && (
          <div className="flex flex-col space-y-4">
            <p className="text-sm">
              Founded in 2018, Standard Freight is a growing truckload carrier
              based in Las Vegas, Nevada.
            </p>
            <p className="text-sm">
              With a geographic focus on the southwest region, we are currently
              looking to increase market share and expand our customer base in
              both dry-van and power-only operations. Through technological
              advancements in tracking and fuel economy, we seek to become as
              efficient as possible with the long-term goal of moving freight
              inland from the Ports of Los Angeles without the use of
              carbon-based fuel.
            </p>
          </div>
        )}

        {activeTab === "storage" && (
          <div className="flex flex-col space-y-4">
            <p className="text-sm">
              Our self-storage services are designed to meet the diverse needs
              of businesses and individuals alike.
            </p>
            <p className="text-sm">
              With a focus on simplifying storage solutions, we aim to provide
              accessible and flexible self-storage options for both individuals
              and businesses. Through innovations in space utilization and
              security, we ensure your belongings are stored safely and
              conveniently. Our long-term goal is to revolutionize the storage
              experience by introducing eco-friendly practices and smart
              technology to meet modern-day needs efficiently.
            </p>
          </div>
        )}

        {/* Button */}
        <div className="flex lg:w-[70%]">
          <Link href="/Contact">
            <button className="border border-black p-2 rounded-md px-2 lg:px-6 font-semibold text-xs lg:text-sm text-black">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {/* Images */}
      <div className="lg:w-[50%] flex space-x-2">
        <Image src={StorageImage1} alt="StorageImage1" className=" w-[50%] lg:w-[55%]" />
        <Image src={StorageImage2} alt="StorageImage2" className=" w-[50%] lg:w-[55%]" />
      </div>
    </div>
  );
};

export default KeyStorage;

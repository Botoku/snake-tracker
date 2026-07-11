import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeSalesPage = () => {
  return (
    <div className="text-black">
      <div className="bg-linear-to-r from-[#E45C30] to-[#DB8B92] ">
        <div className="max-w-[95%] pt-16 mx-auto py-10">
          <p className="capitalize mb-4 text-4xl font-nunito font-extrabold">
            Keep track of every <br className="hidden md:block"/>feeding, every shed, every<br className="hidden md:block"/> weigh in
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mt-10">
            <div className="relative  h-37.5 w-full md:w-75">
              <Image alt="corn snake" src={"/cornSnakeHero.png"} fill />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col">
              <p className="text-right font-gorditas">Stop guessing when your snake last ate.</p>
              <Link
                className="text-white mt-6 ml-auto  bg-black px-2 py-1 rounded w-max"
                href={"/auth/signup"}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F09F86] border-t border-b border-black flex items-center justify-center py-4 text-xl">
        <p className="text-center w-[90%] md:w-[60%] font-gorditas">
          Log everything without digging through a notes app. Stop trying to
          remember if the Ball Python ate last Tuesday or the Tuesday before.
        </p>
      </div>
      <div className="bg-linear-to-b from-[#E45C30] to-[#DB8B92] py-10">
        <div className="w-3/4 rounded mx-auto bg-[#F09F86] border text-center flex flex-col items-center justify-center py-6">
          <p>
            &quot;I used to keep everything in a Google Sheet and a sticky note
            on the enclosure. This is so much better.&quot;
          </p>
          <p className="italic text-sm">
            A keeper with four ball pythons and one very opinionated hognose
          </p>
        </div>
        <div>
          <div className="py-8 md:flex gap-4 px-[5%]">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <p className="font-bold">
                Log feedings without thinking about it
              </p>
              <p>
                What they ate, what size, whether they took it - all in a few
                taps. Refused feeds get flagged so you can spot patterns early,
                not six months later.
              </p>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-0">
              <p className="font-bold">Actually see if theyre growing</p>
              <p>
                Weight logs over time make it easy to see if something&apos;s
                off — gradual loss, a plateau, or just healthy, steady gains you
                can feel good about.
              </p>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-0">
              <p className="font-bold">
                Care info that&apos;s actually for your species
              </p>
              <p>
                Temps, humidity, feeding schedules — matched to whatever you
                keep. Whether it&apos;s a corn snake or a reticulated python,
                the info is right there when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HomeSalesPage;

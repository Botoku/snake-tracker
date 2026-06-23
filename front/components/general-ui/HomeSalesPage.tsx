import React from "react";

const HomeSalesPage = () => {
  return (
    <div className="py-10 bg-primary-400 min-h-[92vh]">
      <div className="px-[5%]">
        <p className="mb-4 text-4xl text-accent-1">
          Keep track of every feeding, every shed, every weigh in
        </p>
        <p className="mb-5">
          Built by keepers, for keepers. Stop guessing when your snake last ate.
          Log every feeding ,every shed, every weigh in without digging through
          a notes app or trying to remember if the BP ate last tuesday or the
          tuesday before.
        </p>

        <div className="flex gap-3">
          <p className="bg-accent-2 px-2 py-1 rounded-lg">
            Create a free account
          </p>
          <p className="border border-accent-2 px-2 py-1 rounded-lg">
            See how it works
          </p>
        </div>
        <p className="my-3 text-sm font-bold">Free to start. No credit card needed.</p>
      </div>

      <div className="bg-accent-1 py-8 flex gap-4 px-[5%]">
        <div className="w-1/3">
          <p className="font-bold">Log feedings without thinking about it</p>
          <p>
            What they ate, what size, whether they took it - all in a few taps.
            Refused feeds get flagged so you can spot patterns early, not six
            months later.
          </p>
        </div>
        <div className="w-1/3">
          <p className="font-bold">Actually see if theyre growing</p>
          <p>
            Weight logs over time make it easy to see if something&apos;s off —
            gradual loss, a plateau, or just healthy, steady gains you can feel
            good about.
          </p>
        </div>
        <div className="w-1/3">
          <p className="font-bold">
            Care info that&apos;s actually for your species
          </p>
          <p>
            Temps, humidity, feeding schedules — matched to whatever you keep.
            Whether it&apos;s a corn snake or a reticulated python, the info is
            right there when you need it.
          </p>
        </div>
      </div>

      <div className="px-5">
        <div>
          <p>
            &quot;I used to keep everything in a Google Sheet and a sticky note on
            the enclosure. This is so much better.&quot;
          </p>
          <p>A keeper with four ball pythons and one very opinionated hognose</p>
        </div>
        <div >
          <p>Your whole collection, in one place.</p>
          <p>
            Takes about two minutes to add your first snake. You&apos;ll wonder
            why you didn&apos;t do this sooner.
          </p>
          <button>Grt started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSalesPage;

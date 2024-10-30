import Button from "./components/Button.js";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";
import Sidebar from "./components/Sidebar.js";

function LatestLaunches() {
  const handleLaunchFilter = (Filter) => {
    const launchSpans = document.querySelectorAll(".launch-span");
    const coming_soons = document.querySelectorAll(".coming-soon");
    const avaiable_nows = document.querySelectorAll(".now-available");

    // Reset the background color of all elements with the class "launch-span"
    launchSpans.forEach((element) => {
      element.style.background = "white";
      element.style.color = "#1e3a8a";
    });

    // Select the target element and change its background if it exists
    const targetElement = document.getElementById(`launchSpan-${Filter}`);
    if (targetElement) {
      targetElement.style.background = "#1e3a8a"; // Ensure valid color with #
      targetElement.style.color = "white";
    } else {
      console.warn(`Element with ID launchSpan-${Filter} not found.`);
    }

    switch (Filter) {
      case 1:
        // Additional code for Filter 1 if needed
        coming_soons.forEach((element) => {
          element.style.display = "flex";
        });
        avaiable_nows.forEach((element) => {
          element.style.display = "flex";
        });
        break;
      case 2:
        // Additional code for Filter 2 if needed
        coming_soons.forEach((element) => {
          element.style.display = "flex";
        });
        avaiable_nows.forEach((element) => {
          element.style.display = "none";
        });
        break;
      case 3:
        // Additional code for Filter 3 if needed
        coming_soons.forEach((element) => {
          element.style.display = "none";
        });
        avaiable_nows.forEach((element) => {
          element.style.display = "flex";
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-full h-full">
          {/*nav*/}
          <div className="flex border-b-[1px] border-b-gray-300">
            <Nav theme={"dark"}></Nav>
          </div>
          {/*title + text + filter btns*/}
          <div className="p-4 py-16 flex flex-col gap-10">
            <h1 className="text-5xl uppercase">Latest Launches</h1>
            <p className="g-font-1 text-lg">
              Welcome to a showcase of exceptional real estate opportunities. In
              this section, journey through innovative upcoming projects,
              recently unveiled developments, and exclusive residences with just
              a few units left. Each offers a unique living experience, waiting
              to be discovered. Begin your exploration here and find the perfect
              space to call your own.
            </p>
            <div className="inline-flex gap-6 max-sm:flex-col">
              <span
                id="launchSpan-1"
                onClick={() => handleLaunchFilter(1)} // Wrap in an arrow function to call only on click
                className="launch-span cursor-pointer flex justify-center text-white bg-blue-900 border-[1px] border-gray-400 uppercase g-font-2 font-semibold text-xs tracking-widest p-3 px-8 rounded-full min-w-[100px]"
              >
                All
              </span>
              <span
                id="launchSpan-2"
                onClick={() => handleLaunchFilter(2)} // Wrap in an arrow function
                className="launch-span cursor-pointer flex justify-center text-blue-900 bg-white border-[1px] border-gray-400 uppercase g-font-2 font-semibold text-xs tracking-widest p-3 px-8 rounded-full min-w-[100px]"
              >
                Coming Soon
              </span>
              <span
                id="launchSpan-3"
                onClick={() => handleLaunchFilter(3)} // Wrap in an arrow function
                className="launch-span cursor-pointer flex justify-center text-blue-900 bg-white border-[1px] border-gray-400 uppercase g-font-2 font-semibold text-xs tracking-widest p-3 px-8 rounded-full min-w-[100px]"
              >
                Now Available
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*card container*/}
      <div className="flex flex-col w-full px-4 gap-12 max-lg:h-full">
        <div className="unit-card coming-soon w-full h-[320px] flex gap-4 max-md:flex-col max-md:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/ES_View_13-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-md:h-1/2">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-md:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Coming Soon
              </p>
              <h1 className="text-3xl uppercase font-semibold">UNC South</h1>
              <p className="g-font-1 w-full">
                UNC South's newest townhouses that blend local charm with global
                outlook.
              </p>
              <Button
                displayText={"Register Interest"}
                theme={"dark"}
                extraClasses={"text-xs"}
                width={"fit"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="unit-card coming-soon w-full h-[320px] flex gap-4 max-md:flex-col max-md:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/DUBAI_CREEK_HARBOUR_HERO-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-md:h-1/2">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-md:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Coming Soon
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                Dubai Creek Harbour
              </h1>
              <p className="g-font-1 w-full">
                New apartment residences which are set to redefine luxury living
                at Dubai Creek Harbour.
              </p>
              <Button
                displayText={"Register Interest"}
                theme={"dark"}
                extraClasses={"text-xs"}
                width={"fit"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="unit-card coming-soon w-full h-[320px] flex gap-4 max-md:flex-col max-md:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/06/OASIS_1620-x-832-706x385-1.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-md:h-1/2">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-md:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Coming Soon
              </p>
              <h1 className="text-3xl uppercase font-semibold">THE OASIS</h1>
              <p className="g-font-1 w-full">
                New ultra-luxury villas launching soon at The Oasis. Your dream
                lifestyle awaits.
              </p>
              <Button
                displayText={"Register Interest"}
                theme={"dark"}
                extraClasses={"text-xs"}
                width={"fit"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="unit-card coming-soon w-full h-[320px] flex gap-4 max-md:flex-col max-md:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2020/04/DHE_COMMUNITY_HERO-resize-706x385.jpeg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-md:h-1/2">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-md:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Coming Soon
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                DUBAI HILLS ESTATE
              </h1>
              <p className="g-font-1 w-full">
                Experience tranquility and embrace nature's beauty at Dubai
                Hills Estate. New apartment residences coming soon.
              </p>
              <Button
                displayText={"Register Interest"}
                theme={"dark"}
                extraClasses={"text-xs"}
                width={"fit"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="unit-card coming-soon w-full h-[320px] flex gap-4 max-md:flex-col max-md:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/11/Community-Hero-Image-1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-md:h-1/2">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-md:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Coming Soon
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                ADDRESS AL MARJAN
              </h1>
              <p className="g-font-1 w-full">
                Own a piece of paradise in Ras Al Khaimah. Address branded
                apartments, townhouses and sea villas coming soon.
              </p>
              <Button
                displayText={"Register Interest"}
                theme={"dark"}
                extraClasses={"text-xs"}
                width={"fit"}
              ></Button>
            </div>
          </div>
        </div>

        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_1-4-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex justify-center flex-col max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                GREENVILLE AT EMAAR SOUTH
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Welcome to Greenville, a peaceful community designed for
                  families to thrive.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/10/MARINA_COVE_1620X832-706x385.png"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                MARINA COVE AT DUBAI MARINA
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Marina Cove seamlessly blends vibrant city living with the
                  tranquillity of waterfront life in one of Dubai Marina’s most
                  desirable locations.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_2-2-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                VELORA 2 AT THE VALLEY PHASE 2
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Introducing a community inspired and bound by the love of
                  outdoors and adventure.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_3-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                VIDA RESIDENCES CLUB POINT AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Welcome to Vida Residences Club Point, where modern design and
                  natural serenity come together in Dubai Hills Estate.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_3-6-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                PIER POINT AT RASHID YACHTS & MARINA
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Welcome to Pier Point, where two elegant towers rise above a
                  beautifully landscaped podium.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_1-3-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                GREENRIDGE AT EMAAR SOUTH
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Welcome to Greenridge at Emaar South, a serene oasis designed
                  for families to flourish.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                GOLF HILLSIDE AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Imagine waking up to the soft glow of sunlight streaming
                  through your windows, with uninterrupted views of a lush golf
                  course stretching beyond.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/08/HERO_1620X832_1-1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                PARKLAND AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Parkland is a unique blend of city life and natural beauty.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/08/HERO_1620X832_1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                GOLF POINT AT EMAAR SOUTH
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Welcome to Golf Point, a charming midrise residential
                  community in Emaar South, offering breathtaking views of the
                  lush green hills of the Emaar South Golf Course.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                CLUB PLACE AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Find your sanctuary where luxury meets nature.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-5-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                ALTUS AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Immerse yourself in the elegance of ALTUS, where contemporary
                  architecture blends seamlessly with natural beauty.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_5-1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                AVENA 2 AT THE VALLEY
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Avena 2 at The Valley is a place where modern living meets the
                  gentle touch of nature.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_2-6-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                AVENA AT THE VALLEY
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Avena at The Valley is a place where modern living meets the
                  gentle touch of nature
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_2-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                MARINA VIEWS AT RASHID YACHTS & MARINA
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Indulge in the breathtaking Marina Views at Rashid Yachts &
                  Marina, where luxury and serenity come together.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                OCEAN COVE AT RASHID YACHTS & MARINA
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Immerse yourself in the serene beauty of Ocean Cove, where
                  nature and city life come together to create a truly
                  captivating atmosphere.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/06/HERO_1620X832_1-2-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                VELORA AT THE VALLEY PHASE 2
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Introducing a community inspired and bound by the love of
                  outdoors and adventure.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/06/HERO_1620X832_2-3-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                VENERA AT THE VALLEY PHASE 2
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Introducing a community inspired and bound by the love of
                  outdoors and adventure.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                MANGROVE AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Mangrove is a collection of 1-, 2- and 3-bedroom apartments
                  adjacent to a lush park, with unmatching views of the Creek.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/04/VALO_HERO_4-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                VALO AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Imagine waking up to the sunrise over Dubai's iconic skyline,
                  where modern design meets natural beauty.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/03/HERO_1620X832_3-3-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                PARK LANE AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Located in the coveted Dubai Hills Estate, Park Lane -
                  Interiors by Vida offers a one-of-a-kind lifestyle where
                  serene natural beauty and modern elegance come together.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/02/FEATURES_706X385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                ORIA AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Imagine waking up to the sunrise over Dubai's iconic skyline,
                  where modern design meets natural beauty.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_2-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                AEON AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Visualize the dawn breaking over Dubai's iconic skyline, with
                  the raw essence of urban aesthetics merging seamlessly with
                  the embrace of nature.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/10/CLUB_DRIVE_DHE_HERO_B_1620x832-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                CLUB DRIVE AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Discover a sanctuary where nature's elegance meets the
                  grandeur of a sprawling golf landscape.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/10/PARKSIDE_VIEWS_HERO_2-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                PARKSIDE VIEWS RESIDENCE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Welcome to Parkside Views, a harmonious blend of well-being
                  and opportunity; where verdant surroundings meet urban living,
                  and a strong sense of community complements the
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/07/GREENSIDE_HERO_1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                GREENSIDE RESIDENCE AT DUBAI HILLS ESTATE
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Imagine a realm of breathtaking natural splendour, accompanied
                  by an endless green championship golf course.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/06/BAYVIEW_HERO_2-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                BAYVIEW BY ADDRESS RESORTS AT EMAAR BEACHFRONT
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Ethereal waves adorn stylishly crafted façades reflecting the
                  Arabian Gulf's rippling waters.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                CEDAR AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Those who enjoy a cosmopolitan lifestyle will appreciate the
                  high-quality construction, cutting-edge architecture, and
                  attractive, spacious interiors with superior finish.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <span className="flex items-center justify-around absolute right-1/2 mt-4 w-[165px] bg-white mr-8 max-md:right-1 p-2 font-bold">
              <p className="uppercase text-xs tracking-widest g-font-2">
                Available Units
              </p>
              <span className="bg-black text-white text-xs px-1">11</span>
            </span>
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_3-706x385.jpg"
              alt="img"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-lg:h-fit">
            <div className="h-4/5 flex flex-col justify-between pl-12 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Now Available
              </p>
              <h1 className="text-3xl uppercase font-semibold">
                SAVANNA AT DUBAI CREEK HARBOUR
              </h1>
              <span>
                <p className="g-font-1 w-full">
                  Savanna is a collection of 1-, 2- and 3-bedroom apartments
                  adjacent to a lush park.
                </p>
                <a
                  href="https://www.google.com"
                  className="underline text-blue-900"
                >
                  Learn More
                </a>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"Register Interest"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                ></Button>
                <Button
                  displayText={"View Units"}
                  theme={"transparent"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  extraClasses4Button={
                    "border-[1px] border-gray-400 min-w-[169px]"
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default LatestLaunches;

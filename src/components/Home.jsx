import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "./Carousel";
import Map from "./Map";
import Peoples from "./People";
import Reviews from "./Reviews";
// import InfoModal from './InfoModal'
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const tiers = [
  {
    name: "Full Service Grooming",
    id: "tier-basic",
    href: "https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming",
    price: { starting: "$65", addons: "$100" },
    description: "Everything to fully pamper your pet!",
    features: [
      ["Includes:", "Haircut", ",", "Bath", ", ", "Brush", ","],
      ["Nail Trim", ", ", "Ear Cleaning "],
      ["and Gland Expression..."],
    ],
  },
  {
    name: "Bath Only",
    id: "tier-essential",
    href: "https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming",
    price: { starting: "$35", addons: "$100" },
    description:
      "A relaxing and enjoyable wash to keep your pet looking thier best!",
    features: [
      ["Includes:", "Haircut", ",", "Bath", ", ", "Brush", ","],
      ["Nail Trim", ", ", "Ear Cleaning "],
      ["and Gland Expression..."],
    ],
  },
  {
    name: "Walk In",
    id: "tier-growth",
    href: "https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming",
    price: { starting: "$10", addons: "$60" },
    description: "Face, Feet, and Fanny trims to keep your pet looking sharp!",
    features: [
      ["Nail Grind"],
      ["Nail Trim"],
      ["Ear Cleaning"],
      ["And More..."],
    ],
  },
];

const handleEmailClick = (e) => {
  e.preventDefault(); // Prevent the default link behavior
  window.location.href = "mailto:Jamesongrooming@gmail.com"; // Open the default email client
};
const handleCallClick = (e) => {
  e.preventDefault(); // Prevent the default link behavior
  window.location.href = "tel:7372637002"; // Open the default phone app
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.className.includes("modal")) {
      setIsVisible(false);
    }
  };

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 cursor-pointer"
        onClick={() => setIsVisible(true)}
      >
        <FontAwesomeIcon icon={faCommentDots} size="2x" />
      </div>

      {isVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 modal"
          onClick={handleClickOutside}
        >
          <div className="w-3/4 h-3/4 flex flex-col items-center justify-center space-y-4 modal-content z-50 bg-white bg-opacity-100 shadow-modalShadow border-solid border-2 border-red-600 border-opacity-5 p-4">
            <h2 className="text-center text-2xl font-bold">Welcome!</h2>
            <p className="text-center">
              If you are a new customer and have any questions, please fill out
              the form below:
            </p>
            <form className="w-full max-w-sm flex flex-col items-center">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-full">
                  <label
                    className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
                    htmlFor="inline-email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                    id="inline-email"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6 w:100%">
                <div className="md:w-full">
                  <label
                    className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
                    htmlFor="inline-question"
                  >
                    Question
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500 width:100%"
                    id="inline-question"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center flex-col justify-around">
                <button
                  className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-2"
                  type="button"
                >
                  Submit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            </form>
            <p className="text-center">Or contact us directly at:</p>
            <p className="text-center">
              <a
                href="mailto:Jamesongrooming@gmail.com"
                onClick={handleEmailClick}
              >
                Email: Jamesongrooming@gmail.com
              </a>
            </p>

            <p className="text-center">
              <a href="tel:7372637002" onClick={handleCallClick}>
                Phone: (737) 263-7002
              </a>
            </p>
          </div>
        </div>
      )}

      <div
        className="fixed bottom-4 right-4 cursor-pointer"
        onClick={() => setIsVisible(true)}
      >
        <FontAwesomeIcon icon={faCommentDots} size="2x" />
      </div>

      <div className={`${isVisible ? "filter blur-sm" : ""}`}>
        <Header />

        {/* Photo Section */}
        <div className="relative mt-6 flex align-middle justify-center z-10 shadow-2xl ">
          <div className=" max-w-xl max-h-xl ">
            <Carousel />
          </div>
        </div>

        {/* Intro Block  */}

        <div className="relative isolate px-6 pt-2 lg:px-8 bg-opacity-100  z-10 m-2 rounded-xl shadow-2xl ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto -mt-24 max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                In Dogs We Trust
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to Jameson & Company Dog Grooming where your pet is
                truly loved! At Jameson & Company our slogan is, In Dog We
                Trust! We are passionate about work and excited to meet your
                pets. Our goal is to provide a stress-free, comfortable
                experience so that all pups leave Jameson & Company well-groomed
                and feeling happy. Thank you for choosing us for your grooming
                needs.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Book Now!
                </a>
                <a
                  href="Services"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Meet The Team */}
        <Peoples />
        {/* Pricing Block */}

        <div className="bg-white py-24 sm:py-32 rounded-xl ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-red-600">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choose the right package for&nbsp;you
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
              Prices to meet your needs, whether it's your first trim or you're
              a seasoned pro.
            </p>
            <div className="mt-20 flow-root rounded-xl">
              <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4 rounded-xl">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="pt-16 lg:px-8 lg:pt-0 xl:px-14 rounded-xl shadow-2xl m-2 p-4"
                  >
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-gray-900"
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-6 flex items-baseline gap-x-1 ">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.price.starting}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        Starting
                      </span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {tier.price.addons} with most common add ons
                    </p>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className="mt-10 block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Book Now!
                    </a>
                    <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-6 space-y-3 text-sm font-bold leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <p
                            className="h-6 w-5 flex-none text-red-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Map />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

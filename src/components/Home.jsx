import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Peoples from "../components/People";
import Reviews from "../components/Reviews";
import Footer from "./Footer";
import Map from "../components/Map";
import BackToSchoolModal from "./BackToSchoolModal";
import UserInfoModal from "./UserInfoModal";
import OOOModal from "./OOOModal";
// import BookingSpecialModal from "./BookingSpecialModal";





const bookingUrl = "https://booking.moego.pet/ol/JamesonandCompanyDogGrooming/book"
const tiers = [
  {
    name: "Full Service Grooming",
    id: "tier-basic",
    href: bookingUrl,
    price: { starting: "$65", addons: "$100" },
    description: "Everything to fully pamper your pet!",
    features: [
      ["Includes: ", "Haircut", ", ", "Bath", ", ", "Brush", ", "],
      ["Nail Trim", ", ", "Ear Cleaning "],
      ["and Gland Expression..."],
    ],
  },
  {
    name: "Bath Only",
    id: "tier-essential",
    href: bookingUrl,
    price: { starting: "$35", addons: "$100" },
    description:
      "A relaxing and enjoyable wash to keep your pet looking their best!",
    features: [
      ["Includes: ",  "Bath", ", ", "Brush", ", "],
      ["Nail Trim", ", ", "Ear Cleaning "],
      ["and Gland Expression..."],
    ],
  },
  {
    name: "Walk In",
    id: "tier-growth",
    href: bookingUrl,
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

const Home = () => {
  const [showUserInfoModal, setShowUserInfoModal] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isBackToSchoolVisible, setIsBackToSchoolVisible]= useState(false)
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const bookingUrl = "https://booking.moego.pet/ol/JamesonandCompanyDogGrooming/book"

  // Toggle on window load modal show VS    
  useEffect(() => {
    setIsVisible(false);
    setIsBackToSchoolVisible(false);
    setShowUserInfoModal(true);
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.className.includes("modal")) {
      setIsVisible(false);
      setIsBackToSchoolVisible(false);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:info@jcoatx.com";
  };

  const handleCallClick = (e) => {
    e.preventDefault();
    window.location.href = "tel:7372637002";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("inline-email");
    const email = emailInput.value;
    const subject = "Question from Jameson & Company Dog Grooming Website";
    const body = "Please fill in your question here.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };




  return (
    <>
    {/* <BackToSchoolModal/> */}
    {/* {showUserInfoModal && <UserInfoModal onClose={() => setShowUserInfoModal(false)} />} */}
    {/* <BookingSpecialModal /> */}
    <OOOModal />
    
  <div>
{/* Info Modal */}
{isVisible && (
<div
className="fixed inset-0 flex items-center justify-center z-50 modal"
onClick={handleClickOutside}
>
<div className="w-full max-w-md flex flex-col items-center justify-center space-y-4 modal-content z-50 bg-gray-900 bg-opacity-90 shadow-modalShadow border-solid border-2 border-red-600 border-opacity-5 p-4 text-white">
<h2 className="text-center text-lg lg:text-2xl font-bold">Welcome!</h2>

{/* Modal OOO Message Leaving comments to toggle on later */}
{/* <h1 className="text-xl border-2 border-width-2 border-red-600 p-0.5">I will be away from the grooming truck with limited access to phone and email until<strong> June 10th</strong>. I will respond to all questions and booking confrimations upon my return.</h1> */}
<p className="text-center text-sm lg:text-base">
If you have any questions, press the button to send an email with your question!
</p>
<form className="w-full flex flex-col items-center space-y-4">
<div className="w-full flex flex-col items-center">
<label
className="block text-white font-bold text-sm lg:text-base mb-1 md:mb-0"
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
<div className="w-full flex flex-col items-center">
<button
className="w-full bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-2"
type="button"
onClick={sendEmail}
>
Submit
</button>
</div>
<div className="w-full flex flex-col text-center items-center">
<a
href={bookingUrl}
className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
>
Book Now
</a>
</div>
</form>
<p className="text-center text-sm lg:text-base">
Or contact us directly at:
</p>
<p className="text-center text-sm lg:text-base">
<a
href="mailto:info@jcoatx.com"
onClick={handleEmailClick}
>
Email: info@jcoatx.com
</a>
</p>
<p className="text-center text-sm lg:text-base">
<a href="tel:7372637002" onClick={handleCallClick}>
Phone: (737) 263-7002
</a>
</p>
</div>
</div>
)}
<div
className="fixed bottom-4 right-4 cursor-pointer z-50"
onClick={() => setIsVisible(true)}
>
<FontAwesomeIcon icon={faCommentDots} size="2x" />
</div>
<div className={`${isVisible ? "filter blur-sm" : ""}`}>
</div>

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
                  href={bookingUrl}
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Book Now!
                </a>
                {/* <a
                  href="Services"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
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
                Choose the right package for you
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
              Prices to meet your needs, whether it's your first trim or you're
              a seasoned pro.
            </p>
            <div className="mt-20 flow-root rounded-xl">
              <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4 rounded-xl">
                {/* Tiers Section */}
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
    
    </>
  );
};
export default Home;

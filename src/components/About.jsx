import Header from "./Header";
import Footer from "./Footer";
import Reviews from "./Reviews";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl">
      <Header />

      <main className="bg-red-600 text-white p-4 m-4 rounded-xl md:min-w-300 max-w-screen-xl flex flex-row flex-wrap items-center justify-center shadow-2xl">

        <h1 className="text-2xl bg-gray-900 bg-opacity-50 rounded-xl font-bold mt-4  p-4 ">Hello! I'm Hailey, Your Pup's Personal Groomer</h1>
       
        <img src="https://1bff00330b087e4e410e.cdn6.editmysite.com/uploads/b/1bff00330b087e4e410e76d46e213bda0e4c9548df0a8a71f7cdff7060f72b76/Screen%20Shot%202022-10-18%20at%203.03.14%20PM_1666123408.png?width=800&optimize=medium&height=480&fit=cover&dpr=1" className="rounded-2xl m-2"></img>
      
        <p className=" leading-relaxed mb-4 max-w-screen-lg text-lg  bg-gray-900 bg-opacity-50 rounded-xl p-2">
          From the moment I started working with animals over a decade ago, I knew I had found my calling. I began my journey as a bather, eager to learn the intricacies of dog grooming. As I honed my skills, I discovered an unexpected passion for transforming scruffy pups into polished pooches.
        </p>

        <p className=" leading-relaxed mb-4 max-w-screen-lg text-lg bg-gray-900 bg-opacity-50 rounded-xl p-2">
          Never in my wildest dreams did I imagine that my love for grooming would lead me to owning my very own salon. But here I am, surrounded by the joyful barks and playful antics of my furry clientele. It's a dream come true, and I can't imagine doing anything else.
        </p>

        <p className=" leading-relaxed mb-4 max-w-screen-lg text-lg bg-gray-900 bg-opacity-50 rounded-xl p-2">
          At the heart of my philosophy lies the belief that every dog deserves a grooming experience that is tailored to their unique needs and personality. I take pride in creating a calm and comfortable environment where even the most anxious pups feel at ease. My gentle touch and soothing words help them relax and enjoy the process.
        </p>

        <p className=" leading-relaxed mb-4 max-w-screen-lg text-lg bg-gray-900 bg-opacity-50 rounded-xl p-2">
          Beyond the technical aspects of grooming, it's the connection I form with each dog that truly fuels my passion. I treat every furry friend with the utmost care and affection, building a bond that extends beyond the grooming table. Witnessing the transformation in their demeanor and spirits after a visit fills me with joy.
        </p>

        <p className=" leading-relaxed mb-4 max-w-screen-lg text-lg bg-gray-900 bg-opacity-50 rounded-xl p-2">
          Whether it's transforming a matted mess into a picture of elegance or simply providing a relaxing spa day, I approach each grooming session with dedication and enthusiasm. My salon is more than just a place for grooming; it's a sanctuary where furry companions receive the love and attention they deserve.
        </p>

        <p className=" leading-relaxed mb-4 max-w-screen-lg text-lg bg-gray-900 bg-opacity-50 rounded-xl p-2">
          When you entrust your beloved pet to my care, you can rest assured that they will be treated with the utmost respect, compassion, and expertise. I am not just a groomer; I am a friend to animals, and my passion extends beyond the salon walls. I actively support animal welfare initiatives in my community, striving to make a positive impact on the lives of all creatures.
        </p>
      </main>

    

      <Footer />
    </div>
  );
};

export default About;

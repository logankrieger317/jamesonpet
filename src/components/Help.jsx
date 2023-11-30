import Header from "./Header";
import Footer from "./Footer";


export default function Help() {
  return (
    <>
      <Header />

      <main className="container flex flex-column flex-wrap items-center justify-center mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center">Need Help? Contact Our Web Development Team</h1>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <p className="mt-2">
            Our web development team is here to help you with any questions or issues you may have. Please feel free to contact us using any of the following methods:
          </p>

          <ul className="list-disc">
            <li className="mb-4 mt-4 ml-4">
              <span className="font-bold  ">Email:</span>
              <a href="mailto:websupport@example.com" className="text-red-500 pl-2 underline">Logan@KriegerTX.com</a>
            </li>
            
            <li className="mb-4 ml-4">
              <span className="font-bold ">Live Chat:</span>
              <a href="Error" className="text-red-500 underline pl-2">Coming Soon!</a>
            </li>
          </ul>
        </section>

        
      </main>

      <Footer />
    </>
  );
}

import { Disclosure } from '@headlessui/react'
import Header from './Header'
import Footer from './Footer'


const faqs = [
  {
    question: "How much does dog grooming cost?",
    answer:
      "The cost of dog grooming can vary depending on the size, breed, and coat type of your dog, as well as the specific services you request. However, you can expect to pay anywhere from $20 to $100 or more for a basic grooming appointment.",
  },
  {
    question: "What services do you offer",
    answer:
      "Most dog grooming businesses offer a variety of services, including bathing, brushing, nail trimming, ear cleaning, and deshedding. Some businesses also offer more specialized services, such as hair styling and teeth brushing.",
  },
  {
    question: "Do you have any special certifications or training?",
    answer:
      "Many dog groomers are certified by professional organizations, such as the National Dog Groomers Association of America (NDGAA). This certification demonstrates that the groomer has met certain standards of training and experience.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes, all reputable dog grooming businesses should be insured. This insurance protects you and your dog in case of any accidents or injuries.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "Most dog grooming businesses allow you to schedule appointments online or by phone. We Have a convienient online booking system that allows you to schedule your appointment at your convience. ",
  },

]

export default function Faq() {
  return (
    <>
    <Header />
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <p className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <p className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

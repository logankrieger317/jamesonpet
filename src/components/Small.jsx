import Header from "./Header";
import Footer from "./Footer";


const services = [
  { name: 'Deluxe', href:'Book', description: 'Full Wash, Nail Trim', price: '$55' },
  { name: 'Furminator', description: 'Deshedding, Shampoo and Conditioner', price: '$30' },
  { name: 'Pawdicure', description: 'Nail Trim, Paw Massage', price: '$25' },
  { name: 'Puppy Package', description: 'Gentle Bath, Brushing, Ear Cleaning', price: '$40' },
  { name: 'Teeth Cleaning', description: 'Professional Teeth Cleaning', price: '$50' },
  { name: 'Pampered Pooch', description: 'Full Wash, Haircut, Nail Trim', price: '$70' },
  { name: 'Aromatherapy Bath', description: 'Relaxing Bath with Essential Oils', price: '$35' },
  { name: 'Tick and Flea Treatment', description: 'Tick and Flea Bath, Prevention', price: '$45' },
  { name: 'Blueberry Facial', description: 'Gentle Face Cleansing', price: '$20' },
  { name: 'Paw Balm Treatment', description: 'Moisturizing and Soothing Paw Treatment', price: '$15' },
  { name: 'Ear Cleaning', description: 'Thorough Ear Cleaning', price: '$20' },
  
]

export default function Small() {

    return (
        <>
        <Header />
             <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900 mt-6">Small Dogs</h1>
          
        </div>
        
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Service
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  
                  
                </tr>
              </thead>
              <tbody className="bg-white">
                {services.map((person) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="whitespace-wrap  py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {person.name}
                    </td>
                    <td className="whitespace-wrap px-3 py-4 text-sm text-gray-500">{person.description}</td>
                    <td className="whitespace-wrap px-3 py-4 text-sm text-gray-500">{person.price}</td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

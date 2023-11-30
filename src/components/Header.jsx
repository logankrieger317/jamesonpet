import { Dialog } from '@headlessui/react'
import { useState } from 'react'


const navigation = [
  { name: 'Home', href: 'Home' },
  { name: 'Services', href: 'Services' },
  { name: 'About', href: 'About' },
  { name: 'Contact', href: 'Contact' },
  { name: 'Book Now', href: 'https://booking.moego.pet/go/?name=jamesonandcompanydoggrooming' },
  { name: 'FAQ', href: 'Faq' },
  { name: 'Help', href: 'Help' },
]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>

    <header className="bg-white shadow-xl">
    <div className='flex flex-row justify-center w-full h-fit -mb-4 p-2 text-white bg-red-600 text-sm '>
  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>

    <p className="mr-2">(737)-263-7002</p>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>

   <a href="mailto:info@jcoatx.com" className='mr-2'>Jamesongrooming@gmail.com</a>

  </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="Home" className="-m-1.5 p-1.5">
          <span className="sr-only">Jameson & Company</span>
          <img className="h-8 w-auto rounded-full" src="Logo.png" alt="" />
        </a>
          <h1 className='font-bold text-2xl'> Jameson & Company</h1>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <p className="h-6 w-6 mr-4 font-bold" aria-hidden="true" > Menu </p>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
        
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
         
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Jameson & Company</span>
              <img
                className="h-8 w-auto rounded-full"
                src="Logo.png"
                alt=""
              />
            </a>
            <h1 className='font-bold text-2xl'> Jameson & Company</h1>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <p className="h-6 w-6 mr-4 font-bold" aria-hidden="true" >X</p>
            </button>
            
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      
    </header>
    </>
  )
}

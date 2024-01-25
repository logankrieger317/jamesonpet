import Header from "./Header"
import Footer from "./Footer"


const products = [
  {
    id: 1,
    name: '0-14 lbs Dogs',
    href: 'To14',
    imageSrc: 'https://www.southernliving.com/thmb/T7w8WdCU-D9HelAFcDGwZJ5fmas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-996939804-1-9bb01421ef63450f8950ee00744d9e66.jpg',
    
  },
  {
    id: 2,
    name: '15-30 lbs Dogs',
    href: 'Large',
    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/bernese-mountain-dog-royalty-free-image-1581013857.jpg?crop=0.87845xw:1xh;center,top&resize=980:*',
    
  },
  {
    id: 3,
    name: '31-50 lbs dogs',
    href: 'Long',
    imageSrc: 'https://www.thesprucepets.com/thmb/jLh7NLnixsAPlPJgMNEjR28Gtq0=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1177298821-72b8011ff02848adaba10cd3e89a5d10.jpg',
    
  },
  {
    id: 4,
    name: '51-70 lbs Dogs',
    href: 'Short',
    imageSrc: 'https://chasingtails.store/cdn/shop/articles/short_hair_dogs_1024x.jpg?v=1621266220',
    
  },
  {
    id: 5,
    name: '71+ lbs Dogs',
    href: 'Short',
    imageSrc: 'https://chasingtails.store/cdn/shop/articles/short_hair_dogs_1024x.jpg?v=1621266220',
  },
  {
    id: 6,
    name: 'Add Ons',
    href: 'Addons',
    imageSrc: 'https://us.123rf.com/450wm/ionutparvu/ionutparvu1612/ionutparvu161200412/67602124-add-on-stamp-sign-text-word-logo-blue.jpg',
    
  },
  // More products...
]

export default function Services() {
  return (
    <>
    <Header />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"> Our Services</h2>
          <a href="#" className="hidden text-sm font-medium text-red-600 hover:text-red-500 md:block">
           
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-red-600 hover:text-red-500">
            
            
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

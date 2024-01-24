const people = [
  {
    name: 'Hailey',
    email: '',
    role: 'Founder / Head Groomer',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // {
  //   name: 'Michelle',
  //   email: '',
  //   role: 'Groomer',
  //   imageUrl:
  //     'https://st3.depositphotos.com/1011434/13157/i/450/depositphotos_131572502-stock-photo-happy-woman-smiling.jpg',
  // },
  // {
  //   name: 'Katie',
  //   email: '',
  //   role: 'Groomer',
  //   imageUrl:
  //     'https://media.istockphoto.com/id/1301953681/photo/young-woman-student-outdoor-portrait.jpg?s=612x612&w=0&k=20&c=T4IhT-D5RgQqdn5oBz_utSRrsWQFqvkC-VtLjeEN8kg=',
  // },
  // {
  //   name: 'John',
  //   email: '',
  //   role: 'Groomer',
  //   imageUrl:
  //     'https://cdn.create.vista.com/api/media/small/93999358/stock-photo-portrait-of-mid-adult-african-american-man',
  //   },
  
  
]

export default function Peoples() {
  return (
    <div className="bg-red-600  w-full flex flex-row align-center justify-center mt-8 p-10 mb-2 z-10 shadow-xl ">

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="truncate text-sm text-gray-500">{person.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

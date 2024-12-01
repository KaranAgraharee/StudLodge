import Image from "next/image"
import Component from "./component/login"


export default function studlodge() {
  return (
     <div>
      {/* Header Section */}
      <header 
      className=" h-[400px] text-black flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: "url('/banner/room1.jpg')" }}
      >
      <div className="relative left-1/3 -top-10 ">
      <Component/>
      </div>
      
        <div className="p-4 md:p-4 backdrop-blur-lg rounded-xl bg-orange-300/10 border-orange-300/15 border-2 place-items-center">
        <h1 className="text-4xl font-bold mb-4 ">StudentHousingHub</h1>
        <p className="text-lg mb-6">Find your perfect home away from home.</p>
        <input type="text"  
               placeholder="Search for accommodation"
               className="w-full max-w-md px-4 py-2 rounded-lg text-gray-800"
        />
        <p className="mt-4">Discover affordable and convenient PG accommodations near your college.</p></div>
      </header>

      {/* Filters Section */}
      <div className="flex justify-center gap-4 py-6 bg-gray-100">
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">🏠 Apartments</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">🏡 Houses</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">🏢 Rooms</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">📍 Nearby</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">📅 Calendar</button>
      </div>

      {/* Popular Section */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar">
          {/* {popular.map((item, index) => (
            <div key={index} className="flex-none w-80 p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Book Now</button>
            </div>
          ))} */}
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="px-4 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">This week featured listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* {featured.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">Followers: {item.followers}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">View Details</button>
            </div>
          ))} */}
        </div>
      </section>

      {/* Accommodations to Follow Section */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Accommodations to Follow</h2>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar">
          <div className="flex-none w-80 p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-lg font-semibold">Dog House PG</h3>
            <p className="text-sm text-gray-600">394 followers</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Follow</button>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white text-center py-8">
        <div className="flex justify-center gap-4 mb-4">
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Facebook</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Instagram</button>
        </div>
        <p>&copy; 2024 Student Housing Hub</p>
      </footer>
    </div>
  )
}

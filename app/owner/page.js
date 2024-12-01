import Link from "next/link";
import React from "react";
import { connectDB } from "../api/lib/mongodb";
 
const HomePage = () => {
    const SubmitAction = (e) => {
     "use server"
      connectDB()
    }
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">StudLodge</h1>
          <nav className="space-x-6">
            <Link href='/'>
              Home
            </Link>
          </nav>
        </div>
      </header>


      <main className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Post Your PG Details</h2>
            <p className="text-sm text-gray-600 mb-6">
              If you are a property owner, you can easily post details of your
              PG accommodation for students here.
            </p>
            <form action={SubmitAction}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Property Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Enter property name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  className="relative m-1  w-1/5 p-2 border rounded-md"
                  placeholder="Enter street"
                />
               <input
                type="text"
                className="relative m-1 w-1/5 p-2 border rounded-md"
                placeholder="block"
              />
              <input
              type="text"
              className="relative m-1 w-1/5 p-2 border rounded-md"
              placeholder="village/city"
            />
            <input
              type="text"
              className="relative m-1 w-1/5 p-2 border rounded-md"
              placeholder="district"
            />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Price (₹)
                </label>
                <input
                  type="number"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Enter price"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Enter description"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-md"
              >
                Submit
              </button>
            </form>
        </div>
      </main>


      <footer className="bg-black text-white text-center py-4">

      </footer>
    </div>
  );
};

export default HomePage;

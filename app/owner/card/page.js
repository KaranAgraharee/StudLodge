"use client";
import Image from "next/image";
import { useState } from "react";

import { useForm } from "react-hook-form";

export default function PostPgAccommodation() {
  const { register, handleSubmit, reset } = useForm();
  const [previewImages, setPreviewImages] = useState([])


  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file))
    setPreviewImages((prev) => [...prev, ...previews]) 
  }

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "photos") {
          Array.from(data[key]).forEach((file) => {
            formData.append("photos", file)
          })
        } else {
          formData.append(key, data[key]);
        }
        
      })

      const response = await fetch("/api/owner/", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("Submitted successfully!");
        reset()
        setPreviewImages([])
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Studlodge - Post PG Accommodation
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Upload Photos */}
      <section>
          <h2 className="text-lg font-semibold mb-2">Upload Photos</h2>
          <div className="flex space-x-4 mb-4">
            {previewImages.map((src, index) => (
              <Image
                key={index}
                width={400}
                height={400}
                src={src}
                alt="Preview"
                className="h-24 w-32 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            {...register("photos")}
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-lg"
          />
      </section> 

        {/* Property Details */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter the address"
              {...register("address", { required: true })}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Room Types</label>
            <input
              type="text"
              placeholder="Single, Double, etc."
              {...register("roomTypes", { required: true })}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </section>

        {/* Amenities */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Amenities</h2>
          <div className="grid grid-cols-2 gap-2">
            {["WiFi", "AC", "Laundry", "Parking", "Meals Included", "24x7 Security"].map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={amenity}
                  {...register("amenities")}
                  className="rounded"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Pricing</h2>
          <input
            type="number"
            placeholder="Price per month"
            {...register("price", { required: true })}
            className="w-full p-2 border rounded-lg"
          />
        </section>

        {/* Contact Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Contact Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("contactName", { required: true })}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              {...register("contactNumber", { required: true })}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <footer className="text-center mt-8 text-gray-500">
      </footer>
    </div>
  );
}

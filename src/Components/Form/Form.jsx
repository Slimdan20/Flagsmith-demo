"use client"; 
import React from 'react'
import { useRouter } from "next/navigation";


const Form = () => {
    const router = useRouter();
  return (
<form className="mb-10">
      <h1 className="text-center font-bold text-3xl mt-5">Order Now</h1>
      <div className="mx-5 sm:w-2/4 bg-deepPurple rounded-lg sm:m-auto py-8 mt-3 grid gap-4 p-4">
        <div className="grid gap-4 sm:flex sm:justify-between px-4">
          <input type="text" required name="name" placeholder="First-name" className="border bg-white py-2 px-3 ml-0 sm:ml-3 rounded-md w-64" />
          <input type="text" required name="lastname" placeholder="Last-name" className="border bg-white ml-0 sm:ml-3 py-2 px-3 mr-3 rounded-md w-64" />
        </div>
        <input type="text" required name="Adress" placeholder="Adresss" className="border py-2 px-3 mx-4 bg-white sm:mx-7 mt-2 rounded-md w-64 sm:w-88" />
        <input type="number" required name="phone" placeholder="Phone number" className="border py-2 px-3 bg-white mx-4 sm:mx-7 mt-2 rounded-md w-64 sm:w-88" />
        <input type="email" required name="email" placeholder="Email" className="border py-2 px-3 mx-4 sm:mx-7 mt-2 bg-white rounded-md w-64 sm:w-88" />
        <input type="date" required name="date" placeholder="Preferred pickup date" onFocus={(e) => (e.target.type = 'date')}onBlur={(e) => {if (!e.target.value) e.target.type = 'text';}} className="border py-2 px-3 mx-4 sm:mx-7 mt-2 rounded-md w-64 sm:w-88 bg-white" />
        <textarea name="message" placeholder="Special instruction" className="border py-2 px-3 mx-4 sm:mx-7 mt-2 rounded-md bg-white w-64 sm:w-88"></textarea>\
        <div className="flex justify-between ml-4 mr-9 sm:mx-7">
          <button type="submit" className="border w-28 sm:w-48 text-white py-2 px-3 rounded-md cursor-pointer">Order Now</button>
          <button onClick={() => router.push("/")} className="border w-28 sm:w-48 text-white py-2 px-3 cursor-pointer rounded-md">Head back</button>
        </div>
      </div>
    </form>
  )
}

export default Form

"use client";
import { NavBar } from "../components/Navbar";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
export default function Layout() {
  const [emailInput, setEmailInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const requestData = {
      email: emailInput,
      department: departmentInput,
      resourceName: resourceName,
      resourceType: resourceType,
    };
    console.log(requestData);
  };

  return (
    <>
      <NavBar />
      <section className="w-[90vw] md:w-[60vw]   flex justify-between items-center mx-auto h-[80vh] p-10 rounded-xl my-16  bg-auth ">
        <form className="flex flex-col w-full">
          <h2 className="text-4xl font-bold mb-3">Request Resources</h2>
          <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
            E-mail *
          </label>
          <div className="flex flex-1 rounded-lg border-black border-[1px] w-full p-1 bg-[#002B43]/25 mb-3 md:w-full relative flex-col">
            <input
              value={emailInput}
              required={true}
              onChange={(e) => setEmailInput(e.target.value)}
              className=" auth-input w-full "
              type="email"
            />
          </div>
          <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
            Department
          </label>
          <div className="flex flex-1 rounded-lg border-black border-[1px]  p-1 bg-[#002B43]/25 mb-3 md:w-full relative flex-col">
            <input
              value={departmentInput}
              required={true}
              onChange={(e) => setDepartmentInput(e.target.value)}
              className=" auth-input"
              type="text"
            />
          </div>
          <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
            Resource Name
          </label>
          <div className="flex flex-1 rounded-lg  border-black border-[1px] p-1 bg-[#002B43]/25 mb-3 md:w-full relative flex-col">
            <input
              value={resourceName}
              required={true}
              onChange={(e) => setResourceName(e.target.value)}
              className=" auth-input"
              type="text"
            />
          </div>
          <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
            Resource Type
          </label>
          <div className="flex flex-1 rounded-lg border-black border-[1px]  p-1 bg-[#002B43]/25 mb-3 md:w-full relative flex-col">
            <input
              value={resourceType}
              required={true}
              onChange={(e) => setResourceType(e.target.value)}
              className=" auth-input"
              type="text"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#FFA800] py-2 my-3 w-full flex rounded-lg md:rounded-none justify-center self-end md:w-1/5 hover:bg-[#EEA000]"
          >
            Place Request
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

"use client";
import { NavBar } from "../components/Navbar";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { ThreeDots } from "react-loader-spinner";
import { useRequestResourceMutation } from "../data/api/resourceSlice";

export default function Page() {
  const [emailInput, setEmailInput] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [regNo, setRegNo] = useState("");

  const canAddRequest =
    Boolean(emailInput) &&
    Boolean(resourceName) &&
    Boolean(resourceType) &&
    Boolean(regNo);

  const [
    updatePost, // This is the mutation trigger
    { isLoading, isSuccess }, // This is the destructured mutation result
  ] = useRequestResourceMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const requestData = {
      resourceName: resourceName,
      resourceType: resourceType,
      email: emailInput,
      regNo,
    };
    updatePost(requestData);
  };

  return (
    <>
      <NavBar />
      <section className="w-[90vw] md:w-[60vw]   flex justify-between items-center mx-auto h-auto p-5 md:p-10 rounded-xl my-5 md:my-16  bg-auth ">
        {!isSuccess ? (
          <form className="flex flex-col w-full">
            <h2 className="text-4xl font-bold mb-3">Request Resources</h2>
            <label className="text-md my-1 text-[#0A3E5C]" htmlFor="">
              E-mail *
            </label>
            <div className="flex flex-1 rounded-lg border-black border-[1px] w-full p-2 bg-auth mb-3 md:w-full relative flex-col">
              <input
                value={emailInput}
                required={true}
                onChange={(e: React.FormEvent) => setEmailInput(e.target.value)}
                className=" auth-input w-full "
                type="email"
              />
            </div>
            <label className="text-md my-1 text-[#0A3E5C]" htmlFor="">
              Registration Number
            </label>
            <div className="flex flex-1 rounded-lg  border-black border-[1px] p-2 bg-auth mb-3 md:w-full relative flex-col">
              <input
                value={regNo}
                required={true}
                onChange={(e: React.FormEvent) => setRegNo(e.target.value)}
                className=" auth-input"
                type="text"
              />
            </div>
            <label
              className="text-md font-normal my-1 text-[#0A3E5C]"
              htmlFor=""
            >
              Resource Name
            </label>
            <div className="flex flex-1 rounded-lg  border-black border-[1px] p-2 bg-auth mb-3 md:w-full relative flex-col">
              <input
                value={resourceName}
                required={true}
                onChange={(e: React.FormEvent) =>
                  setResourceName(e.target.value)
                }
                className=" auth-input"
                type="text"
              />
            </div>
            <label className="text-md my-1 text-[#0A3E5C]" htmlFor="">
              Resource Type
            </label>
            <div className="flex flex-1 rounded-lg border-black border-[1px]  p-2 bg-auth mb-3 md:w-full relative flex-col">
              <input
                value={resourceType}
                required={true}
                onChange={(e: React.FormEvent) =>
                  setResourceType(e.target.value)
                }
                className=" auth-input"
                type="text"
              />
            </div>
            <button
              type="submit"
              disabled={!canAddRequest}
              onClick={handleSubmit}
              className="bg-[#FFA800] py-2 my-3 w-full flex rounded-lg font-semibold md:rounded-none justify-center self-end md:w-1/5 hover:bg-[#EEA000] disabled:bg-opacity-25 disabled:cursor-default"
            >
              {isLoading ? (
                <ThreeDots
                  height="25"
                  width="30"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                "Place Request"
              )}
            </button>
          </form>
        ) : (
          <div className="flex text-center px-1 md:px-20  w-full h-[60vh] justify-center items-center">
            <h2 className=" text-2xl   md:text-5xl font-bold leading-relaxed ">
              Thank you for requesting this resource it will be delivered to you
              <br />
              Via E-mail
            </h2>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

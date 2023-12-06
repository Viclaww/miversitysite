"use client";
import { NavBar } from "../components/Navbar";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { ThreeDots } from "react-loader-spinner";
import { useRequestResourceMutation } from "../data/api/resourceSlice";
import { MdOutlineWarning } from "react-icons/md";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Image from "next/image";
import whiteLogo from "../images/Miversity_whiteonblack-removebg-preview (1).png";

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
    { isLoading, isSuccess, isError, error }, // This is the destructured mutation result
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
      <ProgressBar
        height="4px"
        color="blue"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <NavBar />

      <section className="w-[90vw] md:w-[60vw]  font-poppins flex justify-between items-center mx-auto h-auto p-5 md:p-10 rounded-xl my-5 md:my-16  bg-auth ">

        {!isSuccess ? (
          <form className="flex flex-col w-full">
            <h2 className="text-4xl font-bold mb-3">Request Resources</h2>
            <label className="text-md my-1 text-[#0A3E5C]" htmlFor="">
              E-mail
            </label>
            <div className="flex flex-1 rounded-lg border-black border-[1px] w-full p-2 bg-auth mb-3 md:w-full relative flex-col">
              <input
                value={emailInput}
                required= {true}
                onChange={(e) => setEmailInput(e.target.value)}
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
                onChange={(e) => setRegNo(e.target.value)}
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
                onChange={(e) => setResourceName(e.target.value)}
                className=" auth-input"
                type="text"
              />
            </div>
            <label className="text-md my-1 text-[#0A3E5C]" htmlFor="">
              Resource Type
            </label>
            <div className="flex flex-1 rounded-lg border-black border-[1px]  p-2 bg-auth mb-3 md:w-full relative flex-col">
              <select
                onChange={(e) => setResourceType(e.target.value)}
                className="auth-input placeholder:text-black"
                placeholder=""
                value={resourceType}
                id=""
              >
                <option value="">Select Resource Type</option>
                <option value="Text-Book"> Textbook</option>
                <option value="Past Questions"> Past Questions</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            {isError && error && (
              <div className="bg-red-200 rounded-lg text-red-900 p-3">
                {"status" in error && error.status === 500 ? (
                  <p className="flex font-bold ">
                    <MdOutlineWarning className="mx-1" size={28} /> Please Use
                    correct email!
                  </p>
                ) : (
                  <div>An error occurred: {JSON.stringify(error)}</div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={!canAddRequest || isLoading}
              onClick={handleSubmit}
              className="bg-[#FFA800] py-2 my-3 w-full flex rounded-lg font-semibold md:rounded-none justify-center self-end md:w-1/5 hover:bg-[#EEA000] disabled:bg-opacity-50 disabled:cursor-default"
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
            <h2 className=" text-2xl   md:text-5xl font-normal leading-relaxed ">
             Resource request successful. It will be delivered to you within the next 24 hours.
              <br />
              Thank you for choosing Miversity!
              
            </h2>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

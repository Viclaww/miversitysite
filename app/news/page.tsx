import { NavBar } from "../components/Navbar";
import { Breaking } from "./components/Breaking";
import { GoSearch } from "react-icons/go";

export default function Layout() {
    return (
      <>
        <NavBar></NavBar>
        <section className=" h-fit w-[90%] mx-auto my-20 flex flex-col md:flex-row items-center justify-evenly">
          <Breaking></Breaking>
          <section className="section-by w-[30%]">
            <div className="w-full mx-8 border-gray-400 rounded-xl p-1 border-[1px] flex flex-row">
              <div className="bg-blue-500 flex flex-row items-center justify-center rounded-xl h-10 w-10">
                  <GoSearch size={25} color={"white"}></GoSearch>
              </div>
              <input className="ml-2 w-full focus:outline-none" type="text" placeholder="Search">
              </input>
            </div>
            <div className="interests w-full mx-12 mt-4">
              <span className="text-blue-600 mr-4 capitalize">Entertainment</span>
              <span className="text-blue-600 mr-4 capitalize">Tutorials</span>
              <span className="text-blue-600 mr-4 capitalize">Lectures</span>
              <span className="text-blue-600 mr-4 capitalize">Live events</span>
              <span className="text-blue-600 mr-4 capitalize">Sports</span>
              <span className="text-blue-600 mr-4 capitalize">Exams</span>
            </div>
          </section>
        </section>
      </>
    
    )
}
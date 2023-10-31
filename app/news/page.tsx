import { NavBar } from "../components/Navbar";
import { ArticleContainer } from "./components/ArticleContainer";
import { Breaking } from "./components/Breaking";
import { GoSearch } from "react-icons/go";

export default function Layout() {
    return (
      <>
        <NavBar></NavBar>
        <div className="interests w-[90%] flex flex-row overflow-scroll md:hidden mx-4 mt-4 ">
              <span className="text-blue-600  mr-4 bg-blue-300 px-3 rounded-full capitalize block">Entertainment</span>
              <span className="text-blue-600 mr-4 bg-blue-300 px-3 rounded-full capitalize">Tutorials</span>
              <span className="text-blue-600 mr-4 bg-blue-300 px-3 rounded-full capitalize">Lectures</span>
              <span className="text-blue-600 mr-4 bg-blue-300 px-3 rounded-full capitalize block h-8 w-[299px]">Live events</span>
              <span className="text-blue-600 mr-4 bg-blue-300 px-3 rounded-full capitalize">Sports</span>
              <span className="text-blue-600 mr-4 bg-blue-300 px-3 rounded-full capitalize">Exams</span>
        </div>
        <div className="w-[90%] md:hidden flex mx-4 border-gray-400 rounded-xl p-1 mt-4 border-[1px] flex-row">
              <div className="bg-blue-500 flex flex-row items-center justify-center rounded-xl h-10 w-10">
                  <GoSearch size={25} color={"white"}></GoSearch>
              </div>
              <input className="ml-2 w-full focus:outline-none" type="text" placeholder="Search">
              </input>
            </div>
        <section className=" h-fit w-[90%] mx-auto my-20 flex flex-col md:flex-row items-center justify-evenly">
          <Breaking></Breaking>
          <section className="section-by w-full md:w-[30%]">
            <div className="w-full hidden md:flex mx-4 border-gray-400 rounded-xl p-1 border-[1px] flex-row">
              <div className="bg-blue-500 flex flex-row items-center justify-center rounded-xl h-10 w-10">
                  <GoSearch size={25} color={"white"}></GoSearch>
              </div>
              <input className="ml-2 w-full focus:outline-none" type="text" placeholder="Search">
              </input>
            </div>
            <div className="interests w-full hidden md:block mx-4 mt-4">
              <span className="text-blue-600 mr-4 capitalize">Entertainment</span>
              <span className="text-blue-600 mr-4 capitalize">Tutorials</span>
              <span className="text-blue-600 mr-4 capitalize">Lectures</span>
              <span className="text-blue-600 mr-4 capitalize">Live events</span>
              <span className="text-blue-600 mr-4 capitalize">Sports</span>
              <span className="text-blue-600 mr-4 capitalize">Exams</span>
            </div>
            <ArticleContainer
            target={"Articles"}
            className={"text-center"}
            >
            </ArticleContainer>
          </section>
        </section>
        <section className=" h-fit w-[90%] mx-auto my-20 flex flex-col md:flex-row items-center justify-evenly">
          <section className="bg-blue-100 h-full w-full md:mr-6 rounded-lg p-4">
          <ArticleContainer
            target={"Trending"}
            className={"text-left"}
            >
            </ArticleContainer>
          </section>
          <section className="w-full md:w-[40%] bg-blue-100 rounded-lg p-4 mt-10">
          
            <ArticleContainer
            target={"Updates"}
            className={"text-left bg-white rounded-lg p-3"}
            >
            </ArticleContainer>
          </section>
        </section>
      </>
    
    )
}
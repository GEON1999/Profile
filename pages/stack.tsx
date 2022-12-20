import Image from "next/image";
import Layout from "../components/layout";

export default function About() {
  return (
    <div>
      <Layout />
      <div className="felx justify-center text-center font-serif text-5xl mb-20">
        STACK
      </div>
      <div className=" flex  mx-5 flex-col justify-center items-center">
        <div className="text-2xl font-thin font-serif justify-items-start mb-14">
          Main Project
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col  gap-20">
          <div className=" space-y-5 w-96">
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">Next.js</span>
            </div>
            <div className="grid grid-cols-2  items-start  ml-5 gap-5">
              <span className="">
                <h1 className="text-lg ">Typescript</h1>
                <p className="text-sm text-gray-500">
                  to manage error & improve productivity
                </p>
              </span>
              <span>
                <h1 className="text-lg">Tailwind</h1>
                <p className="text-sm text-gray-500">to make responsive web</p>
              </span>
              <span className="">
                <h1 className="text-lg">SWR</h1>
                <p className="text-sm text-gray-500">to fetch data</p>
              </span>
              <span>
                <h1 className="text-lg">Planet & Prisma</h1>
                <p className="text-sm text-gray-500">to manage DB with SQL</p>
              </span>
              <span>
                <h1 className="text-lg">IronSession</h1>
                <p className="text-sm text-gray-500">to save session</p>
              </span>
              <span>
                <h1 className="text-lg">Vercel</h1>
                <p className="text-sm text-gray-500">to deploy</p>
              </span>
            </div>
          </div>
          <div className=" space-y-5 w-96">
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">React.js</span>
            </div>
            <div className="grid grid-cols-2  items-start  ml-5 gap-5">
              <span className="">
                <h1 className="text-lg ">Typescript</h1>
                <p className="text-sm text-gray-500">
                  to manage error & improve productivity
                </p>
              </span>
              <span>
                <h1 className="text-lg">Styled-components</h1>
                <p className="text-sm text-gray-500">
                  To make the code light and simple
                </p>
              </span>
              <span className="">
                <h1 className="text-lg">Framer Motion</h1>
                <p className="text-sm text-gray-500">
                  to make a natural animation effect
                </p>
              </span>
              <span>
                <h1 className="text-lg">React Query</h1>
                <p className="text-sm text-gray-500">
                  to handle data and error
                </p>
              </span>
            </div>
          </div>
          <div className=" space-y-5 w-96">
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">Node.js</span>
            </div>
            <div className="grid grid-cols-2  items-start  ml-5 gap-5">
              <span className="">
                <h1 className="text-lg ">Javascript</h1>
                <p className="text-sm text-gray-500">
                  to make web page interactive
                </p>
              </span>
              <span>
                <h1 className="text-lg">MongoDB</h1>
                <p className="text-sm text-gray-500">
                  to handle data without SQL
                </p>
              </span>
              <span className="">
                <h1 className="text-lg">Pug</h1>
                <p className="text-sm text-gray-500">
                  to make the HTML code simple
                </p>
              </span>
              <span>
                <h1 className="text-lg">Scss</h1>
                <p className="text-sm text-gray-500">
                  to reduce amount of lines in its code
                </p>
              </span>
              <span>
                <h1 className="text-lg">Heroku</h1>
                <p className="text-sm text-gray-500">to deploy</p>
              </span>
            </div>
          </div>
          <div className=" space-y-5 w-96">
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">
                Javascript
              </span>
            </div>
            <div className="grid grid-cols-2  items-start  ml-5 gap-5">
              <span className="">
                <h1 className="text-lg ">HTML</h1>
                <p className="text-sm text-gray-500">
                  to divide elements structurally
                </p>
              </span>
              <span>
                <h1 className="text-lg">CSS</h1>
                <p className="text-sm text-gray-500">to mkae website fancy</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

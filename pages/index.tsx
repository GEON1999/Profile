import Image from "next/image";
import Contact from "../components/contact";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="text-center">
          <div className="-mt-16 text-[25vw] font-extrabold text-transparent  bg-clip-text back bg-[url('../imgs/dark.gif')] flex flex-col">
            <span>GEON</span>
          </div>
          <span className="text-[3vw] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-200">
            Creative.
          </span>
        </div>
      </Layout>
    </div>
  );
}

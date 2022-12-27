import Image from "next/image";
import Contact from "../components/contact";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="text-center relative top-52  md:top-24">
          <div className="text-[25vw] font-extrabold text-transparent  bg-clip-text md:bg-[url('../imgs/sea.gif')] bg-[url('../imgs/dark.gif')]  flex flex-col">
            
            <span>GEON</span>
          </div>
          <span className="flex justify-center text-[3vw] font-extrabold bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent ">
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.1s]">c</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.2s]">r</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.3s]">e</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.4s]">a</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.5s]">t</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.6s]">i</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.7s]">v</p>
            <p className="bg-clip-text bg-[url('../imgs/dark.gif')] text-transparent delay-[0.8s]">e</p>
        </span>
        </div>
      </Layout>
    </div>
  );
}

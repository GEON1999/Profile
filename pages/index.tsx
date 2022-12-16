import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="text-center">
          <div className="-mt-16 text-[28vw] font-extrabold text-transparent  bg-clip-text back bg-[url('../imgs/dark.gif')] -space-y-[7vw]">
            <p>GEON</p>
            <p className="text-[3vw] text-black font-bold">Creative.</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

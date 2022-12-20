import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex space-x-[6vw] justify-center items-center my-10">
      <div className="md:w-96">
        <div className="space-y-2">
          <span className="md:text-2xl text-lg font-extrabold">
            Feel Free to Contact
          </span>
          <p className="font-thin text-sm">
            저와 함께하고 싶으시다면, 연락해 주세요!!
          </p>
        </div>
      </div>
      <div className="md:p-4 px-3 py-2 rounded-full bg-black text-white font-thin shadow-sm">
        CLICK
      </div>
    </div>
  );
}

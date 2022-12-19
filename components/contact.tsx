import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex space-x-[10vw] justify-center items-center">
      <div className="md:w-96">
        <div className="space-y-3">
          <span className="text-4xl font-extrabold">Feel Free to Contact</span>
          <p className="font-thin text-sm">
            저와 함께하고 싶으시다면, 연락해 주세요!!
          </p>
        </div>
        <div className="flex justify-end -mt-5">
          <Image src="/arrow.png" width="50" height="50" alt="arrow" />
        </div>
      </div>
      <div className="p-4 rounded-full bg-black text-white font-thin shadow-sm">
        CLICK
      </div>
    </div>
  );
}

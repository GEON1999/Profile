import Layout from "../components/layout";

export default function RootLayout() {
  return (
    <div className="h-full text-white">
      <div className="bg-indigo-500 md:h-[900px] h-[400px] w-full  rounded-b-full  shadow-indigo-200 border-b-4 border-x-2 border-opacity-30 border-indigo-100">
        <Layout />
        <div className="flex flex-col justify-center items-center md:mt-40 -mt-14">
          <div className="md:h-80 md:w-80 h-52 w-52 rounded-full bg-white md:mb-10 mb-3"></div>
          <div className="flex  items-center">
            <div className="flex flex-col">
              <div className="text-2xl mb-6">Name</div>
              <div>Feild</div>
              <div>Age</div>
              <div>Advantages</div>
              <div>disadvantage</div>
            </div>
            <div className="mx-2">
              <div className="text-2xl mb-6">:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div>
              <div className="text-2xl mb-6">Geon</div>
              <div>Front-End</div>
              <div>24</div>
              <div>Young & Smart</div>
              <div>Kind of Calculative</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[800px] md:w-full bg-purple-300 rounded-t-full -mt-52 -z-10 relative border-t-4 border-x-2 border-opacity-30">
        <div className="flex justify-around mx-auto relative z-10 mt-96">
          <div>
            <h1>Carrer</h1>
            <p>Worked in IGS</p>
          </div>
          <div>
            <h1>Education</h1>
            <p>Droped out of Seneca College in Toronto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

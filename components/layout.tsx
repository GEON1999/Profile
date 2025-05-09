import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";
interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="bg-transparent">
      <nav className=" md:text-xl md:pt-7 font-bold fixed w-[100%] z-10 bg-white pb-4">
        <div className="flex justify-between md:mx-20 mx-4 mt-5 md:mt-0">
          <a
            onClick={() => {
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <div className="group flex space-x-3 justify-center items-center">
              <div className="flex flex-col cursor-pointer">
                <span className="text-5xl font-thin flex items-end text-gray-700  -space-x-4">
                  <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                    G
                  </p>
                  <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                    E
                  </p>
                  <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                    O
                  </p>
                  <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                    N
                  </p>
                </span>
              </div>
              <div className="flex flex-col font-thin items-start text-sm">
                <p>Build </p>
                <p>Together</p>
              </div>
            </div>
          </a>
          <ul className="flex lg:flex-row flex-col justify-center items-end space-x-8 text-base font-thin">
            <a
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li className={cls(`layout-btn cursor-pointer`)}>ABOUT</li>
            </a>
            <a
              onClick={() => {
                document
                  .getElementById("career")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li className={cls(`layout-btn cursor-pointer`)}>CAREER</li>
            </a>
            <a
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li className={cls(`layout-btn cursor-pointer`)}>PROJECTS</li>
            </a>

            <a
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li className={cls(`layout-btn cursor-pointer`)}>CONTACT</li>
            </a>
          </ul>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}

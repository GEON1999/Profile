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
          <Link href="/">
            <div className="flex space-x-3 justify-center items-end">
              <div className="flex flex-col">
                <span className="text-5xl font-thin flex items-end text-gray-700 -space-x-4">
                  <p>H</p>
                  <p>O</p>
                  <p>M</p>
                  <p>E</p>
                </span>
              </div>
              <div className="flex flex-col font-thin items-start text-sm">
                <p>Ready </p>
                <p>to Begin</p>
              </div>
            </div>
          </Link>
          <ul className="flex flex-col justify-center items-end space-x-4 text-base font-thin">
            <Link href="/about">
              <li
                className={cls(
                  ``,
                  router.asPath === "/about" ? "font-bold" : ""
                )}
              >
                ABOUT
              </li>
            </Link>
            <Link href="/work">
              <li
                className={cls(
                  ``,
                  router.asPath === "/work" ? "font-bold" : ""
                )}
              >
                WORK
              </li>
            </Link>

            <Link href="/contact">
              <li
                className={cls(
                  ``,
                  router.asPath === "/contact" ? "font-bold" : ""
                )}
              >
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}

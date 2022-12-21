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
      <nav className="flex justify-between mb-20 md:text-xl items-center md:pt-7 pt-3 md:mx-20 mx-4 font-bold">
        <Link href="/">
          <div className="flex space-x-3 justify-center items-end">
            <div className="flex flex-col">
              <span className="text-5xl font-thin flex items-end text-gray-700 -space-x-4 hover:space-x-0  hover:ease-in-out ease-in-out duration-200">
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
        <ul className="flex flex-col justify-center items-end space-x-4 text-base font-thin ">
          <Link href="/about">
            <li
              className={cls(
                `hover:text-lg hover:ease-in ease-in-out duration-200`,
                router.asPath === "/about" ? "font-bold" : ""
              )}
            >
              ABOUT
            </li>
          </Link>
          <Link href="/stack">
            <li
              className={cls(
                `hover:text-lg hover:ease-in ease-in-out duration-200`,
                router.asPath === "/stack" ? "font-bold" : ""
              )}
            >
              WORK
            </li>
          </Link>

          <Link href="/contact">
            <li
              className={cls(
                `hover:text-lg hover:ease-in ease-in-out duration-200`,
                router.asPath === "/contact" ? "font-bold" : ""
              )}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="bg-transparent text-sm text-white">
      <nav className="flex justify-between mb-20 md:text-xl items-center md:pt-7 pt-3 md:mx-20 mx-4">
        <div className="md:h-20 md:w-20 h-14 w-14 rounded-full bg-black text-center flex justify-center items-center">
          <p className="">Geon</p>
        </div>
        <ul className="flex md:space-x-14 space-x-4">
          <li className="text-black">ABOUT</li>
          <li>STACK</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

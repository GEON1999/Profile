interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="bg-transparent">
      <nav className="flex justify-between mb-20 md:text-xl items-center md:pt-7 pt-3 md:mx-20 mx-4 font-bold">
        <div className="md:h-20 md:w-20 h-14 w-14 rounded-full bg-black text-center flex justify-center items-center">
          <p className="text-white"></p>
        </div>
        <ul className="flex flex-col justify-center items-end space-x-4 text-base font-thin">
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

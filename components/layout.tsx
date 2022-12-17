interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="bg-transparent">
      <nav className="flex justify-between mb-20 md:text-xl items-center md:pt-7 pt-3 md:mx-20 mx-4 font-bold">
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="mx-12">
          <div className="">
            <nav className="flex justify-between mb-20 text-xl items-center mt-4">
              <div className="h-20 w-20 rounded-full bg-red-500 text-center text flex justify-center items-center">
                <p className="">Geon</p>
              </div>
              <ul className="flex space-x-14">
                <li className="text-red-600">ABOUT</li>
                <li>STACK</li>
                <li>WORK</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}

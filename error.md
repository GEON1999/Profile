## 1. nextjs 13 layout

```jsx
/* ./app/layout */

<html>
      <nav>
        <div>Geon</div>
        <ul className="w-full flex flex-row">
          <li className="text-red-600">ABOUT</li>
          <li>STACK</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <body>
        <div>{children}</div>
      </body>
    </html>
```

- 최초에 위와 같이 `nav` 를 코딩 했다.
- 위와 같이 코딩시 `children` prop 이 `nav` 위에 위치를 했다.

```jsx
/* ./app/layout */

<html>
      <body>
        <nav>
          <div>Geon</div>
          <ul className="w-full flex flex-row">
            <li className="text-red-600">ABOUT</li>
            <li>STACK</li>
            <li>WORK</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div>{children}</div>
      </body>
    </html>
```

- 위와 같이 `body` 내에 layout `element` 와 `children` 을 순서대로 코딩함으로서 해결했다.

</br></br>

## 2. TailwndCSS 미적용

- 이전 nextjs12 프로젝트와 동일하게 tailwind 를 설정해주었으나, tailwind 가 적용되지 않았다.
1. app 경로 내에 `output.css` 파일을 만들고 아래와 같이 기입해주었다.

```jsx
/* ./app/output.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

1. tailwind.config.js 파일에는 app 경로의 파일들에 tailwindCSS 가 적용되도록 설정해주었다.

```jsx
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

1. page 파일에선 output.css 파일을 improt 했다.

```jsx
/* ./app/page */

import "./output.css";

export default function Page() {
  return <h1 className="text-red-500">Hello, dd Next.js!</h1>;
}
```

1. package.json 파일엔 아래의 코드들을 추가했다.
- `concurrently` 는 뒤에 있는 코드들을 동시에 처리해주는 역할을 한다.

```jsx
"dev": "concurrently \"next dev\" \"tailwindcss --input ./app/globals.css --output ./app/output.css --watch\"",
"build": "tailwindcss ./app/globals.css --output ./app/output.css && next build",
```

nextjs 를 쓰는 이유는 간단하게 앱을 빌드할 수 있고, ssr 혹은 rendering 시의 장점을 살리는 것이 주 목적이다.

main page 만 빌드하게 되면 rendering 하는 것 자체가 굉장히 한정된다.

maind page 만 빌드하는 대신, 빌드시에만 rendering 되는 정적 랜더링 방식으로 대대분의 데이터를 채우고, 프로젝트 부분과 같은 항목에서 데이터는 ssr? 등의 다른 방식의 랜더링을 채택하면 나을까

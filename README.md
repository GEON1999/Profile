# Nextjs 13

</br>

## What's new✨
<img src="https://velog.velcdn.com/images/hang_kem_0531/post/ab4f8ca8-0fa1-4651-b89d-c1cf325ab4ce/image.png" />

### `app` Directory
- 기존 `page` 경로 내에서 `/page/index.js` 에는 프론트엔드 기능 `/page/api/server.js` 에는 서버 기능을 구현했다면, next13에서부터는 `/app/index.js` 와 같이 바뀐다.
- __layout__ 경로 안에서는 `nav` 와 같이 중복으로 사용되는 UI 를 공유하기 쉽게 해준다.
- __loading__ 경로 안에서는 data fetching 시 등 로딩시의 UI 를 설정할 수 있다. 
- 기존에 data 를 가져올 때 `getStaticProps` 혹은 `getServerSideProps` 를 사용 했는데, next13 부터는 아래와 같이 data 를 `fetch` 해올 수 있음
```
// app/page.js

export default function Page() {
  const name = use(getData());
  return '...';
}

async function getData() {
  const res = await fetch('...');
  const data: string = await res.json();
  return data;
}

// 기존 getStaticProps 을 사용하려면 fetch(URL, { cache: 'force-cache' })
// 기존 getServerSideProps 을 사용하려면 fetch(URL, { cache: 'no-store' })
```


</br>

### Turbopack
- Webpack 보다 700 빠른 업데이트
- Webpack 보다 4배 빠른 cold starts(프로그램이나 운영 체제를 다시로드 하는?)
- 최소한의 assets 만을 bundles 로 요구히기에 부팅 속도가 1.8 초로 Webpack의 16.5 초 보다 빠르다고함

</br>

### next/imgage 
- 플랫폼에 맞게 최적화됨
- `alt` 태그에 대한 접근성 향상
- native lazy loading 에서 hydration 이 필요치않게 되어 빨라짐
- 스타일과 구성이 쉬워짐
- client-side 에서의 자바스크립트가 감소됨

</br> 

### next/font
- 사용자 설정 폰트를 포함한 폰트 자동 최적화
- 개인 정보 보호와 성능 향상을 위해 외부 네트워크 요청 삭제
- 모든 폰트 파일에 대한 자체 호스팅
- CSS `size-adjust` property 를 통해 자동으로 레이아웃 이동을 없앰

</br>

새로운 폰트 시스템을 통해 __Google 폰트__ 를 편리하게 사용할 수 있음
- CSS 및 글꼴 파일은 빌드 시 다운로드 되며 자체 호스팅됨. (브라우저에서 google 로 네트워크 요청을 보내지 않음)

</br>

### next/link
- 기존 `link`
```
export default function Page() {
  return (
    <Link href="/about">
      <a>About Us</a>
    </Link>
  )
}
```
- 변경 후 
```
export default function Page() {
  return <Link href="/about">About Us</Link>
}
```

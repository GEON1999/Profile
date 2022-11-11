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

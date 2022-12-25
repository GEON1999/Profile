### 시도

text 배경에 이미지를 삽입하는 디자인이 너무 마음에 들어 찾아봤다.

최초엔 z index 를 사용해서 시도해봤지만 불가능 했다.

### 해결

```jsx
-webkit-background-clip:text
-webkit-text-fill-color:transparent
```

찾아보니 위 코드 두줄로 배경화면을 텍스트 기준으로 자를 수 있었다.

하지만 tailwind 를 사용중이기에 tailwind 에서의 적용 방법을 찾았다.

### Tailwind 적용

```jsx
<div className="text-transparent bg-clip-text back bg-[url('../imgs/dark.gif')]"></div>
```

위와 같이 `bg-clip-text` 를 적용할 수 있었다. 다만 css 처럼 배경 이미지를 적용해야 했는데, `bg-[url('이미지url')]` 를 통해 배경이미지를 적용할 수 있었다.

하지만 배경 gif 의 사이즈들이 너무 작았고, 작아지니 이미지들이 이어지지 않고 짤려서 노출됐다.

이를 해결하고자 해상도를 포기하고 resize 사이트에서 gif 사이즈를 2배 이상 늘려 적용했다.

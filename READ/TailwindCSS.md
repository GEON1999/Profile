## text 에 이미지 및 색으로 배경 지정

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

</br></br>

## tailwind 코드 재활용

- apply 기능을 통해 css 에 있는 'class' 와 같은 효과를 볼 수 있었다.

```
@layer components {
// styles/globals.css
    .layout-btn {
        @apply hover:scale-150 hover:ease-in-out duration-200
    }
  }
```

위 코드를 globals.css 파일에 작성해두면 'layout-btn' 입력시 위 코드들이 적용된다.

</br></br>

## Next Image blur
- work 부분에서 프로젝트를 간단하게 gif 로 업로드 했는데, 해당 부분 로딩이 상당히 길게 느껴졌다.
- img 나 data 를 불러올 때 skeleton effect 가 사용자 경험에 도움이 된다는 걸 본적이 있어 Next Image 를 통해 시도 해보았다.
```
<Image
    alt="project"
    src={`/images/${id}.gif`}
    layout="responsive"
    height={500}
    width={500}
    placeholder="blur"
    blurDataURL={`/images/${id}.gif`}
/>
```
- 코드는 정말 단순하게 `placeholder="blur"` 와 blur 처리를 위한 이미지 url 만 있으면 됐다.

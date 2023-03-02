---
title: How to handle error on HTML `img` tag in React
author: Dileepa Chandima
date: 02/03/2023
category: TECH
tags: react, components
slug: how-to-handle-error-html-img-react
---

Today I'm going to talk how to handle image loading error with ReactJS and Type Script

The motivation to write this is When I work on the NextJS application in my office, our UI designer provide me two image types, for default loading a `webp` file and for fallback `jpeg` file, This is the first time I'm adding fallback image to a `img` tag :( my bad

So I search for how to do this using React and Typescript,

I found this answer in [StackOverflow](https://stackoverflow.com/a/48222599)

```js
<img
  src={record.picture}
  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src = "image_path_here";
  }}
/>
```

Then I tried to make this more TS compatible version

And this is it

```js

...

const onErrorImage = ({ currentTarget }: SyntheticEvent<HTMLImageElement, Event>): void => {
  currentTarget.onerror = null;
  currentTarget.src = imageFallbackURL;
};

...

  return (
    <>
    ...
      <img
        alt="your alt here"
        onError={onErrorImage}
        src={imageDefaultURL}
      />
    ...
    </>
  );

```

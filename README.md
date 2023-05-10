GIthub Pages fail to server nuxtjs distribution: https://jimmerydad.github.io/cat-quotes/dist/index.html

## Github Pages tweaks
Need to update the index.html in dist folder for github pages to work properly
> #140   basePath: "https:/jimmerydad.github.io/cat-quotes/dist",
> #141      assetsPath: "/cat-quotes//dist/nuxt/",
>
> attempt 3
>  basePath: "https:/jimmerydad.github.io/cat-quotes",
 >         assetsPath: "/cat-quotes/dist/nuxt/",

# cat-quotes

This is a playground based on instructions originating from: https://serversideup.net/using-nuxtjs-to-build-an-ios-and-android-app/

Might need this for future refernce during a build:

https://capacitorjs.com/docs/basics/workflow

- npm run build
- npm run generate
  After that, you will run the following command:

- npx cap copy // to create an Android app

> The final workflow to build your app will be:

> npm run build -- to build your NuxtJS app

> npm run generate -- to package your NuxtJS app for static deployment

> npx cap copy -- to copy your built app to the iOS and Android Workspaces

> npx cap open ios or npx cap open android -- to open your app and debug in the native IDE for the platform.

---

## Semantic Versioning

Using git requires a slightly different approach to semantic versioning. Part of it will be listed in the package file, others will be seen in the tags used in github.

## Attributions:

Initial Cat Photo by <a href="https://unsplash.com/@arianassphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ariana Suárez</a> on <a href="https://unsplash.com/s/photos/surprised-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

---

## Tools User

- Tried this https://phraseit.net/show/dhx0oe

---

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [NuxtJs documentation](https://nuxtjs.org).

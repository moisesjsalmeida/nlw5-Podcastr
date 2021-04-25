# ![Podcastr Logo](https://raw.githubusercontent.com/moisesjsalmeida/nlw5-Podcastr/main/public/logo.svg)

This project was developed during the 5th edition of _NLW - Next Level Week_, an event hosted by [Rocketseat](https://rocketseat.com.br).

![Application Preview](https://github.com/moisesjsalmeida/nlw5-Podcastr/blob/main/public/Application%20Preview.gif?raw=true)

## 🎧 About it

The sole purpose of this application is streaming episodes of a single podcast feed. In this case, the chosen podcast was _"Fala Dev"_, created by the RocketSeat team. The episodes are provided by a server generated via JSON Server, using an JSON object which contains all episodes data.

As an educational program, _NLW_ has the purpose of teaching techniques and skills, in different programming languages and areas ( in this case, front-end development using React and Next.js). So, developing this application was a way to learn about **Server Site Rendering**, **Static Site Generation**, **Contexts** and many other concepts linked to modern web development.

As a personal touch, I've used _Styled Components_ for managing styles. The objective was to learn more about the tool, and preparing the environment of the application to future enhancements, such as responsive design and personalizing themes.

---

## 🛠 Technologies used

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org)
- [Styled Components](https://styled-components.com)
- [JSON Server](https://www.npmjs.com/package/json-server)

---

## 🚀 Run this project

### Clone the repository

```shell
git clone
```

### Install Dependencies

```shell
cd podcastr
yarn
```

### Run JSON Server

```shell
yarn server
```

### Run the app

On a different terminal window, enter the application directory.

You can run the application in dev mode, using

```shell
yarn dev
```

Or build the static pages and run it in production mode, using

```shell
yarn build
yarn start
```

_Important: the application server must be running, so the requests needed for building the static pages won't fail_

🤓 💻

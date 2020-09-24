# Membership Mission 2 - 할일관리 (to do)

## 배포 주소

- [http://101.101.216.75/](http://101.101.216.75/)

## 프로젝트 구조

- client

```
📦client
 ┣ 📂src
 ┃ ┣ 📂images
 ┃ ┣ 📂javascripts
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📜card.js
 ┃ ┃ ┃ ┣ 📜column.js
 ┃ ┃ ┃ ┗ 📜log.js
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┃ ┣ 📜drag.js
 ┃ ┃ ┃ ┣ 📜modal.js
 ┃ ┃ ┃ ┗ 📜request-api.js
 ┃ ┃ ┣ 📜board.js
 ┃ ┃ ┣ 📜signin.js
 ┃ ┃ ┗ 📜signup.js
 ┃ ┣ 📂stylesheets
 ┃ ┃ ┣ 📂util
 ┃ ┃ ┃ ┣ 📜drag.css
 ┃ ┃ ┃ ┗ 📜modal.css
 ┃ ┃ ┣ 📜board.css
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜signup.css
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📜board.html
 ┃ ┣ 📜index.html
 ┃ ┗ 📜signup.html
 ┣ 📜babel.config.js
 ┣ 📜banner.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜webpack.config.js
```

- server

```
📦server
 ┣ 📂bin
 ┃ ┗ 📜www
 ┣ 📂database
 ┃ ┗ 📜db_connection.js
 ┣ 📂middleware
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜session.js
 ┣ 📂models
 ┃ ┣ 📜board.js
 ┃ ┣ 📜card.js
 ┃ ┣ 📜execute.js
 ┃ ┣ 📜log.js
 ┃ ┣ 📜query.js
 ┃ ┗ 📜user.js
 ┣ 📂routes
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜board.js
 ┃ ┃ ┣ 📜card.js
 ┃ ┃ ┣ 📜log.js
 ┃ ┃ ┗ 📜user.js
 ┃ ┗ 📜api.js
 ┣ 📂services
 ┃ ┣ 📜board.js
 ┃ ┣ 📜card.js
 ┃ ┣ 📜log.js
 ┃ ┗ 📜user.js
 ┣ 📂utils
 ┃ ┗ 📜response-message.js
 ┣ 📜.env
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

## Database Scheme

![image](https://user-images.githubusercontent.com/52775389/94162858-22d95380-fec2-11ea-993e-efd9a8c14616.png)

## Demo

## Install

```bash
cd client
npm install

cd server
npm install 
```

### Webpack Build

```bash
cd client
npm run build
```

### Start

```bash
cd server
npm start
```
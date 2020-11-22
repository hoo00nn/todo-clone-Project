## Demo

![Sep-25-2020 10-44-42](https://user-images.githubusercontent.com/52775389/94217156-43ce9280-ff1c-11ea-8ad3-c5792fc2bb40.gif)

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

![image](https://user-images.githubusercontent.com/52775389/94163396-c1fe4b00-fec2-11ea-8885-dc2453977c8b.png)

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

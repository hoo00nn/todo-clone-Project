# javascript-w3-todo
스프린트 3-4주차 웹 프로젝트 - 할일관리

# Week3 - ToDo

### Project Structure

- server

```
📦server
 ┣ 📂bin
 ┃ ┗ 📜www
 ┣ 📂database
 ┃ ┗ 📜db_connection.js
 ┣ 📂middleware
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
 ┣ 📜.env
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

- client

```
📦client
 ┣ 📂src
 ┃ ┣ 📂images
 ┃ ┣ 📂javascripts
 ┃ ┃ ┣ 📜board.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂stylesheets
 ┃ ┃ ┣ 📜board.css
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜signup.css
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📜board.html
 ┃ ┣ 📜index.html
 ┃ ┣ 📜init.js
 ┃ ┗ 📜signup.html
 ┣ 📜babel.config.js
 ┣ 📜banner.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜webpack.config.js
```

## Monday

- [x]  Node.js / Express 개발 환경 설정
- [x]  Mysql 설치
- [x]  NCP 클라우스 서버에 설치한 mysql 연동
- [ ]  Babel / Webpack 개발 환경 설정 및 공부
- [x]  NCP 배포 환경 설정
- [ ]  요구사항 기능 단위 분석

## Tuesday

- [ ]  기능별 API 분류
- [x]  DB 테이블 설계
- [x]  Babel / Webpack 개발 환경
- [x]  회원가입 / 로그인 페이지 구현
- [x]  회원가입 / 로그인 백엔드 기능 구현

## Wednesday

- [x]  테이블별 쿼리 및 API 구현
- [x]  서버 쪽에서 뷰를 렌더링 하지 않고 클라이언트에서 모두 렌더링하도록 구조 변경
- [x]  웹팩과 바벨 패키지 관리를 클라이언트에서 하기 위해 서버쪽에 있던 웹펙, 바벨 패키지 및 설정 파일 삭제
- [x]  클라이언트 쪽에서 렌더링 하기 위해 nginx 설치 및 설정
- [x]  log 테이블 추가

### ncloud ubunt 환경에서 nginx 설정

[ubuntu16.04 에서 pm2 와 nginx로 node js 서비스 하기](https://abc1211.tistory.com/284)

## Thursday

- [x]  card 테이블 CRUD API 구현
- [x]  log 테이블 API 구현
- [x]  프로젝트 구조 변경
- [x]  프론트 fetch 동작 테스트

### API 명세

> card 테이블

- 카드 가져오기

```jsx
// request 요청
// GET: /api/card
{
	user_id : "사용자 아이디",
}

// response 응답
// 성공 시
{
 [
  {
   title : "제목",
   content : "내용", 
   user_id : "사용자 아이디",
	 column_no : "컬럼 번호", 
	 date : "추가한 날짜",
	 card_no : "카드 번호",
 },
 {
   title : "제목2",
   content : "내용2", 
   user_id : "사용자 아이디",
   column_no : "컬럼 번호", 
   date : "추가한 날짜",
   card_no : "카드 번호",
  },
 ]
}

// 실패 시
{
 status : "fail",
}

```

- 카드 추가

```jsx
// request 요청
// POST: /api/card/add
{
 title : "제목",
 content : "내용", 
 user_id : "사용자 아이디",
 column_no : "컬럼 번호",
}

// response 응답
// 성공 시
{
 status : "success",
}

// 실패 시
{
 status : "fail",
}

```

- 카드 삭제

```jsx
// request 요청
// POST: /api/card/delete
{
 title : "제목",
 content : "내용", 
 user_id : "사용자 아이디",
 column_no : "컬럼 번호",
 card_no : "카드 번호",
}

// response 응답
// 성공 시
{
 status : "success",
}

// 실패 시
{
 status : "fail",
}
```

- 카드 업데이트

```jsx
// request 요청
// PATCH: /api/card/update
{
 title : "제목",
 content : "내용", 
 user_id : "사용자 아이디",
 column_no : "컬럼 번호",
 card_no : "카드 번호",
}

// response 응답
// 성공 시
{
 status : "success",
}

// 실패 시
{
 status : "fail",
}
```

> board 테이블

- board 리스트 가져오기

```jsx
// request 요청
// GET: /api/board
{

}

// response 응답
// 성공 시
[
 {
  title : "컬럼 이름", 
	column_no : "컬럼 번호",
 },
 {
 title : "컬럼 이름", 
 column_no : "컬럼 번호",
 }
]

// 실패 시
{
 status : "fail",
}
```

> user 테이블

- 회원가입 요청

```jsx
// request 요청
// POST: /api/user/signup
{
 username : "유저 아이디",
 password : "유저 비밀번호",
}

// response 응답
// 성공 시
{
 status : "success",
}

// 실패 시
{
 status : "fail",
}
```

- 로그인 요청

```jsx
// request 요청
// POST: /api/user/signin
{
 username : "유저 아이디",
 password : "유저 비밀번호",
}

// response 응답
// 성공 시
{
 title : "컬럼 이름", 
 column_no : "컬럼 번호",
}

// 실패 시
{
 status : "fail",
}
```
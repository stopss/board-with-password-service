# 🍀Board With Password Service
> 비밀번호를 이용한 게시판 서비스  
</br>

```
# 프로젝트 실행
$ yarn run start:dev

# Swagger
localhost:3000/api-docs
```  
</br>

## 📆개발 기간
2022.09.06 ~ 2022.09.07  
</br></br>

## ⚒️기술 스택
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  
</br>
**ORM: TypeORM**  
</br></br>

## ✏️요구사항 및 분석
### **요구사항**
#### 1. 사용자는 게시글을 올릴 수 있다. (Issues #1)
   * 게시글은 제목, 본문, 비밀번호로 구성
   * 제목은 최대 20자, 본문은 200자로 서버에서 제한
   * 제목과 본문 모두 이모지가 포함될 수 있음  
   </br>
   
#### 2. 사용자는 게시글을 올릴 때 비밀번호를 설정할 수 있다. (Issues #2)
   * 회원가입, 로그인 없이 비밀번호만 일치하면 수정, 삭제가 가능
   * 비밀번호는 DB에 암호화 된 형태로 저장
   * 비밀번호는 6자 이상, 숫자 1개 이상 반드시 포함  
   </br>
   
#### 3. 모든 사용자는 한 페이지 내에서 모든 게시글을 최신 글 순서로 확인 할 수 있다. (Issues #2)  
</br>

### **추가 요구사항**
#### 1. 게시글의 개수가 많을 때, 사용자가 스크롤을 내릴 때마다 오래된 글들이 계속 로드되게 API 수정한다. (Issues #3)
   * 게시글 중복 불가
   * 추가 로드는 20개 단위  
   </br>
   
#### 2. 외부 API를 활용하여, 사용자가 게시글을 업로드한 시점의 날씨 정보가 게시글에 포함되도록 수정한다. (Issues #4)
   * https://www.weatherapi.com 가입 후 Real-time Weather API 사용
   * 발급 받은 API Key는 .env 파일에 저장
   * 게시글 작성 시 자동으로 데이터베이스에 추가
   * 수정은 불가  
   </br></br>
   
## 🧩ERD
![image](https://user-images.githubusercontent.com/33679560/188898930-6f829c58-b2f6-4c3d-b53c-590c8c822069.png)  
</br></br>

## 📝API 명세서
![image](https://user-images.githubusercontent.com/33679560/188870735-e21400b1-3ae1-47f7-8897-1161366911b6.png)  
[postman 바로가기](https://documenter.getpostman.com/view/21326072/VVBTV7hE)
</br></br>

## 📌Convention
### Git Branch
* ``main``, ``develop``, ``feat``로 브랜치를 나눈다.
* 기능별로 ``feat/user``, ``feat/board`` 등으로 구분 짓는다.
* 브랜치는 삭제하지 않는다.
* 개발 과정에서는 ``devleop``브랜치에 merge 한다.
* ``mian``브랜치는 배포하기 전에 merge 한다.  
</br>

### Git Commit
* ``feat`` : 새로운 기능 추가 / 구현중
* ``fix`` : 이미 있는 코드를 수정 / 버그 수정
* ``refactor`` : 코드 리팩토링
* ``docs`` : 문서 수정(README, Swagger)
* ``test`` : 테스트 코드
* ``chore`` : 개발에 영향을 가지 않는 부분 수정(패키지 매니저, 주석)  
</br>

**example)**
```
git commit -m "feat: 게시판 Create API 개발 (이슈번호)"
git commit -m "fix: 게시판 Update 일부 수정 (이슈번호)"
git commit -m "chore: 주석 추가"
```  
</br>





   

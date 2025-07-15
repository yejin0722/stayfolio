# **🏡StayFolio** 클론코딩

## 👩‍💻 작업자 : 조예진

## 📌 프로젝트 소개

**StayFolio 클론코딩 프로젝트**는 공식 사이트의 디자인과 정보를 분석하여,
React 프레임워크와 React-Bootstrap 라이브러리를 통해 재구현한 클론 프로젝트입니다.

기존 사이트에서 영감을 받아 UI/UX 개선과 **컴포넌트 단위의 코드 설계**,
**서브페이지 간 구조적 연결** 및 **실제 검색/로그인 등의 흐름을 모사**해 사용성과 완성도를 높였습니다.

---


## 📅 제작 기간
- 약 30시간소요


---


## 💻 개발 세팅 

- **개발 환경** : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat&logo=windows10&logoColor=white"/>

- **사용 프로그램** : <img src="https://img.shields.io/badge/Vs_code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/> 

- **사용 언어** : <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"/>

---


 ## ✨ 데모 사이트
👉 [StayFolio 클론 사이트 바로가기](https://precious-halva-7b73d6.netlify.app/)<br>
   📱 모바일 최적화

---

## 📦 프로젝트 폴더 구조


  stayfolio     
┣ 📂 public   
┃ ┗ 📄 index.html   
┣ 📂 src   
┃ ┣ 📂 components   
┃ ┣ 📂 data  
┃ ┣ 📂 pages                
┃ ┣ 📂 styles  
┃ ┣ 📄 App.js               
┃ ┗ 📄 index.js             
┣ 📄 package.json    
┗ 📄 README.md  


---


## 👀 페이지 구성

### 🏠 메인 페이지

| Navbar, 메인비주얼                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/62b7aac5-f6e1-4d86-9c88-2fd7f2b66e85)
| 스테이폴리오의 메인비주얼 슬라이드 캐로셀 영역과 네브바 컴포넌트 입니다. <br>
| 슬라이드는 자동 재생 되며 **이전, 다음버튼 클릭 시 전환** 되도록 구현했습니다.

<br>

| 검색, 로그인모달                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/user-attachments/assets/f9e74162-4c13-4e98-a560-b6a8ebcfc486" width="500px"> <img src="https://github.com/user-attachments/assets/dec309d7-102c-48de-bd62-995052a9fd76" width="300px">
| 스테이폴리오의 검색 모달과 로그인 모달 입니다. <br>
| **네브바의 검색인풋 클릭 시** 검색 모달창이 열리게 되며, 검색어나 해당 지역 버튼을 클릭하면 자동 입력되어 검색 버튼을 누르면 해당 검색어가 포함된 스테이가 나열되는 서브페이지로 이동합니다.

<br>

| Stay Card                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------------- |
| ![Image](https://github.com/user-attachments/assets/6bed7346-f2fc-4150-a6ea-01d47bab669f)
| 홈페이지 메인 영역인 스테이폴리오 입점 스테이들의 카드 입니다.
| **카드를 클릭 시** 해당 스테이의 id 값을 받아 **스테이 디테일 서브페이지**로 이동합니다.

<br>

| Make Folio                                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------- |
| ![Image](https://github.com/user-attachments/assets/29cc9025-1e57-4fc3-8d18-f9f3654d9eb6)
| 스테이 여행기를 미리보기 할 수 있는 섹션입니다.
| 아래 **스테이 여행기 더 보러가기**를 클릭하면 Journal 서브페이지의 travel 페이지로 이동합니다.
<br>

| Footer                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------ |
| ![Image](https://github.com/user-attachments/assets/51602585-fd02-476f-a13b-4d47d33a9503)
| 컴포넌트 영역인 푸터 입니다.


<br>


### 📄 서브페이지

| 서브01 : Stay Detail                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------ |
| ![Image](https://github.com/user-attachments/assets/4caf3871-2708-479e-9a77-2c67cabbbc6b) |
| 스테이 카드를 클릭 했을 때 해당 스테이의 id값에 맞는 상세 정보를 보여주는 디테일 페이지 입니다.
| 날짜 설정 및 스테이의 상세 이미지, 가격 등을 확인 할 수 있습니다.
<br>

| 서브02 : Promotion                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/c4f106f3-1fcf-43a0-b754-7c3283247c8d" width="45%"> <img src="https://github.com/user-attachments/assets/f2900945-3713-483a-ac01-3f6745c93e23" width="45%"> |
| 에디터의 추천, 이벤트등 프로모션 소식을 확인할 수 있는 서브페이지 입니다.
| 프로모션 카드를 클릭하면, 이벤트의 상세 정보를 볼 수 있는 페이지로 이동합니다.
<br>

| 서브03 : journal (Travel)                                                                                                        |
| :---------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/8452e3c1-bc5c-4a3e-ac83-34c7b9981f3f" width="45%"> <img src="https://github.com/user-attachments/assets/2d8b926b-ca3c-4509-9961-ceb4b244434d" width="45%"> |
| 스테이 여행기를 볼 수 있는 서브페이지 입니다.
| 카드를 클릭하면 해당 숙소에서 실제로 투숙하며 여행했던 여행기를 볼 수 있는 서브페이지로 이동합니다.


---

## 📝 라이선스

본 프로젝트는 **개인 포트폴리오 및 학습용**으로 제작되었으며,
StayFolio의 브랜드 및 이미지 저작권은 해당 사이트에 있습니다.


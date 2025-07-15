# 🏡 **StayFolio** 클론코딩

## 👩‍💻 작업자 : 조예진

---

## 📌 프로젝트 소개

**StayFolio 클론코딩 프로젝트**는 공식 사이트의 디자인과 UI/UX를 분석하여,  
**React 프레임워크**와 **React-Bootstrap** 라이브러리를 활용해 재구현한 프로젝트입니다.

컴포넌트 단위의 설계, 서브페이지 간 구조적 연결, 검색 및 로그인 흐름 구현 등을 통해  
원본 사이트와 유사한 사용자 경험을 제공합니다.

---

## 📅 제작 기간

- 총 **약 30시간 소요**

---

## 💻 개발 환경

- **OS** : ![Windows](https://img.shields.io/badge/Windows_10-0078D6?style=flat&logo=windows10&logoColor=white)
- **IDE** : ![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
- **사용 언어** : ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- **프레임워크** : ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
- **UI 라이브러리** : ![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

---

## ✨ 데모 사이트

👉 [StayFolio 클론 사이트 바로가기](https://precious-halva-7b73d6.netlify.app/)  
📱 **모바일 최적화** 완료

---

## 📁 프로젝트 폴더 구조


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

#### 🔹 Navbar & 메인 비주얼
![Navbar/Main](https://github.com/user-attachments/assets/62b7aac5-f6e1-4d86-9c88-2fd7f2b66e85)

- 메인 비주얼 캐러셀과 네브바 컴포넌트입니다.  
- 캐러셀은 자동 재생되며, 이전/다음 버튼으로 슬라이드를 전환할 수 있습니다.

---

#### 🔹 검색 & 로그인 모달
<img src="https://github.com/user-attachments/assets/f9e74162-4c13-4e98-a560-b6a8ebcfc486" width="45%"/> <img src="https://github.com/user-attachments/assets/dec309d7-102c-48de-bd62-995052a9fd76" width="45%"/>

- 네브바의 검색 인풋 클릭 시 검색 모달이 열립니다.  
- 검색어 또는 지역 버튼 클릭 → 자동 입력 → 검색 → 결과 페이지로 이동

---

#### 🔹 Stay Card
![Stay Card](https://github.com/user-attachments/assets/6bed7346-f2fc-4150-a6ea-01d47bab669f)

- 메인 영역에 나열된 스테이 카드  
- 클릭 시 `id`를 기반으로 디테일 페이지로 이동

---

#### 🔹 Make Folio
![Make Folio](https://github.com/user-attachments/assets/29cc9025-1e57-4fc3-8d18-f9f3654d9eb6)

- 스테이 여행기를 미리 볼 수 있는 섹션  
- '더 보러가기' 클릭 시 `Journal > Travel` 페이지로 이동

---

#### 🔹 Footer
![Footer](https://github.com/user-attachments/assets/51602585-fd02-476f-a13b-4d47d33a9503)

- 전체 페이지 하단의 푸터 컴포넌트입니다.

---

## 📄 서브 페이지 구성

#### 🔹 SearchResult
<img src="https://github.com/user-attachments/assets/4f851ae8-6a70-498e-900a-206dd5d5c3d4" width="80%"/>

- 검색된 키워드에 해당하는 스테이 목록을 보여주는 페이지

---

#### 🔹 Stay Detail
![Stay Detail](https://github.com/user-attachments/assets/4caf3871-2708-479e-9a77-2c67cabbbc6b)

- 선택한 스테이의 상세 정보 제공  
- 예약 날짜 선택, 이미지 확인, 가격 조회 가능

---

#### 🔹 Promotion
<img src="https://github.com/user-attachments/assets/c4f106f3-1fcf-43a0-b754-7c3283247c8d" width="45%"/> <img src="https://github.com/user-attachments/assets/f2900945-3713-483a-ac01-3f6745c93e23" width="45%"/>

- 에디터 추천 및 이벤트 등 프로모션 확인 가능  
- 카드 클릭 시 상세 페이지 이동

---

#### 🔹 Journal - Travel
<img src="https://github.com/user-attachments/assets/8452e3c1-bc5c-4a3e-ac83-34c7b9981f3f" width="45%"/> <img src="https://github.com/user-attachments/assets/4cd208f0-5166-49c7-91fb-ea704be47094" width="45%"/>

- 실제 투숙 기반의 여행기를 제공하는 섹션  
- 카드 클릭 시 상세 여행기 페이지로 이동

---

#### 🔹 Journal - Magazine
<img src="https://github.com/user-attachments/assets/47f0acda-226d-4a73-bb7c-c56535619f1c" width="45%"/> <img src="https://github.com/user-attachments/assets/3d01740f-533f-416f-848b-0c206fdf7d8c" width="45%"/>

- 다양한 테마와 정보를 담은 매거진 콘텐츠  
- 카드 클릭 시 상세 페이지 이동

---

#### 🔹 Pre-order
<img src="https://github.com/user-attachments/assets/1ffbc74b-83ae-4d5d-b7ec-affb4f3fedfe" width="80%"/>

- (오픈 예정) 프리오더 서브페이지

---

## 📝 라이선스

본 프로젝트는 **개인 포트폴리오 및 학습용**으로 제작되었습니다.  
StayFolio의 브랜드 및 이미지 저작권은 해당 사이트에 있으며, 상업적 사용은 금지됩니다.

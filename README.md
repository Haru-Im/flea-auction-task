<h1>
    <img src="https://res.cloudinary.com/dy5pujkzs/image/upload/v1698575917/ha_logo_lzwvkb.png" alt="Logo" style="height: 1em; vertical-align: middle; margin-right: 8px;">
    <span style="color: #23d9d0;">Flea Auction 구현 과제</span>
</h1>



<h2 style="color: #23d9d0;">프로젝트 개요</h2>

#### React-Native, Expo, TypeScript, Recoil, react-navigation, lottie 등을 이용한 플리옥션 구현 과제 및 클론코딩을 진행한 프로젝트입니다.

<br/>

<h2 style="color: #23d9d0;">실행 방법</h2>

<h4 style="color: #23d9d0;">의존성 설치</h4>

```
npm install
```
<h4 style="color: #23d9d0;">Expo 실행</h4>

```
npm start

// iOS Simulator 실행
i
```
<br/>

<h2 style="color: #23d9d0;">구현 과제 시작점</h2>

[🔗 src/screens/market/market.tab.tsx](https://github.com/Haru-Im/flea-auction-task/blob/main/src/screens/market/market.tab.tsx)

<br/>

<h2 style="color: #23d9d0;">폴더 구조</h2>

```
App.tsx                                    # 앱의 진입점
assets/                                    # 정적 자산들이 위치한 폴더
┣ logo/                                    # 로고 파일들 저장
┣ font/                                    # 사용하는 폰트 파일들 저장
┗ lotties/                                 # lottie 파일들 저장 (애니메이션 등)
src/                                       # 소스 파일들이 위치한 메인 폴더
┣ provider/                                # 전역 상태 관리 (Recoil 등)를 위한 프로바이더 파일들
┣ shared/                                  # 여러 곳에서 공유되는 컴포넌트나 함수 등
┣ screens/                                 # UI 화면 구성에 사용되는 스크린들의 집합
┃ ┣ home/
┃ ┃ ┗ home.screen.tsx                      # 홈 화면 UI
┃ ┣ article/
┃ ┃ ┗ article.screen.tsx                   # 아티클 화면 UI
┃ ┣ mypage/
┃ ┃ ┗ mypage.screen.tsx                    # 마이페이지 화면 UI
┃ ┣ market/
┃ ┃ ┣ market.tab.tsx                       # 마켓 탭 navigator (하위 탭 포함)
┃ ┃ ┗ screens/
┃ ┃   ┗ inprogress/
┃ ┃     ┣ inprogress.screen.tsx            # '진행 중' 화면
┃ ┃     ┣ container/
┃ ┃     ┃ ┣ inprogress.container.tsx       # 비즈니스 로직 처리
┃ ┃     ┃ ┗ hooks/
┃ ┃     ┃   ┗ ...                          # 커스텀 훅
┃ ┃     ┣ views/
┃ ┃     ┃ ┗ inprogress.view.tsx            # '진행 중' 화면의 UI 요소
┃ ┃     ┗ components/                      # '진행 중' 화면에서 사용하는 UI 컴포넌트들
┃ ┗ main/
┃   ┗ MainTab.tsx                          # 메인 탭 navigator (하위 탭 포함)
┣ root.stack.tsx                           # 앱의 메인 루트 스택 (네비게이션 구조 정의)
┗ index.ts                                 # 공통 export 관리


```
<br/>

<h2 style="color: #23d9d0;">시연 영상</h2>

[🔗 iPhone Pro max 15 (세부 구현 영상) : 일부 공개](https://youtu.be/HhI6FQ0qfRM)

[🔗 iPhone SE (낮은 해상도 시험용) : 일부 공개](https://youtu.be/u00PD4eqTB4)

<br/>

<h2 style="color: #23d9d0;">시연 GIF</h2>

gif는 해상도가 깨져서 보일 수 있습니다 :(

<table>
<tr>
<td>

<img src="https://res.cloudinary.com/dy5pujkzs/image/upload/v1698576215/%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6%E1%84%89%E1%85%B5%E1%84%92%E1%85%A7%E1%86%AB2_yunql0.gif" alt="과제 시현" width="250" height="auto">

</td>
<td>

<img src="https://res.cloudinary.com/dy5pujkzs/image/upload/v1698575131/%E1%84%92%E1%85%A9%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB_qfqudi.gif" alt="홈 Tab" width="250" height="auto">

</td>
<td>

<img src="https://res.cloudinary.com/dy5pujkzs/image/upload/v1698575131/%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%87%E1%85%B5%E1%84%8C%E1%85%AE%E1%86%BC_v6zbu5.gif" alt="준비중 화면" width="250" height="auto">

</td>
</tr>
</table>

<br/>

----
<h3 style="color: #23d9d0;">기여자</h3>

<h4>임하루</h4>

📞 Phone : 010-8301-5720  
✉️ E-mail : chalk323@naver.com
# covid19 웹사이트
코로나 19와 관련된 정보를 제공해주는 웹페이지입니다.

## 기능
1. open api, moment를 사용하여 오늘 날짜를 기준으로 확진자, 사망자, 격리해제, 검사 중 환자 수를 자동으로 업로드 해줍니다. 시, 도별 확진자도 같은 방법으로 업로드 되는 방식입니다. 
2. 전국 지도 위에 있는 시, 도별 버튼을 누르면 해당 지역의 코로나 확진자 및 백신 접종자 수가 있는 페이지로 이동합니다. 

## 기술 
Vue.js <br/>
NodeJS

## 스크린샷
![image](https://user-images.githubusercontent.com/87973617/180380819-d95b1104-9682-4641-a1c2-426dee4f3328.png)
![image (1)](https://user-images.githubusercontent.com/87973617/180380861-df1ba3a6-c385-4372-b1e1-2312766a0d8a.png)

## 스토리보드
<img src="https://user-images.githubusercontent.com/87973617/180376040-01f3f012-7a23-4d08-b192-2718b361e74f.png" width="300" height="400"/>

## 변경사항
원래는 각 시의 확진자 수를 알려주는 웹페이지를 만들 계획이였습니다. <br/>
공공 데이터에서 해당 데이터를 제공하지 않아 각 시의 홈페이지를 크롤링하여 사용하려 했으나 이를 허용하지 않아 중단하였습니다.

따라서, 해당 부분을 백신 정보로 변경하였습니다.



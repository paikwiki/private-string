# Private string

"Private string"은 해시 함수 이용해 사용자의 입력을 저장하거나 다시 읽어오는 작은 프로그램입니다. 타입스크립트와 아래 목록의 라이브러리 학습 목적으로 만든 토이프로젝트입니다.

## 주요 라이브러리 목록

- [inquirer](https://github.com/SBoudrias/Inquirer.js)
- [chalk](https://github.com/chalk/chalk)
- [crypto-js](https://github.com/brix/crypto-js)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)

## 기능

1. save: 사용자로부터 키와 데이터를 입력을 받아 파일로 저장합니다.
2. load: 저장한 파일의 내용을 다시 키와 조합하여 터미널에 출력합니다.

## 참고

현재 시점(2022.01.01)의 [chalk 라이브러리의 5.0 버전은 ECMAScript 모듈(ESM)로 작성되어 있습니다](https://github.com/chalk/chalk/releases/tag/v5.0.0). 타입스크립트와 함께 사용하기 위해서는 실험 단계의 기능 옵션을 활성화하거나, chalk 4.x 버전을 사용해야 합니다.

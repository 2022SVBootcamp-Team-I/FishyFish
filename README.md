# 깃 커밋 규칙

Type<br>
feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정<br>
fix : 기능에 대한 버그 수정<br>
build : 빌드 관련 수정<br>
chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore<br>
ci : CI 관련 설정 수정<br>
docs : 문서(주석) 수정<br>
style : 코드 스타일, 포맷팅에 대한 수정<br>
refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경<br>
test : 테스트 코드 추가/수정<br>
release : 버전 릴리즈<br>
<br>

# 예시
[feat] add AI model


personal note:
<br>
docker tag: use latest when development only. Specify version during deployment.
<br>
ELK have errors depending on version. Use same version accross all three stacks.


```
📦Mandoo
┣ 📂alertmanager
┃ ┗ 📜config.yml              // alert manager config file
┣ 📂backend
┃ ┣ 📂models                  // YOLO v5
┃ ┃ ┣ 📂hub
┃ ┣ 📂utils                   // YOLO v5
┃ ┃ ┣ 📂aws
┃ ┃ ┣ 📂flask_rest_api
┃ ┃ ┣ 📂google_app_engine
┃ ┃ ┣ 📂wandb_logging
┃ ┣ 📜Dockerfile              // flask_app container included in docker-compose.yml
┃ ┣ 📜README.md
┃ ┣ 📜app.py                  // Flask server
┃ ┣ 📜choice5_bestweight.pt   // Pretrained Pytorch weights (answer to 5 choices)
┃ ┣ 📜detection.py            // Detect input image
┃ ┣ 📜development.py          // Jwt key, algorithm for development
┃ ┣ 📜kakaoOcr.py             // extract text
┃ ┣ 📜modelv2.0.pt            // Pretrained Pytorch weights (image to question/content/answer)
┃ ┗ 📜requirements.txt
┣ 📂frontend
┃ ┣ 📂node_modules
┃ ┣ 📂public
┃ ┣ 📂src
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂Modals              // image select modal
┃ ┃ ┃ ┃ ┣ 📜Modal.css
┃ ┃ ┃ ┃ ┗ 📜Modal.js
┃ ┃ ┃ ┣ 📜BlankTop.js         // Margin between components
┃ ┃ ┃ ┣ 📜Button.js           // Button component
┃ ┃ ┃ ┣ 📜Header.css
┃ ┃ ┃ ┣ 📜Header.js           // Page Header
┃ ┃ ┃ ┣ 📜logo.PNG            // Project Logo
┃ ┃ ┃ ┣ 📜Search.js           // Table Search Function
┃ ┃ ┃ ┣ 📜Table.js            // Main Page Table
┃ ┃ ┃ ┗ 📜TableCell.js        // Tabel Cell hover
┃ ┃ ┣ 📂pages
┃ ┃ ┃ ┣ 📜imgIcon.png         // Modal Icon
┃ ┃ ┃ ┣ 📜Loader.js           // Loading Page
┃ ┃ ┃ ┣ 📜Login.js            // Login Page
┃ ┃ ┃ ┣ 📜loginLogo.PNG       // Project Logo
┃ ┃ ┃ ┣ 📜MainPage.js         // MainPage
┃ ┃ ┃ ┣ 📜noLogin.PNG         // noLogin Page
┃ ┃ ┃ ┗ 📜Signup.js           // Signup Page
┃ ┃ ┃ ┣ 📜App.js              // pages components manage
┃ ┃ ┃ ┣ 📜config.js
┃ ┃ ┣ 📜index.css
┃ ┃ ┗ 📜index.js
┃ ┣ 📜Dockerfile              // react container included in docker-compose.yml
┃ ┗ 📜README.md 
┣ 📂grafana
┃ ┣ 📂provisioning
┃ ┃ ┣ 📂dashboards
┃ ┃ ┃ ┣ 📜dashboard.yml       // dashboard provider config file
┃ ┃ ┃ ┣ 📜Docker Prometheus Monitoring.json  // monitoring general information
┃ ┃ ┃ ┗ 📜FlaskApp_Monitoring.json           // monitoring Flask Application API
┃ ┃ ┗ 📂datasources
┃ ┃ ┃ ┗ 📜datasource.yml      // admin config file
┃ ┗ 📜config.monitoring
┣ 📂nginx
┃ ┗ 📜nginx.conf              // nginx default config file
┣ 📂prometheus
┃ ┣ 📜alert.rules             // alert.rule config file
┃ ┗ 📜prometheus.yml          // prometheus config file
┣ 📜.gitignore
┣ 📜docker-compose.yml        // multi container application(Dockerfile) build file
┣ 📜LICENSE
┣ 📜README.md
┗ 📜README_en.md
```

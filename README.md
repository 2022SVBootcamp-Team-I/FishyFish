# 🐟 Fishy Fish 🎣
물고기 분류 및 정보 제공 서비스

# :file_folder: System Archiecture
<br/>

# :electric_plug: Tech Stack
|분류|기술|
|:---:|:---:|
|  Frontend  | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> |
|  Backend  |  <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=Celery&logoColor=white"> <img src="https://img.shields.io/badge/RabbitMQ-F46800?style=for-the-badge&logo=RabbitMQ&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white"> |
|  AI  |  <img src="https://img.shields.io/badge/-PyTorch-%23EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"> <img src="https://img.shields.io/badge/Google Colab-F9AB00?style=for-the-badge&logo=Google Colab&logoColor=white"> | 
| Devops | <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/-NGINX-%23009639?style=for-the-badge&logo=NGINX&logoColor=white"> |
|  DB  | <img src="https://img.shields.io/badge/PostgreSQL-%4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white"> |
|  Cloud  | <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
|  ETC  | <img src="https://img.shields.io/badge/-Grafana-%23F46800?style=for-the-badge&logo=grafana&logoColor=white"> <img src="https://img.shields.io/badge/-Prometheus-%23E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"> |

# :page_facing_up: Swagger

<img width="1436" alt="image" src="https://user-images.githubusercontent.com/86517634/182526687-49169532-dc33-4279-af6e-51fb904933a1.png">

# 📂 file tree

```c
📦fishy fish
┣ 📂backend
┃ ┣ 📂accounts
┃ ┃ ┣ 📂migrations
┃ ┃ ┃ ┗ 📜__init__.py
┃ ┃ ┣ 📜__init__.py
┃ ┃ ┣ 📜admin.py
┃ ┃ ┣ 📜apps.py
┃ ┃ ┣ 📜models.py
┃ ┃ ┣ 📜serializers.py
┃ ┃ ┣ 📜tests.py
┃ ┃ ┣ 📜urls.py
┃ ┃ ┗ 📜views.py
┃ ┣ 📂images
┃ ┃ ┣ 📂fixtures
┃ ┃ ┃ ┗ 📜data.json
┃ ┃ ┣ 📂inference
┃ ┃ ┃ ┣ 📜expect.py
┃ ┃ ┃ ┗ 📜last.pt
┃ ┃ ┣ 📂migrations
┃ ┃ ┃ ┗ 📜__init__.py
┃ ┃ ┣ 📜__init__.py
┃ ┃ ┣ 📜admin.py
┃ ┃ ┣ 📜apps.py
┃ ┃ ┣ 📜models.py
┃ ┃ ┣ 📜serializers.py
┃ ┃ ┣ 📜tasks.py
┃ ┃ ┣ 📜tests.py
┃ ┃ ┣ 📜urls.py
┃ ┃ ┗ 📜views.py
┃ ┣ 📂teami
┃ ┃ ┣ 📂migrations
┃ ┃ ┃ ┗ 📜__init__.py
┃ ┃ ┣ 📜__init__.py
┃ ┃ ┣ 📜asgi.py
┃ ┃ ┣ 📜assest_storages.py
┃ ┃ ┣ 📜celery.py
┃ ┃ ┣ 📜models.py
┃ ┃ ┣ 📜settings.py
┃ ┃ ┣ 📜urls.py
┃ ┃ ┗ 📜wsgi.py
┃ ┣ 📜gitignore
┃ ┣ 📜Dockerfile
┃ ┣ 📜environments.py
┃ ┣ 📜manage.py
┃ ┣ 📜readme.md
┃ ┣ 📜requirement.txt
┃ ┗ 📜run-celery.sh
┣ 📂frontend
┃ ┣ 📂ngnix
┃ ┃ ┗ 📜default.conf
┃ ┣ 📂public
┃ ┃ ┣ 📂font
┃ ┃ ┣ 📂img
┃ ┃ ┣ 📜favicon.ico
┃ ┃ ┣ 📜index.html
┃ ┃ ┣ 📜logo192.png
┃ ┃ ┣ 📜logo512.png
┃ ┃ ┣ 📜manifest.json
┃ ┃ ┗ 📜robots.text
┃ ┣ 📂src
┃ ┃ ┣ 📂assests/images
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂FishList
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂ImageUpload
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂InfoBoxInner
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂Information
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂InformationBlank
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂LoginForm
┃ ┃ ┃ ┃ ┣ 📜LoginForm.module.css
┃ ┃ ┃ ┃ ┣ 📜LoginForm.tsx
┃ ┃ ┃ ┃ ┣ 📜Logintype.ts
┃ ┃ ┃ ┃ ┗ 📜react-awesome-autoplay.d.ts
┃ ┃ ┃ ┣ 📂NaviBar
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂NotFound
┃ ┃ ┃ ┃ ┗ 📜NotFound.tsx
┃ ┃ ┃ ┣ 📂Pagenation
┃ ┃ ┃ ┃ ┣ 📜ka1.svg
┃ ┃ ┃ ┃ ┣ 📜ka2.svg
┃ ┃ ┃ ┃ ┣ 📜ka3.png
┃ ┃ ┃ ┃ ┣ 📜Pagenation.module.css
┃ ┃ ┃ ┃ ┗ 📜Pagenation.tsx
┃ ┃ ┃ ┗ 📂RegisterForm
┃ ┃ ┃   ┣ 📜react-awesome-autoplay.d.ts
┃ ┃ ┃   ┣ 📜RegisterFrom.module.css
┃ ┃ ┃   ┣ 📜RegisterFrom.tsx
┃ ┃ ┃   ┗ 📜RegisterType.ts
┃ ┃ ┣ 📂db
┃ ┃ ┃ ┗ 📜data.json
┃ ┃ ┣ 📂function
┃ ┃ ┃ ┣ 📜emailValidation.ts
┃ ┃ ┃ ┣ 📜handleCookie.ts
┃ ┃ ┃ ┣ 📜islogin.ts
┃ ┃ ┃ ┗ 📜passwordCheck.ts
┃ ┃ ┣ 📂hooks
┃ ┃ ┃ ┣ 📜useGetData.ts
┃ ┃ ┃ ┗ 📜useTitle.ts
┃ ┃ ┣ 📂pages
┃ ┃ ┃ ┣ 📂Home
┃ ┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┃ ┗ 📜style.css
┃ ┃ ┃ ┣ 📂Login
┃ ┃ ┃ ┃ ┗ 📜Login.tsx
┃ ┃ ┃ ┣ 📂Register
┃ ┃ ┃ ┃ ┗ 📜Register.tsx
┃ ┃ ┃ ┣ 📂Test
┃ ┃ ┃ ┃ ┗ 📜MyDropzone.tsx
┃ ┃ ┃ ┗ 📂Upload
┃ ┃ ┃   ┣ 📜index.tsx
┃ ┃ ┃   ┗ 📜style.css
┃ ┃ ┣ 📂redux
┃ ┃ ┃ ┣ 📂Auth
┃ ┃ ┃ ┃ ┗ 📜tokenSlice.ts
┃ ┃ ┃ ┣ 📂Fish
┃ ┃ ┃ ┃ ┣ 📜action.tsx
┃ ┃ ┃ ┃ ┣ 📜reducer.tsx
┃ ┃ ┃ ┃ ┗ 📜types.tsx
┃ ┃ ┃ ┣ 📂Login
┃ ┃ ┃ ┃ ┗ 📜loginSlice.ts
┃ ┃ ┃ ┣ 📂Register
┃ ┃ ┃ ┃ ┗ 📜registerSlice.ts
┃ ┃ ┃ ┣ 📜store.ts
┃ ┃ ┃ ┗ 📜store.tsx
┃ ┃ ┣ 📜App.css
┃ ┃ ┣ 📜App.tsx
┃ ┃ ┣ 📜index.css
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜react-app-env.d.ts 
┃ ┣ 📜.gitignore
┃ ┣ 📜dockerfile
┃ ┣ 📜package-lock.json
┃ ┣ 📜README.md
┃ ┗ 📜tsconfig.json
┣ 📜.gitignore
┣ 📜docker-compose.prod.yml
┣ 📜docker-compose.yml
┣ 📜license
┗ 📜readme.md
```

# 🤖 AI
<img width="290" alt="image" src="https://user-images.githubusercontent.com/86517634/182535625-0502c864-1ca1-4067-9e74-296098145952.jpeg"><img width="512" alt="image" src="https://user-images.githubusercontent.com/86517634/182535634-043fd13a-56bb-43f2-8ce5-322a34de1dcd.jpeg">
<img width="820" alt="image" src="https://user-images.githubusercontent.com/86517634/182536438-48a9dd3e-7bac-4f14-9b7f-2d8a2af5be53.png">

# :office: Member
| **이름** |:kissing:Ryan Lee(Leader)|:laughing:김연진|:stuck_out_tongue_winking_eye:손희연|:joy:용준현|:yum:유제빈|
|:---:|:---:|:---:|:---:|:---:|:---:|
| **역할** | Back-end <br/> DevOps <br/> AI Traning | &nbsp;&nbsp; Back-end &nbsp;&nbsp;<br/>AI inference  |  &nbsp;&nbsp;Back-end&nbsp;&nbsp;<br/>DevOps  | Web Desginer <br/> Front-end developer | Web Desginer <br/> Front-end developer|
| **GitHub** |













-----------------------------------------------------------------------------------------------------------------------------
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

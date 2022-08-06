
# 🐟 Fishy Fish 🎣
물고기 분류 및 정보 제공 서비스

# :file_folder: System Archiecture
<img width="688" alt="image" src="https://user-images.githubusercontent.com/86517634/183236379-b82cc996-78be-4c28-9670-9982781b0688.png">

<br/>


# :video_camera: Demo
:one: 로그인&회원가입 페이지<br/>
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/86517634/183253596-ef203141-2b21-4471-86ab-1cc4373688d0.gif)

:two: 메인 페이지<br/>
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/86517634/183236024-bea4e016-dc71-415d-af60-34593a99a65a.gif)

:three: Flsh list 
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/86517634/183254418-300c4add-623a-496b-a2ce-5007354b7e43.gif)


반응형 페이지로 구현<br/>
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/86517634/183235883-056ae583-ea1a-4b50-a6bb-6cb41d702e1e.gif)


# :electric_plug: Tech Stack
|분류|기술|
|:---:|:---:|
|  Frontend  | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> |
|  Backend  |  <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=Celery&logoColor=white"> <img src="https://img.shields.io/badge/RabbitMQ-F46800?style=for-the-badge&logo=RabbitMQ&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white"> |
|  AI  |  <img src="https://img.shields.io/badge/-PyTorch-%23EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"> <img src="https://img.shields.io/badge/Google Colab-F9AB00?style=for-the-badge&logo=Google Colab&logoColor=white"> | 
| Devops | <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/-NGINX-%23009639?style=for-the-badge&logo=NGINX&logoColor=white"> |
|  DB  | <img src="https://img.shields.io/badge/PostgreSQL-%4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white"> |
|  Cloud  | <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
|  Monitoring  | <img src="https://img.shields.io/badge/-Grafana-%23F46800?style=for-the-badge&logo=grafana&logoColor=white"> <img src="https://img.shields.io/badge/-Prometheus-%23E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"> |


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


# :page_facing_up: Swagger

<img width="1436" alt="image" src="https://user-images.githubusercontent.com/86517634/182526687-49169532-dc33-4279-af6e-51fb904933a1.png">

# 🤖 AI
<img width="290" alt="image" src="https://user-images.githubusercontent.com/86517634/182535625-0502c864-1ca1-4067-9e74-296098145952.jpeg"><img width="512" alt="image" src="https://user-images.githubusercontent.com/86517634/182535634-043fd13a-56bb-43f2-8ce5-322a34de1dcd.jpeg">
<img width="820" alt="image" src="https://user-images.githubusercontent.com/86517634/182536438-48a9dd3e-7bac-4f14-9b7f-2d8a2af5be53.png">

# :chart_with_upwards_trend: Monitoring: prometheus & grafana
![Screen Shot 2022-08-04 at 7 59 11 PM (1)](https://user-images.githubusercontent.com/86517634/183253018-a1433c23-28ea-4643-88f8-9292941f2152.png)
![Screen Shot 2022-08-04 at 7 55 26 PM (1)](https://user-images.githubusercontent.com/86517634/183253024-d0141aeb-5f9c-40aa-94b7-c1e6ec7a382e.png)

# :office: Member
| **Name**       | **Develop Area**                           | **Role**                                         | **Github**                                         |
| ---------- | ---------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| :kissing:Ryan Lee(Leader)   | Back-end, AI, DevOps | API Design, Machine Learning, Docker, Data Monitoring | [Github Profile](https://github.com/printSANO)  |
| :laughing:김연진   | Back-end                  | API Design, Data Engineering                      | [Github Profile](https://github.com/homebdy)   |
| :stuck_out_tongue_winking_eye:손희연   | Back-end, AI           | API Design, Machine Learning                  | [Github Profile](https://github.com/fluorine1805)   |
| :joy:용준현   | Frontend, DevOps            | Web Development, Deploy                 | [Github Profile](https://github.com/pione3r) |
| :yum:유제빈 | Frontend                      | Web Development, UI/UX Design                                    | [Github Profile](https://github.com/Yujaebin)   |

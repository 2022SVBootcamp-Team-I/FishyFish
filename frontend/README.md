# 도커로 리액트 열기

## docker build

```bash
docker build -f Dockerfile -t 2022bc .
```
도커 이미지 빌드. 도커파일 (Dockerfile) 사용

### docker images

```bash
docker images
```

도커 이미지 확인 "2022bc"

### docker run

```bash
docker run -p 3000:3000 2022bc
```

3001:3000 이런식으로 바꾸어 실행하면 localhost:3001로 접속할 수 있음
디폴트: http://localhost:3000
<br/>
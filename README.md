git에 업데이트하기
- git remote add origin 레포지토리 주소
- git remote -v로 주소확인
- vscode에서 commit(commit 메세지 작성)
- git push origin master로 push

git Deploy
- github에서 배포하고 싶은 레포지토리로 이동
- setting으로 들어가서 pages탭 클릭
- Branch에서 master로 변경후 save
- 디플로이 완료
- ReadMe파일이 뜨는 경우 
  ++ pakage.json에서 script에 아래 코드 작성
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  
  ++ 맨위에 "homepage":"레포지토리 주소" 추가 
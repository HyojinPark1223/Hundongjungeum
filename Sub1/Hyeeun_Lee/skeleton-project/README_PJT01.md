# README

- PJT1 딥 러닝 기초와 CNN(합성곱 신경망)

[toc]

## 개발 환경 구성

### 아나콘다 설치

#### 아나콘다 가상환경 생성 및 활성화

```
# 가상 환경 생성
conda create -n [name] python=3.7 # [name] : 가상환경 이름

# 가상 환경 활성화
conda activate [name]

# 프레임워크 및 라이브러리 설치
conda install pytorch torchvision torchaudio cudatoolkit=10.1 =c pytorch
pip install tensorflow-gpu
```



#### 환경 변수 설정

- 시스템 변수의 path에서 추가

![image-20210830220802835](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20210830220802835.png)

- 노랑색은 필수 추가 변수
- 파랑색은 에러 이후 새롭게 설치한 변수(이것때문에 해결된거 X)



#### vs code에서 아나콘다 연결하기

- Python: Select Interpreter에서 연결하고자 하는 anconda 가상 환경 선택

- ```
  # conda activate 자동 활성화
  # 만일 conda init 활성화시
  conda init
  ```

![image-20210830220551101](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20210830220551101.png)



#### Jupyter Note에서 아나콘다 연결하기

- Jupyter notebook 설치

  - Anaconda Navigator에서 jupyter notebook install
  - ⭐ai-speech(가상 환경)⭐ 설정되어있는지 확인하기

- cmd에서 스켈레톤 파일 접근

  ```
  cd DestC:\Users\multicampus\Desktop>cd skeleton-project
  jupyter notebook
  ```


## DNN과 RNN

기존 DNN에서는 처음 input Xt가 주어지면 단순히 Yt를 출력하는 방식으로 학습하였습니다. RNN은 이와 달리 과거의 데이터인 Ht와 Xt 두 가지를 input으로 보내줍니다. 

여기서 입력 데이터는 순서 정보가 매우 중요한 Sequential(시퀀티얼)데이터를 입력 받게 됩니다. 텍스트 문장, 음성데이터 등이 시퀀티얼한 인풋의 예시입니다.

![](https://postfiles.pstatic.net/MjAyMTA4MjlfNzUg/MDAxNjMwMjI1NjUzMzk5.fpPSSizyrHxQbx7QLlKesOt8ZEbzGCY3qXA8p04HULIg.24EnregYSKK161o90Kmn7ARhjQs6hNit0gmvTEbnkcQg.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_5.27.30.png?type=w773)

(DNN과 RNN의 차이)



## RNN 상세

![](http://i.imgur.com/Q8zv6TQ.png)

RNN은 순환 구조를 이루는 인공신경망의 한 종류로 음성, 문자 등 순차적으로 등장하는 데이터 처리에 적합한 모델입니다. 

위의 그림처럼 시퀀스 길이에 관계없이 input과 output을 받아들일 수 있는 네트워크 구조입니다. 따라서 필요에 다라 다양하고 유연하게 구조를 만들 수 있다는 장점이 있습니다.



![](http://i.imgur.com/s8nYcww.png)

RNN의 기본 구조는 위와 같습니다. 이전의 DNN은 input으로만 단순히 output을 학습시켰는데, RNN은 위의 그림과 같이 히든 state가 포함되는 것을 알 수 있습니다. 이는 즉, 현재 상태인 output yx는 현재 상태의 히든 state ht를 전달받아 갱신되는 구조입니다.



가장 대표적인 예시를 보여드리겠습니다.

![](https://postfiles.pstatic.net/MjAyMTA4MjlfMTU0/MDAxNjMwMjI4MTc5NDU2.IlpGhUS3ht4DkTZv7YvC_Ptkh4p48TYioGVj535cJrIg.-PRnI0SYF9de_xbR7HBsUs1LvbscV43AT8NQ2mYStAkg.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_6.09.36.png?type=w773)

![](https://postfiles.pstatic.net/MjAyMTA4MjlfMjM2/MDAxNjMwMjI4MjcxMTE4.3yMcRfQKLVP2cEkhVcEySwYl2vAGzo0vbmIUQEPo_v0g.pAUNKenFnfRPMUTW_ibhYZcX2XG1GsJVeUAdKq_8gMEg.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_6.11.07.png?type=w773)

위 두 문장을 보면, work는 동사가 되기도 하고, 명사가 되기도 합니다. google도 마찬가지입니다. 우리는 이 문장에서 work의 앞뒤에 어떤 단어가 있는지 파악하고  품사를 추론해야합니다.

RNN도 비슷한 방식으로 추론합니다.

![](https://postfiles.pstatic.net/MjAyMTA4MjlfMjEg/MDAxNjMwMjI4NTgzNTU2.08213kABkArrURuC-1KNzTyQWVP972L9MClLPPB6TKgg.EbthVeuPakBfncI4-9eeIOOSgHrOJHe4OzyIBY08Ap8g.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_6.16.20.png?type=w773)

두 번째 단어로 구글이 들어왔을 때, I라는 정보가 들어온 뒤, google이 동사일 확률이 높다고 판단하는 것입니다.

모델을 자세히 살펴보면 다음과 같은 구조가 됩니다.

![](https://postfiles.pstatic.net/MjAyMTA4MjlfMTQx/MDAxNjMwMjI5MTYyNDE2.45yIbumS-_HM2aoWigyKOInFtDj9lYNNZanc0oHd-ugg.qkdvCIEzcBxkTWs5W-ysgxq5vacxK1xxAoUwOlLLp9Eg.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_6.25.58.png?type=w773)

계산된 값들이 tanh 활성화 함수를 거치게 되고 출력층에서 softmax를 통해 품사를 구분할 수 있게 됩니다. 지도학습을 지속하여 출력한 품사가 일치하는지 오차를 줄여나가는 방식으로 학습하는 것입니다. 이를 단순히 표현하면 다음과 같습니다.

![](https://postfiles.pstatic.net/MjAyMTA4MjlfNjAg/MDAxNjMwMjI5NzUyNjMy.NLJ6SY-z6JKU5H2l9E9a6prCQ2LCw8cP23-6oIw22jcg.62eQ17ml89NgYo4ML9Gt6PTvABZurSPre_XjrPQ39n8g.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_6.35.48.png?type=w773)



## LSTM

프로젝트에 사용한 것은 위의 RNN 모델 중 하나인 LSTM입니다. RNN에는 장기 의존성 문제가 있습니다. 관련 정보와 그 정보를 사용하는 시점이 멀어질 경우 학습능력이 크게 저하되는 것입니다. 쉽게 말하면 입력 데이터가 많아질 수록 보관하는 과거의 정보가 마지막 레이어까지 충분히 전달되지 못하는 현상이 생기는 것입니다.

![](http://i.imgur.com/H9UoXdC.png)

위의 이미지를 보면 확인할 수 있듯이, 직전 상태의 state가 계속 들어오기 때문에 사용해야하는 정보가 학습된 시점이 멀 수록 학습 능력이 저하됩니다.

 이를 보완한 것이 바로 LSTM입니다. RNN의 히든 state에 cell-state를 추가한 구조로써, cell-state는 일종의 컨베이어 벨트 역할을 합니다. 이는 memory cell이라고 불리며, 해당 공간에 정보를 저장하고 전달하는 방식으로 이루어집니다.

![](http://i.imgur.com/jKodJ1u.png)

따라서 state가 꽤 오래 경과해도 그래디언트가 비교적 잘 전파되는 것입니다.

더 간단하게 구조를 나타내면 다음과 같습니다.

![](https://postfiles.pstatic.net/MjAyMTA4MjlfMTQ2/MDAxNjMwMjMwNjQ0ODg4.8L1mcbceP7zx7Ls3Q6CVTCBLGJYWbu_GHwNyE7hC9vMg.3kYwMwbjFmBKYM7R5C8SdRUGUd4o__hcBiYeehSVU3Yg.PNG.1012rnjsdydgns/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-08-29_%EC%98%A4%ED%9B%84_6.50.40.png?type=w773)

쉽게 말하면, LSTM레이어는 시간 t에서의 출력값 이외에, LSTM 레이어 사이에서 공유되는 셀 상태에 값이 다음 레이어로 전달되면서, 기존의 상태를 계속 보존해주는 것입니다. 현재 시점의 정보를 바탕으로 과거의 학습 내용을 얼마나 잊고 기억할지를 계산하고, 그 결과에 현재 정보를 추가하여 다음 시점으로 정보를 전달해줍니다. 따라서 LSTM은 forget gate, input gate, output gate등으로 구성되며, 이러한 gate는 memory cell에 정보를 저장하고 다음 단계로 전달하는 역할을 수행하는 것입니다.

여기서 `forget gate`는 과거 정보를 얼마나 잊을지(또는 기억할지) 결정하는 게이트입니다.

LSTM은 주식 가격 예측, 일기예보 예측과 같은 시계열 데이터 분석에 가장 많이 쓰이고 있습니다. 단어를 문장으로 바꾸기 위해서는 동사를 이어주는 조사의 예측이 필요하여 LSTM을 사용하게 되었습니다.

이로써 LSTM은 예측 모델을 만드는데 적합한 모델임을 확인할 수 있습니다. 이를테면 저희 프로젝트를 예시로 '백설공주', '동물들', '숲속',  '이야기하다'라는 단어들이 들어오면, 이것들을 이어 "백설공주가 숲 속에서 동물들과 이야기하고 있습니다."가 출력되어야합니다. LSTM모델은 이렇게 단어들과 조사를 예측하고 이어주는 `예측`에 적합한 것입니다.




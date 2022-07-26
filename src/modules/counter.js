// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

// 미들웨어를 사용하면 리듀서가 처리하기 전에 인터셉트해서 어떤 코드를 실행 할 수 있다..
// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 상태
const initialState = 0;

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

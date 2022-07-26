const myLogger = (store) => (next) => (action) => {
  // 하고 싶은 작업...
  // 액션을 출력합니다.
  console.log(action);

  // 다음 미들웨어 또는 리듀서에게 액션을 전달합니다.
  // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본 : undefined
  const result = next(action);

  // 업데이트 이후의 상태를 조회합니다.
  console.log("\t", store.getState()); // '\t' 는 탭 문자 입니다.

  return result;
};
export default myLogger;

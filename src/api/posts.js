const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: "Redux Middleware",
    body: "리덕스 미들웨어",
  },
  {
    id: 2,
    title: "redux-thunk",
    body: "리덕스 텅크!",
  },
  {
    id: 3,
    title: "redux-saga",
    body: "리덕스 사가!",
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500);
  return posts;
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  // 0.5초 쉬고
  await sleep(500);
  // id 로 찾아서 반환
  return posts.find((post) => post.id === id);
};

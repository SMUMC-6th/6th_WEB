import styled from "styled-components";

const container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieInfoContainer = styled.div`
  display: flex; // 플렉스 컨테이너로 설정하여 자식 요소들을 행 또는 열로 정렬할 수 있도록 함
`;

const MovieBackground = styled.img`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); //요소를 정확히 가운데로 위치시키는 데 사용. -50%는 절반만큼 이동한다는 것을 의미
`;

const title = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const paragraph = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;

const overview = styled.div`
  margin-top: 20px;

  color: white;
  font-size: 16px;
  width: 600px;
`;

const content = styled.div`
  margin-left: 50px;
  flex-wrap: wrap;
`;

const image = styled.img`
  width: 100%;
  max-width: 300px;
  max-height: 440px;
`;

export {
  container,
  MovieInfoContainer,
  DetailContainer,
  MovieBackground,
  title,
  paragraph,
  overview,
  content,
  image,
};

/* 위에서 MovieBackground은 이미지를 표시하는 요소로
해당 이미지를 부모 요소에 상대적으로 위치시키기 위해 position: relative;를 사용. 
반면에 DetailContainer는 절대적으로 페이지의 중앙에 배치되어야 하기 때문에 position: absolute;를 사용하고,
부모 요소 중 가장 가까운 상위 요소인 container에 대해 위치를 조정하기 위해 
transform: translate(-50%, -50%);를 사용하여 가운데로 이동 */

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import * as S from "./MainPage.style";

export default function MainPage() {
  return (
    <S.Container>
      <S.FirstBox>
        <S.FirstInBox>
          <div>똑똑한 세무의 시작</div>
          <div>
            <S.FirstInBoxText>비용은 더 낮게</S.FirstInBoxText>
            <S.FirstInBoxText>절세는 더 크게</S.FirstInBoxText>
            <S.FirstInBoxText>세이브택스</S.FirstInBoxText>
          </div>
          <S.FirstInBoxButton>
            무료상담 신청하기{" "}
            <img src="https://www.save-tax.co.kr/_next/image?url=%2Fassets%2Farrow-right-circle.svg&w=48&q=75"></img>
          </S.FirstInBoxButton>
        </S.FirstInBox>

        <S.FirstFloatBox>
          <S.FloatItem>
            <S.FloatItemHeader>다양한 분야별 세무 전문가</S.FloatItemHeader>
            <S.FloatItemText>
              분야별 세무 전문가의 풍부한 경험과 노하우를 바탕으로 맞춤형
              세무서비스를 제공합니다.
            </S.FloatItemText>
          </S.FloatItem>
          <S.FloatItem>
            <S.FloatItemHeader>다양한 분야별 세무 전문가</S.FloatItemHeader>
            <S.FloatItemText>
              분야별 세무 전문가의 풍부한 경험과 노하우를 바탕으로 맞춤형
              세무서비스를 제공합니다.
            </S.FloatItemText>
          </S.FloatItem>
          <S.FloatItem>
            <S.FloatItemHeader>다양한 분야별 세무 전문가</S.FloatItemHeader>
            <S.FloatItemText>
              분야별 세무 전문가의 풍부한 경험과 노하우를 바탕으로 맞춤형
              세무서비스를 제공합니다.
            </S.FloatItemText>
          </S.FloatItem>
        </S.FirstFloatBox>
      </S.FirstBox>
      <S.DownArrow src="https://www.save-tax.co.kr/_next/image?url=%2Fassets%2Fbounce-arrow.svg&w=256&q=75"></S.DownArrow>
      <S.SecondBox>
        <S.SecondBoxTextContainer>
          <S.SecondBoxText>수많은 고객님들이</S.SecondBoxText>
          <S.SecondBoxText>세이브택스를 선택해주시는</S.SecondBoxText>
          <S.SecondBoxText>이유는 분명합니다</S.SecondBoxText>
        </S.SecondBoxTextContainer>
        <S.SecondBoxCategoriesContainer>
          <S.SecondBoxCategoriesItem>
            <div className="Header">세무분야 성장률</div>
            <div className="Descript">1위</div>
            <div className="Header">소비자 만족도</div>
            <div className="Descript">98점</div>
          </S.SecondBoxCategoriesItem>
          <S.SecondBoxCategoriesItem>
            <div className="Header">세무분야 성장률</div>
            <div className="Descript">1위</div>
            <div className="Header">세무분야 성장률</div>
            <div className="Descript">1위</div>
          </S.SecondBoxCategoriesItem>
        </S.SecondBoxCategoriesContainer>
      </S.SecondBox>
    </S.Container>
  );
}

import React from 'react';
import styled from '@emotion/styled';
import { H1, Input, Button } from '../styles';
import Link from 'next/link';

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const InputContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0 30px 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  position: relative;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CantLoginContainer = styled.ul`
  width: 100%;
  text-align: center;
  padding: 0;
`;

const CantLoginOptions = styled.li`
  display: inline-block;
  list-style: none;
  :first-child {
    border-right: 1px solid var(--main-color);
    padding-right: 10px;
    margin-right: 10px;
  }
  :last-child {
    border-left: 1px solid var(--main-color);
    padding-left: 10px;
    margin-left: 10px;
  }
  > a {
    color: var(--main-color);
  }
`;

export default function LoginTemplate() {
  return (
    <LayoutContainer>
      <Container>
        <LoginContainer>
          <TextContainer>
            <H1 style={{ color: 'var(--main-color)' }}>O:RE</H1>
          </TextContainer>
          <InputContainer>
            <Input placeholder="email" type="text" height="60px"></Input>
          </InputContainer>
          <InputContainer>
            <Input placeholder="password" type="password" height="60px"></Input>
          </InputContainer>
          <ButtonContainer>
            <Button height="60px">로그인</Button>
          </ButtonContainer>
          <CantLoginContainer>
            <CantLoginOptions>
              <Link href="/">메인페이지로</Link>
            </CantLoginOptions>
            <CantLoginOptions>
              <Link href="#">회원가입</Link>
            </CantLoginOptions>
            <CantLoginOptions>
              <Link href="/find-password">비밀번호 찾기</Link>
            </CantLoginOptions>
          </CantLoginContainer>
        </LoginContainer>
      </Container>
    </LayoutContainer>
  );
}

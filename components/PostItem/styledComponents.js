import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const Content = styled.p`
  margin: 10px 0;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
`;

export const IconCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

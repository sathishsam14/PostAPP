import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

export const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 250px;
`;

export const ListItem = styled.li`
  margin: 0 60px;
`;

export const ButtonElement = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 30px;
`;

export const ImageElement = styled.img`
  height: 40px;
`;

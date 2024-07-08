import styled from "styled-components";

export const FormCon = styled.div`
  width: 100%;
  margin: 20px;
  border: 2px solid #000000;
  border-radius: 5px;
  height: 60vh;
  width: 80%;
  padding-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin: auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

export const InputElement = styled.input`
  display: none;
`;

export const InputCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const PostButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const FormImage = styled.img`
  max-width: 60%;
`;

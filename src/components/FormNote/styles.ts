import { styled } from "styled-components";

export const Form = styled.form`
    div {
        align-items: center;
        justify-content: center;
        display: flex;
    }
    flex-direction: column;
    display: flex;
`

export const Image = styled.img`
    background-color: red;
`

export const Input = styled.input`
    width: 90%;
    height: 40px;
    border: none;
    &::placeholder {
        color: #333333;
    }
`

export const Button = styled.button`
    transition: all .3s;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 5px;
    width: 110px;
    background: #2ecc71;
    color: #FFFFFF;
    font-weight: bold;
    &:hover {
        background: #1ABC9C;
    }
        &:disabled {
        background-color: #a4c3e8;
        cursor: not-allowed;
    }
`

export const Container = styled.div`
    flex-direction: column;
    margin: auto;
    height: 105px;
    background: #FFFFFF;
    margin-top: 30px;
    width: 90%;
    max-width: 530px;
    display: flex;
    border-radius: 3px;
    border: 1px solid #D9D9D9;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    @media (max-width: 481px) {
        width: 100%;
    }
`

export const TextArea = styled.textarea`
    border: none;
    resize: none;
    width: 100%;
    max-width: 100%;
    border-top: 1px solid #D9D9D9;
    padding: 15px 20px;
    font-size: 14px;
`

export const Loading = styled.span`
    color: "#FFF";
`;

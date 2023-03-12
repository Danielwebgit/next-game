import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    background-color: #B4A0E6;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    
    img {
        width: 45px;
        height: 45px;
    }
    
    ul {

        display: flex;
        list-style: none;
    }

    .menu li a {
        text-decoration: none;
        display: block;
        padding: 10px 20px 10px 20px;
    }

    .menu li a:hover {
        background-color: bisque;
    }

`;


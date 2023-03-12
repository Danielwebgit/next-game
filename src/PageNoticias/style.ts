import styled from 'styled-components';
export const Main = styled.main`

.block-main{

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    justify-content: center
}

.block-01,
.block-02,
.block-03,
.block-04,
.block-05,
.block-06{
    margin: 10px
}

@media (max-width: 600px){

    .block-main {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    justify-content: center
}
}

@media (max-width: 280px){

.block-main {

display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

justify-content: center
}
}

`;


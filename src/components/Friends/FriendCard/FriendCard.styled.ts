import styled from "styled-components";

export const Card = styled.li`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
padding: 40px 20px;
border-radius: 15px;
background-color: var(--white-color);
`

export const Time = styled.p`
position: absolute;
top: 12px;
right: 12px;
padding: 8px;
color: var(--accent-color);
border-radius: 30px;
background-color: var(--accent-light-color);
`

export const Wrapper = styled.div`
display: flex;
`

export const ImageBox = styled.div`
width: 80px;
height: 80px;
`
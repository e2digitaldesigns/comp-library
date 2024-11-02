import Styled from "styled-components";

export const NativeFileInput = Styled.div`
height: 0;
width: 0;
overflow: hidden;
pointer-events: none;
    display: none;
    `;

export const DropzoneWrapper = Styled.div`
    align-items: center;
    border: 0.0625rem dashed ${props => props.theme.colors.gray};
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 1rem;
    text-align: center;
    width: 400px;
    position: relative;
    `;

export const FileInputButton = Styled.button`
    background-color: blue;
    border: none;
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    `;

export const ImagePreviewWrapper = Styled.div`
display: flex;
flex-direction: column;
margin: 0.5rem 0;
border: 1px dashed #bbb;
padding: .5rem;

> div: nth-child(1) {
    font-family: inherit;
    font-size: 14px;
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
};

> div: nth-child(2) {
    font-size: 12px;
};

> div: nth-child(3) {
    font-size: 12px;
};
`;

export const ImageWrapper = Styled.div`
width: 100%;
height: 60px;
overflow: hidden;


> img {
    width: 100%;
    object-fit: cover
}
`;

export const ProgressBar = Styled.div<{ $progress: number }>`
width: 100%;
height: 5px;
background-color: #ddd;
margin-top: 5px;
overflow: hidden;
border: 1px solid #ddd;
> div {
    width: ${props => props.$progress}%;
    height: 100%;
    background-color: blue;
    transition: width 0.3s ease;
}
`;

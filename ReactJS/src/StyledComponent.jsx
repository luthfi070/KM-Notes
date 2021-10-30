import styled from 'styled-components';

function StyledComponent(){
    //
    const Button = styled.button`  
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    `

    // Kalo JSX
    const tombol = <button>Submit</button>;
    
    return(
        <div>
            <h1>Ini Styled Component</h1>
            <Button>Submit</Button>
        </div>
    )
}

export default StyledComponent;
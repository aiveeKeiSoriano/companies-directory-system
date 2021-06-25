import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(216,216,216);
    border-radius: 10px;
    background-color: rgb(216,216,216);

    & > h1 {
        color: cornflowerblue;
        padding: .5em 1em;
        border-bottom: 2px solid rgb(216,216,216);
        font-size: 1rem;
    }
`
const Details = styled.div`
    background-color: white;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding-bottom: 2em;

    .label {
        font-weight: 600;
        font-size: .9rem;
    }

    p {
        color: #4e4e4e;
        font-size: .9rem;
    }
`

export default function Employee({ employee }) {
    return (
        <Wrapper>
            <h1>{employee.name}</h1>
            <Details>
                <div className="label">Address: </div>
                <p>{employee.address}</p>
            </Details>
        </Wrapper>
    )
}
import { useSelector } from "react-redux"
import styled from "styled-components"
import Company from "./Company"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 2px solid rgb(216,216,216);
    border-radius: 10px;

    & > h1 {
        padding: .5em 1em;
        border-bottom: 2px solid rgb(216,216,216);
        font-size: 1.3rem;
    }
`
const List = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1em;
`

export default function CompaniesList() {
    let companies = useSelector(state => state.companies)
    return (
        <Wrapper>
            <h1>Companies</h1>
            <List>
                {companies.map((company, index) => <Company key={company.name} index={index} />)}
            </List>
        </Wrapper>
    )
}
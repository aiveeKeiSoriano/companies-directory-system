import styled from "styled-components"
import CompaniesList from "./CompaniesList"
import CompanyForm from "./CompanyForm"
import PersonForm from "./PersonForm"

const Wrapper = styled.div`
    display: flex;
    padding: 2em;
    width: 100%;
    max-width: 1200px;
    gap: 2em;
`
const Forms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-width: 300px;
`

export default function HomePage() {
    return (
        <Wrapper>
            <CompaniesList />
            <Forms>
                <CompanyForm />
                <PersonForm />
            </Forms>
        </Wrapper>
    )
}
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import styled from "styled-components"
import { selectCompany } from "../actions/companyActions"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(216,216,216);
    border-radius: 10px;
    background-color: rgb(216,216,216);

    & > h1 {
        color: cornflowerblue;
        padding: .5em 1em;
        border-bottom: 2px solid rgb(216,216,216);
        font-size: 1.3rem;
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
const Overview = styled.div`
    padding: .6em 1em;
    display: flex;
    align-items: center;

    p {
        cursor: pointer;
        font-size: .9rem;
        height: 100%;
        font-weight: 600;
        color: cornflowerblue;
    }
`

export default function Company({ index }) {
    let companies = useSelector(state => state.companies)
    let company = companies[index]
    let dispatch = useDispatch()
    let history = useHistory()
    return (
        <Wrapper>
            <h1>{company.name}</h1>
            <Details>
                <div className="label">Address: </div>
                <p>{company.address}</p>
                <div className="label">Revenue: </div>
                <p>{company.revenue}</p>
                <div className="label">Phone: </div>
                <p>{company.phone}</p>
            </Details>
            <Overview onClick={() => {
                dispatch(selectCompany(index))
                history.push("/details")
            }}>
                <p>Company Overview</p>
            </Overview>
        </Wrapper>
    )
}
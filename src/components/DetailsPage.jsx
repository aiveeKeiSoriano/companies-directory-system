import { useSelector } from "react-redux"
import styled from "styled-components"
import Employee from "./Employee"

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
`


const Profile = styled.div`
    width: 100%;
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
const Employees = styled.div`
    width: 100%;
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
    padding: 2em 3em;
    display: flex;
    gap: .5em;
    padding-bottom: 2em;
    margin-bottom: 1em;

    .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .label {
        font-weight: 600;
        font-size: .9rem;
    }

    p {
        color: #4e4e4e;
        font-size: .9rem;
    }
`

const List = styled.div`
    background-color: white;
    margin-bottom: 1em;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 1em;
`

export default function DetailsPage() {
    let company = useSelector(state => state.selected)
    return (
        <Wrapper>
            <Profile>
                <h1>Profile Overview</h1>
                <Details>
                    <div className="details">
                        <div className="label">Address: </div>
                        <p>{company.address}</p>
                        <div className="label">Revenue: </div>
                        <p>{company.revenue}</p>
                        <div className="label">Phone: </div>
                        <p>{company.phone}</p>
                    </div>
                    <div className="details">
                        <div className="label">Total Employees : </div>
                        <p>{company.employees.length}</p>
                    </div>
                </Details>
            </Profile>
            <Employees>
                <h1>Employees</h1>
                <List>
                    {company.employees.map(employee => <Employee key={employee.name} employee={employee} />)}
                </List>
            </Employees>
        </Wrapper>
    )
}
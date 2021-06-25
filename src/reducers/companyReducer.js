import { ADD_COMPANY, ADD_EMPLOYEE, SELECT_COMPANY } from "../actions/companyActions"

const initialState = {
    companies: [
        {
            name: "Amazon",
            address: "410 Terry Ave., Seattle, WA, 98109",
            revenue: 100000,
            phone: "(206) 266-1000",
            employees: []
        }
    ]
}

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMPANY:
            return { ...state, companies: [...state.companies, action.payload] }
        case ADD_EMPLOYEE:
            let companyCopy = JSON.parse(JSON.stringify(state.companies))
            let index = companyCopy.findIndex(el => el.name === action.payload.company)
            companyCopy[index].employees.push(action.payload.person)
            return { ...state, companies: companyCopy }
        case SELECT_COMPANY:
            return { ...state, selected: state.companies[action.payload] }
        default:
            return state
    }
}
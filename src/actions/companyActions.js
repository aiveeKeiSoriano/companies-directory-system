export const ADD_COMPANY = "ADD_COMPANY"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const SELECT_COMPANY = "SELECT_COMPANY"

export const addCompany = (company) => ({
    type: ADD_COMPANY,
    payload: company
})

export const addEmployee = (company, person) => ({
    type: ADD_EMPLOYEE,
    payload: { company, person }
})

export const selectCompany = (index) => ({
    type: SELECT_COMPANY,
    payload: index
})
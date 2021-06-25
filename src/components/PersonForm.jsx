import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../actions/companyActions";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid rgb(216,216,216);
    border-radius: 10px;

    h1 {
        font-size: 1.3rem;
        width: 100%;
        text-align: center;
        border-bottom: 2px solid rgb(216,216,216);
        padding: .5em 1em;
    }

    form {
        padding: 1em;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;

        label {
            width: 100%;
            display: flex;
            flex-direction: column;
            font-size: .9rem;
        }

        input, select {
            border: 2px solid rgb(216,216,216);
            padding: .3em .5em;
        }

        select {
            background-color: rgb(216,216,216);
        }

        option {
            background-color: white;
        }

        .error {
            font-size: .8rem;
            color: red;
        }

        button {
            width: 100px;
            padding: .5em 1em;
            background-color: rgb(216,216,216);
            border: none;
            border-radius: 5px;
            box-shadow: 1px 1px 2px 0 #00000061;
            font-weight: 600;
        }
    }
`

export default function PersonForm() {
    let dispatch = useDispatch()
    let companies = useSelector(state => state.companies)
    return (
        <Wrapper>
            <h1>Create New Person</h1>
            <Formik
                initialValues={{ name: '', address: '', employer: "" }}
                validate={(values) => {
                    const errors = {};
                    if (values.name.length === 0) {
                        errors.name = "Name cannot be empty"
                    }
                    if (values.address.length === 0) {
                        errors.address = "Address cannot be empty"
                    }
                    if (values.employer.length === 0) {
                        errors.employer = "Please select employer company"
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log('reached here')
                    setSubmitting(false);
                    dispatch(addEmployee(values.employer, {name: values.name, address: values.address}))
                    resetForm()
                }}
            >
                {({ errors, isSubmitting }) => (
                    <Form>
                        <label>Name:
                         <Field
                                type="text"
                                name="name"
                            />
                            <ErrorMessage component="div" name="name" className="error" />
                        </label>
                        <label>Address:
                         <Field
                                type="text"
                                name="address"
                            />
                            <ErrorMessage component="div" name="address" className="error" />
                        </label>
                        <label>
                         <Field
                                as="select"
                                name="employer"
                            >
                                <option value='' hidden>Select Employer</option>
                                {companies.map(company => <option key={company.name} value={company.name}>{company.name}</option>)}
                            </Field>
                            <ErrorMessage component="div" name="employer" className="error" />
                        </label>
                        <button type='submit' disabled={isSubmitting}>Save</button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}
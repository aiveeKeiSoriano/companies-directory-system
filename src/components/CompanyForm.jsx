import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addCompany } from "../actions/companyActions";

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

        input {
            border: 2px solid rgb(216,216,216);
            padding: .3em .5em;
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

export default function CompanyForm() {
    let dispatch = useDispatch()
    return (
        <Wrapper>
            <h1>Create New Company</h1>
            <Formik
                initialValues={{ name: '', address: '', revenue: '', phone: '' }}
                validate={(values) => {
                    const errors = {};
                    if (values.name.length === 0) {
                        errors.name = "Name cannot be empty"
                    }
                    if (values.address.length === 0) {
                        errors.address = "Address cannot be empty"
                    }
                    if (values.revenue.length === 0) {
                        errors.revenue = "Revenue cannot be empty"
                    }
                    if (values.phone.length === 0) {
                        errors.phone = "Phone cannot be empty"
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(false);
                    dispatch(addCompany({ ...values, employees: [] }))
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
                        <label>Revenue:
                         <Field
                                type="text"
                                name="revenue"
                            />
                            <ErrorMessage component="div" name="revenue" className="error" />
                        </label>
                        <label>Phone:
                         <Field
                                type="text"
                                name="phone"
                            />
                         <ErrorMessage component="div" name="phone" className="error" />
                        </label>
                        <button type='submit' disabled={isSubmitting}>Save</button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}
import React from "react";
import {Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const initialValues = {
    email: '',
    password: ''
}

const regEx = /^(?=.*[A-Z])(?=.*\d)/

const validationSchema = Yup.object({
    email: Yup.string().required('Required').email('Please enter a valid email.'),
    password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters.')
    .matches(
        regEx,
            'Password must contain at least one Number and one Uppercase letter.'
    )
})

const onSubmit = async (e) => {
    e.preventDefault();


}



const Login = () => {


    return (

        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            <Form>

            <label htmlFor="email">Email: </label>
            <Field name="email" type="email" placeholder="Please enter your email..." />
            <ErrorMessage name="email" />

            <label>Password: </label>
            <Field name="password" type="password" placeholder="Please enter your password..." />
            <ErrorMessage name="password" />


            <span>
            <p>User Login</p>
            <p>Admin Login</p>
            </span>

            </Form>

        </Formik>


    )



}



export default Login;

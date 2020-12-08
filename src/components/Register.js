import React from "react";
import {Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import * as Yup from "yup";


const initialValues = {
    username: '',
    email: '',
    password: ''
}


const regEx = /^(?=.*[A-Z])(?=.*\d)/

const validationSchema = {
    username: Yup.string().required('Required!').min(5, 'Username must be at least 5 characters long.'),
    email: Yup.string().required('Required!').email('Please enter a valid email.'),
    password: Yup.string().required('Required!').min(8, 'Password must be at least 8 characters long.')
    .matches(regEx, 'Password must contain at least one Uppercase letter and a Number.')
}




const Register = () => {
return (

    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}

    >
        <Form>

        <label htmlFor="username">Username: </label>
        <Field name="username" type="text" id="text" />

        <label htmlFor="email">Email: </label>
        <Field name="email" type="email" id="email" />

        <label htmlFor="password">Password: </label>
        <Field type="password" name="password" id="password" />

        <button type="submit">Submit</button>

        </Form>
    </Formik>


)
}

export default Register;

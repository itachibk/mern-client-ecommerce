import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/InputField';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),

    }
}))



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const classes = useStyles()
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title'),
        password: yup.string().required('Please enter password'),
        age: yup.number().typeError('Please enter a number')
            .min(1, 'Min value 1.')
            .max(30, 'Max value 30.')
    });
    const form = useForm({
        defaultValues: {
            title: '',
            password: '',
            age: 0,
        },
        resolver: yupResolver(schema)
    });
    const handleSubmit = (values) => {
        console.log('Submit', values);
    }

    return (
        <div >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Username" form={form} />
                <InputField name="password" label="Password" form={form} />
                <InputField name="age" label="Age" form={form} />
                <Button variant="contained" color="primary" type="submid" >Create an account</Button>
            </form>

        </div>
    );
}

export default TodoForm;
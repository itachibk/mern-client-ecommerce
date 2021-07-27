import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    lable: PropTypes.string,

};

function InputField(props) {
    const { form, name, label } = props
    const { control } = form
    return (
        <Controller
            render={({ field, formState }) => (
                <TextField
                    {...field}
                    label={label}
                    error={!!formState.errors?.[name]}
                    helperText={formState.errors?.[name]?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
            )
            }
            name={name}
            control={control}
        />
    );
}

export default InputField;
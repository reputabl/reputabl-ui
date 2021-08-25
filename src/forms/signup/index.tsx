import React, { FC } from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { RTextField } from '../../components/fields/text-field';

export interface SignUpFormProps {
    fieldMargin?: 'normal' | 'dense' | 'none' | undefined;
}

export const SignUpForm: FC<SignUpFormProps> = (
    props: SignUpFormProps
): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            username: 'foobar001',
            password: 'foobar',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <RTextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    margin={props.fieldMargin}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <RTextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    margin={props.fieldMargin}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                    }
                    helperText={
                        formik.touched.username && formik.errors.username
                    }
                />
                <RTextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    margin={props.fieldMargin}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

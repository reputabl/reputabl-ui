import * as React from 'react';
import { FC, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { FieldProps } from '../utils';
import { InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useStyles } from './styles';

export const PasswordField: FC<FieldProps> = (
    props: FieldProps
): JSX.Element => {
    const classes = useStyles();
    const [password, setPassword] = useState('');
    const [isMasked, setIsMasked] = useState(true);

    const onChange = (event: any) => {
        const { value } = event.target;
        setPassword(value);
    };

    const togglePasswordMask = () => {
        setIsMasked(!isMasked);
    };

    return (
        <TextField
            {...props}
            type={isMasked ? 'password' : 'text'}
            onChange={onChange}
            value={password}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {isMasked && (
                            <VisibilityIcon
                                onClick={togglePasswordMask}
                                className={classes.eye}
                            />
                        )}
                        {!isMasked && (
                            <VisibilityOffIcon
                                onClick={togglePasswordMask}
                                className={classes.eye}
                            />
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
};

import * as React from 'react';
import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import { FieldProps } from '../utils';
import { InputAdornment } from '@material-ui/core';
import { _VisibilityIcon, _VisibilityOffIcon } from './styles';

export const PasswordField: FC<FieldProps> = (
    props: FieldProps
): JSX.Element => {
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
                        {isMasked ? (
                            <_VisibilityIcon onClick={togglePasswordMask} />
                        ) : (
                            <_VisibilityOffIcon onClick={togglePasswordMask} />
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
};

import * as React from 'react';
import { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import { FieldProps } from '../utils';

export const RTextField: FC<FieldProps> = (props: FieldProps): JSX.Element => {
    return <TextField {...props} />;
};

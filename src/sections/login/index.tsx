import * as React from 'react';
import { FC } from 'react';
import { LoginForm } from '../../forms/login';
import { _Paper } from '../styles';

export interface LoginProps {
    fieldMargin?: 'normal' | 'dense' | 'none' | undefined;
}

export const Login: FC<LoginProps> = (props: LoginProps): JSX.Element => {
    return (
        <_Paper>
            <LoginForm fieldMargin={props.fieldMargin} />
        </_Paper>
    );
};

// Login.defaultProps = {
//     target: '_blank',
// };

import * as React from 'react';
import { FC } from 'react';
import { SignUpForm } from '../../forms/signup';
import { _Paper } from '../styles';

export interface SignUpProps {
    fieldMargin?: 'normal' | 'dense' | 'none' | undefined;
}

export const SignUp: FC<SignUpProps> = (props: SignUpProps): JSX.Element => {
    return (
        <_Paper>
            <SignUpForm fieldMargin={props.fieldMargin} />
        </_Paper>
    );
};

// Login.defaultProps = {
//     target: '_blank',
// };

import * as React from 'react';
import { FC } from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import { FieldProps } from '../utils';
import {ThemeProvider} from "@material-ui/core";
import {theme} from "../../../index";

export interface NumberProps extends FieldProps {
    number?: 'phone' | 'currency' | 'default' | 'zip' | undefined;
}

export const NumberField: FC<NumberProps> = (
    props: NumberProps
): JSX.Element => {
    const getNumber = () => {
        switch (props.number) {
            case 'phone':
                return (
                    <NumberFormat
                        format="+1 (###) ###-####"
                        allowEmptyFormatting
                        mask="_"
                        customInput={TextField}
                        {...props}
                    />
                );
            case 'zip':
                return (
                    <NumberFormat
                        format="#####"
                        allowEmptyFormatting
                        customInput={TextField}
                        {...props}
                    />
                );
            case 'currency':
                return (
                    <NumberFormat
                        prefix={'$'}
                        thousandSeparator={true}
                        allowEmptyFormatting
                        customInput={TextField}
                        {...props}
                    />
                );
            case 'default':
            default:
                return (
                    <NumberFormat
                        allowEmptyFormatting
                        customInput={TextField}
                        {...props}
                    />
                );
        }
    }

    return (
      <ThemeProvider theme={theme}>
          {getNumber()}
      </ThemeProvider>
    );
};

NumberField.defaultProps = {
    number: 'default',
};

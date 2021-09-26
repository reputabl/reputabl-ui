import * as React from 'react';
import { FC } from 'react';
import TextField from '@mui/material/TextField';
import { FieldProps } from '../utils';
import { getDayOptions, getYearOptions, months, option } from './utils';
import { Autocomplete } from '@material-ui/core';

// be able to send your own options
export interface ComboboxProps extends FieldProps {
    options?: 'day' | 'month' | 'year' | undefined;
}

export const ComboBox: FC<ComboboxProps> = (
    props: ComboboxProps
): JSX.Element => {
    const getOptions = (type?: string): option[] => {
        switch (type) {
            case 'day': {
                return getDayOptions();
            }
            case 'month': {
                return months;
            }
            case 'year': {
                return getYearOptions();
            }
            default: {
                return [];
            }
        }
    };

    return (
        <Autocomplete
            options={getOptions(props.options)}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} {...props} />}
        />
    );
};

ComboBox.displayName = 'ComboBox';

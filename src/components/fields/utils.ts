export interface FieldProps {
    children?: string;
    fullWidth?: boolean;
    name?: string;
    value?: any;
    id?: string;
    label?: string;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
    error?: any;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    type?: 'tel' | 'text' | 'password' | undefined;
    autoComplete?: string;
    onChange?: any;
    helperText?: string | false | undefined;
    InputProps?: object;
    InputLabelProps?: object;
}

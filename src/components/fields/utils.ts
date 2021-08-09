export interface FieldProps {
    children?: string;
    id?: string;
    label?: string;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
    error?: any;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    type?: 'tel' | 'text' | 'password' | undefined;
    autoComplete?: string;
    helperText?: string;
    InputProps?: object;
    InputLabelProps?: object;
}

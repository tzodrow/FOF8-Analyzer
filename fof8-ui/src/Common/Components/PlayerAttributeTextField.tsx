import { TextField } from '@fluentui/react';

export interface IPlayerAttributeTextFieldProps {
    label: string;
    value: string;
    setOnChange: (newValue: string) => void;
}

export function PlayerAttributeTextField(props: IPlayerAttributeTextFieldProps) {
    return (<TextField label={props.label} value={props.value} onChange={(_, newVal) => props.setOnChange(newVal ? newVal : "")} />);
}
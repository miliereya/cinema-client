import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';


export interface IFieldProps {
	placeholder: string
	error?: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
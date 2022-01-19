import React from 'react';
import { styled } from '../../stitches.config';

export const InputStyled = styled('input', {
  backgroundColor: '$greenTint',
  padding: '$s',
  maxWidth: '280px',
  '@m': {
    width: '480px',
    fontSize: '$body',
  },
  borderRadius: '$s',
  border: '1px solid #333',
  fontSize: '$body',
  transition: 'background-color 1.5s ease-in',
  '&:focus': {
    outline: 'none',
    boxShadow: 'focus',
  },
});

export const SubmitButton = styled(InputStyled, {
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '$m',
  transitionProperty: 'transform',
  transitionDuration: '0.25s',
  '&:focus': {
    outline: 'none',
    boxShadow: 'focus',
    transform: 'scale(1.05)',
  },
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const SuccessMessage = styled('span', {
  color: '$green',
  marginLeft: '$l',
  marginTop: '$s',
});

const Error = styled('span', {
  marginLeft: '$s',
  marginTop: '$xxs',
  color: '$coral',
});

type errorMessageProps = {
  children?: any;
};

export function ErrorMessage({ children }: errorMessageProps) {
  return <Error role="alert">{children}</Error>;
}

const LabelStyled = styled('label', {
  marginLeft: '$s',
  marginTop: '$s',
  marginBottom: '$xxs',
});

type labelProps = {
  for: string;
  children?: any;
};

export function Label(props: labelProps) {
  return <LabelStyled htmlFor={props.for}>{props.children}</LabelStyled>;
}

export const FormContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$s',
  border: '1px solid $coral',
  paddingX: '$xxl',
  paddingY: '$l',
  marginX: 'auto',
  marginTop: '$s',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
});

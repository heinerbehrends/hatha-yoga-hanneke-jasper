import React from 'react';
import { styled } from '../../stitches.config';

export const InputStyled = styled('input', {
  backgroundColor: '$greenTint',
  paddingX: '$m',
  paddingY: 'calc($s + 1px)',
  '@l': {
    fontSize: '$body',
  },
  minWidth: 0,
  borderRadius: '$s',
  border: '1px solid $coral',
  transition: 'background-color 1.5s ease-in',
  '&:focus': {
    outline: 'none',
    boxSizing: 'content-box',
    boxShadow: 'none',
    border: '2px dotted $coral',
    paddingY: '$s',
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
    transform: 'scale(1.01)',
    border: '2px dotted $coral',
  },
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

export const SuccessMessage = styled('span', {
  color: '$green',
  marginLeft: '$xs',
  marginTop: '$s',
});

const Error = styled('span', {
  lineHeight: 0,
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
  display: 'inline',
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
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '$white',
  paddingY: '$l',
  paddingBottom: '$xxl',
  paddingX: '$m',
  '@s': {
    maxWidth: '480px',
    marginX: 'auto',
    paddinX: 0,
  },
  '@l': {
    borderRadius: '$s',
    border: '1px solid $coral',
    width: 'unset',
    paddingX: '$xxl',
    marginX: 0,
    maxWidth: 'unset',
  },
});

export const Form = styled('form', {
  borderBottom: '1px solid $coral',
  '@l': { borderBottom: 'none' },
});

export const LabelContainer = styled('div', {
  marginTop: '$l',
});

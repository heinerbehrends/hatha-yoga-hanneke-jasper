import React from 'react';
import { styled } from '../../stitches.config';

export const InputStyled = styled('input', {
  backgroundColor: '$greenTint',
  padding: '$s',
  '@m': {
    fontSize: '$body',
  },
  borderRadius: '$s',
  border: '1px solid $red',
  fontSize: '$body',
  transition: 'background-color 1.5s ease-in',
  '&:focus': {
    outline: 'none',
    border: '2px dotted $coral',
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
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '$white',
  borderRadius: '$s',
  border: '1px solid $coral',
  paddingY: '$l',
  // width: 'fit-content',
  paddingX: '$m',
  // '@s': {
  //   width: '100%',
  // },
  '@l': {
    paddingX: '$xxl',
    marginX: 'auto',
  },
});

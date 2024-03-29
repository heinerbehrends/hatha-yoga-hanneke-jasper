import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Label,
  ErrorMessage,
  InputStyled,
  FormContainer,
  SubmitButton,
  StatusMessage,
  InputContainer,
  Form,
} from './ContactFormComponents';

function createButtonText(
  isSubmitting: boolean,
  isSubmitSuccessful: boolean,
  error: Error | null
) {
  if (isSubmitting) return 'Wordt verzonden...';
  if (isSubmitSuccessful) return 'Verzonden!';
  if (error) return 'Probeer opnieuw >';
  return 'Verzend >';
}

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => alert(error));
};

type FormValues = { name: string; email: string; message: string };

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
    shouldFocusError: true,
  });
  const [error, setError] = useState<Error | null>(null);

  return (
    <Form
      data-netlify={true}
      action="/dank-je"
      method="POST"
      onSubmit={handleSubmit}
      encType="application/x-www-form-urlencoded"
      name="contact-form"
      id="contact"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <FormContainer>
        <div>
          {errors.name ? (
            <ErrorMessage>Vul hier je naam in ajb</ErrorMessage>
          ) : (
            <Label for="name">Naam</Label>
          )}
        </div>
        <InputStyled
          type="text"
          id="name"
          placeholder="Je naam"
          {...register('name', {
            required: true,
            minLength: 2,
            pattern: {
              value: /[A-Za-z]{2}/,
              message: 'Vul hier je naam in ajb',
            },
          })}
        />
        <InputContainer>
          {errors.email ? (
            <ErrorMessage>Vul hier je emailadres in ajb</ErrorMessage>
          ) : (
            <Label for="email">E-mail</Label>
          )}
          <InputStyled
            type="email"
            id="email"
            placeholder="E-mail adres"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Vul hier je emailadres in ajb',
              },
            })}
          />
        </InputContainer>
        <InputContainer>
          {errors.message ? (
            <ErrorMessage>Vul hier je bericht in ajb</ErrorMessage>
          ) : (
            <Label for="message">Bericht</Label>
          )}
          <InputStyled
            as="textarea"
            id="message"
            {...register('message', {
              required: true,
              minLength: 6,
            })}
            placeholder="Je vraag of bericht..."
            rows={6}
          />
        </InputContainer>
        <SubmitButton
          type="submit"
          value={createButtonText(isSubmitting, isSubmitSuccessful, error)}
        />
        {isSubmitSuccessful && (
          <StatusMessage role="status" status="success">
            <CheckCircledIcon width="25" height="25" /> Uw bericht is verzonden.
          </StatusMessage>
        )}
        {error && (
          <StatusMessage role="status" status="error">
            <CrossCircledIcon width="25" height="25" /> Er is iets misgegaan.
          </StatusMessage>
        )}
      </FormContainer>
    </Form>
  );
}

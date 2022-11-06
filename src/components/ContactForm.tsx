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
  LabelContainer,
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
type FormValues = { name: string; email: string; message: string };

async function onSubmit(data: FormValues) {
  await window
    .fetch(`api/send-email`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data?.response?.body?.errors?.length) {
        console.log('response data', data);
        throw new Error(data.response.body.errors[0].message);
      }
    });
  // {
  // if (response.status !== 200) {
  //   throw new Error(
  //     'Er was een probleem met het verzenden van je bericht.'
  //   );
  // }
  // });
}

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
      method="POST"
      // onSubmit={(event) =>
      //   handleSubmit(onSubmit)(event)
      //     .then((__) => {
      //       setError(null);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //       setError(error);
      //     })
      // }
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
            <Label for="email">Naam</Label>
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
        <LabelContainer>
          {errors.email ? (
            <ErrorMessage>Vul hier je emailadres in ajb</ErrorMessage>
          ) : (
            <Label for="email">E-mail</Label>
          )}
        </LabelContainer>
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
        <LabelContainer>
          {errors.message ? (
            <ErrorMessage>Vul hier je bericht in ajb</ErrorMessage>
          ) : (
            <Label for="message">Bericht</Label>
          )}
        </LabelContainer>
        <InputStyled
          as="textarea"
          id="message"
          form="contact"
          {...register('message', {
            required: true,
            minLength: 6,
          })}
          placeholder="Je vraag of bericht..."
          rows={6}
        />
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

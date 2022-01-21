import { CheckIcon } from '@modulz/radix-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Label,
  ErrorMessage,
  InputStyled,
  FormContainer,
  SubmitButton,
  SuccessMessage,
} from './ContactFormComponents';

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
    shouldFocusError: true,
  });
  console.log('isSubmitte', isSubmitted);
  console.log('isSubmitSuccessful', isSubmitSuccessful);
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
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            'Er was een probleem met het verzenden van je bericht.'
          );
        }
      });
  }
  function onError() {
    console.log('error');
  }
  return (
    <form
      method="POST"
      onSubmit={(event) =>
        handleSubmit(
          onSubmit,
          onError
        )(event).catch((error) => {
          console.log(error);
        })
      }
      encType="application/x-www-form-urlencoded"
      name="contact-form"
      id="contact"
    >
      <FormContainer>
        <Label for="name">Naam</Label>
        <InputStyled
          type="text"
          autoFocus
          id="name"
          placeholder="Naam"
          {...register('name', {
            required: 'Dit is een verplicht veld',
            min: 2,
            max: 30,
          })}
        />
        {errors.name ? (
          <ErrorMessage>Dit is een verplicht veld</ErrorMessage>
        ) : null}
        <Label for="email">E-mail</Label>
        <InputStyled
          type="email"
          id="email"
          placeholder="E-mail adres"
          {...register('email', {
            required: 'Dit is een verplicht veld.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ongeldige e-mailadres.',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label for="message">Bericht</Label>
        <InputStyled
          as="textarea"
          id="message"
          form="contact"
          {...register('message', {
            required: true,
            minLength: 6,
            maxLength: 2000,
          })}
          placeholder="Uw vraag of boodschap"
          rows={6}
        />
        {errors.message && (
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <SubmitButton
          type="submit"
          value={`${isSubmitSuccessful ? 'Verstuurd!' : 'Verstuur >'}`}
        />
        {isSubmitSuccessful ? (
          <SuccessMessage>
            <CheckIcon /> U bericht is verzonden.
          </SuccessMessage>
        ) : null}
      </FormContainer>
    </form>
  );
}

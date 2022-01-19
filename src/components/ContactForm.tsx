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
  const { register, formState } = useForm({
    mode: 'onBlur',
    shouldFocusError: true,
  });
  const { isSubmitSuccessful } = formState;

  return (
    <form
      method="POST"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
      name="contact-form"
      id="contact"
      action="/succes"
      // {...props}
    >
      {/* hidden form field neccessary for netlify form submission */}
      {/* <input type="hidden" name="form-name" value="contact-form" /> */}
      <FormContainer>
        <Label for="name">Naam</Label>
        <InputStyled
          type="text"
          autoFocus
          id="name"
          placeholder="Naam"
          {...register('naam', {
            required: 'Dit is een verplicht veld',
            min: 2,
            max: 30,
          })}
        />
        {formState.errors.name ? (
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
        {formState.errors.email && (
          <ErrorMessage>{formState.errors.email.message}</ErrorMessage>
        )}
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
        {formState.errors.message && (
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <SubmitButton type="submit" as="button">
          {isSubmitSuccessful ? 'Verstuurd!' : 'Verstuur >'}
        </SubmitButton>
        {isSubmitSuccessful ? (
          <SuccessMessage>U bericht is verstuurd.</SuccessMessage>
        ) : null}
      </FormContainer>
    </form>
  );
}

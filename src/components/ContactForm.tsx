import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Label,
  ErrorMessage,
  InputStyled,
  FormContainer,
  SubmitButton,
  SuccessMessage,
  LabelContainer,
  Form,
} from './ContactFormComponents';

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
    shouldFocusError: true,
  });
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
    <Form
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
          value={`${isSubmitSuccessful ? 'Verstuurd!' : 'Verstuur >'}`}
        />
        {isSubmitSuccessful ? (
          <SuccessMessage>
            <CheckIcon /> U bericht is verzonden.
          </SuccessMessage>
        ) : null}
      </FormContainer>
    </Form>
  );
}

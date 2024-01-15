import React, { useState } from 'react';
import { Form, FormButton, Input, InputLabel } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    addContact(name, number);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputLabel>
        Name
        <Input
          type="text"
          name="name"
          required
          placeholder="Enter contact name"
          minLength={3}
        />
      </InputLabel>
      <InputLabel>
        Number
        <Input
          type="tel"
          name="number"
          required
          minLength={9}
          maxLength={13}
          placeholder="Enter phone number"
        />
      </InputLabel>
      <FormButton>Add contact</FormButton>
    </Form>
  );
};

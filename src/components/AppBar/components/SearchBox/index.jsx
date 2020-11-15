// @flow
import React from 'react';
import styled from 'styled-components';
import type { Element } from 'react';
import type { SearchBoxProps } from './types.js';

const InputWrapper = styled.div`
  max-width: ${({ compact }) => (compact ? '500px' : '600px')};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  margin: 0 auto;
  padding: 10px 25px;
  text-align: center;
`;

const Input = styled.input`
  height: ${({ compact }) => (compact ? '45px' : '60px')};
  width: 100%;
  border-radius: ${({ compact }) => (compact ? '5px' : '10px')};
  color: #fff;
  font-size: ${({ compact }) => (compact ? '1rem' : '1.2rem')};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 0 12px;
  outline: none;
  border: 1px solid #f34100;
  background-color: #ff936c;
  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;

function SearchBox({
  handleChange,
  placeholder = 'What are you looking for today?',
  compact,
}: SearchBoxProps): Element<'div'> {
  return (
    <InputWrapper compact={compact}>
      <Input
        compact={compact}
        placeholder={placeholder}
        onChange={handleChange}
        autoFocus
      />
    </InputWrapper>
  );
}

export default SearchBox;

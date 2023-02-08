/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent } from 'react';

interface IOptions {
  value: number;
  label: string;
}
export interface AutoCompleteProps {
  onChangeText: (v: string | IOptions) => void;
  value: string | null | undefined | IOptions;
  placeholder: string;
  title: string;
  items: string[] | IOptions[];
  style?: React.CSSProperties;
  disableClearable?: boolean;
  onTextChange?: (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

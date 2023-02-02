import React from 'react';

export interface AutoCompleteProps {
  onChangeText: (v: string) => void;
  value: string | null | undefined;
  placeholder: string;
  title: string;
  items: string[];
  style?: React.CSSProperties;
}

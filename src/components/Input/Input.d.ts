export interface InputProps {
  onChangeText: (v: string) => void;
  value: string;
  placeholder: string;
  multline?: boolean;
  autoCapitalize?: string;
  maskType?:
    | 'phone'
    | 'cpf'
    | 'cpf_cnpj'
    | 'date'
    | 'zipCode'
    | 'money'
    | 'cvv'
    | 'card'
    | 'expiration_date';
  required?: boolean;
  disabled?: boolean;
  type?: 'text' | 'number' | 'date';
  style?: React.CSSProperties;
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
  title: string;
  error?: string;
  password?: boolean;
}

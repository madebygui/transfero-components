export interface InputSelectProps {
  onChangeText: (v: string) => void;
  value: string;
  placeholder: string;
  items: Array<ItemsProps> | [];
  required?: boolean;
  error?: string;
  width?: string;
}

export interface ItemsProps {
  label: string;
  value: string | number;
}

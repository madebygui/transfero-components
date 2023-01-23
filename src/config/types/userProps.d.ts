export interface UserProps {
  data: {
    name: string;
    email: string;
  };
  accessToken?: string;
  tokenType?: string;
}

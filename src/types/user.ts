export interface User {
    id: number;
    name: string;
  }

  export interface UserLoginForm extends User {
    password: string;
  }

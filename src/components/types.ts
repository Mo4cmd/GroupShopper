export type Item = {
    id: string;
    checked: boolean;
    important: boolean;
    userId?: string;
  };
  
  export type User = {
    id: string;
    name: string;
    color: string;
  };
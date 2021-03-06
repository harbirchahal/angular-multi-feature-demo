export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  isActive: boolean;
}

export const EMPTY_PERSON: Person = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  isActive: false
};
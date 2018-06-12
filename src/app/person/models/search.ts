export interface PSearch {
  firstname: string;
  lastname: string;
  email: string;
}

export const EMPTY_QUERY: PSearch = {
  firstname: '',
  lastname: '',
  email: ''
};
export default interface User {
  id?: number;
  account?: string;
  password?: string;
  name?: string | null;
  age?: number | null;
  sex?: string | null;
  iphone?: string | null;
  email?: string | null;
  address?: string | null;
  profession?: string | null;
  url?: string;
  state?: number | null;
  createDate?: string;
  updateDate?: string;
}

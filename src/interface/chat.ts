import User from './user';

interface Msg {
  type: string;
  msg: string;
}

export default interface Chat {
  id: number;
  type: string;
  data?: string | Msg;
  user: User;
}

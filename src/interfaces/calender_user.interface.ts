export interface Document {
  _id: string;
  calenderId: string;
  userId: string;
  role: 'manager' | 'user' | 'moderator' | 'printer';
}

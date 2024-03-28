export interface Employee {
  _id: string;
  userId: string;
  name: string;
  surname: string;
  birthDay: Date;
  gender: 'male' | 'female';
}

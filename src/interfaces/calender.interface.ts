export interface Calender {
  _id: string;
  name: string;
  description: string;
  type: string; // face to face
  location: string; // phone, email, location
  startDate: Date;
  endDate: Date;
}

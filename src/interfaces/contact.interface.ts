export interface Contact {
  _id: string;
  employeeId: string;
  companyId: string;
  type: string; // email, phone, social
  content: string;
  confirm: boolean;
}
// şirket bilgileri girilince
// employeeId nul girilmeli

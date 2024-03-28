export interface Address {
  _id: string;
  employeeId: string;
  companyId: string;
  type: string; // merkez, şube, ev, iş
  country: string;
  city: string;
  district: string;
  town: string;
  addressLine: string;
  location: string;
  confirm: boolean;
}
// şirket bilgileri girilince
// employeeId nul girilmeli

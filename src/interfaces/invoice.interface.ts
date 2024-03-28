export interface Invoice {
  _id: string;
  masterCompanyId: string;
  masterBranchId: string;
  targetCompanyId: string;
  targetBranchId: string;
  employeeId: string;
}

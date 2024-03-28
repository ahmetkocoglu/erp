import { model, Schema, Document } from 'mongoose';
import { CustomerEmployee } from '@/interfaces/company_employee.interface';

const customerEmployeeSchema: Schema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
});

const customerEmployeeModel = model<CustomerEmployee & Document>('Customer', customerEmployeeSchema);

export default customerEmployeeModel;

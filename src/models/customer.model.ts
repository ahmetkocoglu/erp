import { model, Schema, Document } from 'mongoose';
import { Customer } from '@/interfaces/company.interface';

const customerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const customerModel = model<Customer & Document>('Customer', customerSchema);

export default customerModel;

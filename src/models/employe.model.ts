import { model, Schema, Document } from 'mongoose';
import { Employee } from '@interfaces/employee.interface';

const employeeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
});

const employeeModel = model<Employee & Document>('Employee', employeeSchema);

export default employeeModel;

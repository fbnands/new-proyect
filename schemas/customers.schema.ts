import mongoose from "express";
import { Customer } from "../types/customers.types";


const customerSchema = new mongoose.Schema<Customer>({
  name: {type: String, required: true},
  cc: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: String, required: true },
  cel: { type: String, required: true },
  address: { type: String, required: true }
});

const CustomerSchema = mongoose.model("Customers", customerSchema);
export { CustomerSchema };
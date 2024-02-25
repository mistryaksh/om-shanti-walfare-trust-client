import { number, object, string } from "yup";

export const DonationInitialValues = {
   amount: 0,
   custName: "",
   email: "",
   mobile: "",
   referenceId: "",
   status: "NOT_PERFORMED",
};  

export const DonationValidationSchema = object().shape({
   amount: number().required("Amount is required"),
   custName: string().required("Name is required"),
   email: string().required("Email is required").email("Invalid email"),
   mobile: string().required("Mobile is required"),
   referenceId: string().required("Reference ID is required"),
});
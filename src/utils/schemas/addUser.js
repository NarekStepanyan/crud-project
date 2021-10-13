import * as Yup from "yup";
import ValidationMessage from "./validationMessage";

export const addUserValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, ValidationMessage.scemasMax(15))
        .required('* this field is required'),
    lastName: Yup.string()
        .max(20, ValidationMessage.scemasMax(20))
        .required('* this field is required'),
    email: Yup.string().email('Invalid email address').required('* this field is required'),
    age: Yup.number()
        .typeError("* Must be a number")
        .required('* this field is required'),
    password: Yup.string()
        .min(6, ValidationMessage.scemasMin(6))
        .required('* this field is required'),
    confirmPassword: Yup.string()
        .min(6, ValidationMessage.scemasMin(6))
        .required('* this field is required'),
})

export const addUserInitialValues = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: "",
};
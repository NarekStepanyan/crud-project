import * as Yup from "yup";
import ValidationMessage from "./validationMessage";

export const editUserValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, ValidationMessage.scemasMax(15))
        .required('Required'),
    lastName: Yup.string()
        .max(20, ValidationMessage.scemasMax(20))
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    age: Yup.number().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().required('Required'),
})

export const editUserInitialValues = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: "",
};
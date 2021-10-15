import * as Yup from "yup";
import ValidationMessage from "./validationMessage";

export const addHomeValidationSchema = Yup.object({
    user:  Yup.string().required('* this field is required'),
    location: Yup.string()
        .max(30, ValidationMessage.scemasMax(30))
        .required('* this field is required'),
    landSqm: Yup.number()
        .typeError("* Must be a number")
        .required('* this field is required'),
    placeSqm: Yup.number()
        .typeError("* Must be a number")
        .required('* this field is required'),
    bedrooms:  Yup.number().required('* this field is required'),
})

export const addHomeInitialValues = {
    user: "",
    location: '',
    landSqm: '',
    placeSqm: '',
    bedrooms: ''
};
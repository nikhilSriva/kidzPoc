import {date, object, string} from "yup";

export const CHILD_DETAILS_SCHEMA = object().shape({
    name: string()
        .required("Name is required")
        .min(2, "Min length 2")
        .max(50, "Max length 50"),
    dob: date().required("DOB is required"),
    gender: string().required("Gender is required"),
    medicalInfo: string().required('Medical Information is required'),
    address: string().required('Address is required'),
    city: string().required('City is required'),
    country: string().required('Country is required'),
    postCode:
        string()
            .required('Postcode is required')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(6, "Invalid pincode")
            .max(6, "Invalid pincode"),

})
export const GENDER_OPTIONS = [{
    value: 'male', label: 'Male'
}, {
    value: 'female', label: 'Female',
}]

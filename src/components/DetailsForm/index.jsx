import styles from './DetailsForm.module.scss'
import {TextInput} from "../TextInput/index.jsx";
import {RadioButton} from "../RadioButton/index.jsx";
import {useCallback, useState} from "react";

const GENDER_OPTIONS = [
    {
        value: 'male',
        label: 'Male'
    },
    {
        value: 'female',
        label: 'Female',
    }
]
export const DetailsForm = () => {
    const [form, setForm] = useState({
        name: '',
        gender: ''
    })
    const setFormData = useCallback((key, value) => {
        setForm(prevState => ({...prevState, [key]: value}))
    }, [])
    return <div className={styles.formContainer}>
        <h3>ADD CHILDREN DETAILS</h3>
        <TextInput label={'Name'} placeholder={'Enter Name'}/>
        <RadioButton options={GENDER_OPTIONS} value={form.gender} onChange={(e) => {
            setFormData('gender', e.target.value)
        }}/>
    </div>
}

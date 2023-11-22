import styles from './DetailsForm.module.scss'
import {TextInput} from "../TextInput/index.jsx";
import {RadioButton} from "../RadioButton/index.jsx";
import {useCallback, useState} from "react";
import {DatePicker} from "../DatePicker/index.jsx";
import {PrimaryButton} from "../PrimaryButton/index.jsx";
import {CHILD_DETAILS_SCHEMA, GENDER_OPTIONS} from "../../utils/constants/index.js";


export const DetailsForm = ({onComplete}) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: '', gender: '', dob: null, medicalInfo: '', address: '', postCode: '', city: '', country: ''
    })
    const setFormData = useCallback((key, value) => {
        setErrors(prevState => ({...prevState, [key]: ''}))
        setForm(prevState => ({...prevState, [key]: value}))
    }, []);

    const handleAddChild = useCallback(async () => {
        try {
            let res = await CHILD_DETAILS_SCHEMA.validate(form, {abortEarly: false});
            console.log('Child Details', res);
            onComplete(res)
            setErrors({});
        } catch (validationError) {
            if (validationError.inner) {
                const errors = {};
                validationError.inner.forEach(error => {
                    if (!errors[error.path]) {
                        errors[error.path] = error.message;
                    } else {
                        errors[error.path] += `, ${error.message}`;
                    }
                });
                setErrors(errors)
                console.error('Validation errors:', errors)
            }
        }
    }, [form])

    return <div className={styles.formContainer}>
        <h3>ADD CHILDREN DETAILS</h3>
        <div className={styles.element}>
            <p className={styles.label}>Name</p>
            <TextInput error={!!errors.name} value={form.name} onChange={(e) => setFormData('name', e.target.value)}
                       placeholder={'Enter Name'}/>
        </div>

        <div className={styles.row}>
            <div className={styles.element}>
                <p className={styles.label}>Gender</p>
                <RadioButton options={GENDER_OPTIONS} value={form.gender} onChange={(e) => {
                    setFormData('gender', e.target.value)
                }}/>
            </div>
            <div className={styles.element}>
                <p className={styles.label}>Date of Birth</p>
                <DatePicker error={!!errors.dob} onChange={val => setFormData('dob', val)}/>
            </div>
        </div>
        <div className={styles.element}>
            <p className={styles.label}>Medical Information</p>
            <TextInput error={!!errors.medicalInfo} value={form.medicalInfo}
                       onChange={(e) => setFormData('medicalInfo', e.target.value)}
                       placeholder={'Allergies?'}/>
        </div>
        <div className={styles.element}>
            <p className={styles.label}>Address</p>
            <TextInput error={!!errors.address} value={form.address}
                       onChange={(e) => setFormData('address', e.target.value)}
                       placeholder={'Address'}/>
            <TextInput error={!!errors.postCode} value={form.postCode}
                       onChange={(e) => setFormData('postCode', e.target.value)}
                       placeholder={'Postcode'}/>
            <div className={styles.row}>
                <TextInput error={!!errors.city} className={styles.input} value={form.city}
                           onChange={(e) => setFormData('city', e.target.value)}
                           placeholder={'City'}/>
                <TextInput error={!!errors.country} className={styles.input} value={form.country}
                           onChange={(e) => setFormData('country', e.target.value)}
                           placeholder={'Country'}/>
            </div>
        </div>
        <div className={styles.element}>
            <PrimaryButton className={styles.addButton} label={'Add'} onClick={handleAddChild}/>
        </div>
    </div>
}

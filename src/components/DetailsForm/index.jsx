import styles from './DetailsForm.module.scss'
import {TextInput} from "../TextInput/index.jsx";
import {RadioButton} from "../RadioButton/index.jsx";
import {useCallback, useState} from "react";
import {DatePicker} from "../DatePicker/index.jsx";
import {PrimaryButton} from "../PrimaryButton/index.jsx";

const GENDER_OPTIONS = [{
    value: 'male', label: 'Male'
}, {
    value: 'female', label: 'Female',
}]
export const DetailsForm = () => {
    const [form, setForm] = useState({
        name: '', gender: '', dob: new Date(), medicalInfo: '', address: '', postCode: '', city: '', country: ''
    })
    const setFormData = useCallback((key, value) => {
        setForm(prevState => ({...prevState, [key]: value}))
    }, []);

    const handleAddChild = useCallback(() => {
        console.log('Child Details', form)
    }, [form])

    return <div className={styles.formContainer}>
        <h3>ADD CHILDREN DETAILS</h3>
        <div className={styles.element}>
            <p className={styles.label}>Name</p>
            <TextInput value={form.name} onChange={(e) => setFormData('name', e.target.value)}
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
                <DatePicker onChange={val => setFormData('dob', val)}/>
            </div>
        </div>
        <div className={styles.element}>
            <p className={styles.label}>Medical Information</p>
            <TextInput value={form.medicalInfo} onChange={(e) => setFormData('medicalInfo', e.target.value)}
                       placeholder={'Allergies?'}/>
        </div>
        <div className={styles.element}>
            <p className={styles.label}>Address</p>
            <TextInput value={form.address} onChange={(e) => setFormData('address', e.target.value)}
                       placeholder={'Address'}/>
            <TextInput value={form.postCode} onChange={(e) => setFormData('postCode', e.target.value)}
                       placeholder={'Postcode'}/>
            <div className={styles.row}>
                <TextInput className={styles.input} value={form.city}
                           onChange={(e) => setFormData('city', e.target.value)}
                           placeholder={'City'}/>
                <TextInput className={styles.input} value={form.country}
                           onChange={(e) => setFormData('country', e.target.value)}
                           placeholder={'Country'}/>
            </div>
        </div>
        <div className={styles.element}>
            <PrimaryButton className={styles.addButton} label={'Add'} onClick={handleAddChild}/>
        </div>
    </div>
}

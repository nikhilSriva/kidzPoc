import {Input} from "antd";
import styles from './TextInput.module.scss'

export const TextInput = ({label, onChange, value, ...props}) => {
    return <div className={styles.inputContainer}>
        <p>{label}</p>
        <Input className={styles.input} value={value} onChange={onChange} {...props}/>
    </div>
}

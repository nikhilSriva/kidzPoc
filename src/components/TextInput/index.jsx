import {Input} from "antd";
import styles from './TextInput.module.scss'

export const TextInput = ({onChange, value, className = '', ...props}) => {
    return <Input className={`${styles.input} ${className}`} value={value} onChange={onChange} {...props}/>
}

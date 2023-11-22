import {Input} from "antd";
import styles from './TextInput.module.scss'

export const TextInput = ({onChange, value, className = '', error, ...props}) => {
    return <Input status={error ? 'error' : ''} className={`${styles.input} ${className}`} value={value}
                  onChange={onChange} {...props}/>
}

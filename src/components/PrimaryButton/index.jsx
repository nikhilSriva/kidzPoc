import {Button} from "antd";
import styles from './PrimaryButton.module.scss'

export const PrimaryButton = ({label, onClick, className = '', ...props}) => {
    return <Button className={`${styles.primaryButton} ${className}`} onClick={onClick} {...props}>{label}</Button>
}

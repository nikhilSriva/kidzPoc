import {DatePicker as AntDatePicker} from "antd";
import styles from "./DatePicker.module.scss";

export const DatePicker = ({onChange, error, value}) => {
    return <AntDatePicker status={error ? 'error' : ''} className={styles.datePicker} onChange={onChange}/>

}

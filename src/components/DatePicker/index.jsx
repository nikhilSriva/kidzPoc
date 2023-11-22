import {DatePicker as AntDatePicker} from "antd";
import styles from "./DatePicker.module.scss";

export const DatePicker = ({onChange, value}) => {
    return <AntDatePicker className={styles.datePicker} onChange={onChange}/>

}

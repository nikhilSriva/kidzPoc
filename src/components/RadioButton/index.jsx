import styles from './RadioButton.module.scss'
import {Radio} from 'antd';

export const RadioButton = ({onChange, value, options = []}) => {
    return <div className={styles.radioButtonContainer}>
        <Radio.Group className={styles.radioGroup} onChange={onChange} value={value}>
            {options.map(item =>
                <div className={`${styles.radioContainer} ${value === item.value ? styles.active : ''}`}>
                    <Radio key={item.value} value={item.value}>{item.label}</Radio>
                </div>
            )}
        </Radio.Group>
    </div>
}

import './styles/globals.scss'
import {DetailsForm} from "./components/DetailsForm/index.jsx";
import {useState} from "react";
import {QRCode} from "antd";

function App() {
    const [showQr, setShowQr] = useState(false);
    const [qrValue, setQrValue] = useState('');

    return (
        <div className={'app'}>
            {
                !showQr ? <DetailsForm onComplete={(formData) => {
                        setShowQr(true);
                        setQrValue(formData)
                    }}/> :
                    <div>
                        <h3>{qrValue.name}</h3>
                        <QRCode value={JSON.stringify(qrValue)}/>
                    </div>
            }
        </div>
    )
}

export default App

import './styles/globals.scss'
import {DetailsForm} from "./components/DetailsForm/index.jsx";
import {useState} from "react";
import {QRCode} from "antd";

function App() {
    const [showQr, setShowQr] = useState(false);
    const [qrValue, setQrValue] = useState('');

    return (
        <>
            {
                !showQr ? <DetailsForm onComplete={(formData) => {
                    setShowQr(true);
                    setQrValue(JSON.stringify(formData))
                }}/> : <QRCode value={qrValue}/>
            }
        </>
    )
}

export default App

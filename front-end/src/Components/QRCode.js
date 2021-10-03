import  QRCode from "qrcode"
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const QrCode = () => {
    const [src, setSrc] = useState('')
    const user = useContext(UserContext);

    useEffect(() => {
        generateQR()
    }, [])
    
    const generateQR = async ()=>{

        try {
            QRCode.toDataURL(`${API}/users/JzsbUy5H7tMu2Hs0Y7mFzVk41oC2`).then((data) =>{
                setSrc(data)
            })
        } catch (error) {
         console.log(error)   
        }
    }
    return (
      <section>
        <h1>QrCode</h1>
        <div className="cardDiv">
          <div className="card">
            <hr />
            <img src ={src} />

            <hr />
          </div>
        </div>
      </section>
    );
}

export default QrCode;

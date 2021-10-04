import  QRCode from "qrcode"
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import {Link} from 'react-router-dom'

const API = apiURL();

const QrCode = () => {
    const [src, setSrc] = useState('')
    const user = useContext(UserContext);

    useEffect(() => {
        generateQR()
    }, [])
    
    const generateQR = async ()=>{
        
        try {
            QRCode.toDataURL(`https://dry-savannah-93616.herokuapp.com/users/${user.uid}`).then((data) =>{
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

import iphoneLogo from "../Images/iphoneLogo.png"
import "../Styles/Welcome.css"
const Welcome = () => {
    return(
        <section className="welcome-container">
            <img alt="iphone" className="iphoneImg" src={iphoneLogo} />
        </section>
    )
}

export default Welcome;
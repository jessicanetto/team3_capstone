import iphoneLogo from "../Images/iphoneLogo.png";
import "../Styles/Welcome.css";
const Welcome = () => {
  return (
    <>
      {/* <section className="iphone-border">
            <div className="iphone-screen"></div>
            <div className="iphone-front-camera-border"></div>
            <div className="iphone-front-speaker"></div>
            <div className="iphone-front-camera"></div>

            <div className="iphone-inner-border"></div>
            <div className="iphone-btn iphone-btn1"></div>
            <div className="iphone-btn iphone-btn2"></div>
            <div className="iphone-btn iphone-btn3"></div>
            <div className="iphone-btn iphone-btn4"></div>
        </section> */}
      <div className="form-container">
        <div className="form-content-left">
          <img className="iphoneImg form-img" src={iphoneLogo} />
        </div>
      </div>
    </>
  );
};

export default Welcome;

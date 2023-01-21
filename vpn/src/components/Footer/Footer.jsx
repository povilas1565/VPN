import React from "react";
import "./Footer.css";
import logo from "../../images/Logo.svg"
import fb from "../../images/Facebook.svg";
import vk from "../../images/Vkontakte.svg";
import twitter from "../../images/Twitter.svg";
import instagram from "../../images/Instagramm.svg";
import telegram from "../../images/Telegram.svg";
import google from "../../images/Google.svg"
export default function Footer() {
    return (
        <>
            <div className="footercontainer">
                <div className="wrapper">
                    <div className="footer">
                        <div className="company-info">
                            <div className="footer-logo">
                                <img src={logo} alt={logo}/>
                            </div>
                            <div className="company-desc-text">
                                <p className="company-desc sub-desc">
                                    <span>VPN</span> is a private virtual network that has unique features and has high
                                    security.
                                </p>
                            </div>
                            <div className="social-media-links">
                                <a href="#" className="social-media-icon">
                                    <img className="social-media-icon" src={fb} alt="facebook"/>
                                </a>

                                <a href="#" className="social-media-icon">
                                    <img className="social-media-icon" src={vk} alt="vkontakte"/>
                                </a>
                                <a href="#" className="social-media-icon">
                                    <img className="social-media-icon" src={twitter} alt="twitter"/>
                                </a>
                                <a href="#" className="social-media-icon">
                                    <img className="social-media-icon" src={instagram} alt="instagram"/>
                                </a>
                                <a href="#" className="social-media-icon">
                                    <img className="social-media-icon" src={telegram} alt="telegram"/>
                                </a>
                                <a href="#" className="social-media-icon">
                                    <img className="social-media-icon" src={google}  alt="google"/>
                                </a>
                            </div>
                            <p className="copyright">©2023VPN</p>
                        </div>
                        <div id="help" className="footer-links">
                            <div className="link-col">
                                <p className="link-col-label">Product</p>
                                <a className="footer-link" href="#">
                                    Download
                                </a>
                                <a className="footer-link" href="#">
                                    Pricing
                                </a>
                                <a className="footer-link" href="#">
                                    Locations
                                </a>
                                <a className="footer-link" href="#">
                                    Server
                                </a>
                                <a className="footer-link" href="#">
                                    Countries
                                </a>
                                <a className="footer-link" href="#">
                                    Blog
                                </a>
                            </div>
                            <div className="link-col">
                                <p className="link-col-label">Engage</p>
                                <a className="footer-link" href="#">
                                    VPN?
                                </a>
                                <a className="footer-link" href="#">
                                    FAQ
                                </a>
                                <a className="footer-link" href="#">
                                    Tutorials
                                </a>
                                <a className="footer-link" href="#">
                                    About Us
                                </a>
                                <a className="footer-link" href="#">
                                    Privacy Policy
                                </a>
                                <a className="footer-link" href="#">
                                    Terms of Services
                                </a>
                            </div>
                            <div className="link-col">
                                <p className="link-col-label">Earn Money</p>
                                <a className="footer-link" href="#">
                                    Affiliate
                                </a>
                                <a className="footer-link" href="#">
                                    Become Partner
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
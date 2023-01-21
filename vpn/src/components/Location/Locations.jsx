import React from "react";
import "./Location.css";
import global from "../../images/Huge Global.svg"
import netflix from "../../images/Netflix.svg";
import reddit from "../../images/Reddit.svg";
import amazon from "../../images/Amazon.svg";
import discord from "../../images/Discord.svg";
import zoom from "../../images/Zoom.svg";
import spotify from "../../images/Spotify.svg";

export default function Locations() {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="locations">
                        <div className="section-text locations-text">
                            <h2 className="locations-header sub-heading">
                                Huge Global Network of Fast VPN
                            </h2>
                            <p className="locations-desc sub-desc">
                                You can use <span>VPN</span> everywhere which makes it easier for you when you move locations.
                            </p>
                        </div>
                        <div className="location-points">
                            <img src={global} alt="global" />
                        </div>
                    </div>
                    <div className="brands">
                        <div className="brand-img">
                            <img src={netflix} alt="netflix" />
                        </div>
                        <div className="brand-img">
                            <img src={reddit} alt="reddit" />
                        </div>
                        <div className="brand-img">
                            <img src={amazon} alt="amazon" />
                        </div>
                        <div className="brand-img">
                            <img src={discord} alt="discord" />
                        </div>

                        <div className="brand-img">
                            <img src={zoom} alt="discord" />
                        </div>
                        <div className="brand-img">
                            <img src={spotify} alt="spotify" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
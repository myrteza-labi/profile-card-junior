import React from 'react'; 
import './ProfileBox.css'
import Stats from './Stats'; 
import BgImgTop from '../images/bg-pattern-top.svg'; 
import BgImgBottom from '../images/bg-pattern-bottom.svg'; 

function ProfileBox(props){
    return(
        <div className="profileBox">
            <img alt="image de couleur de fond" src={BgImgTop} className=" bgImgBottom"/>
            <img alt="image de couleur de fond" src={BgImgBottom} className="bgImgTop"/>
            <div className="bgColorProfile"></div>
            <div className="profileMainInfosBox">
                <img src={props.src} alt={props.alt} className="profilePicture"/>
                <h2 className="profileInfos">{props.profileName}
                    <span className="profileAge">
                        {props.profileAge}
                    </span>
                </h2>
                <p className="profileTown">{props.profileTown}</p>
            </div>
            <section className="networkStats">
                <Stats statNumber={'80K'} statName={'Followers'}/>
                <Stats statNumber={'803K'} statName={'Likes'}/>
                <Stats statNumber={'1.4K'} statName={'Photos'}/>
            </section>
        </div>
    )
}

export default ProfileBox; 
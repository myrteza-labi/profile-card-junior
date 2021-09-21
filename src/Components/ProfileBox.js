import React from 'react'; 
import './ProfileBox.css'
import Stats from './Stats'; 

function ProfileBox(props){
    return(
        <div className="profileBox">
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
                <Stats/>
                <Stats/>
                <Stats/>
            </section>
        </div>
    )
}

export default ProfileBox; 
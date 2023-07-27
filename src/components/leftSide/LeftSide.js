import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import './LeftSide.scss';
import CV from '../../assets/Nandhakumar M_Resume.pdf'
const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline ">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am &nbsp;</p>
                    <h1 className="o-font-lg ml-2 o-text-purple"> Nandhakumar M</h1>
                </div>
                <p className="text-center text-white ">I am a Full stack developer. I can provide clean code and pixel perfect design.
                   Also make website more & more interactive with web animations.</p>
                <SocialList margin />
                <div className=" mb-5 justify-content-center d-flex">
                    <a href={CV} className="d-block m-3 text-white o-btn text-center py-2 position-relative" target='_new'>DOWNLOAD CV</a>
                    <a href="/contact" className="d-block m-3 text-white o-btn text-center py-2 position-relative">CONTACT ME</a>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;
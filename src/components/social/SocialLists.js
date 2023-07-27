import React from 'react';
// import { Link } from 'react-router-dom';
import {
    FaTwitter,
    FaReddit,
    FaLinkedinIn, 
    FaGithub,
    FaInstagram
} from 'react-icons/fa';

const SocialItem = ({ url, Icon }) => (
    <li className="m-1">
        <a className="text-white p-2" href={url} target='_new'><Icon /></a>
    </li>
);

class SocialList extends React.Component{

    state = {
        socials: [
            {
                url: 'https://twitter.com/',
                Icon: FaTwitter
            },
            {
                url: 'https://www.reddit.com/',
                Icon: FaReddit
            },
            {
                url: 'https://www.linkedin.com//',
                Icon: FaLinkedinIn
            },
            {
                url: 'https://github.com/',
                Icon: FaGithub
            },
            {
                url: 'https://www.instagram.com/',
                Icon: FaInstagram
            }
        ]
    }

    render(){
        return(
            <ul className={`list-unstyled d-flex ${this.props.margin ? 'mb-5' : ''}`}>
                {
                    this.state.socials.map((item, index) => (
                        <SocialItem key={index} {...item} />
                    ))
                }
            </ul>
        );
    }
}
    
export default SocialList;
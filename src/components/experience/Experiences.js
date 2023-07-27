import React from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const ExperienceItem = ({ time, field, location, description }) => (
    <div className="work__div border-bottom mb-4">
        <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
        <div className="o-title-exp mb-2 d-flex flex-column">
            <strong className="font-weight-normal o-text-purple">{field}</strong>
            <small className="text-muted">{location}</small>
        </div>
        <p style={{textAlign:"justify"}} className="text-justify o-font-sm">{description}</p>
    </div>
);

class Experiences extends React.Component {

    state = {
        experiences: [
            { id: 1, type: 'work', time: '2021 - Present', field: 'Junior Software Engineer', location: 'Firstsource Solutions, Hyderabad, India'
            , description: 'Worked with a Agile development methodology and having experience in Spring boot, React-JS, MySQL, AWS Ec2, S3, Azure DevOps, CI/CD Pipeline, Microsoft PowerApps. I developed various projects with Internal and External clients. Handled Problem solving solutions in backend development. I managed large, complex projects for corporate clients. Carry out quality assurance tests to discover errors and optimize usability.' },
            { id: 2, type: 'work', time: '2020 - 2021', field: 'Full Stack Developer', location: 'Invicious Technologies llb, Coimbatore, India', 
            description: 'I Worked with Hyper app project in mobile and web application. Coordinated with team members as a TEAM LEADER and assigning tasks and planning about project completion. Helping with team members to resolve issue in code and task related queries.' },
            { id: 3, type: 'education', time: '2018 - 2020', field: 'Master of Computer Applications', location: 'HICET, Coimbatore, India', 
            description: 'Graduated with 7.65 GPA' },
            { id: 4, type: 'education', time: '2013 - 2016', field: 'Bachelor of Computer Applications', location: 'HICAS, Coimbatore, India', 
            description: 'Graduated with — 6.43 GPA' },
        ]
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaBriefcase /></i>
                        <span className="font-weight-bold">Work Experience</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'work').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaUniversity /></i>
                        <span className="font-weight-bold">Education</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'education').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Experiences;
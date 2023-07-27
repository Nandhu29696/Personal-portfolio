import React from 'react';

const SkillItem = ({ title, percent }) => (
    <li className="mb-3">
        <strong className="o-font-sm font-weight-normal">{title}</strong>
        <div className="progress">
            <div className="progress-bar o-bg-purple" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </li>
);

class Skills extends React.Component{

    state = {
        skills: [
            {id: 1, title: 'Spring Boot', percent: '80'},
            {id: 2, title: 'React-JS', percent: '80'},
            {id: 3, title: 'My-SQL', percent: '75'},
            {id: 4, title: 'Node-JS', percent: '75'},
            {id: 5, title: 'Azure DevOps', percent: '65'},
            {id: 6, title: 'AWS Ec2', percent: '70'},
            {id: 7, title: 'CI/CD pipeline', percent: '65'},
            {id: 8, title: 'Android', percent: '60'},
        ]
    }

    render(){
        return(
            <>
                <ul className="list-unstyled mb-5 o-grid">
                    {
                        this.state.skills.map(item => (
                            <SkillItem key={item.id} {...item} />
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default Skills;
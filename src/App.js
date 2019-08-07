import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
    // Initialize state
    state = { projects: [] };

    // On load
    componentDidMount() {
        this.getProjects();
    }

    // Set state with our projects
    getProjects = () => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }

    render() {
        const { projects } = this.state;

        return (
            <div className="App">

                <h1 className="name">Hi, my name is Tess!</h1>
                <h3>I'm a developer</h3>

                <h4>Here are a few of my projects</h4>

                {
                    projects.length ? ( //if the projects have a length
                        projects.map((project, index) => (
                            <div className="project" key={project.name}>
                                <p><Button 
                                    variant="contained"
                                    color="primary"
                                    href={project.html_url}>
                                    {project.name}
                                </Button>
                                </p>
                                <p>{project.description}</p>
                            </div>
                        ))
                    ) : ( //else 
                        <div>
                            I don't have any projects
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
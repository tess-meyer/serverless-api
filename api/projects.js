const fetch = require('node-fetch');

const githubRepoUrl = 'https://api.github.com/users/tess-meyer/repos';

module.exports = (req, res) => {

    fetch(githubRepoUrl) //fetch is async
        .then(res => res.json())
        .then(projects => {

            const gitHubProjects = projects.map(project => {
                return {
                    name: project.name,
                    html_url: project.html_url,
                    description: project.description
                }
            });

            res.json(gitHubProjects);    
        });
}

// description section
const createDescription = (title, description, link) => {
    if (link) {
        return `${description}
            
View the deployed page at [${title}](${link}).`;
    } else {
        return `${description}`;
    }
};
// table of contents
const createTableOfContents = contentsArr => {
    // contents list items based on user selection
    let contentsList = '';
    contentsArr.forEach((item) => {

        // indents 'Screenshots' list item
        if (item.content && item.header === 'Screenshots') {
        contentsList += `   * [${item.header}](#${(item.header).toLowerCase()})
`;
        } else if (item.content) {
            contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
        }
    });
    return contentsList;
};
// installation section
const createInstallation = install => {
    if (install) {
        return `To use this application, please install: 
\`\`\`
${install}
\`\`\``
    } else {
        return '';
    }
};
// screenshot section
const createScreenshots = screenshotItem => {
    let allScreenshots = '';
    if (screenshotItem) {
        screenshotItem.forEach(shot => {
        allScreenshots += `![${shot.screenshotAlt}](${shot.screenshotLink})
${shot.screenshotDesc}
`;
    });
    return `${allScreenshots}`;
    } else {
        return '';
    }
};

// built with section
const createBuiltWith = builtWith =>{
    let allTechnologies = '';

    if (builtWith) {
        builtWith.forEach(item => {
            allTechnologies += `
* ${item}`
        });
        return `${allTechnologies}`;
    } else {
        return '';
    };
};

// usage section
const createUsage = (usage, screenshots) => {
    return `${usage} ${createScreenshots(screenshots)}`
};
// license section
const createLicense = license => {
    if (license) {
        return `This application is licensed under the ${license} license.`;
    } else {
        return '';
    }
};
const createTest = test => {
    if (test) {
        return `To run tests on the application, install
\`\`\`
${test}
\`\`\`
and run \`npm run test\` from the command line.`
    } else {
        return '';
    };
};
// questions section
const createQuestions = (email, github, repo) => {
    if (email) {
        return `If you have any questions about the repo, please [open an issue](https://github.com/${github}/${repo}/issues) or contact me via email at ${email}. You can find more of my work on my GitHub, [${github}](https://github.com/${github}/).`
    } else {
        return '';
    }
};
// credits section
const createCredits = creditItem => {
    let allCredits = '';
    if (creditItem) {
        creditItem.forEach((credit) => {
        allCredits += `* [${credit.creditName}](${credit.creditLink})
`;
        });
        return allCredits;
    } else {
        return '';
    }
};
// function to generate markdown for README
function generateMarkdown(data) {
    const { title, github, repo, license } = data;
    let readmeContents = '';
    const sectionArr = [
        {
            header: 'Installation',
            content: createInstallation(data.installation)
        },
        {
            header: 'Usage',
            content: createUsage(data.usage)
        },
        {
            header: 'Screenshots',
            content: createScreenshots(data.screenshots)
        },
        {
            header: 'Built With',
            content: createBuiltWith(data['built with'])
        },
        {
            header: 'License',
            content: createLicense(license)
        },
        {
            header: 'Contributing', 
            content: data.contributing 
        },
        {
            header: 'Tests',
            content: createTest(data.tests)
        },
        {
            header: 'Questions',
            content: createQuestions(data.questions, github, repo)
        },
        {
            header: 'Credits',
            content: createCredits(data.credits)
        },
    ];

    // adds each README section if contents for the section exists
    sectionArr.forEach((sectionItem) => {
        if (sectionItem.content && sectionItem.header === 'Screenshots') {
            readmeContents += `### ${sectionItem.header}
${sectionItem.content}
`
        } else if (sectionItem.content) {
        readmeContents += `## ${sectionItem.header}
${sectionItem.content}
    
`;
        }
    });
    return `# ${title}
[![Issues](https://img.shields.io/github/issues/${github}/${
    repo
  })](https://github.com/${github}/${
    repo
  }/issues) [![Issues](https://img.shields.io/github/contributors/${
    github
  }/${repo})](https://github.com/${github}/${
    repo
  }/graphs/contributors) ${addLicenseBadge(license)}
## Description
${createDescription(title, data.description, data.link)}
## Contents
${createTableOfContents(sectionArr)}
${readmeContents}`;
}
module.exports = generateMarkdown;

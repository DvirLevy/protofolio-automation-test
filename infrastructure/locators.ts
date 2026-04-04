const locatores = {
 heroPage: {
        greetingText : '#greeting',
        name : '#name',
        title : '#professionalTitle',
        description : '#description',
        viewProjectsButton : '#viewProjectsBtn',
        contactMeButton : '#contactMeBtn',
        resumeDownloadButton : '#downloadResumeBtn',
        githubLinkButton : '#githubLink',
        linkedinLinkButton : '#linkedinLink',
        emailLinkButton : '#emailLink',
        automaticCarousel : '#companiesCarousel',
        scrollDownIndicator : '#scrollIndicator'
    },
    projectsComponent:{
        cards: '#project-cards',
        projectsTitle:'#projects-title',
        projectsSubTitle: '#projects-subtitle',
        cardTitle: '.card-title',
        cardDescription: '.card-description',
        cardLink: '.card-link-ref',
        githubLinkButton: '#gitHubLinkProj'       
    },

    footer: {
            footer: '#footer',
            githubLinkButton: '#githubLinkFooter',
            linkedinLinkButton: '#linkedinLinkFooter',
            emailLinkButton: '#emailLinkFooter',
            resumeFooterDownloadButton: '#resumeLinkFooter',
            whatsAppLinkButton: '#whatsAppLinkFooter',
            aboutMe: '#aboutMeFooter',
            aboutMeName: '#aboutMeName',
            aboutMeText: '#aboutMeText',
            quickLink: '#quickLinksFooter',
            quickLinkTitle: '#quickLinksTitle',
            quickLinkAbout: '#aboutMeLink',
            quickLinkProjects: '#projectsLink',
            quickLinkSkills: '#skillsLink',
            quickLinkContact: '#contactLink',
            

    },
    contactUsComponent: {
        fullName: 'input[placeholder="Your name"]',
        email: 'input[placeholder="your.email@example.com"]',
        subject: 'input[placeholder="What would you like to discuss?"]',
        message: 'textarea[placeholder="Tell me about your project..."]',
        submitButton: 'button:has-text("Send Message")',
        validationFullName: 'text=Full Name is required',
        validationEmail: 'text=Email is required',
        validationSubject: 'text=Subject is required',
        validationMessage: 'text=Message is required',
        validationEmailFormat: 'text=Please enter a valid email',
    }
}

export default locatores;
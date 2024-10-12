 const projects = [
        {
            title: "Eventora: Event Management Web App",
            description: "Eventora is a web application that allows users to create events, share unique event links, and manage media uploads. Built with React.js, Firebase, and Node.js, this app provides a seamless way to organize events and share media with attendees. It includes features such as media uploads, event details management, and a user-friendly interface.",
            technologies: ["React.js", "CSS", "Firebase", "Node.js", "MySQL"],
            githubRepo: "https://github.com/Mwantech/event-creator",
            demoLink: "https://joshuas-eventora.netlify.app/",
            image: "assets/img/eventora.jfif"
        },
        {
            title: "AI-Powered Symptom Checker",
            description: "An AI-driven symptom checker that interacts with users to identify potential health issues based on their symptoms. It validates health-related inputs, provides recommendations, and suggests nearby medical centers. The system uses natural language processing and a chatbot interface to deliver accurate responses and ensure user safety.",
            technologies: ["AI", "NLP", "React", "TensorFlow.js", "Python", "Google Maps API"],
            githubRepo: "https://github.com/Mwantech/Symptom-checker",
            demoLink: "https://mysymptom-checker.netlify.app/",
            image: "assets/img/symptom checker.jpeg"
        },
        {
            title: "Real-Time Chat Application",
            description: "A real-time chat application that enables users to send messages instantly using JavaScript, PHP, MySQL, and CSS. The application supports user authentication, live message updates, and an intuitive interface for smooth communication. It offers scalability and efficient database management, ensuring high performance.",
            technologies: ["JavaScript", "PHP", "MySQL", "CSS", "WebSockets"],
            githubRepo: "https://github.com/Mwantech/Real-chat-application",
            demoLink: "#",
            image: "assets/img/chatbg.jpg"
        }
    ];

    let currentProjectIndex = 0;
    const projectContainer = document.querySelector('.project-container');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.project-indicators');

    function createIndicators() {
        projects.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => navigateToProject(index));
            indicatorsContainer.appendChild(indicator);
        });
        updateIndicators();
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentProjectIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function updateNavigationButtons() {
        prevButton.disabled = currentProjectIndex === 0;
        nextButton.disabled = currentProjectIndex === projects.length - 1;
    }

    function updateProjectDisplay() {
        const project = projects[currentProjectIndex];
        document.querySelector('.project-image img').src = project.image;
        document.querySelector('.project-details h2').textContent = project.title;
        document.querySelector('.project-details p').textContent = project.description;
        
        const techContainer = document.querySelector('.technologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techContainer.appendChild(span);
        });

        const demoBtn = document.querySelector('.demo-btn');
        const githubBtn = document.querySelector('.github-btn');
        demoBtn.href = project.demoLink;
        githubBtn.href = project.githubRepo;

        updateIndicators();
        updateNavigationButtons();
    }

    function navigateToProject(index) {
        if (index < 0 || index >= projects.length || index === currentProjectIndex) return;

        projectContainer.classList.add('fade-out');
        
        setTimeout(() => {
            currentProjectIndex = index;
            updateProjectDisplay();
            
            setTimeout(() => {
                projectContainer.classList.remove('fade-out');
            }, 50);
        }, 500);
    }

    function navigateProjects(direction) {
        let newIndex;
        if (direction === 'next' && currentProjectIndex < projects.length - 1) {
            newIndex = currentProjectIndex + 1;
        } else if (direction === 'prev' && currentProjectIndex > 0) {
            newIndex = currentProjectIndex - 1;
        } else {
            return; // Don't navigate if we're at the start or end
        }
        navigateToProject(newIndex);
    }

    // Initialize the display
    createIndicators();
    updateProjectDisplay();
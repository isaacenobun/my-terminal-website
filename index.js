const outputDiv = document.querySelector('.output');
        const inputField = document.getElementById('command-line');
        const prompt = document.querySelector('.blink');
        let isInitialLoad = true;

const responses = {
    'help': `Available Commands: help, clear, aboutme, contact, projects, calculator`,
    'clear': '',
    'aboutme': `I am a Backend Developer with an interest in Machine Learning. I studied Mechanical Engineering at the University of Ibadan, Nigeria. I am Currently learning Cloud computing with on Coursera`,
    'contact': `Are you sure? <button class="button" onclick="confirmAction('Yes')">Yes</button><button class="button" onclick="confirmAction('No')">No</button>`,
    'projects': `Working on these...`,
};

inputField.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const command = inputField.value.toLowerCase();
        inputField.value = '';

        if (isInitialLoad) {
            isInitialLoad = false;
        }

        setTimeout(() => {
            prompt.style.opacity = 0;
            setTimeout(() => {
                prompt.style.opacity = 1;

                if (command.trim() === '') {
                    return;
                }

                let output = '';
                let response = responses[command];

                if (response) {
                    output = `<div class="output">${response}</div>`;
                } else {
                    output = `<div class="output">Unknown command. Type 'help' for available commands.</div>`;
                }

                outputDiv.innerHTML += output;
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, Math.random() * 500 + 50);
        }, Math.random() * 1000 + 500);
    }
});

function confirmAction(choice) {
    if (choice === 'Yes') {
        outputDiv.innerHTML += `<div class="output">Alright, mail me at isaacenobun@gmail.com!</div>`;
    } else {
        outputDiv.innerHTML += `<div class="output">:(</div>`;
    }
}

function openLink(link) {
    window.open(link, '_blank');
}
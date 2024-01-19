const outputDiv = document.querySelector('.output');
        const inputField = document.getElementById('command-line');
        const prompt = document.querySelector('.blink');
        let isInitialLoad = true;

        const responses = {
            'help': `Available Commands: help, clear, aboutme, contact, projects, calculator, website`,
            'clear': '',
            'aboutme': `I'm a passionate developer. Welcome to my portfolio!`,
            'contact': `Are you sure? <button class="button" onclick="confirmAction('Yes')">Yes</button><button class="button" onclick="confirmAction('No')">No</button>`,
            'projects': `1. Hypixel Skyblock MMORPG - Recreation of Skyblock from Hypixel Net<br>2. Ticket Bot - Made for Gamepixel Network, Works like a charm!`,
            'calculator': `Welcome to the calculator! Try commands like 'add 2 3', 'subtract 5 1', 'multiply 4 6', 'divide 8 2'.`,
            'website': `Visit my website at <span class="link" onclick="openLink('https://vexylon.dev')">vexylon.dev</span>`,
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
                outputDiv.innerHTML += `<div class="output">Alright, I gotchu! Just DM me at Discord "vexylon" or mail me at leonotdeo@gmail.com!</div>`;
            } else {
                outputDiv.innerHTML += `<div class="output">:(</div>`;
            }
        }

        function openLink(link) {
            window.open(link, '_blank');
        }
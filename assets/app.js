const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
    help: "Supported commands: <span class=\"code\">about</span>, " +
        "<span class=\"code\">experience</span>, " +
        "<span class=\"code\">education</span>, " +
        "<span class=\"code\">skills</span>, ",
    about: "Hello 👋<br>As the domain suggests, my name is Sushant. I'm web developer currently living in Pune 🇮🇳. " +
        "I graduated from University of Pune. My favorite subjects at university were all the ones related with web development. " +
        "The main reason I am passionate about helping others with code that I create, is that I can leverage my creativity, " +
        "because there are so many ways to achieve the same goal when you code and I like to find the optimal one for each scenario. <br>" +
        "I am a good listener and always ready to help. You can get in touch with me on the networks in sidebar. I'd love to hear from you.",
    skills: "<span class=\"code\">Languages : </span> PHP, JavaScript, Python, HTML<br>\n" +
        "<span class=\"code\">Technologies : </span> Git, Docker, Linux, NGINX, Apache, MySQL<br>\n" +
        "<span class=\"code\">Frameworks : </span> Laravel, CodeIgniter, Bootstrap, jQuery, WordPress<br>\n" +
        "<span class=\"code\">Tools & IDE's: </span> PhpStorm, Notepad++, JIRA, Active Collab, Slack<br>",
    education: "University of Pune<br>&#8618; Master of Computer Application — Emphasis in Web Development <br>" +
        "SRTM University, Nanded<br>&#8618; Bachelor of Computer Application — Emphasis in Computer Programming <br>",
    resume: "<a href='http://pimplesushant.in/SushantPimpleProfile.pdf' class='success link'>SushantPimpleProfile.pdf</a>",
    experience: "Perennial Systems, Pune, 🇮🇳 <br>&#8618; <small>Sr. Associate in Development Track - Since Nov. 2017</small><br>" +
        "Wayzon Technoloy Services Pvt Ltd, Pune, 🇮🇳 <br>&#8618; <small>Sr. PHP Developer - Jul. 2017 - Oct. 2017</small><br>" +
        "Artistize, Pune, 🇮🇳 <br>&#8618; <small>Associate Developer - Mar. 2017 - Jun. 2017</small><br>" +
        "Dynamisch IT Pvt Ltd, Pune, 🇮🇳 <br>&#8618; <small>Software Engineer - Jul. 2013 - Feb. 2017</small><br>" +
        "Creator IT TechSol Pvt Ltd, Pune, 🇮🇳 <br>&#8618; <small>Trainee ​Software Engineer - Jan. 2013 - Jun. 2013</small><br>" +
        "WhatsApp Inc. <br>&#8618; <small>Translator in Marathi - Jul. 2016</small>"
};
let userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById('userInput');
    terminalOutput = document.getElementById('terminalOutput');
    document.getElementById('dummyKeyboard').focus();
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (input == 'clear') {
        output = '';
        terminalOutput.innerHTML = `<div class="terminal-line">${output}</div>`;
    } else if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    } else {
        output += COMMANDS[input];
        terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const key = function keyEvent(e) {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = '';
        return;
    }

    userInput.innerHTML = input + e.key;
}

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
}

document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);

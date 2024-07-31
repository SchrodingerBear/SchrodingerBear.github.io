function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let stacke = [
    ['resources/icons/discord.png', 'Discord'],
    ['resources/icons/figma.png', 'Figma'],
    ['resources/icons/git.png', 'Git'],
    ['resources/icons/npm-logo.png', 'NPM'],
    ['resources/icons/c.png', 'C, C++, C# Language'],
    ['resources/icons/unity.png', 'Unity'],
    ['resources/icons/roblox.png', 'Roblox Studio'],
    ['resources/icons/java.png', 'Java'],
    ['resources/icons/codepen.png', 'Code Pen'],
    ['resources/icons/html-5.png', 'HTML5'],
    ['resources/icons/css-3.png', 'CSS3'],
    ['resources/icons/javascript.png', 'JavaScript'],
    ['resources/icons/php.png', 'PHP'],
    ['resources/icons/mysql.png', 'MySQL'],
    ['resources/icons/sql.png', 'SQL'],
    ['resources/icons/dotnet.png', 'Visual Basic .Net'],
    ['resources/icons/python.png', 'Python'],
    ['resources/icons/visual-studio.png', 'VS Code'],
    ['resources/icons/github.png', 'Github'],
    ['resources/icons/figma.png', 'Figma'],
]

shuffleArray(stacke);

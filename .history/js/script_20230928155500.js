import skillsData from './js/data.js';

const skillsContainer = document.getElementById('skillsContainer');

skillsData.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'col l2 m4 s6';
    skillDiv.style.marginBottom = '3%';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const image = document.createElement('img');
    image.src = skill.imageSrc;
    image.className = 'responsive-img skill_stack';
    image.id = 'skill_icon';

    const paragraph = document.createElement('p');
    paragraph.className = 'center';
    paragraph.style.fontSize = '1rem';
    paragraph.textContent = skill.text;

    imageContainer.appendChild(image);
    imageContainer.appendChild(paragraph);
    skillDiv.appendChild(imageContainer);
    skillsContainer.appendChild(skillDiv);
});

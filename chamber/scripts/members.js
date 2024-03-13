const linksURL = "https://purplealmiraj.github.io/wdd230/chamber/data/members.json";
const memberContainer = document.querySelector('#member-container');
const toggleButton = document.querySelector('#toggleView');

// Initially apply the list-view class to hide the images
memberContainer.classList.add('list-view');

async function getMemberData() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

const displayMembers = (members) => {
    memberContainer.innerHTML = ''; // Clear previous content
    members.forEach((member) => {
        let card = createMemberCard(member);
        memberContainer.appendChild(card);
    }); 
}

function createMemberCard(member) {
    let card = document.createElement('div');
    card.classList.add('member-card');

    let name = document.createElement('h2');
    name.textContent = member.name;

    let address = document.createElement('p');
    address.textContent = `Address: ${member.address}`;

    let phone = document.createElement('p');
    phone.textContent = `Phone: ${member.phone}`;

    let website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Website';

    let image = document.createElement('img');
    image.src = member.image;
    image.alt = member.name;
    image.style.display = 'block'; // Make the image a block element

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);

    return card;
}

toggleButton.addEventListener('click', () => {
    memberContainer.classList.toggle('list-view');
});

getMemberData();

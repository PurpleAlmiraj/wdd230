document.addEventListener("DOMContentLoaded", function() {
    const memberContainer = document.getElementById('member-container');

    // Function to generate member cards
    function generateMemberCards(companies) {
        memberContainer.innerHTML = '';
        companies.forEach(company => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            card.innerHTML = `
                <h2>${company.name}</h2>
                <p>Address: ${company.address}</p>
                <p>Phone: ${company.phone}</p>
                <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
                <p>Membership Level: ${company.membership_level}</p>
                <img src="images/${company.image}" alt="${company.name} Logo">
            `;
            memberContainer.appendChild(card);
        });
    }

    // Function to generate member list
    function generateMemberList(companies) {
        memberContainer.innerHTML = '';
        const list = document.createElement('ul');
        list.classList.add('member-list');
        companies.forEach(company => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h3>${company.name}</h3>
                <p>Address: ${company.address}</p>
                <p>Phone: ${company.phone}</p>
                <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
                <p>Membership Level: ${company.membership_level}</p>
            `;
            list.appendChild(listItem);
        });
        memberContainer.appendChild(list);
    }

    // Fetch JSON data
    fetch("https://purplealmiraj.github.io/wdd230/chamber/data/members.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(companies => {
            generateMemberCards(companies);

            // Toggle between grid and list view
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Grid View';
            toggleButton.addEventListener('click', () => {
                if (toggleButton.textContent === 'Grid View') {
                    generateMemberList(companies);
                    toggleButton.textContent = 'List View';
                } else {
                    generateMemberCards(companies);
                    toggleButton.textContent = 'Grid View';
                }
            });
            document.body.insertBefore(toggleButton, memberContainer);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

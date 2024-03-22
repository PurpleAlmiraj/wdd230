// Function to shuffle an array randomly
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to fetch JSON data from the file
  async function fetchMembersData() {
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching members data:', error);
      return null;
    }
  }
  
  // Function to filter companies with Silver or Gold membership
  function filterMembership(data) {
    if (!data || !data.companies) {
      console.error('Invalid data format');
      return [];
    }
    return data.companies.filter(company => company.membership_level === "Silver" || company.membership_level === "Gold");
  }
  

function displayCompanies(companies) {
    const spotlightContainer = document.getElementById('memberSpotlights');
  
    // Clear existing content
    spotlightContainer.innerHTML = '';
  
    // Loop through the selected companies and create HTML elements to display them
    companies.forEach(company => {
      const companyElement = document.createElement('div');
      companyElement.classList.add('company');
      companyElement.innerHTML = `
        <div id="companyStorage">
          <h3>${company.name}</h3>
          <img src="${company.image}" alt="${company.name}">
          <p>Membership Level: ${company.membership_level}</p>
          <p>${company.other_info}</p>
        </div>
      `;
      spotlightContainer.appendChild(companyElement);
    });
  }
  
  
  // Fetch members data, filter, and display member spotlights
  async function fetchAndDisplay() {
    const data = await fetchMembersData();
    const filteredCompanies = filterMembership(data);
    const shuffledCompanies = shuffle(filteredCompanies);
    const membershipSpotlights = shuffledCompanies.slice(0, 3);
    displayCompanies(membershipSpotlights);
  }
  
  // Call the fetchAndDisplay function to initiate the process
  fetchAndDisplay();
  
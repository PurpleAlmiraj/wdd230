const baseURL = "purplealmiraj.github.io/wdd230/";
const linksURL = "https://purplealmiraj.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

  function displayLinks(weeks) {
    const weeksList = document.getElementById('weeks-list');
  
    weeks.forEach(week => {
      const listItem = document.createElement('li');
      const weekAnchor = document.createElement('a');
      const links = week.links;
  
      weekAnchor.textContent = `Week ${week.week}:`;
  
      links.forEach(link => {
        const linkAnchor = document.createElement('a');
        linkAnchor.href = baseURL + link.url;
        linkAnchor.textContent = link.title;
        const separator = document.createTextNode('|');
        listItem.appendChild(separator);
        listItem.appendChild(linkAnchor);
      });
  
      listItem.insertBefore(weekAnchor, listItem.firstChild);
      weeksList.appendChild(listItem);
    });
  }
  
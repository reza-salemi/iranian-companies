import {companies} from './data.js'

const list = document.getElementById("list");

function showCompanies(companies) {
  list.innerHTML = "";
  companies.forEach((company) => {
    const companyEl = document.createElement("li");
    companyEl.innerHTML = `
           <a href="${company.url}" class="link" target="_blank">
              <figure>
                 <img src="${company.image}" alt="${company.name}">
                  <figcaption>${company.caption}</figcaption>
              </figure>
             </a>
          `;

    list.appendChild(companyEl);
  });
}

showCompanies(companies);

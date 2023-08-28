(async () => {
    const sidebar = document.querySelector("#sidebar-main");
    try {
        let peticion = await fetch(`json/data.json`); // Ruta relativa al archivo JSON
        let res = await peticion.json();
        sidebarInfo = res.sidebar;
        console.log(sidebarInfo);
        for (let i = 1; i < 6; i++) {
            if (i !== 3) {
                sidebar.insertAdjacentHTML('beforeend', /*html*/`
                    <div class="side${i} sidebar-box">
                        ${sidebarInfo[0][`side${i}`].map(value => /*html*/ `
                            <div>
                                <a href="#">
                                    ${value.svg}
                                    ${value.span}
                                </a>
                            </div>
                        `).join('')}
                    </div>`
                );
            } else {
                sidebar.insertAdjacentHTML('beforeend', /*html*/`${sidebarInfo[0].side3.html}`);
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();


console.log("JAJAJAJ")
(async ( ) => {
    const sidebar = document.querySelector("#sidebar-small");
    let peticion = await fetch("data.json");
    let res = await peticion.json();
    sidebarInfo = res.sidebarsmall;
    console.log(sidebarInfo);
    sidebar.insertAdjacentHTML('beforeend', /*html*/`
        ${(sidebarInfo).map(value => /*html*/ `
            <div class="sidebar-small-btn">
                <a href="#">
                    ${value.svg}
                    ${value.span}
                </a>
            </div>
        `).join('')}
    </div>`
    );
}) ( );


(function () {
    const sidebar = document.querySelector("#sidebar");
    const body = document.querySelector("body");
    const clickBackground = document.querySelector("#sidebar-background");
    function adjustSidebar() {
        if (window.innerWidth < 1290) {
            sidebar.style.left = '-400px';
            sidebar.style.top = ''
            sidebar.style.transition = '0.3s ease';
            clickBackground.addEventListener('click', sidebarClose);
            console.log('xd')
            
        } else {
            sidebar.style.left = '0px';
            sidebar.style.transition = '0s';
        }
    }
    adjustSidebar();

    window.addEventListener('resize', adjustSidebar);
})();

function sidebarOpen() {
    if (window.innerWidth < 1290) {
        console.log('smooth')
        const sidebarContainer = document.querySelector("#sidebar-container");
        const sidebar = document.querySelector("#sidebar");
        const background = document.querySelector("#sidebar-background");
        const body = document.querySelector("body");
        const menuHeader = document.querySelector(".menu-header");
        const main = document.querySelector("main");
    
        sidebarContainer.style.zIndex = '300';
        sidebar.style.left = '0px';
        background.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
        background.style.visibility = 'visible';
        background.style.zIndex = '400';
        body.style.overflowY = 'hidden';
        body.style.marginRight = '17px';
        menuHeader.style.marginLeft = '17px';
    } else {
        console.log('pequeño');
        const sidebar = document.querySelector("#sidebar");
        const sidebarsmall = document.querySelector("#sidebar-small");
        const body = document.querySelector('body');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarsmall.classList.toggle('sidebar-hidden');
        body.classList.toggle('fullvw');

    }
}

const menuOpen = document.querySelector("#menu-open");
menuOpen.addEventListener("click", sidebarOpen);

// FUNCION CERRAR SIDEBAR
function sidebarClose() {
    const sidebarContainer = document.querySelector("#sidebar-container");
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    const menuHeader = document.querySelector(".menu-header");
    sidebarContainer.style.zIndex = '-1';
    sidebar.style.left = '-400px';
    background.style.zIndex = '0';
    background.style.visibility = 'hidden';
    body.style.overflowY = 'visible';
    body.style.marginRight = '0';
    menuHeader.style.marginLeft = '0';
}

const menuClose = document.querySelector("#menu-close");
menuClose.addEventListener("click", sidebarClose);

let input = document.querySelector("#searchbox-input")
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement === input) {
        input = input.value;
        window.location.href = "player.html?value="+input;
    }
});

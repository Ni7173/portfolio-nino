function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    })
    links.forEach(link =>
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        })
    );    
}
menuMobile();


const dazzling = () => {
    const service1 = document.querySelector('.service:nth-child(3)');
    const service2 = document.querySelector('.service:nth-child(2)');    
    const service3 = document.querySelector('.service:nth-child(1)');
    const btn = document.querySelector('.services .dark_btn_more');

    enterDetector = () => {
        btn.addEventListener('mouseenter', () => {
            service1.classList.add('dazzled-1');
            service2.classList.add('dazzled-2');
            service3.classList.add('dazzled-3');
    })
    }
    enterDetector();
    
    leaveDetector = () => {
        btn.addEventListener('mouseleave', () => {
           service1.classList.remove('dazzled-1');
            service2.classList.remove('dazzled-2');
            service3.classList.remove('dazzled-3'); 
        })
    }
    leaveDetector();
}
dazzling();


const skillsDiscovery = () => {
    const btn = document.querySelector('.appear_btn');
    // const clicks = btn.addEventListener('click');
    const elements = document.querySelectorAll('.skills_item:nth-last-child(1) > .skills_list > li')

    do {
        console.log('good');
    } while (btn.onClick = true)
}

for (let i = 0; i < 10; i++)
    console.log(i);
skillsDiscovery();
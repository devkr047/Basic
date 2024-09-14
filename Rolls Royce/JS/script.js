const body = document.getElementById('body');
const cursor = document.getElementById('cursor');
const headerContainer=document.getElementById('header-container');
const menuBlock=document.getElementById('menu-block');
const logoBlock=document.getElementById('logo-block');
const searchBlock=document.getElementById('search-block');
const menuContainer = document.getElementById('menu-container');
const logoContainer = document.getElementById('logo-container');
const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');
const searchContainer = document.getElementById('search-container');
const sidebarContainer = document.getElementById('sidebar-container');
let sidebarContent = document.querySelectorAll('.sidebar-content');
let sidebarContentLink = document.querySelectorAll('.sidebar-content-link');
const glass = document.getElementById('glass');
const slider1Video=document.getElementById('slider1-video');
const discoverBtn1 = document.getElementById('discover-btn-1');
const discoverBtn2 = document.getElementById('discover-btn-2');
const card=document.querySelectorAll('.card');
const footerLink=document.querySelectorAll('.footer-links');
const footer = document.getElementById('footer');
const menuTitle=document.getElementById('menu-title');
const companyLogo=document.getElementById('company-logo');
const logo=document.querySelectorAll('.logo');
let scrollPosition;
let topPosition=0;



glass.addEventListener('click',function(){
    sidebarContent.forEach(content => {
        content.classList.remove('active');
        content.classList.add('inactive');
        body.style.overflowY='scroll';
        slider1.classList.toggle('inactive');
        slider1.classList.toggle('active');
        slider2.classList.toggle('inactive');
        slider2.classList.toggle('active');
    });
    sidebarContainer.classList.remove('active');
    sidebarContainer.classList.add('inactive');
    glass.classList.add('inactive');
    glass.classList.remove('active');
    setTimeout(() => {
        menuContainer.classList.remove('active');
        menuContainer.classList.add('inactive');
    }, 2000);
    setTimeout(() => {
        menuContainer.classList.remove('inactive');
    }, 2500);
})

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

function scaleUpCursor() {
    cursor.style.transform = 'scale(2.2)';
    cursor.style.borderWidth = '1px';
    body.style.cursor = 'none';
}

function scaleDownCursor() {
    cursor.style.transform = 'scale(1)';
    cursor.style.borderWidth = '1.5px';
    body.style.cursor = 'none';
}

menuContainer.addEventListener('mouseover', scaleUpCursor);

menuContainer.addEventListener('mouseout', scaleDownCursor);

logoContainer.addEventListener('mouseover', scaleUpCursor);

logoContainer.addEventListener('mouseout', scaleDownCursor);

searchContainer.addEventListener('mouseover', scaleUpCursor);

searchContainer.addEventListener('mouseout', scaleDownCursor);

sidebarContentLink.forEach(contentLink => {
    contentLink.addEventListener('mouseover', scaleUpCursor)
});

sidebarContentLink.forEach(contentLink => {
    contentLink.addEventListener('mouseout', scaleDownCursor)
});

footerLink.forEach(footerContentLink => {
    footerContentLink.addEventListener('mouseover', scaleUpCursor)
});

footerLink.forEach(footerContentLink => {
    footerContentLink.addEventListener('mouseout', scaleDownCursor)
});

discoverBtn1.addEventListener('mouseover', scaleUpCursor);

discoverBtn1.addEventListener('mouseout', scaleDownCursor);

discoverBtn2.addEventListener('mouseover', scaleUpCursor);

discoverBtn2.addEventListener('mouseout', scaleDownCursor);

companyLogo.addEventListener('mouseover', scaleUpCursor);

companyLogo.addEventListener('mouseout', scaleDownCursor);

card.forEach(card => {
    card.addEventListener('mouseover', scaleUpCursor)
});

card.forEach(card => {
    card.addEventListener('mouseout', scaleDownCursor)
});

logo.forEach(socialMedia => {
    socialMedia.addEventListener('mouseover', scaleUpCursor)
});

logo.forEach(socialMedia => {
    socialMedia.addEventListener('mouseout', scaleDownCursor)
});

window.addEventListener('load',function(){
    slider1.classList.add('load');
    slider1.classList.add('active');
    if(window.scrollY !=0 ){
    window.scrollTo({top: 0, behavior: 'smooth'});
    changeHeaderStyle();}
    setInterval(() => {
        slider1Video.style.display='block';
    }, 800);
    slider1VideoControl();
    
});

menuContainer.addEventListener('mouseover', function () {
    menuTitle.style.opacity='0.7';
});

menuContainer.addEventListener('mouseout', function () {
    menuTitle.style.opacity='1';
});

menuContainer.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        setTimeout(() => {
            this.classList.remove('active');
            this.classList.add('inactive');
            menuTitle.style.opacity='0.7';
        }, 2000);
        this.addEventListener('mouseout', function () {
            this.classList.remove('inactive');
            menuTitle.style.opacity='1';
        })
        body.style.overflowY = 'scroll';
        sidebarContainer.classList.remove('active');
        sidebarContainer.classList.add('inactive');
        setTimeout(() => {
            sidebarContainer.classList.remove('inactive');
        }, 2000);
        sidebarContent.forEach(content => {
            content.classList.remove('active');
            content.classList.add('inactive');
        });
        glass.classList.remove('active');
        glass.classList.add('inactive');
        slider1.classList.toggle('active');
        slider1.classList.toggle('inactive');
        slider2.classList.toggle('active');
        slider2.classList.toggle('inactive');
    }
    else {
        menuTitle.style.opacity='0';
        this.classList.add('active');
        this.classList.remove('inactive');
        body.style.overflowY = 'hidden';
        sidebarContainer.classList.add('active');
        sidebarContainer.classList.remove('inactive');
        sidebarContent.forEach(content => {
            content.classList.add('active');
            content.classList.remove('inactive');
        });
        glass.classList.add('active');
        glass.classList.remove('inactive');
        slider1.classList.toggle('inactive');
        slider1.classList.toggle('active');
        slider2.classList.toggle('inactive');
        slider2.classList.toggle('active');
    }
});



document.addEventListener('scroll', function () {
    console.log(scrollPosition);
    scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if(scrollPosition < 100){
        slider1.classList.add('active');
        slider1.classList.remove('inactive');
        slider2.classList.remove('active');
        slider2.classList.add('inactive');
    }
    else if(scrollPosition < 590 && scrollPosition > 101){
        slider1.classList.remove('load');
        slider1.classList.remove('active');
        slider1.classList.add('inactive');
        slider2.classList.add('active');
        slider2.classList.remove('inactive');
    }
    else if(scrollPosition < 600){
        slider2.classList.remove('active');
    }
    if(scrollPosition > topPosition && slider1.classList.contains('active')){
        window.scrollTo({top: 589.3525390625, behavior: 'smooth'});
    }
    else if(scrollPosition < topPosition && slider2.classList.contains('active')){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    topPosition = scrollPosition;
    /*slider1VideoControl();*/
    changeHeaderStyle();
});

function changeHeaderStyle(){
    if(scrollPosition == 0){
        headerContainer.style.height='20vh';
        menuBlock.style.paddingBlockStart='10vh';
        logoBlock.style.height='20vh';
        searchBlock.style.height='20vh';
        headerContainer.style.borderBottom='1.5px solid hsla(0, 0%, 87%, 0.5)';
        headerContainer.style.backgroundColor='transparent';
        headerContainer.style.backdropFilter='blur(0px)';
        logo1.style.display='block';
        logo2.style.display='none';
    }
    else{
        headerContainer.style.height='10vh';
        menuBlock.style.paddingBlockStart='0vh';
        logoBlock.style.height='10vh';
        searchBlock.style.height='10vh';
        headerContainer.style.borderBottom='transparent';
        headerContainer.style.backgroundColor='inherit';
        headerContainer.style.backdropFilter='blur(50px)';
        logo1.style.display='none';
        logo2.style.display='block';
    }
};

function slider1VideoControl(){
    if(slider1.classList.contains('load')){
        slider1Video.currentTime=0;
        slider1Video.play();
        slider1Video.removeEventListener('ended',function(){
            console.log('Hello');
        });
        slider1Video.addEventListener('ended', function(){
        window.scrollTo({top: 589.3, behavior: 'smooth'});
        });
    }
    else if(!slider1.classList.contains('load')){
        slider1Video.currentTime=0;
        slider1Video.play();
        slider1Video.removeEventListener('ended',function(){
            console.log('Hello');
        });
        slider1Video.addEventListener('ended', function(){
            slider1Video.currentTime=0;
            slider1Video.play();

        });
    }
}
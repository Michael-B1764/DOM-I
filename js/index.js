const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV LINKS //
let navItems = Array.from(document.querySelectorAll("nav > a"));
for (let i = 0; i< navItems.length; i++){
  navItems[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`];
}


// CTA //
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent.cta.button;

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];


// TOP CONTENT //
let topContentHeader1 = document.querySelector(".top-content .text-content:nth-child(1) h4");
topContentHeader1.innerHTML = siteContent["main-content"]["features-h4"];
let topContent1 = document.querySelector(".top-content .text-content:nth-child(1) p");
topContent1.innerHTML = siteContent["main-content"]["features-content"];


let topContentHeader2 = document.querySelector(".top-content .text-content:nth-child(2) h4");
topContentHeader2.innerHTML = siteContent["main-content"]["about-h4"];
let topContent2 = document.querySelector(".top-content .text-content:nth-child(2) p");
topContent2.innerHTML = siteContent["main-content"]["features-content"];


//MIDDLE IMG//
let mainContentImg = document.querySelector("#middle-img");
mainContentImg.src = siteContent["main-content"]["middle-img-src"];


// BOTTOM CONTENT //
let bottomContentHeader1 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
bottomContentHeader1.innerHTML = siteContent["main-content"]["services-h4"];
let bottomContent1 = document.querySelector(".bottom-content .text-content:nth-child(1) p");
bottomContent1.innerHTML = siteContent["main-content"]["services-content"];


let bottomContentHeader2 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
bottomContentHeader2.innerHTML = siteContent["main-content"]["product-h4"];
let bottomContent2 = document.querySelector(".bottom-content .text-content:nth-child(2) p");
bottomContent2.innerHTML = siteContent["main-content"]["product-content"];


let bottomContentHeader3 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
bottomContentHeader3.innerHTML = siteContent["main-content"]["vision-h4"];
let bottomContent3 = document.querySelector(".bottom-content .text-content:nth-child(3) p");
bottomContent3.innerHTML = siteContent["main-content"]["vision-content"];

// CONTACT //
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent.contact["contact-h4"];

let contactInfo = Array.from(document.querySelectorAll(".contact > p"));
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;

let contactSection = document.querySelector(".contact");
contactSection.setAttribute("style", "width:20%;");

let copyright = document.querySelector("footer > p");
copyright.innerHTML = siteContent.footer.copyright;



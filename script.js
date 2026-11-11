const WHATSAPP_NUMBER = "917687050082";
const services = [
 {icon:"▣",title:"PVC Card Printing",desc:"Aadhaar, Voter, Ration, PAN, Driving Licence, RC ও অন্যান্য কার্ড প্রিন্টিং সহায়তা।"},
 {icon:"⌨",title:"Online Form Fill-up",desc:"বিভিন্ন অনলাইন আবেদন ও ফর্ম পূরণের পরিষেবা।"},
 {icon:"▤",title:"Banking & Bill Payment",desc:"উপলব্ধ পরিষেবা অনুযায়ী ব্যাংকিং সহায়তা ও বিল পেমেন্ট।"},
 {icon:"▧",title:"Mobile & DTH Recharge",desc:"বিভিন্ন অপারেটরের Mobile এবং DTH Recharge।"},
 {icon:"✧",title:"Banner & Design Order",desc:"দোকান, অনুষ্ঠান ও প্রচারের জন্য কাস্টম ব্যানার ডিজাইন।"},
 {icon:"◎",title:"Customer Support",desc:"পরিষেবা, মূল্য ও প্রয়োজনীয় কাগজপত্র সম্পর্কে তথ্য।"}
];
document.getElementById("serviceGrid").innerHTML=services.map(x=>`<article class="service-card"><div class="service-icon">${x.icon}</div><h3>${x.title}</h3><p>${x.desc}</p></article>`).join("");
const wa=document.getElementById("whatsappLink");
wa.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("নমস্কার, Sahanara Online Service & Telecom-এর পরিষেবা সম্পর্কে জানতে চাই।")}`;
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));

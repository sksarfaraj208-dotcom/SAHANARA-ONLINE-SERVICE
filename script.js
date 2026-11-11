// Sahanara website settings
// WhatsApp number must be in international format without + or spaces.
const WHATSAPP_NUMBER = "917687050082";

// You can edit these service cards and their descriptions.
const services = [
  {icon:"▣", title:"PVC Card Printing", desc:"Aadhaar, Voter, Ration, PAN, Driving Licence, RC এবং অন্যান্য কার্ড প্রিন্টিং সংক্রান্ত সহায়তা।"},
  {icon:"⌨", title:"Online Form Fill-up", desc:"বিভিন্ন অনলাইন আবেদন ও ফর্ম পূরণের পরিষেবা।"},
  {icon:"▤", title:"Banking & Bill Payment", desc:"উপলব্ধ পরিষেবা অনুযায়ী ব্যাংকিং সহায়তা ও বিল পেমেন্ট।"},
  {icon:"▧", title:"Mobile & DTH Recharge", desc:"বিভিন্ন অপারেটরের Mobile এবং DTH Recharge।"},
  {icon:"✧", title:"Banner & Design Order", desc:"দোকান, অনুষ্ঠান ও প্রচারের জন্য কাস্টম ব্যানার ডিজাইন অর্ডার।"},
  {icon:"◎", title:"Customer Support", desc:"পরিষেবা, মূল্য ও প্রয়োজনীয় কাগজপত্র সম্পর্কে তথ্য জানতে যোগাযোগ করুন।"}
];

const grid = document.getElementById("serviceGrid");
grid.innerHTML = services.map(item => `
  <article class="service-card">
    <div class="service-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  </article>
`).join("");

const wa = document.getElementById("whatsappLink");
const message = encodeURIComponent("নমস্কার, Sahanara Online Service & Telecom-এর পরিষেবা সম্পর্কে জানতে চাই।");
wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"));
});

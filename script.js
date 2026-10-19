Const WHATSAPP='201130102500';
let currentLang='ar';
const products = [
  // ================= 🟨 الرخام المصري =================
  {
    id: 'sunny-menia',
    discount: true,
    ar: 'رخام صني منيا',
    en: 'Sunny Menia Marble',
    img: 'sunny-menia.jpg',
    arDesc: 'رخام مصري بيج دافئ من أشهر الخامات المطلوبة في الأرضيات والحوائط والسلالم، يتميز بدرجاته الهادئة وقابليته للتشطيب بأكثر من شكل.',
    enDesc: 'A warm beige Egyptian marble, highly popular for floors, walls and stairs with flexible finishes.'
  },
  {
    id: 'silvia',
    ar: 'رخام سيلفيا',
    en: 'Silvia Marble',
    img: 'silvia.jpg',
    arDesc: 'رخام مصري بعروق طبيعية ناعمة وملمس فاخر، مناسب للأرضيات والحوائط وأسطح الاستقبال والمشاريع التي تحتاج لمظهر دافئ.',
    enDesc: 'Egyptian marble with soft natural veins and refined texture, suitable for floors and reception counters.'
  },
  {
    id: 'triesta',
    ar: 'رخام تريستا',
    en: 'Triesta Marble',
    img: 'triesta.jpg',
    arDesc: 'خامة رخامية بيج هادئة ومقاومة، تضيف لمسة طبيعية للمساحات الداخلية والتكسيات الخارجية.',
    enDesc: 'Calm beige marble with distinctive veins, adding a natural luxury touch to interiors and exterior cladding.'
  },
  {
    id: 'galala',
    ar: 'رخام جلالة',
    en: 'Galala Marble',
    img: 'galala.jpg',
    arDesc: 'رخام مصري بلون كريمي فاتح ومظهر كلاسيكي راقٍ، من أشهر الخامات المعتمدة للمشاريع السكنية والتجارية والتصدير.',
    enDesc: 'Light creamy Egyptian marble with a classic elegant look, ideal for residential and commercial export projects.'
  },
  {
    id: 'zaafarana',
    ar: 'رخام زعفرانة',
    en: 'Zaafarana Marble',
    img: 'zaafarana.jpg',
    arDesc: 'يتميز بتجذيعاته الوردي والكريمة الفاخرة، يمنح المساحات والديكورات لمسة جمالية فريدة.',
    enDesc: 'Features luxurious pink and cream veins, giving spaces and decorations a unique aesthetic touch.'
  },

  // ================= 🟩 الجرانيت المصري =================
  {
    id: 'halaib',
    ar: 'جرانيت حلايب',
    en: 'Halaib Granite',
    img: 'halaib.jpg',
    arDesc: 'جرانيت أبيض بنقط داكنة منتظمة، يمتاز بصلابة عالية ومقاومة فائقة، مثالي للطرقات والواجهات والدرج.',
    enDesc: 'White granite with uniform dark spots, known for high durability, ideal for floors, facades and stairs.'
  },
  {
    id: 'new-halaib',
    ar: 'جرانيت نيو حلايب',
    en: 'New Halaib Granite',
    img: 'new-halaib.jpg',
    arDesc: 'جرانيت مصري عملي بامتياز للأرضيات والمشاريع ذات الاستخدام الكثيف والمساحات الواسعة.',
    enDesc: 'Practical Egyptian granite perfect for heavy-use flooring, projects and large areas.'
  },
  {
    id: 'gandola',
    ar: 'جرانيت جندولا',
    en: 'Gandola Granite',
    img: 'gandola.jpg',
    arDesc: 'جرانيت رمادي مموج بصلابة فائقة ومظهر فخم، مناسب جداً للمطابخ والدرج والديكورات.',
    enDesc: 'Wavy grey granite with superior hardness and luxury look, excellent for kitchens, stairs and decor.'
  },
  {
    id: 'aswan-black',
    ar: 'جرانيت أسواني أسود',
    en: 'Aswan Black Granite',
    img: 'aswan-black.jpg',
    arDesc: 'جرانيت ناري أسود فاخر، أصلب الأنواع وأكثرها ملاءمة للمطابخ والمداخل الرئيسية والمشاريع الراقية.',
    enDesc: 'Premium black igneous granite, extremely durable and perfect for kitchens, main entrances and luxury projects.'
  },
  {
    id: 'aswan-red',
    ar: 'جرانيت أحمر أسواني',
    en: 'Aswan Red Granite',
    img: 'aswan-red.jpg',
    arDesc: 'اللون الأحمر الأصيل والمعروف تاريخياً بقوة تحمله وحضوره القوي في المشاريع الكبرى والواجهات.',
    enDesc: 'Authentic red granite historically known for extreme strength and strong presence in major projects.'
  },
  {
    id: 'verdi',
    ar: 'جرانيت فيردي',
    en: 'Verdi Granite',
    img: 'verdi.jpg',
    arDesc: 'يتوفر بالدرجات الخضراء والصفراء المميزة لإضفاء حيوية وتميز على الواجهات والتصميمات الحديثة.',
    enDesc: 'Available in distinctive green and yellow tones to add vitality to modern facades and designs.'
  },
  {
    id: 'grey-company',
    ar: 'جرانيت رمادي شركة',
    en: 'Grey Company Granite',
    img: 'grey-company.jpg',
    arDesc: 'خامة رمادية عملية واقتصادية جداً للتوريدات الكبيرة والمشاريع العامة والأرضيات.',
    enDesc: 'Practical and economic grey granite, highly suitable for large supply orders, public projects and paving.'
  },
  {
    id: 'rosa',
    ar: 'جرانيت روزا',
    en: 'Rosa Granite',
    img: 'rosa.jpg',
    arDesc: 'جرانيت بدرجات الوردي الناعمة المتميزة، مناسب للواجهات والأرضيات الداخلية والخارجية.',
    enDesc: 'Granite with refined soft pink tones, ideal for facades and indoor/outdoor flooring.'
  }
];

const grid=document.getElementById('productsGrid');
function t(ar,en){return currentLang==='ar'?ar:en}
function renderProducts(){grid.innerHTML='';products.forEach(p=>{const card=document.createElement('article');card.className='product-card reveal '+(p.discount?'discount':'');card.innerHTML=`<span class="discount-badge">${t('يوجد خصم','Discount Available')}</span><img src="${p.img}" alt="${t(p.ar,p.en)}"><div class="product-info"><h3>${t(p.ar,p.en)}</h3><p>${t(p.arDesc,p.enDesc).slice(0,125)}...</p><button class="primary-btn mini-buy">${t('شراء عبر واتساب','Order on WhatsApp')}</button></div>`;card.addEventListener('click',e=>{if(e.target.classList.contains('mini-buy')){openWhatsAppProduct(p);return}openProductModal(p)});grid.appendChild(card)});observeReveal()}
const productModal=document.getElementById('productModal'),modalImage=document.getElementById('modalImage'),modalTitle=document.getElementById('modalTitle'),modalDesc=document.getElementById('modalDesc'),modalDiscount=document.getElementById('modalDiscount'),modalBuy=document.getElementById('modalBuy');
let activeProduct=null;
function openProductModal(p){activeProduct=p;modalImage.src=p.img;modalTitle.textContent=t(p.ar,p.en);modalDesc.textContent=t(p.arDesc,p.enDesc);modalDiscount.classList.toggle('show',!!p.discount);productModal.classList.add('active');productModal.setAttribute('aria-hidden','false')}
function closeProductModal(){productModal.classList.remove('active');productModal.setAttribute('aria-hidden','true')}
function openWhatsAppProduct(p){const msg=currentLang==='ar'?`مرحباً، أريد شراء / الاستفسار عن منتج: ${p.ar}`:`Hello, I want to order/inquire about: ${p.en}`;window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,'_blank')}
modalBuy.addEventListener('click',()=>{if(activeProduct)openWhatsAppProduct(activeProduct)});
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeProductModal));
const quoteModal=document.getElementById('quoteModal');document.querySelectorAll('[data-open-quote]').forEach(btn=>btn.addEventListener('click',()=>{quoteModal.classList.add('active');quoteModal.setAttribute('aria-hidden','false')}));document.querySelectorAll('[data-close-quote]').forEach(btn=>btn.addEventListener('click',()=>{quoteModal.classList.remove('active');quoteModal.setAttribute('aria-hidden','true')}));
document.getElementById('quoteForm').addEventListener('submit',e=>{
e.preventDefault();

const d=new FormData(e.target);

const msg=currentLang==='ar'
?`طلب خاص من موقع الصرح

الاسم: ${d.get('name')}

رقم الهاتف: ${d.get('phone')}

الدولة: ${d.get('country')}

البريد الإلكتروني: ${d.get('email')||'غير مذكور'}

المنتج المطلوب: ${d.get('product')}

الكمية المطلوبة: ${d.get('quantity')}

مقاس اللوح أو السماكة: ${d.get('size')||'غير مذكور'}

تفاصيل الطلب:
${d.get('notes')||'لا يوجد'}`
:
`Special Request From Al Sarh Website

Name: ${d.get('name')}

Phone: ${d.get('phone')}

Country: ${d.get('country')}

Email: ${d.get('email')||'Not provided'}

Required Product: ${d.get('product')}

Required Quantity: ${d.get('quantity')}

Size / Thickness: ${d.get('size')||'Not provided'}

Order Details:
${d.get('notes')||'None'}`;

window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,'_blank');
});
function setLang(lang){currentLang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.getElementById('langToggle').textContent=lang==='ar'?'EN':'AR';document.querySelectorAll('[data-ar]').forEach(el=>{el.textContent=lang==='ar'?el.dataset.ar:el.dataset.en});document.querySelectorAll('[data-ar-placeholder]').forEach(el=>{el.placeholder=lang==='ar'?el.dataset.arPlaceholder:el.dataset.enPlaceholder});renderProducts();}
document.getElementById('langToggle').addEventListener('click',()=>setLang(currentLang==='ar'?'en':'ar'));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('active'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('active')));
function animateCounts(){document.querySelectorAll('[data-count]').forEach(el=>{if(el.dataset.done)return;const end=+el.dataset.count;let current=0;const step=Math.max(1,Math.floor(end/60));const timer=setInterval(()=>{current+=step;if(current>=end){current=end;clearInterval(timer);el.dataset.done='1'}el.textContent=current.toLocaleString(currentLang==='ar'?'ar-EG':'en-US')},24)})}
function animateBars(){document.querySelectorAll('.client-row').forEach(row=>{if(row.dataset.done)return;const span=row.querySelector('.bar span');span.style.width=row.dataset.percent+'%';row.dataset.done='1'})}
let observer;function observeReveal(){if(observer)observer.disconnect();observer=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');if(en.target.classList.contains('stats-grid')||en.target.closest('.stats'))animateCounts();if(en.target.classList.contains('client-bars')||en.target.closest('.clients'))animateBars();}})},{threshold:.18});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',scrollY>30)});
renderProducts();setLang('ar');observeReveal();

// ==========================================
// 🚀 Exit Intent Popup Logic (برمجة نافذة الخروج)
// ==========================================
let popupShown = false;

function showExitPopup() {
    const exitPopup = document.getElementById('exitPopup');
    if (exitPopup && !popupShown && !sessionStorage.getItem('exitPopupSeen')) {
        exitPopup.style.display = 'flex';
        popupShown = true;
        sessionStorage.setItem('exitPopupSeen', 'true');
    }
}

function closeExitPopup() {
    const exitPopup = document.getElementById('exitPopup');
    if (exitPopup) {
        exitPopup.style.display = 'none';
    }
}

// 1. رصد تحرك الماوس لأعلى الشاشة لنية الخروج (الكمبيوتر)
document.addEventListener('mouseleave', function(e) {
    if (e.clientY < 0) {
        showExitPopup();
    }
});

// 2. رصد محاولة العودة للخلف (الموبايل)
window.addEventListener('popstate', function() {
    showExitPopup();
});

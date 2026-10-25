const catalog = {
  aurelius:{name:'Aurelius Gold',cat:'classic',sub:'کلاسیک · بند طلایی',price:18900000,tag:'BESTSELLER',alt:'ساعت کلاسیک طلایی با بند فلزی',art:{casing:['#f1dfae', '#b89455', '#6e5528'],dial:['#2a2218','#0f0c08'],accent:'#e6cf93',strapColor:'#4a2e1c',strap:'leather'}},
  onyx:{name:'Onyx Midnight',cat:'modern',sub:'مدرن · کرونوگراف مشکی',price:22500000,tag:'NEW ARRIVAL',alt:'ساعت مدرن مشکی',art:{casing:['#4a4f55', '#23262a', '#0d0e10'],dial:['#17181b','#050506'],accent:'#d9d9d9',strapColor:'#18191c',strap:'bracelet'}},
  celeste:{name:'Celeste Champagne',cat:'classic',sub:'کلاسیک · بند چرمی',price:16700000,alt:'ساعت کلاسیک با صفحه شامپاینی و بند چرمی',art:{casing:['#f1dfae', '#b89455', '#6e5528'],dial:['#f4e8cc','#cdb88a'],accent:'#6b5530',strapColor:'#7a5a3a',strap:'leather'}},
  atlas:{name:'Atlas Active',cat:'sport',sub:'اسپرت · نمایشگر دیجیتال',price:25800000,tag:'LIMITED',alt:'ساعت اسپرت دیجیتال',art:{casing:['#e9ecef', '#9aa1a8', '#4b5057'],dial:['#1f3b5c','#0b1626'],accent:'#f2f2f2',strapColor:'#b9bfc6',strap:'bracelet',sub:1,bezel:'#c7a96a'}},
  solstice:{name:'Solstice Silver',cat:'modern',sub:'مدرن · بند استیل',price:19400000,alt:'ساعت مدرن با بند استیل نقره‌ای',art:{casing:['#e9ecef', '#9aa1a8', '#4b5057'],dial:['#f2f3f4','#c9cdd1'],accent:'#23262a',strapColor:'#aab0b7',strap:'bracelet'}},
  monarch:{name:'Monarch Trail',cat:'sport',sub:'اسپرت · مقاوم و دقیق',price:27200000,alt:'ساعت اسپرت برای فضای باز',art:{casing:['#4a4f55', '#23262a', '#0d0e10'],dial:['#0d2a3a','#04121b'],accent:'#eaf4f7',strapColor:'#10171c',strap:'rubber',bezel:'#e1ca91'}},
  verdant:{name:'Nocturne Skeleton',cat:'classic',sub:'کلاسیک · اسکلتون',price:21300000,tag:'NEW ARRIVAL',alt:'ساعت اسکلتون کلاسیک با بند چرمی مشکی',art:{casing:['#f1dfae', '#b89455', '#6e5528'],dial:['#2f5a46','#0f261c'],accent:'#e6cf93',strapColor:'#2b1d14',strap:'leather'}},
  eclipse:{name:'Eclipse White',cat:'modern',sub:'مدرن · بند سفید',price:34600000,tag:'LIMITED',alt:'ساعت مدرن با بند سفید',art:{casing:['#4a4f55', '#23262a', '#0d0e10'],dial:['#202327','#08090a'],accent:'#c7a96a',strapColor:'#121315',strap:'rubber',skel:1}},
  regent:{name:'Regent Classic',cat:'classic',sub:'کلاسیک · بند قهوه‌ای',price:23800000,alt:'ساعت کلاسیک با بند چرمی قهوه‌ای',art:{casing:['#f3cdb8', '#c58b6a', '#7a4a33'],dial:['#fbf6f0','#e3d3c4'],accent:'#7a4a33',strapColor:'#d9c3b3',strap:'leather'}},
  voyager:{name:'Voyager Sport',cat:'sport',sub:'اسپرت · بند سیلیکونی',price:29900000,alt:'ساعت اسپرت گرد',art:{casing:['#e9ecef', '#9aa1a8', '#4b5057'],dial:['#1c1f24','#07080a'],accent:'#f2f2f2',strapColor:'#b9bfc6',strap:'bracelet',bezel:'#2d6cdf',second:'#e3a008'}},
  phantom:{name:'Phantom Black',cat:'modern',sub:'مدرن · بند سیلیکونی',price:31200000,alt:'ساعت مدرن مشکی با بند سیلیکونی',art:{casing:['#4a4f55', '#23262a', '#0d0e10'],dial:['#101113','#000'],accent:'#8f8f8f',strapColor:'#0c0c0d',strap:'rubber'}},
  tidal:{name:'Tidal Run',cat:'sport',sub:'اسپرت · مخصوص دویدن',price:24500000,tag:'NEW ARRIVAL',alt:'ساعت اسپرت مخصوص دویدن',art:{casing:['#e9ecef', '#9aa1a8', '#4b5057'],dial:['#e8782a','#a8460f'],accent:'#fff',strapColor:'#16181b',strap:'rubber',bezel:'#16181b'}}
};
const photos={aurelius:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=85',onyx:'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=85',celeste:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=85',atlas:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=85',solstice:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=85',monarch:'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&q=85'};
const products = {};
Object.entries(catalog).forEach(([id,p])=>{products[id]={name:p.name,price:p.price,image:`images/${id}.jpg`,svg:watchURI(p.art)}});
const faN=n=>new Intl.NumberFormat('fa-IR').format(n);
document.getElementById('productGrid').innerHTML=Object.entries(catalog).map(([id,p])=>`<article class="product-card reveal" data-category="${p.cat}" data-price="${p.price}" data-name="${(p.name+' '+p.cat).toLowerCase()}"><div class="product-image"><img class="art" src="images/${id}.jpg" alt="${p.alt}" loading="lazy" width="400" height="500">${p.tag?`<span class="product-tag">${p.tag}</span>`:''}<button class="wishlist" aria-label="افزودن به علاقه‌مندی‌ها">♡</button><button class="quick-add" data-id="${id}">افزودن به سبد <span>＋</span></button></div><div class="product-meta"><div><h3>${p.name}</h3><p>${p.sub}</p></div><strong>${faN(p.price)} <small>تومان</small></strong></div></article>`).join('');
// Real photo priority: images/<id>.jpg (your own) -> stock photo -> SVG render
document.querySelectorAll('#productGrid img.art').forEach(img=>{const id=img.closest('.product-card').querySelector('.quick-add').dataset.id;const chain=[photos[id]&&photos[id]+'&w=900',products[id].svg].filter(Boolean);img.addEventListener('error',function f(){const n=chain.shift();if(n)img.src=n;else img.removeEventListener('error',f)})});
const cart = new Map();
const faNumber = n => new Intl.NumberFormat('fa-IR').format(n);
const money = n => `${faNumber(n)} تومان`;
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}

// Scroll reveal: IntersectionObserver keeps animations smooth and lightweight.
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  revealEls.forEach(el=>observer.observe(el));
}else revealEls.forEach(el=>el.classList.add('is-visible'));

// Mobile navigation
const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open))});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

// Search panel and live filtering
const searchPanel=document.querySelector('.search-panel');
const searchInput=document.getElementById('searchInput');
document.querySelector('.search-toggle').addEventListener('click',()=>{searchPanel.classList.toggle('open');searchPanel.setAttribute('aria-hidden',String(!searchPanel.classList.contains('open')));if(searchPanel.classList.contains('open'))searchInput.focus()});
document.querySelector('.search-close').addEventListener('click',()=>{searchPanel.classList.remove('open');searchPanel.setAttribute('aria-hidden','true');searchInput.value='';applyFilters()});
let activeFilter='all';
function applyFilters(){const q=searchInput.value.trim().toLowerCase();let count=0;document.querySelectorAll('.product-card').forEach(card=>{const categoryOk=activeFilter==='all'||card.dataset.category===activeFilter;const searchOk=!q||card.dataset.name.includes(q)||card.querySelector('h3').textContent.toLowerCase().includes(q)||card.querySelector('.product-meta p').textContent.includes(q);const show=categoryOk&&searchOk;card.classList.toggle('is-hidden',!show);if(show)count++});document.getElementById('resultCount').textContent=String(count).padStart(2,'0');document.getElementById('emptyState').hidden=count!==0}
searchInput.addEventListener('input',applyFilters);
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;applyFilters()}));
document.getElementById('resetFilters').addEventListener('click',()=>{activeFilter='all';searchInput.value='';document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));applyFilters()});

// Wishlist
 document.querySelectorAll('.wishlist').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('active');btn.textContent=btn.classList.contains('active')?'♥':'♡';showToast(btn.classList.contains('active')?'به علاقه‌مندی‌ها اضافه شد':'از علاقه‌مندی‌ها حذف شد')}));

// Cart drawer
const drawer=document.getElementById('cartDrawer');const overlay=document.getElementById('cartOverlay');
function openCart(){drawer.classList.add('open');overlay.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.classList.add('drawer-open')}
function closeCart(){drawer.classList.remove('open');overlay.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.classList.remove('drawer-open')}
document.querySelector('.cart-trigger').addEventListener('click',openCart);document.querySelector('.drawer-close').addEventListener('click',closeCart);overlay.addEventListener('click',closeCart);document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();searchPanel.classList.remove('open')}});
document.querySelectorAll('.quick-add').forEach(btn=>btn.addEventListener('click',()=>{addToCart(btn.dataset.id);showToast(`${products[btn.dataset.id].name} به سبد اضافه شد`)}));
function addToCart(id){cart.set(id,(cart.get(id)||0)+1);renderCart()}
function renderCart(){let totalQty=0,totalPrice=0;cart.forEach((qty,id)=>{totalQty+=qty;totalPrice+=qty*products[id].price});document.querySelector('.cart-count').textContent=faNumber(totalQty);document.getElementById('drawerCount').textContent=`(${faNumber(totalQty)})`;document.getElementById('cartTotal').textContent=money(totalPrice);const holder=document.getElementById('cartItems');if(!cart.size){holder.innerHTML='<div class="cart-empty">سبد خریدت هنوز خالیه.<span>وقتشه یک انتخاب ماندگار داشته باشی.</span></div>';return}holder.innerHTML='';cart.forEach((qty,id)=>{const p=products[id];const row=document.createElement('div');row.className='cart-row';row.innerHTML=`<img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)}</p><div class="quantity"><button data-action="minus" data-id="${id}" aria-label="کم کردن">−</button><span>${faNumber(qty)}</span><button data-action="plus" data-id="${id}" aria-label="زیاد کردن">+</button></div></div><button class="remove-item" data-action="remove" data-id="${id}" aria-label="حذف ${p.name}">×</button>`;holder.appendChild(row)});holder.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>{const {action,id}=btn.dataset;if(action==='plus')cart.set(id,cart.get(id)+1);if(action==='minus'){const next=cart.get(id)-1;if(next<=0)cart.delete(id);else cart.set(id,next)}if(action==='remove')cart.delete(id);renderCart()}))}
document.getElementById('checkoutBtn').addEventListener('click',()=>{if(!cart.size){showToast('سبد خریدت هنوز خالیه');return}showToast('این نسخه نمایشی است؛ پرداخت واقعی فعال نیست.')});

// Newsletter demo
 document.getElementById('newsletterForm').addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('emailInput');document.getElementById('newsletterMessage').textContent='ممنون! این فرم در نسخه دمو به سرویس ایمیل متصل نیست.';email.value='';showToast('درخواست عضویت ثبت نمایشی شد')});

// Back to top
const backToTop=document.getElementById('backToTop');window.addEventListener('scroll',()=>backToTop.classList.toggle('visible',window.scrollY>600),{passive:true});backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Sorting
document.getElementById('sortSelect').addEventListener('change',e=>{const g=document.getElementById('productGrid');const v=e.target.value;const cards=[...g.children];cards.sort((a,b)=>v==='asc'?a.dataset.price-b.dataset.price:v==='desc'?b.dataset.price-a.dataset.price:0);if(v!=='default')cards.forEach(c=>g.appendChild(c));else location.reload()});

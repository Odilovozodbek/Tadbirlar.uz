/* Renesans Tadbirlar
 * HTML + CSS + oddiy JavaScript. Server yoki tashqi JS kutubxonasi talab qilinmaydi.
 * Bu interaktiv demo: barcha ma'lumotlar bitta brauzerning localStorage xotirasida.
 */
"use strict";

const ICONS = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  list:'<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  university:'<path d="m3 9 9-6 9 6M4 10h16M6 11v7m6-7v7m6-7v7M3 21h18M4 18h16"/><path d="M12 3V1"/>',
  ticket:'<path d="M4 5h16a1 1 0 0 1 1 1v3a3 3 0 0 0 0 6v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a3 3 0 0 0 0-6V6a1 1 0 0 1 1-1zM15 5v2m0 3v4m0 3v2"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18M8 15h2m4 0h2m-8 3h2"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5"/>',
  "plus-square":'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z"/><path d="m8 12 3 3 5-6"/>',
  sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5zM20 2v4m-2-2h4"/>',
  "arrow-up-right":'<path d="M7 17 17 7M7 7h10v10"/>',
  "arrow-right":'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  "arrow-left":'<path d="M20 12H4m6-6-6 6 6 6"/>',
  chevrons:'<path d="m8 9 4-4 4 4m-8 6 4 4 4-4"/>',
  "chevron-right":'<path d="m9 5 7 7-7 7"/>',
  "chevron-left":'<path d="m15 5-7 7 7 7"/>',
  "chevron-down":'<path d="m6 9 6 6 6-6"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  search:'<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  "check-circle":'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  x:'<path d="m6 6 12 12M6 18 18 6"/>',
  download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>',
  upload:'<path d="M12 16V4m-4 4 4-4 4 4M4 16v5h16v-5"/>',
  code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
  science:'<path d="M9 3h6M10 3v7l-6 9a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2l-6-9V3M7 15h10"/>',
  music:'<path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/>',
  trophy:'<path d="M8 3h8v6a4 4 0 0 1-8 0V3zM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 13v5M8 21h8M9 18h6"/>',
  leaf:'<path d="M20 3C9 2 3 7 5 14s13 8 15-11zM4 21 16 9"/>',
  filter:'<path d="M4 7h16M7 12h10M10 17h4"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  refresh:'<path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>',
  moon:'<path d="M20.8 13.2A8.8 8.8 0 0 1 10.8 3a9 9 0 1 0 10 10.2z"/>',
  monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
  settings:'<path d="m9.5 3-.7 2.5-2 .9-2.4-.7L2 9.8l1.8 1.8v2.1L2 15.5l2.4 4.1 2.4-.7 2 .9.7 2.2h5l.7-2.2 2-.9 2.4.7 2.4-4.1-1.8-1.8v-2.1L22 9.8l-2.4-4.1-2.4.7-2-.9-.7-2.5z"/><circle cx="12" cy="12.5" r="3"/>',
  alert:'<path d="m12 3 10 18H2zM12 9v5m0 3h.01"/>'
};
const icon = name => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[name] || ICONS.calendar)+'</svg>';
const $ = selector => document.querySelector(selector);
const h = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const normalize = value => String(value).toLowerCase().replace(/[‘’ʻʼ']/g,"").trim();
const uid = prefix => prefix+"-"+(window.crypto?.randomUUID?.() || Date.now().toString(36)+Math.random().toString(36).slice(2,8));
const MONTHS = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"];
const CATEGORIES = [
  {id:"all",label:"Barchasi",icon:"grid"},{id:"science",label:"Ilm-fan",icon:"science"},
  {id:"tech",label:"Texnologiya",icon:"code"},{id:"culture",label:"Madaniyat",icon:"music"},
  {id:"sport",label:"Sport",icon:"trophy"},{id:"volunteer",label:"Ko‘ngillilik",icon:"leaf"}
];
const UNIVERSITIES = ["Renesans ta’lim universiteti","Toshkent axborot texnologiyalari universiteti","O‘zbekiston Milliy universiteti","Toshkent davlat iqtisodiyot universiteti"];
const ROLE_NAMES = {student:"Talaba",organizer:"Tashkilotchi",admin:"Mas’ul"};
const STORE_KEY = "renesans-tadbirlar-demo-v1";
const DEFAULT_SETTINGS = {theme:"light",defaultView:"grid",ownUniversity:false,reducedMotion:false};
const DISPLAY_NAMES = {events:"Tadbirlar",registrations:"Mening ishtirokim",calendar:"Taqvim",documents:"Hujjatlarim",create:"Tadbir taklif qilish",review:"Tasdiqlash",settings:"Sozlamalar"};
const sampleEvent = (id,title,category,date,time,endTime,location,university,scope,capacity,participants,orderNeeded,description,extra={}) =>
  ({id,title,category,date,time,endTime,location,university,scope,capacity,participants,orderNeeded,description,organizer:"Universitet yoshlar markazi",organizerType:"Tashkilotchi",status:"approved",owner:"sample",submittedAt:"2026-10-28T10:00:00",...extra});
function initialState(){
  return {
    version:1,role:"student",profile:{name:"Ozodbek Odilov",group:"76-25-guruh",university:UNIVERSITIES[0]},settings:{...DEFAULT_SETTINGS},
    events:[
      sampleEvent("e1","Renesans Hackathon 2026","tech","2026-11-06","09:00","18:00","Innovatsiyalar markazi, 1-qavat",UNIVERSITIES[0],"inter",150,124,true,"G‘oyangizni ishlaydigan loyihaga aylantiring! Turli universitetlardan kelgan talabalar bilan jamoa tuzing, haqiqiy muammolarga raqamli yechim yarating va loyihangizni mentorlar oldida himoya qiling.\n\nYo‘nalishlar: ta’lim texnologiyalari, sun’iy intellekt va ijtimoiy loyihalar. Boshlovchilar ham qatnashishi mumkin. Noutbukingizni olib kelishni unutmang.",{organizer:"Renesans IT klubi"}),
      sampleEvent("e2","Zakovat: bilimlar maydoni","culture","2026-11-02","15:00","17:00","Bosh bino, majlislar zali",UNIVERSITIES[0],"internal",80,54,false,"Bilim, mantiq va jamoaviy fikrlash bir maydonda! Do‘stlaringiz bilan qatnashing, yangi insonlar bilan tanishing va bilimlaringizni sinovdan o‘tkazing.\n\nJamoalar tadbir boshida shakllantiriladi. Har bir ishtirokchi alohida ro‘yxatdan o‘tadi.",{organizer:"Renesans Zakovat klubi"}),
      sampleEvent("e3","Sun’iy intellekt: bugun va ertaga","science","2026-11-04","10:00","12:00","Konferensiyalar zali, A bino",UNIVERSITIES[1],"inter",120,86,true,"Sun’iy intellekt ta’lim va kasblarni qanday o‘zgartirmoqda? Mutaxassislar bilan ochiq muloqot, amaliy misollar va talabalar uchun savol-javob sessiyasi.\n\nBarcha yo‘nalish talabalari va ustozlar uchun ochiq.",{organizer:"Ilmiy tadqiqotlar bo‘limi"}),
      sampleEvent("e4","Yashil kampus — birga ekamiz","volunteer","2026-11-07","10:00","13:00","Universitet bog‘i",UNIVERSITIES[0],"internal",100,43,false,"Kampusimizni yanada yashil qilamiz! Daraxt ekish, hududni obodonlashtirish va tabiatga mehr ulashish uchun birlashamiz.\n\nKerakli anjomlar tashkilotchilar tomonidan beriladi. Qulay kiyimda keling.",{organizer:"Renesans volontyorlar jamoasi"}),
      sampleEvent("e5","Kampus kubogi: shaxmat","sport","2026-11-08","14:00","17:00","Talabalar sport markazi",UNIVERSITIES[2],"inter",64,32,false,"Universitetlararo shaxmat turnirida kuchingizni sinab ko‘ring. Yangi boshlaganlar va tajribali o‘yinchilar birdek kutib qolinadi.\n\nTurnir reglamenti va juftliklar ishtirokchilar ro‘yxati yopilgach e’lon qilinadi.",{organizer:"Universitet sport klubi"}),
      sampleEvent("e6","Musiqa va ilhom oqshomi","culture","2026-11-10","17:00","19:00","Madaniyat saroyi, katta sahna",UNIVERSITIES[0],"internal",200,146,false,"Jonli musiqa, she’riyat va talabalarning ijodiy chiqishlari. Kundalik darslardan so‘ng hamjamiyatimiz bilan iliq oqshomni birga o‘tkazing.\n\nTomoshabin sifatida qatnashish uchun ro‘yxatdan o‘ting. Sahnaga chiqish istagidagilar tashkilotchiga murojaat qilishi mumkin.",{organizer:"Talabalar ijodiy kengashi"}),
      sampleEvent("e7","IT karyera: birinchi qadam","tech","2026-11-12","11:00","13:00","Karyera markazi, 204-xona",UNIVERSITIES[3],"inter",100,64,true,"Birinchi amaliyot, portfolio va ishga kirish suhbatiga tayyorgarlik haqida amaliy uchrashuv. Tajribali mutaxassislar bilan yo‘l xaritangizni tuzing.",{organizer:"Karyera rivojlantirish markazi"}),
      sampleEvent("e8","Ilmiy g‘oyalar forumi","science","2026-11-14","09:00","14:00","Ilmiy kutubxona, 2-qavat",UNIVERSITIES[2],"inter",140,72,true,"Talabalar ilmiy loyihalari taqdimoti, ustozlardan maslahat va hamkorlik uchun yangi imkoniyatlar. Tadqiqotga endi kirishayotgan talabalar ham qatnashishi mumkin.",{organizer:"Yosh olimlar kengashi"}),
      sampleEvent("p1","Talabalar startap kuni","tech","2026-11-16","10:00","16:00","Innovatsiyalar markazi",UNIVERSITIES[0],"inter",100,0,true,"Talabalar o‘z startap g‘oyalarini taqdim etadi. Mentorlardan fikr olish, jamoa topish va ilk prototipni ko‘rsatish imkoniyati.",{status:"pending",organizer:"Talabalar biznes klubi",organizerType:"Talaba"}),
      sampleEvent("p2","Kitobxonlar uchrashuvi","culture","2026-11-18","15:00","17:00","Universitet kutubxonasi",UNIVERSITIES[0],"internal",40,0,false,"O‘qigan kitoblarimiz haqida suhbatlashamiz. Har bir ishtirokchi o‘zi tavsiya qiladigan bir kitobni olib keladi.",{status:"pending",organizer:"Gumanitar fanlar kafedrasi",organizerType:"Ustoz"})
    ],
    registrations:[
      {id:"r-seed-1",eventId:"e2",name:"Ozodbek Odilov",group:"76-25-guruh",university:UNIVERSITIES[0],participantType:"Talaba",needsDocument:false,code:"RNS-1102-01",createdAt:"2026-10-28T10:30:00"},
      {id:"r-seed-2",eventId:"e3",name:"Ozodbek Odilov",group:"76-25-guruh",university:UNIVERSITIES[0],participantType:"Talaba",needsDocument:true,code:"RNS-1104-02",createdAt:"2026-10-28T11:00:00"}
    ],orders:{},activity:[]
  };
}
let storageWarning=false;
function readState(){
  try{
    const saved=JSON.parse(localStorage.getItem(STORE_KEY));
    if(saved?.version===1 && saved.profile && Array.isArray(saved.events) && Array.isArray(saved.registrations) && saved.orders && Array.isArray(saved.activity)) {
      if(!Object.hasOwn(ROLE_NAMES,saved.role)) saved.role="student";
      saved.settings=normalizeSettings(saved.settings);
      return saved;
    }
  }catch(error){storageWarning=true;}
  return initialState();
}
let state=readState();
let filters=defaultFilters();
const systemTheme=window.matchMedia?.("(prefers-color-scheme: dark)");
let reviewTab="pending";
let calendarDate=new Date(2026,10,1);
let modalReturnFocus=null;
const main=$("#main");
const dialog=$("#appDialog");
function normalizeSettings(settings){
  return {
    theme:["light","dark","system"].includes(settings?.theme)?settings.theme:DEFAULT_SETTINGS.theme,
    defaultView:["grid","list"].includes(settings?.defaultView)?settings.defaultView:DEFAULT_SETTINGS.defaultView,
    ownUniversity:settings?.ownUniversity===true,
    reducedMotion:settings?.reducedMotion===true
  };
}
function defaultFilters(){
  return {search:"",university:state.settings.ownUniversity?state.profile.university:"all",scope:"all",category:"all",view:state.settings.defaultView,limit:6};
}
function resolvedTheme(){
  return state.settings.theme==="system"?(systemTheme?.matches?"dark":"light"):state.settings.theme;
}
function applyPreferences(){
  const dark=resolvedTheme()==="dark";
  document.documentElement.dataset.theme=dark?"dark":"light";
  document.documentElement.dataset.reducedMotion=String(state.settings.reducedMotion);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content",dark?"#101916":"#153f36");
  const toggle=$("#themeToggle"),label=dark?"Oq rejimga o‘tish":"Qora rejimga o‘tish";
  toggle.innerHTML=icon(dark?"sun":"moon");toggle.setAttribute("aria-label",label);toggle.setAttribute("title",label);
  updateSettingsControls();
}
function updateSettingsControls(){
  document.querySelectorAll('input[name="theme"]').forEach(input=>{input.checked=input.value===state.settings.theme;});
  const view=$("#defaultView"),own=$("#ownUniversity"),motion=$("#reducedMotion");
  if(view)view.value=state.settings.defaultView;
  if(own)own.checked=state.settings.ownUniversity;
  if(motion)motion.checked=state.settings.reducedMotion;
}
function setPreference(key,value){
  const valid=(key==="theme"&&["light","dark","system"].includes(value))||
    (key==="defaultView"&&["grid","list"].includes(value))||
    (["ownUniversity","reducedMotion"].includes(key)&&typeof value==="boolean");
  if(!valid)return false;
  if(!commit(()=>{state.settings[key]=value;})){updateSettingsControls();return false;}
  if(key==="defaultView")filters.view=value;
  if(key==="ownUniversity")filters.university=value?state.profile.university:"all";
  applyPreferences();return true;
}
function save(){
  try{localStorage.setItem(STORE_KEY,JSON.stringify(state));return true;}
  catch(error){toast("Brauzer xotirasiga saqlab bo‘lmadi. Oxirgi amal bajarilmadi.","error");return false;}
}
function commit(change){
  const previous=JSON.stringify(state);
  change();
  if(!save()){state=JSON.parse(previous);return false;}
  return true;
}
function activity(textValue){state.activity.unshift({text:textValue,date:new Date().toISOString()});state.activity=state.activity.slice(0,30);}
function hydrateIcons(root=document){root.querySelectorAll("[data-icon]").forEach(node=>{node.innerHTML=icon(node.dataset.icon);});}
function dayDate(value){const [y,m,d]=value.split("-").map(Number);return new Date(y,m-1,d);}
function dateText(value,year=false){const d=dayDate(value);return d.getDate()+" "+MONTHS[d.getMonth()]+(year?" "+d.getFullYear():"");}
function dateParts(value){const d=dayDate(value);return {day:String(d.getDate()).padStart(2,"0"),month:MONTHS[d.getMonth()]};}
function initials(name){return name.trim().split(/\s+/).slice(0,2).map(word=>word[0]||"").join("").toUpperCase();}
function category(id){return CATEGORIES.find(c=>c.id===id)||CATEGORIES[1];}
function eventById(id){return state.events.find(e=>e.id===id);}
function registrationFor(id){return state.registrations.find(r=>r.eventId===id);}
function participantCount(event){return Number(event.participants)+state.registrations.filter(r=>r.eventId===event.id).length;}
function approvedEvents(){return state.events.filter(e=>e.status==="approved").sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));}
function canJoin(event){return event.status==="approved" && !registrationFor(event.id) && participantCount(event)<event.capacity && new Date(event.date+"T"+event.endTime+":00+05:00").getTime()>Date.now();}
function statusMarkup(status){const labels={approved:"Tasdiqlangan",pending:"Ko‘rib chiqilmoqda",rejected:"Rad etilgan"};return '<span class="status-badge '+h(status)+'">'+icon(status==="approved"?"check":status==="pending"?"clock":"x")+h(labels[status]||status)+'</span>';}
function toast(message,type="success"){
  const node=document.createElement("div");node.className="toast "+type;node.setAttribute("role",type==="error"?"alert":"status");node.innerHTML=icon(type==="error"?"alert":"check-circle")+"<span>"+h(message)+"</span>";
  $("#toastRegion").append(node);setTimeout(()=>node.remove(),5500);
}
function showDialog(content){
  if(!dialog.open) modalReturnFocus=document.activeElement;
  $("#dialogContent").innerHTML=content;
  if(!dialog.open) dialog.showModal();
  dialog.scrollTop=0;
}
function closeDialog(){dialog.close();}
function modalHead(title,description=""){return '<div class="dialog-head"><div><h2 id="dialogTitle">'+h(title)+'</h2>'+(description?'<p>'+h(description)+'</p>':"")+'</div><button class="icon-button" data-action="close" aria-label="Oynani yopish">'+icon("x")+'</button></div>';}
function pageHeading(title,description,action=""){return '<div class="page-heading"><div><p class="eyebrow">RENESANS HAMJAMIYATI</p><h1>'+h(title)+'</h1><p>'+h(description)+'</p></div>'+action+'</div>';}
function emptyState(title,text,action=""){return '<div class="empty-state">'+icon("calendar")+'<h3>'+h(title)+'</h3><p>'+h(text)+'</p>'+action+'</div>';}
function universityOptions(selected=UNIVERSITIES[0]){return UNIVERSITIES.map(u=>'<option value="'+h(u)+'"'+(u===selected?" selected":"")+'>'+h(u)+'</option>').join("");}
function updateChrome(){
  const profile=state.profile;
  $("#sidebarName").textContent=profile.name;$("#sidebarGroup").textContent=(profile.group?profile.group+" · ":"")+ROLE_NAMES[state.role];
  $("#sidebarAvatar").textContent=initials(profile.name);$("#topbarAvatar").textContent=initials(profile.name);
  $("#roleSelect").value=state.role;$("#registrationCount").textContent=state.registrations.length;
  $("#pendingDot").hidden=!state.events.some(e=>e.status==="pending");
  $("#notificationDot").hidden=state.activity.length===0 && !state.events.some(e=>e.status==="pending");
}
function routeName(){const route=location.hash.slice(1);return Object.hasOwn(DISPLAY_NAMES,route)?route:"events";}
function render(){
  const route=routeName();updateChrome();
  document.querySelectorAll("[data-route]").forEach(a=>{const active=a.dataset.route===route;a.classList.toggle("active",active);if(active)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  $("#breadcrumbText").textContent=DISPLAY_NAMES[route];
  document.title=DISPLAY_NAMES[route]+" — Renesans";
  const renderers={events:renderEvents,registrations:renderRegistrations,calendar:renderCalendar,documents:renderDocuments,create:renderCreate,review:renderReview,settings:renderSettings};
  renderers[route]();closeMobileMenu();
}

/* Tadbirlar uchun mahalliy SVG tasvirlari: hech qanday rasm yuklanmaydi. */
function visualMarkup(event,hero=false){
  const base='<svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">';
  if(hero)return '<svg viewBox="0 0 500 330" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="heroGlow"><stop stop-color="#46735a"/><stop offset="1" stop-color="#153f36"/></radialGradient></defs><rect width="500" height="330" fill="url(#heroGlow)"/><g transform="translate(277 152) rotate(-28)" fill="none"><ellipse rx="157" ry="100" stroke="#a1bb86" stroke-width="2" opacity=".25"/><ellipse rx="179" ry="120" stroke="#a1bb86" stroke-width="1" opacity=".15"/><ellipse rx="118" ry="68" stroke="#d0e6ad" stroke-width="33"/><ellipse rx="68" ry="118" stroke="#86ae84" stroke-width="28"/><ellipse rx="118" ry="42" transform="rotate(70)" stroke="#c4d79c" stroke-width="20"/><circle r="27" fill="#e1edc8" stroke="none"/></g><g stroke="#bfdaa0" stroke-width="1.5"><path d="M425 50v14m-7-7h14M116 225v12m-6-6h12"/></g><circle cx="397" cy="255" r="4" fill="#bad59b"/><circle cx="138" cy="82" r="3" fill="#bad59b"/><path d="m451 177 10 3-3 10" stroke="#b3d397" fill="none"/></svg>';
  if(event.category==="tech")return base+'<rect width="600" height="300" fill="#263f42"/><g stroke="#56766d" fill="none" opacity=".3"><path d="M0 75h600M0 150h600M0 225h600M75 0v300M150 0v300M225 0v300M300 0v300M375 0v300M450 0v300M525 0v300"/></g><g transform="translate(325 138) rotate(-25)"><ellipse rx="135" ry="74" fill="none" stroke="#cce0b0" stroke-width="31"/><ellipse rx="74" ry="135" fill="none" stroke="#9cbaa0" stroke-width="26"/><ellipse rx="115" ry="40" transform="rotate(60)" fill="none" stroke="#e0d7b6" stroke-width="16"/><circle r="24" fill="#d8e7c0"/></g><path d="m518 235 12 12m-12 0 12-12" stroke="#d9e6b7" stroke-width="2"/><circle cx="135" cy="70" r="5" fill="#d9e6b7"/><circle cx="491" cy="56" r="3" fill="#d9e6b7"/></svg>';
  if(event.category==="science")return base+'<rect width="600" height="300" fill="#c1d1c9"/><circle cx="473" cy="21" r="146" fill="#cbd9ce"/><g transform="translate(324 145)" fill="none" stroke="#365b51" stroke-width="2"><ellipse rx="130" ry="48" transform="rotate(25)"/><ellipse rx="130" ry="48" transform="rotate(85)"/><ellipse rx="130" ry="48" transform="rotate(145)"/><circle r="31" fill="#496e62" stroke="none"/><circle cx="91" cy="72" r="12" fill="#ecddba" stroke="none"/><circle cx="-43" cy="-100" r="10" fill="#e1e8d6" stroke="none"/><circle cx="-103" cy="25" r="9" fill="#e1e8d6" stroke="none"/></g><path d="M63 250h474" stroke="#67897a" opacity=".3"/></svg>';
  if(event.category==="sport")return base+'<rect width="600" height="300" fill="#d9cbd3"/><g transform="translate(175 90) skewY(-12)"><path d="M0 0h300v180H0z" fill="#b6a8b3"/><g fill="#eee5e5"><path d="M0 0h60v36H0zM120 0h60v36h-60zM240 0h60v36h-60zM60 36h60v36H60zM180 36h60v36h-60zM0 72h60v36H0zM120 72h60v36h-60zM240 72h60v36h-60zM60 108h60v36H60zM180 108h60v36h-60zM0 144h60v36H0zM120 144h60v36h-60zM240 144h60v36h-60z"/></g></g><g transform="translate(338 54)" fill="#4c4651"><circle cx="0" cy="21" r="18"/><path d="M-17 43h34v12h-5l12 74h9v14h-66v-14h9l12-74h-5z"/></g><g transform="translate(233 110)" fill="#f4efe9"><circle cx="0" cy="21" r="15"/><path d="M-14 39h28v10H9l12 61h8v13h-58v-13h8l12-61h-5z"/></g></svg>';
  if(event.category==="volunteer")return base+'<rect width="600" height="300" fill="#bdcc9c"/><circle cx="390" cy="49" r="100" fill="#d1dfb0"/><path d="M0 270Q160 210 300 270T600 265v35H0z" fill="#a4ba86"/><g transform="translate(313 252)"><path d="M0 0v-115m0 54 66-70M0-50l-60-61" stroke="#56774e" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M1-99q-60-85 0-116 61 31 0 116" fill="#5e8255"/><path d="M13-88q-1-86 89-80-1 78-89 80" fill="#7a9c64"/><path d="M-8-53q-89-1-92-78 85-8 92 78" fill="#88a86f"/></g><path d="m142 99 4 7 8 1-6 5 1 8-7-4-7 4 1-8-6-5 8-1z" fill="#eff1d5"/><circle cx="448" cy="170" r="4" fill="#edf0d0"/></svg>';
  if(event.id==="e6")return base+'<rect width="600" height="300" fill="#4d4e6a"/><circle cx="300" cy="140" r="108" fill="#626480"/><circle cx="300" cy="140" r="75" fill="none" stroke="#797a93"/><circle cx="300" cy="140" r="49" fill="none" stroke="#797a93"/><circle cx="300" cy="140" r="24" fill="#e6ba92"/><g fill="#d9b895"><rect x="170" y="105" width="10" height="70" rx="5"/><rect x="193" y="69" width="10" height="142" rx="5"/><rect x="216" y="89" width="10" height="102" rx="5"/><rect x="374" y="89" width="10" height="102" rx="5"/><rect x="397" y="69" width="10" height="142" rx="5"/><rect x="420" y="105" width="10" height="70" rx="5"/></g><circle cx="123" cy="62" r="4" fill="#e0bd9b"/><path d="M470 225v-36l29-5v30m-29-15 29-5" fill="none" stroke="#dbb991" stroke-width="3"/><ellipse cx="463" cy="226" rx="8" ry="6" fill="#dbb991"/><ellipse cx="492" cy="215" rx="8" ry="6" fill="#dbb991"/></svg>';
  return base+'<rect width="600" height="300" fill="#b88b6b"/><circle cx="444" cy="48" r="117" fill="#c99d7a"/><g transform="translate(300 151) rotate(-12)"><rect x="-89" y="-95" width="178" height="192" rx="9" fill="#ecd7b7"/><path d="M-60-65h120M-60-45h77M-60 65h120" stroke="#c1a586" stroke-width="3"/><path d="m-36 0 15 39 45-76 19 37" fill="none" stroke="#7b7b57" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="46" cy="32" r="11" fill="#b3926d"/></g><path d="m112 106 9 9m-9 0 9-9M472 223l9 9m-9 0 9-9" stroke="#efd8b2" stroke-width="2"/><circle cx="455" cy="99" r="4" fill="#ecd7b7"/></svg>';
}

function eventCard(event){
  const cat=category(event.category),date=dateParts(event.date),joined=!!registrationFor(event.id);
  const count=participantCount(event),full=count>=event.capacity,past=new Date(event.date+"T"+event.endTime+":00+05:00").getTime()<=Date.now();
  return '<article class="event-card"><div class="event-visual">'+visualMarkup(event)+'<div class="event-date"><strong>'+date.day+'</strong><span>'+date.month+'</span></div><span class="event-scope">'+(event.scope==="inter"?"Universitetlararo":"Universitet ichida")+'</span><span class="visual-type">'+h(cat.label.toUpperCase())+' / RENESANS</span></div><div class="event-body"><div class="event-meta-row"><span class="category-label '+cat.id+'">'+h(cat.label)+'</span><span class="event-time">'+icon("clock")+h(event.time)+' – '+h(event.endTime)+'</span></div><h3 class="event-title"><button data-action="detail" data-id="'+h(event.id)+'">'+h(event.title)+'</button></h3><div class="event-location">'+icon("pin")+'<span>'+h(event.location)+'</span></div><p class="event-university">'+h(event.university)+'</p></div><div class="event-footer"><div class="attendee-stack" aria-label="'+count+' nafar qatnashchi"><span class="mini-avatar">AB</span><span class="mini-avatar">MO</span><span class="mini-avatar">SH</span><span class="attendee-count">'+count+' qatnashchi</span></div><button class="button '+(joined?"button-ghost":"button-primary")+'" data-action="'+(joined?"ticket":full||past?"detail":"join")+'" data-id="'+h(event.id)+'">'+(joined?icon("check")+"Ro‘yxatdasiz":past?"Yakunlangan":full?"Joylar band":"Qatnashish "+icon("arrow-up-right"))+'</button></div></article>';
}
function renderEvents(){
  const events=approvedEvents(),hero=eventById("e1")||events[0];
  const count=events.reduce((sum,event)=>sum+participantCount(event),0);
  const uniCount=new Set(events.map(e=>e.university)).size;
  main.innerHTML=pageHeading("Universitet hayotidan chetda qolmang.","Yangi bilim, yangi tanishuvlar va unutilmas lahzalar — barchasi shu yerda.",'<a class="button button-primary" href="#create" aria-label="Tadbir taklif qilish">'+icon("plus")+'Tadbir taklif qilish</a>')+
    (hero?'<section class="hero" aria-label="Tavsiya etilgan tadbir"><div class="hero-copy"><div class="hero-label"><span class="line"></span>HAFTA TAVSIYASI</div><h2>G‘oyalar uchrashadi.<br><em>Kelajak boshlanadi.</em></h2><p>'+h(hero.title)+'. Jamoangizni toping va katta g‘oyangizga birinchi qadamni qo‘ying.</p><div class="hero-actions"><button class="button button-lime" data-action="detail" data-id="'+h(hero.id)+'">Tadbirni ko‘rish '+icon("arrow-up-right")+'</button><span class="hero-date">'+icon("calendar")+dateText(hero.date)+'</span></div></div><div class="hero-art">'+visualMarkup(hero,true)+'<div class="hero-event-sticker">'+icon("users")+'<span><strong>Birga ko‘proq narsaga qodirmiz.</strong><small>'+participantCount(hero)+' talaba allaqachon biz bilan</small></span></div></div></section>':"")+
    '<section class="stats-bar" aria-label="Platforma ko‘rsatkichlari">'+[
      ["calendar",events.length,"tasdiqlangan tadbir"],["users",count,"ishtirokchi"],["university",uniCount,"universitet"],["ticket",state.registrations.length,"mening tadbirim"]
    ].map(([i,n,t])=>'<div class="stat"><span class="stat-icon">'+icon(i)+'</span><div><strong>'+n.toLocaleString("en-US")+'</strong><small>'+t+'</small></div></div>').join("")+'</section>'+
    '<section aria-labelledby="eventsHeading"><div class="section-heading"><h2 id="eventsHeading">Sizni kutayotgan tadbirlar <span id="eventsCount"></span></h2><a class="text-link" href="#calendar">'+icon("calendar")+'Taqvimda ko‘rish '+icon("arrow-up-right")+'</a></div>'+
    '<div class="filters-toolbar"><label class="search-field">'+icon("search")+'<input id="eventSearch" type="search" placeholder="Tadbir, mavzu yoki joy nomini izlang..." aria-label="Tadbirlarni qidirish" value="'+h(filters.search)+'"></label><select id="universityFilter" class="filter-select" aria-label="Universitet bo‘yicha saralash"><option value="all">Barcha universitetlar</option>'+universityOptions(filters.university)+'</select><select id="scopeFilter" class="filter-select" aria-label="Tadbir ko‘lami"><option value="all">Barcha tadbirlar</option><option value="internal">Universitet ichida</option><option value="inter">Universitetlararo</option></select><div class="view-switch" role="group" aria-label="Ko‘rinishni tanlang"><button data-action="view" data-view="grid" aria-label="Kartalar ko‘rinishi" aria-pressed="'+(filters.view==="grid")+'" class="'+(filters.view==="grid"?"selected":"")+'">'+icon("grid")+'</button><button data-action="view" data-view="list" aria-label="Ro‘yxat ko‘rinishi" aria-pressed="'+(filters.view==="list")+'" class="'+(filters.view==="list"?"selected":"")+'">'+icon("list")+'</button></div></div>'+
    '<div class="filter-row"><div class="category-tabs" role="group" aria-label="Tadbir yo‘nalishlari">'+CATEGORIES.map(c=>'<button class="category-tab '+(filters.category===c.id?"selected":"")+'" data-action="category" data-category="'+c.id+'" aria-pressed="'+(filters.category===c.id)+'">'+icon(c.icon)+c.label+'</button>').join("")+'</div><span class="result-note">Yangi imkoniyatni kashf eting</span></div><div class="event-grid '+(filters.view==="list"?"list-view":"")+'" id="eventResults" aria-live="polite"></div><div class="load-more-row" id="loadMore"></div></section>';
  $("#universityFilter").value=filters.university;$("#scopeFilter").value=filters.scope;renderEventResults();
}
function renderEventResults(){
  const query=normalize(filters.search);
  const events=approvedEvents().filter(e=>(!query||normalize(e.title+" "+e.description+" "+e.location+" "+e.university).includes(query))&&(filters.university==="all"||e.university===filters.university)&&(filters.scope==="all"||e.scope===filters.scope)&&(filters.category==="all"||e.category===filters.category));
  $("#eventsCount").textContent=events.length+" ta";
  $("#eventResults").innerHTML=events.length?events.slice(0,filters.limit).map(eventCard).join(""):emptyState("Mos tadbir topilmadi","Boshqa so‘z bilan izlang yoki saralash shartlarini tozalang.",'<button class="button button-light" data-action="clear-filters">'+icon("refresh")+'Saralashni tozalash</button>');
  $("#eventResults").classList.toggle("list-view",filters.view==="list");
  $("#loadMore").innerHTML=events.length>filters.limit?'<button class="button button-light" data-action="load-more">Yana '+Math.min(6,events.length-filters.limit)+' ta tadbirni ko‘rish '+icon("chevron-down")+'</button>':"";
}
function showEvent(id){
  const event=eventById(id);if(!event)return;
  const cat=category(event.category),joined=registrationFor(id),count=participantCount(event);
  let action=joined?'<button class="button button-primary" data-action="ticket" data-id="'+h(id)+'">'+icon("ticket")+'Ishtirok chiptam</button>':canJoin(event)?'<button class="button button-primary" data-action="join" data-id="'+h(id)+'">Ro‘yxatdan o‘tish '+icon("arrow-right")+'</button>':'<span class="status-badge pending">'+(event.status!=="approved"?"Ro‘yxat ochilmagan":count>=event.capacity?"Barcha joylar band":"Tadbir yakunlangan")+'</span>';
  if(state.role==="admin"&&event.status==="pending")action='<button class="button button-danger" data-action="decision" data-decision="rejected" data-id="'+h(id)+'">Rad etish</button><button class="button button-primary" data-action="decision" data-decision="approved" data-id="'+h(id)+'">'+icon("check")+'Tasdiqlash</button>';
  showDialog('<div class="dialog-visual">'+visualMarkup(event)+'<button class="icon-button" data-action="close" aria-label="Oynani yopish">'+icon("x")+'</button></div><div class="dialog-head"><div><div class="detail-title-row"><span class="category-label '+cat.id+'">'+cat.label+'</span><span class="status-badge info">'+(event.scope==="inter"?"Universitetlararo":"Universitet ichida")+'</span>'+statusMarkup(event.status)+'</div><h2 id="dialogTitle">'+h(event.title)+'</h2></div></div><div class="dialog-body"><div class="detail-grid"><div class="detail-item">'+icon("calendar")+'<div><small>Sana va vaqt</small>'+dateText(event.date,true)+'<br>'+h(event.time)+' – '+h(event.endTime)+'</div></div><div class="detail-item">'+icon("pin")+'<div><small>Manzil</small>'+h(event.location)+'</div></div><div class="detail-item">'+icon("university")+'<div><small>Mezbon universitet</small>'+h(event.university)+'</div></div><div class="detail-item">'+icon("users")+'<div><small>Ishtirokchilar</small>'+count+' / '+event.capacity+' ta joy</div></div></div><p class="detail-description">'+h(event.description)+'</p><div class="detail-organizer"><span class="avatar">'+h(initials(event.organizer))+'</span><span>'+h(event.organizer)+'<small>'+h(event.organizerType)+' · Tadbir tashkilotchisi</small></span></div>'+
    (event.orderNeeded?'<div class="info-banner">'+icon("file")+'<span><strong>Darsdan ozod qilish hujjati</strong><br>Darsingizga to‘g‘ri kelsa, ro‘yxatdan o‘tishda hujjat so‘rovini belgilang. Universitet buyrug‘i biriktirilgach, uni “Hujjatlarim”dan olasiz.</span></div>':"")+
    (event.reviewNote?'<div class="info-banner '+(event.status==="rejected"?"warning":"")+'">'+icon("info")+'<span><strong>Mas’ul izohi</strong><br>'+h(event.reviewNote)+'</span></div>':"")+
    '<div class="capacity-track"><div class="capacity-fill" style="width:'+Math.min(100,count/event.capacity*100)+'%"></div></div><div class="capacity-caption"><span>'+count+' kishi ro‘yxatdan o‘tgan</span><span>'+Math.max(0,event.capacity-count)+' ta joy qoldi</span></div><div class="dialog-footer"><button class="button button-light" data-action="close">Yopish</button>'+action+'</div></div>');
}

/* Qatnashish, chiptalar va shaxsiy hujjatlar. */
function showJoin(id){
  const event=eventById(id);if(!event)return;
  if(registrationFor(id)){showTicket(id);return;}
  if(!canJoin(event)){toast("Bu tadbirga hozir ro‘yxatdan o‘tib bo‘lmaydi.","error");return;}
  showDialog(modalHead("Birga qatnashamiz!",event.title+" · "+dateText(event.date))+
    '<div class="dialog-body"><form id="joinForm" class="dialog-form" data-id="'+h(id)+'"><div class="form-grid"><div class="field field-full"><label for="joinName">Ism va familiya <span class="required">*</span></label><input id="joinName" name="name" required minlength="3" maxlength="80" autocomplete="name" value="'+h(state.profile.name)+'"></div><div class="field"><label for="joinType">Ishtirokchi turi</label><select id="joinType" name="participantType"><option>Talaba</option><option>Ustoz</option><option>Tyutor</option></select></div><div class="field"><label for="joinGroup">Guruh / kafedra</label><input id="joinGroup" name="group" maxlength="60" placeholder="Masalan, 76-25-guruh" value="'+h(state.profile.group)+'"></div><div class="field field-full"><label for="joinUniversity">Sizning universitetingiz</label><select id="joinUniversity" name="university">'+universityOptions(state.profile.university)+'</select></div></div><label class="check-field"><input type="checkbox" name="needsDocument" '+(event.orderNeeded?"checked":"")+'><span><strong>Tadbir darsimga to‘g‘ri keladi</strong><small>Darsdan ozod qilish buyrug‘i kerak. Hujjat so‘rovi “Hujjatlarim” bo‘limida kuzatiladi.</small></span></label><p class="join-note">'+icon("info")+' Demo ro‘yxatdan o‘tish shu brauzerda saqlanadi. Rasmiy ishtirok ro‘yxatiga ulanmagan.</p><p class="form-error" id="joinError" role="alert"></p><div class="dialog-footer"><button type="button" class="button button-light" data-action="detail" data-id="'+h(id)+'">Orqaga</button><button type="submit" class="button button-primary">Ishtirokni tasdiqlash '+icon("check")+'</button></div></form></div>');
}
function submitJoin(form){
  const event=eventById(form.dataset.id),data=new FormData(form);
  if(!event||!canJoin(event)){ $("#joinError").textContent="Ro‘yxatdan o‘tish imkoni yo‘q yoki siz allaqachon ro‘yxatdasiz.";return;}
  const name=String(data.get("name")).trim(),group=String(data.get("group")).trim();
  if(name.length<3){$("#joinError").textContent="Ism va familiyangizni kiriting.";return;}
  if(data.get("participantType")==="Talaba"&&!group){$("#joinError").textContent="Talabalar uchun guruhni kiriting.";return;}
  const registration={id:uid("r"),eventId:event.id,name,group,university:String(data.get("university")),participantType:String(data.get("participantType")),needsDocument:data.has("needsDocument"),code:"RNS-"+Math.random().toString(36).slice(2,8).toUpperCase(),createdAt:new Date().toISOString()};
  if(!commit(()=>{state.registrations.push(registration);activity(event.title+" tadbiriga ro‘yxatdan o‘tdingiz.");}))return;
  render();showTicket(event.id);toast("Ro‘yxatdan o‘tdingiz. Tadbirda ko‘rishamiz!");
}
function showTicket(id){
  const event=eventById(id),registration=registrationFor(id);if(!event||!registration)return;
  showDialog(modalHead("Mening ishtirok chiptam","Tadbir ma’lumotlari va shaxsiy ishtirok kodingiz.")+
    '<div class="dialog-body"><div class="ticket"><div class="ticket-icon">'+icon("ticket")+'</div><h3>'+h(event.title)+'</h3><p>'+dateText(event.date,true)+' · '+h(event.time)+'<br>'+h(event.location)+'</p><span class="ticket-code">'+h(registration.code)+'</span><span class="status-badge">'+icon("check")+'Demo ro‘yxatga olindi</span><div class="ticket-info"><p><strong>'+h(registration.name)+'</strong><br>'+h(registration.group)+' · '+h(registration.university)+'</p></div></div>'+
    (registration.needsDocument?'<div class="info-banner" style="margin-top:17px;margin-bottom:0">'+icon("file")+'<span>'+ (state.orders[id]?'Universitet buyrug‘i biriktirilgan. “Hujjatlarim” bo‘limidan yuklab oling.':'Hujjat so‘rovingiz qayd etildi. Universitet buyrug‘i biriktirilishi kutilmoqda.')+'</span></div>':"")+
    '<div class="dialog-footer split"><button class="text-link" data-action="cancel-registration" data-id="'+h(id)+'">Ishtirokni bekor qilish</button><button class="button button-primary" data-action="close">Tushunarli '+icon("check")+'</button></div></div>');
}
function showCancel(id){
  const event=eventById(id);if(!event||!registrationFor(id))return;
  showDialog(modalHead("Ishtirokni bekor qilish",event.title)+'<div class="dialog-body"><p class="detail-description">Ro‘yxatdan chiqish bilan joyingiz bo‘shaydi va ushbu tadbirga tegishli hujjat so‘rovingiz olib tashlanadi. Bo‘sh joy bo‘lsa, keyin yana qatnashishingiz mumkin.</p><div class="dialog-footer"><button class="button button-light" data-action="ticket" data-id="'+h(id)+'">Orqaga</button><button class="button button-danger" data-action="confirm-cancel" data-id="'+h(id)+'">Ishtirokni bekor qilish</button></div></div>');
}
function cancelRegistration(id){
  const event=eventById(id);if(!event)return;
  if(!commit(()=>{state.registrations=state.registrations.filter(r=>r.eventId!==id);activity(event.title+" tadbiridagi ishtirokingiz bekor qilindi.");}))return;
  closeDialog();render();toast("Ishtirok bekor qilindi.");
}
function renderRegistrations(){
  const registered=state.registrations.map(r=>({r,e:eventById(r.eventId)})).filter(x=>x.e).sort((a,b)=>a.e.date.localeCompare(b.e.date));
  const mine=state.events.filter(e=>e.owner==="me");
  main.innerHTML=pageHeading("Mening ishtirokim","Ro‘yxatdan o‘tgan tadbirlaringiz, chiptalaringiz va yuborgan takliflaringiz.",'<a class="button button-light" href="#events">'+icon("plus")+'Tadbir topish</a>')+
    '<div class="summary-chips"><span class="summary-chip"><strong>'+registered.length+'</strong>ro‘yxatdan o‘tilgan</span><span class="summary-chip"><strong>'+registered.filter(x=>x.r.needsDocument).length+'</strong>hujjat so‘rovi</span><span class="summary-chip"><strong>'+mine.length+'</strong>mening taklifim</span></div>'+
    (registered.length?'<section class="panel"><div class="panel-heading"><h2>Ishtirok etadigan tadbirlarim</h2></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Tadbir</th><th>Sana va vaqt</th><th>Hujjat</th><th><span class="sr-only">Amallar</span></th></tr></thead><tbody>'+
      registered.map(({r,e})=>'<tr><td><button class="text-link table-title" data-action="detail" data-id="'+h(e.id)+'">'+h(e.title)+'</button><span class="table-sub">'+h(e.location)+'</span></td><td>'+dateText(e.date)+'<span class="table-sub">'+h(e.time)+' – '+h(e.endTime)+'</span></td><td>'+(r.needsDocument?'<a href="#documents" class="status-badge '+(state.orders[e.id]?"":"pending")+'">'+icon(state.orders[e.id]?"file":"clock")+(state.orders[e.id]?"Buyruq mavjud":"Buyruq kutilmoqda")+'</a>':'<button class="text-link" data-action="request-document" data-id="'+h(e.id)+'">Hujjat so‘rash</button>')+'</td><td><div class="row-actions"><button class="button button-light button-small" data-action="ticket" data-id="'+h(e.id)+'">'+icon("ticket")+'Chipta</button></div></td></tr>').join("")+'</tbody></table></div></section>':
      emptyState("Hali tadbir tanlamadingiz","Qiziqishingizga mos tadbirni toping va birinchi ishtirokingizni rejalashtiring.",'<a class="button button-primary" href="#events">Tadbirlarni ko‘rish '+icon("arrow-right")+'</a>'))+
    (mine.length?'<section class="panel my-proposals"><div class="panel-heading"><h2>Men taklif qilgan tadbirlar</h2><a class="text-link" href="#create">Yangi taklif '+icon("plus")+'</a></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Tadbir</th><th>Sana</th><th>Holat</th><th>Izoh</th></tr></thead><tbody>'+mine.map(e=>'<tr><td><button class="text-link table-title" data-action="detail" data-id="'+h(e.id)+'">'+h(e.title)+'</button></td><td>'+dateText(e.date)+'</td><td>'+statusMarkup(e.status)+'</td><td>'+h(e.reviewNote||"—")+'</td></tr>').join("")+'</tbody></table></div></section>':"");
}
function renderDocuments(){
  const registrations=state.registrations.filter(r=>r.needsDocument&&eventById(r.eventId));
  main.innerHTML=pageHeading("Hujjatlarim","Tadbir sabab qoldirilgan darslar bo‘yicha universitet hujjatlarini kuzating.")+
    '<div class="info-banner">'+icon("shield")+'<span><strong>Hujjat universitet tomonidan beriladi.</strong><br>Ro‘yxatdan o‘tishning o‘zi darsni sababli qilmaydi. Mas’ul universitet buyrug‘ini biriktirgach, PDFni yuklab olib, tegishli bo‘limga taqdim etasiz.</span></div>'+
    (registrations.length?'<div class="doc-grid">'+registrations.map(r=>{
      const e=eventById(r.eventId),order=state.orders[e.id];
      return '<article class="doc-card"><div class="doc-icon">'+icon("file")+'</div><h3>'+h(e.title)+'</h3><p>'+dateText(e.date,true)+' · '+h(e.time)+' – '+h(e.endTime)+'<br>'+h(r.name)+' · '+h(r.group)+'</p><span class="status-badge '+(order?"":"pending")+'">'+icon(order?"check-circle":"clock")+(order?"Universitet buyrug‘i biriktirilgan":"Buyruq kutilmoqda")+'</span><div class="doc-bottom">'+(order?'<small>Buyruq № '+h(order.number)+'<br>'+dateText(order.date,true)+'</small><button class="button button-primary button-small" data-action="download-order" data-id="'+h(e.id)+'">'+icon("download")+'PDFni yuklab olish</button>':'<small>Mas’ul hujjatni biriktirgach,<br>yuklab olish tugmasi paydo bo‘ladi.</small><button class="button button-light button-small" data-action="detail" data-id="'+h(e.id)+'">Tadbir tafsilotlari '+icon("arrow-up-right")+'</button>')+'</div></article>';
    }).join("")+'</div>':emptyState("Hujjat so‘rovlari yo‘q","Tadbir darsingizga to‘g‘ri kelsa, ro‘yxatdan o‘tishda hujjat so‘rovini belgilang. Mavjud ishtirokingiz uchun ham so‘rov yuborishingiz mumkin.",'<a class="button button-primary" href="#registrations">Mening ishtirokim '+icon("arrow-right")+'</a>'));
}
function requestDocument(id){
  const r=registrationFor(id),e=eventById(id);if(!r||!e)return;
  showDialog(modalHead("Hujjat so‘rovi",e.title)+'<div class="dialog-body"><div class="info-banner">'+icon("file")+'<span>Tadbir darsingizga to‘g‘ri kelsa, darsdan ozod qilish buyrug‘i uchun so‘rovni qayd eting. Hujjat universitet tomonidan biriktiriladi.</span></div><div class="dialog-footer"><button class="button button-light" data-action="close">Yopish</button><button class="button button-primary" data-action="confirm-document" data-id="'+h(id)+'">So‘rovni yuborish '+icon("arrow-right")+'</button></div></div>');
}
function downloadOrder(id){
  const order=state.orders[id],r=registrationFor(id);
  if(!order||(!r?.needsDocument&&state.role!=="admin")){toast("Hujjatni yuklab olish imkoniyati mavjud emas.","error");return;}
  const parts=order.data.split(","),bytes=Uint8Array.from(atob(parts[1]),c=>c.charCodeAt(0));
  const url=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"}));
  const a=document.createElement("a");a.href=url;a.download="Renesans-buyruq-"+order.number.replace(/[^a-zA-Z0-9-]/g,"-")+".pdf";document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
  toast("Universitet buyrug‘i yuklab olinmoqda.");
}

/* Oy bo‘yicha taqvim. */
function renderCalendar(){
  const year=calendarDate.getFullYear(),month=calendarDate.getMonth();
  const offset=(new Date(year,month,1).getDay()+6)%7;
  const total=new Date(year,month+1,0).getDate(),cells=Math.ceil((total+offset)/7)*7;
  const all=approvedEvents();
  let days="";
  const today=new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Tashkent",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  for(let n=0;n<cells;n++){
    const date=new Date(year,month,n-offset+1),key=date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2,"0")+"-"+String(date.getDate()).padStart(2,"0");
    const events=all.filter(e=>e.date===key),outside=date.getMonth()!==month;
    days+='<'+(events.length?"button":"div")+' class="calendar-day '+(outside?"outside ":"")+(events.length?"has-events ":"")+(key===today?"is-today":"")+'" '+(events.length?'data-action="calendar-day" data-date="'+key+'" aria-label="'+dateText(key)+', '+events.length+' ta tadbir"':"")+'><span class="day-number">'+date.getDate()+'</span>'+events.slice(0,2).map(e=>'<span class="calendar-event">'+h(e.time)+' · '+h(e.title)+'</span>').join("")+(events.length>2?'<span class="calendar-more">+'+(events.length-2)+' ta tadbir</span>':"")+'</'+(events.length?"button":"div")+'>';
  }
  const monthly=all.filter(e=>e.date.startsWith(year+"-"+String(month+1).padStart(2,"0")));
  main.innerHTML=pageHeading("Har bir uchrashuv — bir imkoniyat.","Oy davomida bo‘ladigan tadbirlarni ko‘ring va rejalaringizni oldindan belgilang.")+
    '<section class="panel calendar-panel"><div class="panel-heading"><div class="calendar-toolbar"><button class="icon-button" data-action="calendar-prev" aria-label="Oldingi oy">'+icon("chevron-left")+'</button><h2>'+MONTHS[month]+' '+year+'</h2><button class="icon-button" data-action="calendar-next" aria-label="Keyingi oy">'+icon("chevron-right")+'</button></div><button class="button button-light button-small" data-action="calendar-today">Joriy oy '+icon("calendar")+'</button></div><div class="calendar-grid">'+["Du","Se","Ch","Pa","Ju","Sh","Ya"].map(d=>'<div class="calendar-weekday">'+d+'</div>').join("")+days+'</div><p class="panel-description" style="margin:16px 0 0">Bu oyda '+monthly.length+' ta tasdiqlangan tadbir. Tafsilotlarni ochish uchun belgilangan kunni bosing.</p></section>';
}
function showCalendarDay(date){
  const events=approvedEvents().filter(e=>e.date===date);
  showDialog(modalHead(dateText(date,true),"Shu kungi tasdiqlangan tadbirlar.")+'<div class="dialog-body"><div class="day-events-list">'+events.map(e=>'<div class="day-event-item"><div><h3>'+h(e.title)+'</h3><p>'+h(e.time)+' – '+h(e.endTime)+' · '+h(e.location)+'</p></div><button class="button button-light button-small" data-action="detail" data-id="'+h(e.id)+'">Ko‘rish '+icon("arrow-right")+'</button></div>').join("")+'</div></div>');
}

/* Tadbir taklif qilish. Har kim yubora oladi, faqat mas'ul tasdiqlaydi. */
function renderCreate(){
  const today=new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Tashkent",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  main.innerHTML=pageHeading("Yaxshi g‘oyani birga boshlaymiz.","Talaba, ustoz yoki tyutor — hamma tadbir taklif qilishi mumkin.")+
    '<div class="form-layout"><form id="createForm" class="panel"><h2 class="form-section-title"><span>01</span>Tadbir haqida</h2><div class="form-grid"><div class="field field-full"><label for="eventTitle">Tadbir nomi <span class="required">*</span></label><input id="eventTitle" name="title" required minlength="5" maxlength="100" placeholder="Masalan, Talabalar innovatsiya forumi"></div><div class="field"><label for="eventCategory">Yo‘nalish <span class="required">*</span></label><select id="eventCategory" name="category">'+CATEGORIES.filter(c=>c.id!=="all").map(c=>'<option value="'+c.id+'">'+c.label+'</option>').join("")+'</select></div><div class="field"><label for="eventScope">Tadbir ko‘lami <span class="required">*</span></label><select id="eventScope" name="scope"><option value="internal">Universitet ichida</option><option value="inter">Universitetlararo</option></select></div><div class="field field-full"><label for="eventDescription">Tadbir tavsifi <span class="required">*</span></label><textarea id="eventDescription" name="description" required minlength="20" maxlength="3000" placeholder="Tadbir maqsadi, dasturi va kimlar qatnashishi mumkinligini yozing..."></textarea><small>Kamida 20 belgi. Ishtirokchilar uchun kerakli ma’lumotlarni sodda yozing.</small></div></div><h2 class="form-section-title"><span>02</span>Vaqt va manzil</h2><div class="form-grid"><div class="field"><label for="eventDate">Sana <span class="required">*</span></label><input id="eventDate" name="date" type="date" required min="'+today+'"></div><div class="field"><label for="eventCapacity">Ishtirokchilar soni <span class="required">*</span></label><input id="eventCapacity" name="capacity" type="number" required min="1" max="10000" step="1" value="50"></div><div class="field"><label for="eventTime">Boshlanish vaqti <span class="required">*</span></label><input id="eventTime" name="time" type="time" required value="10:00"></div><div class="field"><label for="eventEndTime">Tugash vaqti <span class="required">*</span></label><input id="eventEndTime" name="endTime" type="time" required value="12:00"></div><div class="field field-full"><label for="eventUniversity">Mezbon universitet <span class="required">*</span></label><select id="eventUniversity" name="university">'+universityOptions(state.profile.university)+'</select></div><div class="field field-full"><label for="eventLocation">Aniq manzil <span class="required">*</span></label><input id="eventLocation" name="location" required minlength="3" maxlength="120" placeholder="Bino, qavat yoki xona raqami"></div><label class="check-field field-full"><input type="checkbox" name="orderNeeded"><span><strong>Tadbir dars vaqtida o‘tkaziladi</strong><small>Ishtirokchilar uchun universitetning darsdan ozod qilish buyrug‘i kerak bo‘lishi mumkin.</small></span></label></div><h2 class="form-section-title"><span>03</span>Tashkilotchi</h2><div class="form-grid"><div class="field"><label for="eventOrganizer">Ism / tashkilot nomi <span class="required">*</span></label><input id="eventOrganizer" name="organizer" required minlength="3" maxlength="100" value="'+h(state.profile.name)+'"></div><div class="field"><label for="eventOrganizerType">Siz kimsiz?</label><select id="eventOrganizerType" name="organizerType"><option>Talaba</option><option>Ustoz</option><option>Tyutor</option><option>Tashkilotchi</option></select></div></div><p class="form-error" id="createError" role="alert" style="margin-top:18px"></p><div class="form-actions"><a class="button button-light" href="#events">Orqaga</a><button class="button button-primary" type="submit">Ko‘rib chiqishga yuborish '+icon("arrow-right")+'</button></div></form><aside class="process-aside"><h3>Keyin nima bo‘ladi?</h3>'+[
      ["Taklif yuborasiz","Tadbirning asosiy ma’lumotlarini to‘ldiring."],["Mas’ul ko‘rib chiqadi","Universitet mas’uli ma’lumotlarni tekshiradi va qaror beradi."],["Tadbir e’lon qilinadi","Tasdiqlangan tadbirga ishtirokchilar ro‘yxatdan o‘ta oladi."],["Buyruq biriktiriladi","Zarur bo‘lsa, universitet rasmiy PDF hujjatini taqdim etadi."]
    ].map(([title,text],i)=>'<div class="process-step"><span class="step-number">'+(i+1)+'</span><div><strong>'+title+'</strong><p>'+text+'</p></div></div>').join("")+'<p class="process-footnote">Taklif holatini “Mening ishtirokim” bo‘limidagi “Men taklif qilgan tadbirlar” jadvalida kuzating.</p></aside></div>';
}
function submitCreate(form){
  const data=new FormData(form),values=Object.fromEntries(data.entries());
  for(const key of ["title","description","location","organizer"])values[key]=String(values[key]||"").trim();
  const error=$("#createError");
  if(values.title.length<5||values.description.length<20||values.location.length<3||values.organizer.length<3){error.textContent="Majburiy maydonlarni to‘liq kiriting. Tavsif kamida 20 belgidan iborat bo‘lsin.";return;}
  if(values.endTime<=values.time){error.textContent="Tugash vaqti boshlanish vaqtidan keyin bo‘lishi kerak.";return;}
  if(!Number.isFinite(new Date(values.date+"T"+values.time+":00+05:00").getTime())||new Date(values.date+"T"+values.time+":00+05:00").getTime()<=Date.now()){error.textContent="Tadbir uchun kelajakdagi sana va vaqtni tanlang.";return;}
  if(!Number.isInteger(Number(values.capacity))||Number(values.capacity)<1||Number(values.capacity)>10000){error.textContent="Ishtirokchilar soni 1 dan 10000 gacha butun son bo‘lishi kerak.";return;}
  const event={...values,id:uid("e"),capacity:Number(values.capacity),participants:0,orderNeeded:data.has("orderNeeded"),status:"pending",owner:"me",submittedAt:new Date().toISOString()};
  if(!commit(()=>{state.events.push(event);activity(event.title+" tadbiri ko‘rib chiqishga yuborildi.");}))return;
  updateChrome();
  main.innerHTML='<section class="panel success-panel">'+icon("check-circle")+'<p class="eyebrow">TASHABBUSINGIZ UCHUN RAHMAT</p><h2>Taklifingiz mas’ulga yuborildi.</h2><p>'+h(event.title)+' tadbiri hozir ko‘rib chiqilmoqda. Tasdiqlangach, u umumiy tadbirlar ro‘yxatida paydo bo‘ladi.</p><div class="success-reference">'+statusMarkup("pending")+'</div><a class="button button-primary" href="#registrations">Taklif holatini ko‘rish '+icon("arrow-right")+'</a></section>';
  window.scrollTo({top:0,behavior:state.settings.reducedMotion||window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches?"auto":"smooth"});toast("Tadbir taklifi yuborildi.");
}

/* Mas'ul paneli: namoyish roli, haqiqiy autentifikatsiya o‘rnini bosmaydi. */
function renderReview(){
  const pending=state.events.filter(e=>e.status==="pending");
  if(state.role!=="admin"){
    main.innerHTML=pageHeading("Tashabbuslar e’tiborsiz qolmaydi.","Universitet mas’ullari uchun tadbirlar va hujjatlarni boshqarish bo‘limi.")+
      '<section class="panel auth-card">'+icon("shield")+'<h2>Mas’ul panelini ko‘ring</h2><p>Demoda tadbirni tasdiqlash, sabab bilan rad etish va universitet buyrug‘ini biriktirish jarayonlarini sinab ko‘rishingiz mumkin.</p><button class="button button-primary" data-action="switch-admin">'+icon("user")+'Mas’ul rolida sinash</button><p style="font-size:10px;margin:17px 0 0">Demo rollari faqat jarayonni ko‘rsatish uchun.</p></section>';return;
  }
  const docsEvents=approvedEvents().filter(e=>e.orderNeeded||state.registrations.some(r=>r.eventId===e.id&&r.needsDocument));
  const list=reviewTab==="orders"?docsEvents:state.events.filter(e=>e.status===reviewTab);
  main.innerHTML=pageHeading("Hamjamiyat tashabbuslarini qo‘llab-quvvatlang.","Tadbirlarni ko‘rib chiqing va ishtirokchilar uchun buyruqlarni biriktiring.")+
    '<div class="summary-chips"><span class="summary-chip"><strong>'+pending.length+'</strong>yangi taklif</span><span class="summary-chip"><strong>'+approvedEvents().length+'</strong>tasdiqlangan</span><span class="summary-chip"><strong>'+Object.keys(state.orders).length+'</strong>buyruq biriktirilgan</span></div>'+
    '<div class="review-tabs" role="group" aria-label="Ko‘rib chiqish holati">'+[["pending","Yangi takliflar",pending.length],["approved","Tasdiqlangan",approvedEvents().length],["rejected","Rad etilgan",state.events.filter(e=>e.status==="rejected").length],["orders","Buyruqlar",docsEvents.length]].map(([id,title,count])=>'<button class="review-tab '+(reviewTab===id?"selected":"")+'" data-action="review-tab" data-tab="'+id+'" aria-pressed="'+(reviewTab===id)+'">'+title+'<span>'+count+'</span></button>').join("")+'</div>'+
    (reviewTab==="orders"?'<div class="info-banner">'+icon("file")+'<span><strong>Universitet tasdiqlagan hujjatni biriktiring.</strong><br>Buyruq raqami, sanasi va universitet bergan PDF talab qilinadi. Hujjat so‘ragan ishtirokchi uni o‘z bo‘limidan yuklab oladi.</span></div>':"")+
    (list.length?'<section class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Tadbir / tashkilotchi</th><th>Sana</th><th>'+(reviewTab==="orders"?"Buyruq holati":"Ko‘lam")+'</th><th>Amallar</th></tr></thead><tbody>'+list.map(e=>{
      const order=state.orders[e.id];
      return '<tr><td><button class="text-link table-title" data-action="detail" data-id="'+h(e.id)+'">'+h(e.title)+'</button><span class="table-sub">'+h(e.organizer)+' · '+h(e.organizerType)+'</span></td><td>'+dateText(e.date)+'<span class="table-sub">'+h(e.time)+' – '+h(e.endTime)+'</span></td><td>'+(reviewTab==="orders"?'<span class="status-badge '+(order?"":"pending")+'">'+(order?"№ "+h(order.number):"Biriktirilmagan")+'</span>':'<span class="table-sub">'+(e.scope==="inter"?"Universitetlararo":"Universitet ichida")+'</span>')+'</td><td><div class="row-actions">'+(reviewTab==="pending"?'<button class="button button-danger button-small" data-action="decision" data-decision="rejected" data-id="'+h(e.id)+'" aria-label="'+h(e.title)+' tadbirini rad etish">'+icon("x")+'</button><button class="button button-primary button-small" data-action="decision" data-decision="approved" data-id="'+h(e.id)+'">'+icon("check")+'Tasdiqlash</button>':reviewTab==="orders"?(order?'<button class="button button-light button-small" data-action="download-order" data-id="'+h(e.id)+'" aria-label="Buyruq PDFini yuklab olish">'+icon("download")+'</button>':"")+'<button class="button '+(order?"button-light":"button-primary")+' button-small" data-action="upload-order" data-id="'+h(e.id)+'">'+icon(order?"refresh":"upload")+(order?"Almashtirish":"Biriktirish")+'</button>':'<button class="button button-light button-small" data-action="participants" data-id="'+h(e.id)+'">'+icon("users")+'Ishtirokchilar</button>')+'</div></td></tr>';
    }).join("")+'</tbody></table></div></section>':emptyState(reviewTab==="pending"?"Barcha takliflar ko‘rib chiqilgan":"Bu bo‘limda hozircha yozuv yo‘q","Yangi ma’lumotlar shu yerda ko‘rinadi."));
}
function showDecision(id,decision){
  if(state.role!=="admin")return;
  const event=eventById(id);if(!event||event.status!=="pending")return;
  const approve=decision==="approved";
  showDialog(modalHead(approve?"Tadbirni tasdiqlash":"Taklifni rad etish",event.title)+
    '<div class="dialog-body"><form id="decisionForm" data-id="'+h(id)+'" data-decision="'+(approve?"approved":"rejected")+'" class="dialog-form"><div class="info-banner '+(approve?"":"warning")+'">'+icon(approve?"check-circle":"info")+'<span>'+(approve?"Tasdiqlangach, tadbir umumiy ro‘yxatda ko‘rinadi va ro‘yxatdan o‘tish ochiladi.":"Tashkilotchiga qaroringiz sababini tushuntiring. Izoh uning taklifi yonida ko‘rinadi.")+'</span></div><div class="field"><label for="decisionNote">'+(approve?"Izoh (ixtiyoriy)":"Rad etish sababi *")+'</label><textarea id="decisionNote" name="note" '+(approve?"":"required minlength=\"5\"")+' maxlength="500" placeholder="'+(approve?"Tashkilotchi uchun tavsiyalar...":"Masalan, ko‘rsatilgan zal bu vaqtda band...")+'"></textarea></div><p class="form-error" id="decisionError" role="alert"></p><div class="dialog-footer"><button type="button" class="button button-light" data-action="close">Orqaga</button><button type="submit" class="button '+(approve?"button-primary":"button-danger")+'">'+icon(approve?"check":"x")+(approve?"Tasdiqlash":"Rad etish")+'</button></div></form></div>');
}
function submitDecision(form){
  if(state.role!=="admin"){closeDialog();return;}
  const event=eventById(form.dataset.id),decision=form.dataset.decision,note=String(new FormData(form).get("note")||"").trim();
  if(!event||event.status!=="pending")return;
  if(decision==="rejected"&&note.length<5){$("#decisionError").textContent="Rad etish sababini kamida 5 belgi bilan yozing.";return;}
  if(!commit(()=>{event.status=decision;event.reviewNote=note;event.reviewedBy=state.profile.name;event.reviewedAt=new Date().toISOString();activity(event.title+" tadbiri "+(decision==="approved"?"tasdiqlandi.":"rad etildi. Izoh: "+note));}))return;
  closeDialog();render();toast(decision==="approved"?"Tadbir tasdiqlandi va e’lon qilindi.":"Taklif rad etildi. Sabab tashkilotchiga ko‘rinadi.");
}
function showUploadOrder(id){
  if(state.role!=="admin")return;
  const event=eventById(id);if(!event||event.status!=="approved")return;
  const order=state.orders[id],today=new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Tashkent",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  showDialog(modalHead(order?"Universitet buyrug‘ini almashtirish":"Universitet buyrug‘ini biriktirish",event.title)+
    '<div class="dialog-body"><form id="orderForm" data-id="'+h(id)+'" class="dialog-form"><div class="info-banner">'+icon("shield")+'<span>Universitet tomonidan berilgan buyruq PDFini yuklang. Platforma rasmiy hujjatni o‘zi yaratmaydi. Demo uchun 2 MB gacha bo‘lgan PDF qabul qilinadi.</span></div><div class="form-grid"><div class="field"><label for="orderNumber">Buyruq raqami *</label><input id="orderNumber" name="number" required maxlength="50" placeholder="Masalan, 142-T" value="'+h(order?.number||"")+'"></div><div class="field"><label for="orderDate">Buyruq sanasi *</label><input id="orderDate" name="date" type="date" required max="'+today+'" value="'+h(order?.date||today)+'"></div><div class="field field-full"><label for="orderFile">Universitet bergan PDF *</label><input id="orderFile" name="file" type="file" accept=".pdf,application/pdf" required><small>PDF, 2 MB gacha. Yuklangan fayl hujjat so‘ragan ishtirokchilarga ko‘rinadi.</small></div></div><label class="check-field"><input type="checkbox" name="confirmed" required><span>Ushbu fayl tegishli universitet tomonidan berilgan va tadbirga aloqador ekanini tasdiqlayman.</span></label><p class="form-error" id="orderError" role="alert"></p><div class="dialog-footer"><button type="button" class="button button-light" data-action="close">Orqaga</button><button type="submit" class="button button-primary">'+icon("upload")+'PDFni biriktirish</button></div></form></div>');
}
async function submitOrder(form){
  if(state.role!=="admin")return;
  const event=eventById(form.dataset.id);if(!event||event.status!=="approved")return;
  const data=new FormData(form),file=data.get("file"),error=$("#orderError"),number=String(data.get("number")).trim();
  if(!number){error.textContent="Buyruq raqamini kiriting.";return;}
  if(!file||file.size===0||file.size>2*1024*1024){error.textContent="2 MB gacha hajmdagi PDF faylni tanlang.";return;}
  const button=form.querySelector('[type="submit"]');button.disabled=true;
  try{
    const signature=await file.slice(0,5).text();
    if(signature!=="%PDF-"){error.textContent="Fayl PDF formatida emas. Universitet bergan PDFni tanlang.";return;}
    const content=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});
    if(state.role!=="admin"||!dialog.open)return;
    const order={number,date:String(data.get("date")),data:content,fileName:file.name,uploadedBy:state.profile.name,uploadedAt:new Date().toISOString()};
    if(!commit(()=>{state.orders[event.id]=order;activity(event.title+" tadbiri uchun № "+number+" universitet buyrug‘i biriktirildi.");})){
      error.textContent="Brauzer xotirasi yetmadi. Kichikroq PDF bilan qayta urinib ko‘ring.";return;
    }
    closeDialog();render();toast("Universitet buyrug‘i biriktirildi.");
  }catch(err){error.textContent="Faylni o‘qib bo‘lmadi. Qayta tanlab ko‘ring.";}
  finally{button.disabled=false;}
}
function showParticipants(id){
  if(state.role!=="admin")return;
  const event=eventById(id);if(!event)return;
  const participants=state.registrations.filter(r=>r.eventId===id);
  showDialog(modalHead("Ishtirokchilar",event.title)+'<div class="dialog-body"><div class="info-banner">'+icon("info")+'<span>Demodagi umumiy son: '+participantCount(event)+' ishtirokchi. Quyida shu brauzerda ro‘yxatdan o‘tgan '+participants.length+' ishtirokchining ma’lumotlari bor. Namunaviy umumiy son uchun shaxsiy ro‘yxat berilmagan.</span></div>'+
    (participants.length?'<div class="table-wrap"><table class="data-table"><thead><tr><th>Ishtirokchi</th><th>Universitet</th><th>Hujjat so‘rovi</th></tr></thead><tbody>'+participants.map(r=>'<tr><td>'+h(r.name)+'<span class="table-sub">'+h(r.group)+' · '+h(r.participantType)+'</span></td><td>'+h(r.university)+'</td><td>'+(r.needsDocument?"So‘ralgan":"So‘ralmagan")+'</td></tr>').join("")+'</tbody></table></div>':'<p class="detail-description">Shu brauzerda hali ishtirokchi ro‘yxatdan o‘tmagan.</p>')+
    '<div class="dialog-footer">'+(participants.length?'<button class="button button-light" data-action="export-participants" data-id="'+h(id)+'">'+icon("download")+'CSVni yuklab olish</button>':"")+'<button class="button button-primary" data-action="close">Yopish</button></div></div>');
}
function exportParticipants(id){
  if(state.role!=="admin")return;
  const records=state.registrations.filter(r=>r.eventId===id);
  const cell=value=>'"'+String(value??"").replace(/^[=+@\t\r-]/,"’$&").replace(/"/g,'""')+'"';
  const rows=[["Ism familiya","Guruh","Universitet","Ishtirokchi turi","Hujjat so‘rovi","Chipta kodi"],...records.map(r=>[r.name,r.group,r.university,r.participantType,r.needsDocument?"Ha":"Yo‘q",r.code])];
  const url=URL.createObjectURL(new Blob(["\uFEFF"+rows.map(row=>row.map(cell).join(",")).join("\r\n")],{type:"text/csv;charset=utf-8"})),a=document.createElement("a");
  a.href=url;a.download="ishtirokchilar.csv";document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
}

/* Ko‘rinish va shaxsiy sozlamalar. */
function renderSettings(){
  const choices=[
    {value:"light",name:"Oq rejim",description:"Yorug‘ va tiniq",icon:"sun"},
    {value:"dark",name:"Qora rejim",description:"Kechqurun ham qulay",icon:"moon"},
    {value:"system",name:"Qurilma rejimi",description:"Qurilmangizga mos",icon:"monitor"}
  ];
  main.innerHTML=pageHeading("Sozlamalar","Platformani o‘zingizga qulay qiling. Tanlovlar shu brauzerda saqlanadi.")+
    '<div class="settings-layout"><section class="panel appearance-panel" aria-labelledby="appearanceHeading"><div class="panel-heading"><div><p class="settings-overline">O‘ZINGIZGA MOSLANG</p><h2 id="appearanceHeading">Ko‘rinish</h2></div><span class="settings-autosave">'+icon("check-circle")+'Avtomatik saqlanadi</span></div><p class="panel-description">Yorug‘, qorong‘i yoki qurilmangizga mos ko‘rinishni tanlang.</p><fieldset class="theme-choices"><legend class="sr-only">Saytning rang rejimi</legend>'+choices.map(c=>
      '<label class="theme-choice"><input class="sr-only" type="radio" name="theme" value="'+c.value+'" '+(state.settings.theme===c.value?"checked":"")+'><span class="theme-option-body"><span class="theme-mini theme-mini-'+c.value+'" aria-hidden="true"><span class="mini-sidebar"><i></i><i></i><i></i></span><span class="mini-page"><i class="mini-heading"></i><i class="mini-banner"></i><span class="mini-cards"><i></i><i></i><i></i></span></span></span><span class="theme-option-name">'+icon(c.icon)+'<strong>'+c.name+'</strong><span class="theme-check">'+icon("check")+'</span></span><span class="theme-option-description">'+c.description+'</span></span></label>'
    ).join("")+'</fieldset><p class="settings-hint">'+icon("info")+'Rejimni yuqoridagi quyosh yoki oy tugmasidan ham almashtirishingiz mumkin.</p></section>'+
    '<form id="settingsProfileForm" class="panel settings-profile"><div class="panel-heading"><h2>Shaxsiy ma’lumotlar</h2><span class="settings-section-icon">'+icon("user")+'</span></div><div class="settings-profile-summary"><span class="avatar">'+h(initials(state.profile.name))+'</span><div><strong>'+h(state.profile.name)+'</strong><small>'+ROLE_NAMES[state.role]+' · Demo profil</small></div></div><div class="dialog-form"><div class="field"><label for="settingsName">Ism va familiya *</label><input id="settingsName" name="name" required minlength="3" maxlength="80" autocomplete="name" value="'+h(state.profile.name)+'"></div><div class="field"><label for="settingsGroup">Guruh / kafedra</label><input id="settingsGroup" name="group" maxlength="60" value="'+h(state.profile.group)+'"></div><div class="field"><label for="settingsUniversity">Universitet</label><select id="settingsUniversity" name="university">'+universityOptions(state.profile.university)+'</select><small>Yangi ro‘yxatdan o‘tish shakllarida shu ma’lumotlar ishlatiladi.</small></div><p class="form-error" id="settingsProfileError" role="alert"></p></div><div class="form-actions"><button class="button button-primary" type="submit">'+icon("check")+'Profilni saqlash</button></div></form>'+
    '<div class="settings-side"><section class="panel settings-preferences"><div class="panel-heading"><h2>Qulaylik</h2><span class="settings-section-icon">'+icon("settings")+'</span></div><div class="field"><label for="defaultView">Tadbirlarning boshlang‘ich ko‘rinishi</label><select id="defaultView"><option value="grid" '+(state.settings.defaultView==="grid"?"selected":"")+'>Kartalar ko‘rinishi</option><option value="list" '+(state.settings.defaultView==="list"?"selected":"")+'>Ro‘yxat ko‘rinishi</option></select></div><label class="setting-toggle"><span><strong>O‘z universitetimni ko‘rsatish</strong><small>Tadbirlar sahifasi avval profilingizdagi universitet bo‘yicha saralanadi.</small></span><input type="checkbox" id="ownUniversity" '+(state.settings.ownUniversity?"checked":"")+' role="switch"><span class="toggle-track" aria-hidden="true"></span></label><label class="setting-toggle"><span><strong>Animatsiyalarni kamaytirish</strong><small>Siljish va o‘tish effektlarini o‘chirish.</small></span><input type="checkbox" id="reducedMotion" '+(state.settings.reducedMotion?"checked":"")+' role="switch"><span class="toggle-track" aria-hidden="true"></span></label><p class="settings-hint">'+icon("check-circle")+'Bu tanlovlar avtomatik saqlanadi.</p></section>'+
    '<section class="panel settings-data"><div class="panel-heading"><h2>Demo ma’lumotlari</h2><span class="settings-section-icon">'+icon("refresh")+'</span></div><p class="panel-description">Tadbirlar, ishtiroklar, PDFlar, profil va sozlamalarni boshlang‘ich namunaga qaytarish.</p><button class="button button-danger button-small" data-action="reset-demo">'+icon("refresh")+'Demoni qayta boshlash</button></section></div></div>';
}

/* Profil, tushuntirishlar va umumiy hodisalar. */
function showProfile(){
  showDialog(modalHead("Demo profilim","Ishtirok shakllarida ishlatiladigan ma’lumotlarni o‘zgartiring.")+
    '<div class="dialog-body"><form id="profileForm" class="dialog-form"><div class="field"><label for="profileName">Ism va familiya *</label><input id="profileName" name="name" required minlength="3" maxlength="80" value="'+h(state.profile.name)+'" autocomplete="name"></div><div class="field"><label for="profileGroup">Guruh / kafedra</label><input id="profileGroup" name="group" maxlength="60" value="'+h(state.profile.group)+'"></div><div class="field"><label for="profileUniversity">Universitet</label><select id="profileUniversity" name="university">'+universityOptions(state.profile.university)+'</select></div><p class="form-error" id="profileError" role="alert"></p><div class="dialog-footer split"><a class="text-link" href="#settings">Barcha sozlamalar '+icon("arrow-right")+'</a><button type="submit" class="button button-primary">'+icon("check")+'Saqlash</button></div></form></div>');
}
function showAbout(){
  showDialog(modalHead("Bir hamjamiyat. Cheksiz imkoniyatlar.","Renesans — universitet tadbirlarini bir joyga jamlaydigan platforma.")+
    '<div class="dialog-body"><ul class="about-list"><li>'+icon("calendar")+'<span><strong>Kashf eting.</strong> Universitet ichidagi va universitetlararo tadbirlarni toping, taqvimda ko‘ring va ro‘yxatdan o‘ting.</span></li><li>'+icon("plus-square")+'<span><strong>Tashabbus ko‘rsating.</strong> Talabalar, ustozlar va tyutorlar tadbir taklif qilishi mumkin. E’lon mas’ul tasdiqlagach ko‘rinadi.</span></li><li>'+icon("file")+'<span><strong>Hujjatni kuzating.</strong> Darsga to‘g‘ri keladigan tadbir uchun buyruq so‘rang. Mas’ul universitet bergan PDFni biriktiradi.</span></li></ul><div class="info-banner warning" style="margin-top:22px">'+icon("info")+'<span><strong>Bu ishlaydigan interfeys demosidir.</strong><br>Ma’lumotlar faqat shu brauzerda saqlanadi. Rollarni almashtirish namoyish uchun. Boshqa foydalanuvchilar bilan umumiy ma’lumotlar, haqiqiy kirish va universitet tizimlari bilan bog‘lanish hali ulanmagan. Namunaviy tadbirlar rasmiy e’lon emas.</span></div><div class="dialog-footer"><button class="button button-primary" data-action="close">Tushunarli '+icon("check")+'</button></div></div>');
}
function showNotifications(){
  const notices=[...state.activity];
  const pendingCount=state.events.filter(e=>e.status==="pending").length;
  if(pendingCount)notices.push({text:pendingCount+" ta tadbir taklifi mas’ul ko‘rib chiqishini kutmoqda.",date:""});
  if(state.registrations.some(r=>r.needsDocument&&!state.orders[r.eventId]))notices.push({text:"Hujjat so‘rovingiz mavjud. Universitet buyrug‘i biriktirilishi kutilmoqda.",date:""});
  showDialog(modalHead("Bildirishnomalar","Demo davomida bajarilgan amallar va yangi holatlar.")+
    '<div class="dialog-body">'+(notices.length?notices.slice(0,12).map(n=>'<div class="notification-item">'+icon("bell")+'<div>'+h(n.text)+(n.date?'<small>'+new Intl.DateTimeFormat("uz-UZ",{timeZone:"Asia/Tashkent",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(new Date(n.date))+'</small>':"")+'</div></div>').join(""):'<p class="detail-description">Hozircha yangi bildirishnoma yo‘q.</p>')+'</div>');
}
function resetDemo(){
  showDialog(modalHead("Demoni qayta boshlash","Shu brauzerdagi demo ma’lumotlari boshlang‘ich namunalar bilan almashtiriladi.")+
    '<div class="dialog-body"><p class="detail-description">Siz qo‘shgan tadbirlar, ishtiroklar, yuklangan PDFlar, profil va sozlamalar o‘zgarishlari o‘chadi.</p><div class="dialog-footer"><button class="button button-light" data-action="close">Orqaga</button><button class="button button-danger" data-action="confirm-reset">Demoni qayta boshlash</button></div></div>');
}
function closeMobileMenu(){
  $("#sidebar").classList.remove("open");$("#mobileScrim").hidden=true;$("#mobileMenu").setAttribute("aria-expanded","false");
}
function setRole(role){
  if(!ROLE_NAMES[role])return;
  if(commit(()=>{state.role=role;})){closeDialog();render();toast(ROLE_NAMES[role]+" demo roli tanlandi.");}else updateChrome();
}
document.addEventListener("click",event=>{
  const button=event.target.closest("[data-action]");
  if(!button)return;
  const action=button.dataset.action,id=button.dataset.id;
  switch(action){
    case "close":closeDialog();break;
    case "detail":showEvent(id);break;
    case "join":showJoin(id);break;
    case "ticket":showTicket(id);break;
    case "cancel-registration":showCancel(id);break;
    case "confirm-cancel":cancelRegistration(id);break;
    case "request-document":requestDocument(id);break;
    case "confirm-document":{
      const r=registrationFor(id),e=eventById(id);
      if(r&&e&&commit(()=>{r.needsDocument=true;activity(e.title+" tadbiri uchun hujjat so‘rovi qayd etildi.");})){closeDialog();render();toast("Hujjat so‘rovi yuborildi.");}
      break;
    }
    case "download-order":downloadOrder(id);break;
    case "upload-order":showUploadOrder(id);break;
    case "decision":showDecision(id,button.dataset.decision);break;
    case "participants":showParticipants(id);break;
    case "export-participants":exportParticipants(id);break;
    case "review-tab":reviewTab=button.dataset.tab;renderReview();break;
    case "switch-admin":setRole("admin");break;
    case "profile":showProfile();break;
    case "toggle-theme":
      if(setPreference("theme",resolvedTheme()==="dark"?"light":"dark"))toast(resolvedTheme()==="dark"?"Qora rejim yoqildi.":"Oq rejim yoqildi.");
      break;
    case "about":showAbout();break;
    case "notifications":showNotifications();break;
    case "reset-demo":resetDemo();break;
    case "confirm-reset":
      if(commit(()=>{state=initialState();})){closeDialog();filters=defaultFilters();applyPreferences();reviewTab="pending";calendarDate=new Date(2026,10,1);if(routeName()!=="events")location.hash="events";else render();toast("Demo boshlang‘ich holatga qaytdi.");}
      break;
    case "category":
      filters.category=button.dataset.category;filters.limit=6;
      document.querySelectorAll(".category-tab").forEach(tab=>{const selected=tab.dataset.category===filters.category;tab.classList.toggle("selected",selected);tab.setAttribute("aria-pressed",String(selected));});
      renderEventResults();break;
    case "view":
      filters.view=button.dataset.view;
      document.querySelectorAll("[data-action=view]").forEach(tab=>{const selected=tab.dataset.view===filters.view;tab.classList.toggle("selected",selected);tab.setAttribute("aria-pressed",String(selected));});
      renderEventResults();break;
    case "clear-filters":filters={...filters,search:"",university:"all",scope:"all",category:"all",limit:6};renderEvents();break;
    case "load-more":filters.limit+=6;renderEventResults();break;
    case "calendar-prev":calendarDate=new Date(calendarDate.getFullYear(),calendarDate.getMonth()-1,1);renderCalendar();break;
    case "calendar-next":calendarDate=new Date(calendarDate.getFullYear(),calendarDate.getMonth()+1,1);renderCalendar();break;
    case "calendar-today":{const parts=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tashkent",year:"numeric",month:"numeric"}).formatToParts(new Date());calendarDate=new Date(Number(parts.find(p=>p.type==="year").value),Number(parts.find(p=>p.type==="month").value)-1,1);renderCalendar();break;}
    case "calendar-day":showCalendarDay(button.dataset.date);break;
  }
});
document.addEventListener("submit",event=>{
  const form=event.target;
  if(!["joinForm","createForm","decisionForm","orderForm","profileForm","settingsProfileForm"].includes(form.id))return;
  event.preventDefault();
  if(!form.reportValidity())return;
  if(form.id==="joinForm")submitJoin(form);
  else if(form.id==="createForm")submitCreate(form);
  else if(form.id==="decisionForm")submitDecision(form);
  else if(form.id==="orderForm")submitOrder(form);
  else if(form.id==="profileForm"||form.id==="settingsProfileForm"){
    const data=new FormData(form),name=String(data.get("name")).trim();
    if(name.length<3){$(form.id==="profileForm"?"#profileError":"#settingsProfileError").textContent="Ism va familiyangizni to‘liq kiriting.";return;}
    if(commit(()=>{state.profile={name,group:String(data.get("group")).trim(),university:String(data.get("university"))};})){if(state.settings.ownUniversity)filters.university=state.profile.university;closeDialog();render();toast("Profil saqlandi.");}
  }
});
document.addEventListener("input",event=>{
  if(event.target.id==="eventSearch"){filters.search=event.target.value;filters.limit=6;renderEventResults();}
});
document.addEventListener("change",event=>{
  if(event.target.name==="theme")setPreference("theme",event.target.value);
  if(event.target.id==="defaultView")setPreference("defaultView",event.target.value);
  if(event.target.id==="ownUniversity")setPreference("ownUniversity",event.target.checked);
  if(event.target.id==="reducedMotion")setPreference("reducedMotion",event.target.checked);
  if(event.target.id==="roleSelect")setRole(event.target.value);
  if(event.target.id==="universityFilter"){filters.university=event.target.value;filters.limit=6;renderEventResults();}
  if(event.target.id==="scopeFilter"){filters.scope=event.target.value;filters.limit=6;renderEventResults();}
});
$("#mobileMenu").addEventListener("click",()=>{
  const open=!$("#sidebar").classList.contains("open");
  $("#sidebar").classList.toggle("open",open);$("#mobileScrim").hidden=!open;$("#mobileMenu").setAttribute("aria-expanded",String(open));
});
$("#mobileScrim").addEventListener("click",closeMobileMenu);
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMobileMenu();});
dialog.addEventListener("click",event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeDialog();}});
dialog.addEventListener("close",()=>{if(modalReturnFocus?.isConnected)modalReturnFocus.focus();else main.focus({preventScroll:true});});
window.addEventListener("hashchange",()=>{closeDialog();render();window.scrollTo(0,0);main.focus({preventScroll:true});});
window.addEventListener("storage",event=>{if(event.key===STORE_KEY){const previous=state.settings;state=readState();if(previous.defaultView!==state.settings.defaultView)filters.view=state.settings.defaultView;if(previous.ownUniversity!==state.settings.ownUniversity||state.settings.ownUniversity)filters.university=state.settings.ownUniversity?state.profile.university:"all";applyPreferences();closeDialog();render();}});
systemTheme?.addEventListener?.("change",()=>{if(state.settings.theme==="system")applyPreferences();});
hydrateIcons();
applyPreferences();
render();
if(storageWarning)setTimeout(()=>toast("Brauzer xotirasini o‘qib bo‘lmadi. Boshlang‘ich demo ochildi.","error"),600);

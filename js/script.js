const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();

const style=document.createElement('style');
style.textContent=`
.system-map{position:relative;overflow:visible}
.portfolio-hint{position:absolute;z-index:4;width:54px;height:54px;padding:0;border:0;background:transparent;cursor:pointer}
.portfolio-hint__radius{position:absolute;inset:50% auto auto 50%;width:150px;height:150px;margin:-75px;border-radius:50%;background:#72a6ff18;opacity:0;transform:scale(.2);transition:opacity .45s ease,transform .45s ease}
.portfolio-hint__dot{position:absolute;z-index:2;inset:4px;display:grid;place-items:center;border:1px solid #dbe9ff;border-radius:50%;background:#10213d;color:#dbe9ff;font:700 11px/1 system-ui;letter-spacing:.06em;box-shadow:0 0 0 1px #72a6ff55;transition:transform .35s ease,background .35s ease,box-shadow .35s ease}
.system-map .portfolio-hint__radius{padding:0;background:#72a6ff18;border-radius:50%;font-size:inherit}
.system-map .portfolio-hint__dot{padding:0;background:#10213d;border-radius:50%;font-size:11px}
.portfolio-hint__content{position:absolute;z-index:5;top:-20px;left:calc(100% + 24px);width:min(210px,calc(100vw - 90px));padding:10px 12px 22px;border:1px solid #42658f;border-radius:5px;background:#0d1d36f2;color:#eef5ff;font:12px/1.45 system-ui;text-align:left;opacity:0;visibility:hidden;pointer-events:none;transform:translateX(-8px);transition:opacity .4s ease,visibility .4s ease,transform .4s ease;box-shadow:0 12px 24px #07112355}
.system-map .portfolio-hint__content{padding:10px 12px 22px;background:#0d1d36f2;border-radius:5px;font-size:12px}
.portfolio-hint__content::before{position:absolute;bottom:0;left:0;width:0;height:1px;background:#b9d4ff;content:"";transition:width .4s ease}
.portfolio-hint__content::after{position:absolute;bottom:0;left:0;width:58px;height:1px;background:#b9d4ff;content:"";transform:rotate(-35deg);transform-origin:0 50%}
.portfolio-hint--middle .portfolio-hint__content,.portfolio-hint--edge .portfolio-hint__content{right:calc(100% + 24px);left:auto;text-align:right;transform:translateX(8px)}
.portfolio-hint--middle .portfolio-hint__content{top:-92px}
.portfolio-hint--edge .portfolio-hint__content{top:calc(100% + 22px);right:0}
.portfolio-hint--middle .portfolio-hint__content::before,.portfolio-hint--middle .portfolio-hint__content::after,.portfolio-hint--edge .portfolio-hint__content::before,.portfolio-hint--edge .portfolio-hint__content::after{right:0;left:auto}
.portfolio-hint--middle .portfolio-hint__content::after,.portfolio-hint--edge .portfolio-hint__content::after{transform:rotate(35deg)}
.portfolio-hint:hover .portfolio-hint__radius,.portfolio-hint:focus .portfolio-hint__radius,.portfolio-hint[aria-expanded="true"] .portfolio-hint__radius{opacity:1;transform:scale(1)}
.portfolio-hint:hover .portfolio-hint__dot,.portfolio-hint:focus .portfolio-hint__dot,.portfolio-hint[aria-expanded="true"] .portfolio-hint__dot{background:#185abd;transform:scale(1.06);box-shadow:0 0 0 7px #72a6ff20}
.portfolio-hint:hover .portfolio-hint__content,.portfolio-hint:focus .portfolio-hint__content,.portfolio-hint[aria-expanded="true"] .portfolio-hint__content{opacity:1;visibility:visible;transform:translateX(0)}
.portfolio-hint:hover .portfolio-hint__content::before,.portfolio-hint:focus .portfolio-hint__content::before,.portfolio-hint[aria-expanded="true"] .portfolio-hint__content::before{width:150px}
.portfolio-hint:focus-visible{outline:2px solid #fff;outline-offset:5px;border-radius:50%}
.system-map:has(.portfolio-hint[aria-expanded="true"])>b,.system-map:has(.portfolio-hint[aria-expanded="true"])>span,.system-map:has(.portfolio-hint[aria-expanded="true"])>i,.system-map:has(.portfolio-hint[aria-expanded="true"])>strong,.system-map:has(.portfolio-hint[aria-expanded="true"])>small{opacity:.22;transition:opacity .25s ease}
.explore{grid-template-columns:repeat(6,1fr)}.explore article{grid-column:span 2}.explore article:nth-child(4){grid-column:2/span 2}.explore article:last-child{grid-column:4/span 2}
.platform-card{position:relative;min-height:285px;overflow:hidden;background:#10213d!important;color:#edf5ff!important;isolation:isolate;transition:transform .45s ease,box-shadow .45s ease}
.platform-card::before{position:absolute;inset:0;z-index:-1;background:linear-gradient(115deg,transparent 22%,#72a6ff2a 48%,transparent 74%);content:"";opacity:0;transform:translateX(-115%);transition:transform .75s ease,opacity .35s ease}
.platform-card::after{position:absolute;inset:17px;border:1px solid #8eb6ff;content:"";opacity:0;pointer-events:none;transform:rotate(8deg);transition:inset .45s ease,opacity .45s ease,transform .45s ease}
.platform-card:hover,.platform-card:focus-within{z-index:2;transform:translateY(-7px) scale(1.015);box-shadow:0 20px 42px #0d1d3644}.platform-card:hover::before,.platform-card:focus-within::before{opacity:1;transform:translateX(115%)}.platform-card:hover::after,.platform-card:focus-within::after{inset:13px;opacity:1;transform:rotate(0)}
.platform-card__visual{margin:-25px -25px 22px;padding:18px 20px;border-bottom:1px solid #42658f;background:#172d4d;color:#dce9ff;font:11px/1.65 ui-monospace,SFMono-Regular,Consolas,monospace}.platform-card__visual b{color:#8eb6ff}.platform-card__state{display:inline-block;margin-top:7px;color:#8ce0bd}.platform-card> b{display:block;color:#fff;font-size:1.08rem;letter-spacing:-.02em}.platform-card p{color:#c4d1e4!important}.platform-card small{color:#9ec4ff!important}
.platform-card__label{position:absolute;right:25px;bottom:14px;z-index:3;color:#8eb6ff;font:700 9px/1 system-ui;letter-spacing:.2em;opacity:0;text-transform:uppercase;transition:opacity .35s ease,letter-spacing .35s ease}.platform-card:hover .platform-card__label,.platform-card:focus-within .platform-card__label{opacity:1;letter-spacing:.12em}
.demo{position:relative;overflow:hidden;transition:transform .35s ease,box-shadow .35s ease}.demo::after{position:absolute;top:10px;right:10px;padding:6px 8px;border-radius:4px;background:#10213d;color:#fff;content:"PUBLIC DEMO";font-size:10px;font-weight:800;letter-spacing:.08em}.demo:hover,.demo:focus-within{transform:translateY(-6px);box-shadow:0 20px 38px #10213d25}
@media(max-width:960px){.explore{grid-template-columns:repeat(2,1fr)}.explore article,.explore article:nth-child(4),.explore article:last-child{grid-column:auto}.explore article:last-child{grid-column:1/span 2}}
@media(max-width:760px){.portfolio-hint{width:48px;height:48px}.portfolio-hint__radius{width:120px;height:120px;margin:-60px}.portfolio-hint__content{top:calc(100% + 18px);left:0;width:min(230px,calc(100vw - 72px));padding-bottom:14px;transform:translateY(-8px)}.portfolio-hint--middle .portfolio-hint__content{right:auto;left:50%;text-align:left;transform:translate(-50%,-8px)}.portfolio-hint--edge .portfolio-hint__content{right:0;left:auto;text-align:right;transform:translateY(-8px)}.portfolio-hint:hover .portfolio-hint__content,.portfolio-hint:focus .portfolio-hint__content,.portfolio-hint[aria-expanded="true"] .portfolio-hint__content{transform:translateY(0)}.portfolio-hint--middle:hover .portfolio-hint__content,.portfolio-hint--middle:focus .portfolio-hint__content,.portfolio-hint--middle[aria-expanded="true"] .portfolio-hint__content{transform:translateX(-50%)}.explore{grid-template-columns:1fr}.explore article,.explore article:nth-child(4),.explore article:last-child{grid-column:auto}.platform-card{min-height:0}}
`;
document.head.append(style);

const map=document.querySelector('.system-map');
const hints=[
  ['Multiple sources','Different devices, systems and data sources can feed a unified monitoring workflow.','18%','27%',''],
  ['Data processing','Structured data is processed before it is presented through a common operational interface.','48%','57%','portfolio-hint--middle'],
  ['Unified view','Monitoring information is presented through a single visual environment.','79%','77%','portfolio-hint--edge']
];
const closeHints=except=>document.querySelectorAll('.portfolio-hint').forEach(hint=>{if(hint!==except)hint.setAttribute('aria-expanded','false')});
hints.forEach((data,index)=>{
  const hint=document.createElement('button');
  hint.className=('portfolio-hint '+data[4]).trim();
  hint.type='button';hint.style.left=data[2];hint.style.top=data[3];
  hint.setAttribute('aria-label',data[0]);hint.setAttribute('aria-expanded','false');
  hint.innerHTML='<span class="portfolio-hint__radius" aria-hidden="true"></span><span class="portfolio-hint__dot" aria-hidden="true">0'+(index+1)+'</span><span class="portfolio-hint__content">'+data[1]+'</span>';
  hint.addEventListener('click',()=>{const willOpen=hint.getAttribute('aria-expanded')!=='true';closeHints(hint);hint.setAttribute('aria-expanded',String(willOpen))});
  map?.append(hint);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeHints()});

document.querySelectorAll('.explore article').forEach((card,index)=>{
  card.classList.add('platform-card');
  const visual=document.createElement('div');
  visual.className='platform-card__visual';
  visual.innerHTML='<b>TECHNICAL WORK / 0'+(index+1)+'</b><br>STATUS&nbsp;&nbsp; '+(index===1?'MULTI-SOURCE':'PROTOTYPE')+'<br>MODE&nbsp;&nbsp;&nbsp;&nbsp; LOCAL EXPLORATION<br><span class="platform-card__state">● SYNTHETIC VISUAL DATA</span>';
  const label=document.createElement('span');
  label.className='platform-card__label';
  label.textContent='Explore system';
  card.prepend(visual);
  card.append(label);
});

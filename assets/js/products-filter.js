document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('productGrid');
  if(!grid)return;

  const tabs=[...document.querySelectorAll('.category-tab[data-filter]')];
  const cards=[...grid.querySelectorAll('.product-card[data-category]')];
  if(!tabs.length||!cards.length)return;

  let toolbar=document.querySelector('.product-toolbar');
  const tabsWrap=document.querySelector('.category-tabs');
  let count=document.getElementById('productCount');

  if(!toolbar&&tabsWrap){
    toolbar=document.createElement('div');
    toolbar.className='product-toolbar';
    tabsWrap.parentNode.insertBefore(toolbar,tabsWrap);
    toolbar.appendChild(tabsWrap);
  }

  if(!count&&toolbar){
    count=document.createElement('p');
    count.id='productCount';
    count.className='product-count';
    count.setAttribute('aria-live','polite');
    toolbar.appendChild(count);
  }

  const updateUrl=filter=>{
    const url=new URL(window.location.href);
    if(filter==='all')url.searchParams.delete('category');
    else url.searchParams.set('category',filter);
    history.replaceState(null,'',url.pathname+url.search+url.hash);
  };

  const applyFilter=(filter,{syncUrl=true,focus=false}={})=>{
    let visible=0;

    cards.forEach(card=>{
      const show=filter==='all'||card.dataset.category===filter;
      card.hidden=!show;
      card.classList.toggle('is-hidden',!show);
      card.setAttribute('aria-hidden',String(!show));
      if(show){
        visible+=1;
        card.classList.add('is-entering');
        requestAnimationFrame(()=>requestAnimationFrame(()=>card.classList.remove('is-entering')));
      }
    });

    tabs.forEach(tab=>{
      const selected=tab.dataset.filter===filter;
      tab.classList.toggle('active',selected);
      tab.setAttribute('aria-selected',String(selected));
      tab.tabIndex=selected?0:-1;
      if(selected&&focus)tab.focus();
    });

    if(count)count.textContent=`Showing ${visible} ${visible===1?'product':'products'}`;
    if(syncUrl)updateUrl(filter);
  };

  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',event=>{
      event.preventDefault();
      event.stopPropagation();
      applyFilter(tab.dataset.filter);
    });

    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();
      let next=index;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
      if(event.key==='Home')next=0;
      if(event.key==='End')next=tabs.length-1;
      applyFilter(tabs[next].dataset.filter,{focus:true});
    });
  });

  const requested=new URLSearchParams(window.location.search).get('category');
  applyFilter(['shampoo','conditioner'].includes(requested)?requested:'all',{syncUrl:false});
});

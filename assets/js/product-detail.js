document.addEventListener('DOMContentLoaded',()=>{
  const products={
    'coconut-extract-shampoo':{
      name:'Coconut Extract Shampoo',category:'Shampoo',featured:'Coconut Extract',size:'1000 ml',madeIn:'USA',
      short:'A gentle, sulfate-free shampoo created to cleanse the hair and scalp while supporting hydration, softness and natural-looking shine.',
      description:'Shea Tea Tree Coconut Extract Shampoo is designed for hair that feels dry, dull or difficult to manage. Its gentle cleansing formula helps remove everyday dirt, oil and product buildup while supporting a softer and more moisturized feel. The coconut-inspired formula is suitable for regular wash routines and helps leave hair feeling clean, refreshed, smooth and easier to manage.',
      keywords:'coconut shampoo, sulfate-free shampoo, hydrating shampoo, moisturizing shampoo, vegan shampoo, shampoo for dry hair',
      image:'assets/images/products/coconut-shampoo-1.webp',gallery:['assets/images/products/coconut-shampoo-1.webp','assets/images/products/coconut-shampoo-2.webp'],
      features:['Gently cleanses the hair and scalp','Helps support moisture and softness','Promotes natural-looking shine','Suitable for regular wash routines','Sulfate-free formula','100% vegan herbal series','Large 1000 ml family-size bottle'],
      directions:['Wet the hair and scalp thoroughly.','Apply a suitable amount of shampoo.','Massage gently into the scalp and work through the hair.','Rinse thoroughly.','Repeat when necessary.','Follow with a suitable Shea Tea Tree conditioner.'],
      faq:[['Is this shampoo sulfate-free?','Yes. The product label identifies it as sulfate-free.'],['What hair type is it suitable for?','It is suitable for normal, dry, dull and difficult-to-manage hair.'],['Can it be used regularly?','Yes. It is designed for regular cleansing routines.'],['Does it help dry hair?','The formula is designed to support hydration, softness and shine.'],['What is the bottle size?','1000 ml.']]
    },
    'jojoba-oil-shampoo':{
      name:'Jojoba Oil Shampoo',category:'Shampoo',featured:'Jojoba Oil',size:'1000 ml',madeIn:'USA',
      short:'A gentle, sulfate-free shampoo with jojoba oil designed to cleanse the hair while supporting balanced moisture, softness and manageability.',
      description:'Shea Tea Tree Jojoba Oil Shampoo helps remove dirt, oil and everyday buildup without leaving hair feeling excessively dry. Its moisture-supporting formula helps hair feel softer, smoother and easier to style after washing. Jojoba oil is commonly used in hair-care routines for its lightweight conditioning properties, making this shampoo suitable for hair that needs gentle cleansing and balanced moisture.',
      keywords:'jojoba oil shampoo, sulfate-free shampoo, moisturizing shampoo, gentle shampoo, vegan shampoo, shampoo for soft hair',
      image:'assets/images/products/jojoba-oil-shampoo.webp',gallery:['assets/images/products/jojoba-oil-shampoo.webp'],
      features:['Gently cleanses hair and scalp','Helps support balanced moisture','Promotes softness and smoothness','Helps improve manageability','Suitable for regular use','Sulfate-free formula','100% vegan herbal series','1000 ml bottle'],
      directions:['Wet the hair thoroughly.','Apply shampoo to the scalp and hair.','Massage gently until a lather forms.','Work the product through the lengths.','Rinse thoroughly.','Repeat if required and follow with conditioner.'],
      faq:[['What does jojoba oil shampoo do?','It helps cleanse while supporting softness, moisture and manageability.'],['Is it suitable for dry hair?','Yes. It is suitable for hair that needs gentle cleansing and moisture support.'],['Is it sulfate-free?','Yes, according to the product label.'],['Can it be used regularly?','Yes. It can be included in a normal wash routine.'],['What is the size?','1000 ml.']]
    },
    'moroccan-argan-oil-shampoo':{
      name:'Moroccan Argan Oil Shampoo',category:'Shampoo',featured:'Moroccan Argan Oil',size:'1000 ml',madeIn:'USA',
      short:'A moisture-focused, sulfate-free shampoo with Moroccan argan oil for dry, dull or difficult-to-manage hair.',
      description:'Shea Tea Tree Moroccan Argan Oil Shampoo gently cleanses the hair and scalp while helping maintain softness, moisture and natural-looking shine. The formula is especially suitable for dry, rough, dull or difficult-to-manage hair. It helps remove everyday buildup while leaving the hair feeling cleaner, smoother and more manageable. For a complete routine, use it with Shea Tea Tree Moroccan Argan Oil Conditioner.',
      keywords:'argan oil shampoo, Moroccan argan oil shampoo, sulfate-free shampoo, shampoo for dry hair, moisturizing shampoo, vegan shampoo',
      image:'assets/images/products/moroccan-argan-oil-shampoo.webp',gallery:['assets/images/products/moroccan-argan-oil-shampoo.webp'],
      features:['Gently cleanses without harsh sulfates','Helps support moisture and softness','Suitable for dry and dull-looking hair','Helps improve manageability','Supports natural-looking shine','100% vegan herbal series','Large 1000 ml bottle'],
      directions:['Wet the hair and scalp.','Apply a suitable amount of shampoo.','Massage gently into the scalp.','Work the lather through the hair.','Rinse thoroughly.','Repeat if needed.','Follow with Moroccan Argan Oil Conditioner.'],
      faq:[['Who should use this shampoo?','It is suitable for dry, dull, rough or difficult-to-manage hair.'],['Does it contain Moroccan argan oil?','Moroccan argan oil is the featured ingredient shown on the product label.'],['Is it sulfate-free?','Yes.'],['What conditioner should be used with it?','Moroccan Argan Oil Conditioner is the recommended matching product.'],['What is the size?','1000 ml.']]
    },
    'tea-tree-extract-conditioner':{
      name:'Tea Tree Extract Conditioner',category:'Conditioner',featured:'Tea Tree Extract',size:'1000 ml',madeIn:'USA',
      short:'A lightweight conditioner with tea tree extract designed to support softness, manageability, moisture and a refreshed scalp-care routine.',
      description:'Shea Tea Tree Tea Tree Extract Conditioner provides moisture and softness without making the hair feel excessively heavy. The formula helps improve manageability, reduce the feeling of dryness and support a clean, refreshed hair-care routine. It is suitable for customers who want everyday conditioning together with scalp-comfort support.',
      keywords:'tea tree conditioner, scalp comfort conditioner, sulfate-free conditioner, moisturizing conditioner, vegan conditioner, conditioner for soft hair',
      image:'assets/images/products/tea-tree-extract-conditioner.webp',gallery:['assets/images/products/tea-tree-extract-conditioner.webp'],
      features:['Provides lightweight moisture','Helps soften and smooth hair','Supports easier detangling','Helps improve manageability','Supports a refreshed scalp-care routine','Sulfate-free formula','100% vegan herbal series','1000 ml bottle'],
      directions:['Shampoo and rinse the hair.','Apply conditioner to clean, wet hair.','Focus on the mid-lengths and ends.','Distribute evenly through the hair.','Leave for 2–3 minutes.','Rinse thoroughly.'],
      faq:[['Is this conditioner suitable for scalp-care routines?','Yes. Tea tree extract is the featured ingredient, and the product is positioned for scalp comfort.'],['Does it provide moisture?','Yes. The label states that it provides intense moisture.'],['Can it help with detangling?','It is designed to improve softness and manageability, which can support easier detangling.'],['Is it sulfate-free?','Yes.'],['What is the size?','1000 ml.']]
    },
    'rosemary-extract-conditioner':{
      name:'Rosemary Extract Conditioner',category:'Conditioner',featured:'Rosemary Extract',size:'1000 ml',madeIn:'USA',
      short:'A moisturizing conditioner with rosemary extract designed to soften hair, support manageability and complement a refreshing hair-care routine.',
      description:'Shea Tea Tree Rosemary Extract Conditioner helps improve the feel of dry, rough or difficult-to-manage hair. Its moisturizing formula supports softness, smoothness and easier styling while rosemary extract gives the product a refreshing botanical identity. It is suitable for regular conditioning routines and can be used after shampooing.',
      keywords:'rosemary conditioner, rosemary extract conditioner, sulfate-free conditioner, moisturizing conditioner, vegan conditioner, conditioner for dry hair',
      image:'assets/images/products/rosemary-extract-conditioner.webp',gallery:['assets/images/products/rosemary-extract-conditioner.webp'],
      features:['Helps soften and condition hair','Supports smoother-feeling strands','Helps improve manageability','Supports easier detangling','Suitable for regular use','Sulfate-free formula','100% vegan herbal series','1000 ml bottle'],
      directions:['Apply after shampooing.','Distribute through clean, wet hair.','Focus on the mid-lengths and ends.','Leave for 2–3 minutes.','Rinse thoroughly.','Use regularly according to the hair’s moisture needs.'],
      faq:[['What hair type is this conditioner suitable for?','It is suitable for normal, dry, rough and difficult-to-manage hair.'],['Does it contain rosemary extract?','Rosemary extract is the featured ingredient on the product label.'],['Can it be used regularly?','Yes.'],['Is it sulfate-free?','Yes.'],['What is the bottle size?','1000 ml.']]
    },
    'shea-butter-conditioner':{
      name:'Shea Butter Conditioner',category:'Conditioner',featured:'Shea Butter',size:'1000 ml',madeIn:'USA',
      short:'A rich shea butter conditioner designed to provide moisture, softness and easier detangling for dry, coarse or textured hair.',
      description:'Shea Tea Tree Shea Butter Conditioner provides rich moisture for hair that feels dry, rough, coarse or difficult to manage. The nourishing formula helps improve softness, flexibility and smoothness while supporting easier detangling and styling. It is especially suitable for textured hair or hair that needs additional moisture care.',
      keywords:'shea butter conditioner, conditioner for dry hair, conditioner for textured hair, sulfate-free conditioner, moisturizing conditioner, vegan conditioner',
      image:'assets/images/products/shea-butter-conditioner.webp',gallery:['assets/images/products/shea-butter-conditioner.webp'],
      features:['Provides rich moisture','Helps soften dry and coarse hair','Suitable for textured hair','Supports easier detangling','Helps improve smoothness and manageability','Sulfate-free formula','100% vegan herbal series','Large 1000 ml bottle'],
      directions:['Wash and rinse the hair.','Apply generously to clean, wet hair.','Focus on dry areas, mid-lengths and ends.','Leave for 2–5 minutes.','Detangle gently if needed.','Rinse thoroughly.'],
      faq:[['Is this suitable for textured hair?','Yes. It is suitable for dry, coarse, curly and textured hair that needs rich moisture.'],['Does it help with detangling?','It is designed to improve softness and manageability, which supports easier detangling.'],['Can it be used on very dry hair?','Yes. It is one of the richer conditioning options in the product range.'],['Is it sulfate-free?','Yes.'],['What is the size?','1000 ml.']]
    },
    'moroccan-argan-oil-conditioner':{
      name:'Moroccan Argan Oil Conditioner',category:'Conditioner',featured:'Moroccan Argan Oil',size:'1000 ml',madeIn:'USA',
      short:'A rich conditioner with Moroccan argan oil designed to support moisture, softness, smoothness, shine and easier detangling.',
      description:'Shea Tea Tree Moroccan Argan Oil Conditioner delivers intensive moisture for hair that feels dry, dull, rough or difficult to manage. Its conditioning formula helps soften the hair, support natural-looking shine, improve smoothness and make detangling easier. It is the recommended follow-up product after Moroccan Argan Oil Shampoo.',
      keywords:'Moroccan argan oil conditioner, argan oil conditioner, conditioner for dry hair, sulfate-free conditioner, moisturizing conditioner, vegan conditioner',
      image:'assets/images/products/moroccan-argan-oil-conditioner.webp',gallery:['assets/images/products/moroccan-argan-oil-conditioner.webp'],
      features:['Provides intensive moisture','Helps soften dry and dull hair','Supports smoothness and shine','Helps improve manageability','Supports easier detangling','Sulfate-free formula','100% vegan herbal series','1000 ml bottle'],
      directions:['Shampoo and rinse thoroughly.','Apply conditioner to clean, wet hair.','Distribute from the mid-lengths to the ends.','Leave for 2–3 minutes.','Detangle gently if required.','Rinse thoroughly.'],
      faq:[['What hair type is it suitable for?','It is suitable for dry, dull, rough and difficult-to-manage hair.'],['Can it be paired with the argan oil shampoo?','Yes. It is the recommended matching conditioner.'],['Does it help improve shine?','The formula is designed to support smoothness and natural-looking shine.'],['Is it sulfate-free?','Yes.'],['What is the size?','1000 ml.']]
    }
  };

  const slug=new URLSearchParams(location.search).get('product')||'coconut-extract-shampoo';
  const product=products[slug]||products['coconut-extract-shampoo'];
  const $=id=>document.getElementById(id);
  document.title=`${product.name} 1000 ml | Shea Tea Tree`;
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content=`Discover Shea Tea Tree ${product.name}, a sulfate-free hair-care formula designed for softness, moisture and manageability.`;
  $('productCategory').textContent=product.category;
  $('productName').textContent=product.name;
  $('productShort').textContent=product.short;
  $('productSize').textContent=product.size;
  $('productCategorySpec').textContent=product.category;
  $('productFeatured').textContent=product.featured;
  $('productMadeIn').textContent=product.madeIn;
  $('productKeywords').textContent=product.keywords;
  $('productDescription').textContent=product.description;
  $('productMainImage').src=product.image;
  $('productMainImage').alt=`Shea Tea Tree ${product.name}`;
  $('productGallery').innerHTML=product.gallery.map((src,i)=>`<button class="gallery-thumb${i===0?' active':''}" type="button" aria-label="View ${product.name} image ${i+1}"><img src="${src}" alt="${product.name} view ${i+1}"></button>`).join('');
  $('productGallery').querySelectorAll('button').forEach((btn,i)=>btn.addEventListener('click',()=>{
    $('productMainImage').src=product.gallery[i];
    $('productGallery').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }));
  $('productFeatures').innerHTML=product.features.map(item=>`<li>${item}</li>`).join('');
  $('productDirections').innerHTML=product.directions.map(item=>`<li>${item}</li>`).join('');
  $('productFaq').innerHTML=product.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');
  document.querySelectorAll('[data-product-name]').forEach(el=>el.textContent=product.name);

  const related=Object.entries(products).filter(([key])=>key!==slug).slice(0,3);
  $('relatedProducts').innerHTML=related.map(([key,p])=>`<article class="card product-card"><img src="${p.image}" alt="${p.name}" loading="lazy"><div class="card-body"><span class="tag">${p.category}</span><h3>${p.name}</h3><p class="muted">${p.short}</p><a href="product.html?product=${key}">View Details →</a></div></article>`).join('');

  const inquiry=`Hello, I am interested in Shea Tea Tree ${product.name} (${product.size}).`;
  $('whatsappInquiry').href=`https://wa.me/251907707002?text=${encodeURIComponent(inquiry)}`;
});

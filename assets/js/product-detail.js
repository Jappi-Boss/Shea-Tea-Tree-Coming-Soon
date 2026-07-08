document.addEventListener('DOMContentLoaded', () => {
  const products = {
    'coconut-extract-shampoo': {
      name: 'Coconut Extract Shampoo',
      category: 'Shampoo',
      featured: 'Coconut Extract',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A sulfate-free coconut shampoo created to gently cleanse while supporting hydration, softness, and natural-looking shine.',
      description: 'Shea Tea Tree Coconut Extract Shampoo removes everyday buildup while helping hair maintain a soft and moisturized feel. Its gentle cleansing formula is suitable for regular use and leaves hair feeling clean, refreshed, and easier to manage.',
      keywords: 'coconut shampoo, sulfate-free shampoo, hydrating shampoo, moisturizing shampoo, vegan shampoo, shampoo for dry hair',
      image: 'assets/images/products/coconut-shampoo-1.webp',
      gallery: [
        'assets/images/products/coconut-shampoo-1.webp',
        'assets/images/products/coconut-shampoo-2.webp'
      ],
      features: [
        'Gently cleanses hair and scalp',
        'Supports hydration and softness',
        'Helps maintain natural-looking shine',
        'Suitable for regular use',
        'Sulfate-free and vegan formula'
      ],
      directions: [
        'Apply to wet hair and scalp.',
        'Massage gently into a lather, then rinse thoroughly.',
        'Repeat when necessary and follow with conditioner.'
      ],
      faq: [
        ['Is this shampoo sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['What hair type is it suitable for?', 'It is suitable for hair that needs gentle cleansing, hydration, softness, and improved manageability.'],
        ['Can it be used regularly?', 'Yes. It is designed for regular hair-care routines.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    },
    'jojoba-oil-shampoo': {
      name: 'Jojoba Oil Shampoo',
      category: 'Shampoo',
      featured: 'Jojoba Oil',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A gentle, sulfate-free shampoo with jojoba oil to cleanse, soften, and support balanced moisture.',
      description: 'Shea Tea Tree Jojoba Oil Shampoo removes dirt and product buildup while helping hair retain a smooth and conditioned feel. Its gentle formula supports softness, manageability, and a fresh, clean finish.',
      keywords: 'jojoba oil shampoo, sulfate-free shampoo, moisturizing shampoo, gentle shampoo, vegan shampoo, shampoo for soft hair',
      image: 'assets/images/products/jojoba-oil-shampoo.webp',
      gallery: ['assets/images/products/jojoba-oil-shampoo.webp'],
      features: [
        'Cleanses hair and scalp gently',
        'Supports balanced moisture',
        'Helps hair feel soft and smooth',
        'Improves manageability for everyday styling',
        'Sulfate-free and vegan formula'
      ],
      directions: [
        'Apply to wet hair and massage gently into the scalp and lengths.',
        'Rinse thoroughly and repeat if required.',
        'Follow with a suitable conditioner.'
      ],
      faq: [
        ['What does jojoba oil shampoo do?', 'It gently cleanses while supporting balanced moisture, softness, and manageability.'],
        ['Is it sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['Can it be used regularly?', 'Yes. It is suitable for everyday hair-care routines.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    },
    'moroccan-argan-oil-shampoo': {
      name: 'Moroccan Argan Oil Shampoo',
      category: 'Shampoo',
      featured: 'Moroccan Argan Oil',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A moisturizing, sulfate-free shampoo with Moroccan argan oil for dry, dull, or difficult-to-manage hair.',
      description: 'Shea Tea Tree Moroccan Argan Oil Shampoo gently cleanses while helping hair feel softer, smoother, and more manageable. The moisture-focused formula supports healthy-looking shine and is ideal for hair that feels dry or lacks softness.',
      keywords: 'argan oil shampoo, Moroccan argan oil shampoo, sulfate-free shampoo, shampoo for dry hair, moisturizing shampoo, vegan shampoo',
      image: 'assets/images/products/moroccan-argan-oil-shampoo.webp',
      gallery: ['assets/images/products/moroccan-argan-oil-shampoo.webp'],
      features: [
        'Gently cleanses without harsh sulfates',
        'Helps support moisture and softness',
        'Suitable for dry or dull-looking hair',
        'Helps improve manageability',
        'Vegan formula'
      ],
      directions: [
        'Massage into wet hair and scalp until lather forms.',
        'Rinse thoroughly and repeat if needed.',
        'Follow with Moroccan Argan Oil Conditioner.'
      ],
      faq: [
        ['Who should use this shampoo?', 'It is suitable for dry, dull, or difficult-to-manage hair.'],
        ['Is it sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['Which conditioner pairs with it?', 'Moroccan Argan Oil Conditioner is the recommended matching product.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    },
    'tea-tree-extract-conditioner': {
      name: 'Tea Tree Extract Conditioner',
      category: 'Conditioner',
      featured: 'Tea Tree Extract',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A lightweight, moisturizing conditioner with tea tree extract for softer hair and a clean, refreshed scalp-care routine.',
      description: 'Shea Tea Tree Tea Tree Extract Conditioner provides moisture without weighing hair down. It helps improve softness and manageability while supporting a fresh, comfortable feeling after every wash.',
      keywords: 'tea tree conditioner, scalp comfort conditioner, sulfate-free conditioner, moisturizing conditioner, vegan conditioner, conditioner for soft hair',
      image: 'assets/images/products/tea-tree-extract-conditioner.webp',
      gallery: ['assets/images/products/tea-tree-extract-conditioner.webp'],
      features: [
        'Provides lightweight moisture',
        'Helps soften and smooth hair',
        'Supports a refreshed scalp-care routine',
        'Makes hair easier to detangle and style',
        'Sulfate-free and vegan formula'
      ],
      directions: [
        'After shampooing, apply to wet hair from mid-lengths to ends.',
        'Leave for 2–3 minutes.',
        'Rinse completely.'
      ],
      faq: [
        ['Does this conditioner provide moisture?', 'Yes. It provides lightweight moisture without weighing hair down.'],
        ['Can it support detangling?', 'Yes. It helps improve softness and manageability, making hair easier to detangle and style.'],
        ['Is it sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    },
    'rosemary-extract-conditioner': {
      name: 'Rosemary Extract Conditioner',
      category: 'Conditioner',
      featured: 'Rosemary Extract',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A moisturizing rosemary conditioner designed to soften hair, support scalp comfort, and leave hair feeling smooth and refreshed.',
      description: 'Shea Tea Tree Rosemary Extract Conditioner provides everyday moisture for hair that feels dry, rough, or difficult to manage. The lightweight formula helps improve softness and manageability while complementing a refreshing hair-care routine.',
      keywords: 'rosemary conditioner, rosemary extract conditioner, sulfate-free conditioner, moisturizing conditioner, vegan conditioner, conditioner for dry hair',
      image: 'assets/images/products/rosemary-extract-conditioner.webp',
      gallery: ['assets/images/products/rosemary-extract-conditioner.webp'],
      features: [
        'Helps soften and condition hair',
        'Supports smoother, more manageable strands',
        'Helps reduce the feeling of dryness',
        'Suitable for regular hair-care routines',
        'Sulfate-free and vegan formula'
      ],
      directions: [
        'Apply evenly to clean, wet hair.',
        'Focus on the mid-lengths and ends and leave for 2–3 minutes.',
        'Rinse well.'
      ],
      faq: [
        ['What hair type is it suitable for?', 'It is suitable for hair that feels dry, rough, or difficult to manage.'],
        ['Can it be used regularly?', 'Yes. It is suitable for regular hair-care routines.'],
        ['Is it sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    },
    'shea-butter-conditioner': {
      name: 'Shea Butter Conditioner',
      category: 'Conditioner',
      featured: 'Shea Butter',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A deeply moisturizing shea butter conditioner for dry, coarse, textured, or difficult-to-manage hair.',
      description: 'Shea Tea Tree Shea Butter Conditioner helps replenish moisture and improve the feel of dry or rough hair. Its rich conditioning formula supports softness, flexibility, and easier detangling, making it ideal for hair that needs extra care.',
      keywords: 'shea butter conditioner, conditioner for dry hair, conditioner for textured hair, sulfate-free conditioner, moisturizing conditioner, vegan conditioner',
      image: 'assets/images/products/shea-butter-conditioner.webp',
      gallery: ['assets/images/products/shea-butter-conditioner.webp'],
      features: [
        'Provides rich moisture for dry hair',
        'Helps soften coarse or textured strands',
        'Supports easier detangling',
        'Helps hair feel smoother and more manageable',
        'Sulfate-free and vegan formula'
      ],
      directions: [
        'Apply generously to clean, wet hair, concentrating on dry areas and the ends.',
        'Leave for 2–5 minutes.',
        'Rinse thoroughly.'
      ],
      faq: [
        ['Is it suitable for textured hair?', 'Yes. It is designed for dry, coarse, textured, or difficult-to-manage hair.'],
        ['Does it support detangling?', 'Yes. The rich conditioning formula supports softness and easier detangling.'],
        ['Is it sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    },
    'moroccan-argan-oil-conditioner': {
      name: 'Moroccan Argan Oil Conditioner',
      category: 'Conditioner',
      featured: 'Moroccan Argan Oil',
      size: '1000 ml',
      madeIn: 'USA',
      short: 'A rich, sulfate-free conditioner formulated with Moroccan argan oil to help soften, smooth, and improve the manageability of dry or dull hair.',
      description: 'Shea Tea Tree Moroccan Argan Oil Conditioner delivers intense moisture while helping hair feel softer, smoother, and easier to detangle. Its nourishing formula supports healthy-looking shine without leaving hair feeling heavy.',
      keywords: 'Moroccan argan oil conditioner, argan oil conditioner, conditioner for dry hair, sulfate-free conditioner, moisturizing conditioner, vegan conditioner',
      image: 'assets/images/products/moroccan-argan-oil-conditioner.webp',
      gallery: ['assets/images/products/moroccan-argan-oil-conditioner.webp'],
      features: [
        'Helps moisturize dry and dull hair',
        'Supports softness and smoothness',
        'Makes detangling and styling easier',
        'Helps improve natural-looking shine',
        'Sulfate-free and vegan formula'
      ],
      directions: [
        'Apply to clean, wet hair after shampooing.',
        'Distribute from mid-lengths to ends and leave for 2–3 minutes.',
        'Rinse thoroughly.'
      ],
      faq: [
        ['What hair type is it suitable for?', 'It is suitable for dry, dull, or difficult-to-manage hair.'],
        ['Can it be paired with the argan oil shampoo?', 'Yes. It is the recommended follow-up to Moroccan Argan Oil Shampoo.'],
        ['Does it support shine?', 'Yes. The formula supports softness, smoothness, and healthy-looking shine.'],
        ['Is it sulfate-free?', 'Yes. The product is presented as sulfate-free.'],
        ['What is the bottle size?', '1000 ml.']
      ]
    }
  };

  const slug = new URLSearchParams(window.location.search).get('product') || 'coconut-extract-shampoo';
  const product = products[slug] || products['coconut-extract-shampoo'];
  const $ = id => document.getElementById(id);

  document.title = `${product.name} 1000 ml | Shea Tea Tree`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = product.short;

  $('productCategory').textContent = product.category;
  $('productName').textContent = product.name;
  $('productShort').textContent = product.short;
  $('productSize').textContent = product.size;
  $('productCategorySpec').textContent = product.category;
  $('productFeatured').textContent = product.featured;
  $('productMadeIn').textContent = product.madeIn;
  $('productKeywords').textContent = product.keywords;
  $('productDescription').textContent = product.description;
  $('productMainImage').src = product.image;
  $('productMainImage').alt = `Shea Tea Tree ${product.name} 1000 ml`;

  $('productGallery').innerHTML = product.gallery.map((src, index) => `
    <button class="gallery-thumb${index === 0 ? ' active' : ''}" type="button" aria-label="View ${product.name} image ${index + 1}">
      <img src="${src}" alt="Shea Tea Tree ${product.name} image ${index + 1}">
    </button>
  `).join('');

  $('productGallery').querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
      $('productMainImage').src = product.gallery[index];
      $('productGallery').querySelectorAll('button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  $('productFeatures').innerHTML = product.features.map(item => `<li>${item}</li>`).join('');
  $('productDirections').innerHTML = product.directions.map(item => `<li>${item}</li>`).join('');
  $('productFaq').innerHTML = product.faq.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('');
  document.querySelectorAll('[data-product-name]').forEach(element => {
    element.textContent = product.name;
  });

  const related = Object.entries(products).filter(([key]) => key !== slug).slice(0, 3);
  $('relatedProducts').innerHTML = related.map(([key, item]) => `
    <article class="card product-card">
      <img src="${item.image}" alt="Shea Tea Tree ${item.name} 1000 ml" loading="lazy">
      <div class="card-body">
        <span class="tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p class="muted">${item.short}</p>
        <a href="product.html?product=${key}">View Details →</a>
      </div>
    </article>
  `).join('');

  const inquiry = `Hello, I am interested in Shea Tea Tree ${product.name} (${product.size}).`;
  $('whatsappInquiry').href = `https://wa.me/251907707002?text=${encodeURIComponent(inquiry)}`;
});

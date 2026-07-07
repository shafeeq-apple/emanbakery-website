// ============ DATA ============
const PRODUCTS = [
  {
    slug: "artisan-baguette-classic",
    name: "Artisan Baguette — Classic",
    category: "bread",
    tagline: "Traditional French-style baguette, crisp crust and airy crumb, baked for foodservice volume.",
    sku: "EB-BR-1001",
    packSizes: ["250g x 20", "300g x 16"],
    ingredients: "Wheat flour, water, salt, yeast, malted barley flour.",
    allergens: "Wheat, Gluten",
    shelfLife: "3 days (ambient) / 6 months (frozen)",
    storage: "Store frozen at -18°C. Thaw before use.",
    certifications: ["halal","iso"],
    specs: {weight:"250g / 300g", dims:"38cm x 6cm", palletization:"120 cartons/pallet"},
    tds: "#"
  },
  {
    slug: "sourdough-country-loaf",
    name: "Sourdough Country Loaf",
    category: "bread",
    tagline: "Slow-fermented sourdough with a rustic crust, ideal for premium retail bakery counters.",
    sku: "EB-BR-1002",
    packSizes: ["500g x 12", "800g x 8"],
    ingredients: "Wheat flour, water, salt, sourdough starter culture.",
    allergens: "Wheat, Gluten",
    shelfLife: "4 days (ambient) / 6 months (frozen)",
    storage: "Store in cool dry place or freeze for extended shelf life.",
    certifications: ["halal","iso"],
    specs: {weight:"500g / 800g", dims:"22cm x 12cm", palletization:"96 cartons/pallet"},
    tds: "#"
  },
  {
    slug: "butter-croissant-viennoiserie",
    name: "Butter Croissant",
    category: "pastries",
    tagline: "Laminated all-butter croissant with 27 layers, oven-ready frozen format for cafés and hotels.",
    sku: "EB-PS-2001",
    packSizes: ["60g x 60", "80g x 48"],
    ingredients: "Wheat flour, butter, sugar, yeast, milk, salt, eggs.",
    allergens: "Wheat, Gluten, Dairy, Egg",
    shelfLife: "12 months frozen",
    storage: "Keep frozen at -18°C. Proof and bake per instructions.",
    certifications: ["halal","iso"],
    specs: {weight:"60g / 80g", dims:"12cm x 6cm", palletization:"140 cartons/pallet"},
    tds: "#"
  },
  {
    slug: "chocolate-danish-swirl",
    name: "Chocolate Danish Swirl",
    category: "pastries",
    tagline: "Rich Danish pastry swirled with premium chocolate filling, frozen par-baked for quick service.",
    sku: "EB-PS-2002",
    packSizes: ["70g x 48"],
    ingredients: "Wheat flour, chocolate filling, butter, sugar, yeast, eggs.",
    allergens: "Wheat, Gluten, Dairy, Egg, Soy",
    shelfLife: "9 months frozen",
    storage: "Keep frozen at -18°C.",
    certifications: ["halal","iso"],
    specs: {weight:"70g", dims:"10cm x 10cm", palletization:"130 cartons/pallet"},
    tds: "#"
  },
  {
    slug: "industrial-bread-mix-pro",
    name: "Industrial Bread Mix Pro",
    category: "industrial-mixes",
    tagline: "Complete flour-based mix engineered for high-speed industrial bread lines, consistent hydration.",
    sku: "EB-MX-3001",
    packSizes: ["25kg bag"],
    ingredients: "Wheat flour, wheat gluten, enzymes, ascorbic acid, emulsifiers.",
    allergens: "Wheat, Gluten, Soy (may contain)",
    shelfLife: "9 months ambient",
    storage: "Store in dry area below 25°C.",
    certifications: ["halal","iso"],
    specs: {weight:"25kg", dims:"60cm x 40cm bag", palletization:"40 bags/pallet"},
    tds: "#"
  },
  {
    slug: "cake-mix-vanilla-industrial",
    name: "Industrial Vanilla Cake Mix",
    category: "industrial-mixes",
    tagline: "Ready-to-use vanilla cake mix formulated for consistent volume and crumb in industrial ovens.",
    sku: "EB-MX-3002",
    packSizes: ["20kg bag"],
    ingredients: "Sugar, wheat flour, vegetable shortening, leavening agents, vanilla flavor.",
    allergens: "Wheat, Gluten, Dairy, Egg",
    shelfLife: "12 months ambient",
    storage: "Store in dry area below 25°C.",
    certifications: ["halal","iso"],
    specs: {weight:"20kg", dims:"55cm x 35cm bag", palletization:"45 bags/pallet"},
    tds: "#"
  },
  {
    slug: "private-label-white-bread",
    name: "Private Label White Bread",
    category: "private-label",
    tagline: "Fully customizable white bread program with your brand packaging, formulation, and specs.",
    sku: "EB-PL-4001",
    packSizes: ["Custom"],
    ingredients: "Formulated to customer specification.",
    allergens: "Wheat, Gluten (varies by formulation)",
    shelfLife: "Varies by formulation",
    storage: "Ambient / Frozen depending on program.",
    certifications: ["halal","iso"],
    specs: {weight:"Custom", dims:"Custom", palletization:"Custom"},
    tds: "#"
  },
  {
    slug: "private-label-frozen-pastry",
    name: "Private Label Frozen Pastry Line",
    category: "private-label",
    tagline: "Turnkey frozen pastry manufacturing under your retail brand, from recipe to packaging.",
    sku: "EB-PL-4002",
    packSizes: ["Custom"],
    ingredients: "Formulated to customer specification.",
    allergens: "Varies by formulation",
    shelfLife: "Varies by formulation",
    storage: "Frozen -18°C",
    certifications: ["halal","iso"],
    specs: {weight:"Custom", dims:"Custom", palletization:"Custom"},
    tds: "#"
  }
];

const NEWS = [
  {slug:"scaling-industrial-bread-production", title:"Scaling Industrial Bread Production Without Losing Quality", date:"2026-06-18", author:"Eman Bakeries Team", category:"Industry", excerpt:"How HACCP-driven processes let us grow volume while keeping every loaf consistent.", body:"Scaling a bakery from artisanal batches to industrial volume is one of the hardest transitions in food manufacturing. At Eman Bakeries, we approached this challenge by first standardizing our recipes into precise, weight-based formulations rather than relying on manual judgment. Every ingredient is measured by calibrated industrial scales, and mixing times are computer-controlled to remove variability between shifts.\n\nOur HACCP program maps every critical control point, from raw material intake to final packaging, ensuring that food safety risks are identified and mitigated before they can affect a single batch. Temperature logging, allergen segregation, and metal detection are all integrated into the production line itself, not bolted on afterward.\n\nThe result is a production system that can run at industrial scale — thousands of units per shift — while maintaining the same taste and texture our customers expect from a single artisanal loaf."},
  {slug:"halal-certification-what-it-means", title:"Halal Certification: What It Means for Our Supply Chain", date:"2026-05-02", author:"Quality Assurance Team", category:"Company News", excerpt:"A look at how Halal certification shapes our sourcing, production and audit processes.", body:"Halal certification is more than a label on our packaging — it is a comprehensive standard that governs how we source raw materials, manage production lines, and conduct regular audits. Every ingredient supplier is vetted for Halal compliance before being approved, and our facilities undergo scheduled inspections by certifying bodies.\n\nThis commitment extends to equipment sanitation protocols, ensuring no cross-contamination occurs between product lines. Our team maintains detailed traceability records so that any ingredient can be tracked back to its source at any point in the supply chain.\n\nFor our distribution partners, this certification provides assurance that every product leaving our facility meets the standards their own customers expect."},
  {slug:"classic-sourdough-recipe-notes", title:"Recipe Notes: The Science Behind Our Sourdough Fermentation", date:"2026-04-14", author:"Head Baker", category:"Recipes", excerpt:"Exploring the slow-fermentation process that gives our country loaf its signature crust and crumb.", body:"Sourdough fermentation is a delicate balance of time, temperature and microbial activity. Our starter culture has been maintained and fed daily for years, developing a unique flavor profile that reflects the specific yeasts and bacteria present in our bakery environment.\n\nThe dough undergoes a slow, cool fermentation over many hours, allowing complex flavors to develop while strengthening the gluten structure naturally. This process also improves the digestibility of the bread and extends its natural shelf life without artificial preservatives.\n\nWhen scaling this process for industrial production, we carefully control ambient temperature and humidity in our fermentation rooms to replicate the same conditions batch after batch, ensuring the rustic crust and open crumb structure customers know us for."},
];

const APP = document.getElementById('app');

// ============ ROUTER ============
const routes = {};
function defineRoute(pattern, handler){ routes[pattern] = handler; }

function matchRoute(path){
  for (const pattern in routes){
    const paramNames = [];
    const regexStr = '^' + pattern.replace(/:[^/]+/g, (m)=>{
      paramNames.push(m.slice(1));
      return '([^/]+)';
    }) + '$';
    const match = path.match(new RegExp(regexStr));
    if (match){
      const params = {};
      paramNames.forEach((n,i)=> params[n]=decodeURIComponent(match[i+1]));
      return { handler: routes[pattern], params };
    }
  }
  return null;
}

function router(){
  let path = window.location.hash.replace('#','') || '/';
  path = path.split('?')[0];
  if (path.length>1 && path.endsWith('/')) path = path.slice(0,-1);
  const found = matchRoute(path);
  window.scrollTo(0,0);
  closeMobileNav();
  if (found){
    APP.innerHTML = found.handler(found.params);
  } else {
    APP.innerHTML = notFoundPage();
  }
  updateActiveNav(path);
  initRevealAnimations();
  initPageScripts(path);
  document.title = getPageTitle(path);
}

function getPageTitle(path){
  const map = {
    '/': 'Eman Bakeries — Premium Industrial Bakery Products & Wholesale Supply',
    '/about':'About Eman Bakeries — Our Story & Mission',
    '/about/certifications':'Certifications & Food Safety — Eman Bakeries',
    '/products':'Products — Eman Bakeries Product Catalog',
    '/distribution':'Distribution & Wholesale — Eman Bakeries',
    '/verification':'Official Verification — Eman Bakeries',
    '/news':'News & Insights — Eman Bakeries',
    '/careers':'Careers — Eman Bakeries',
    '/contact':'Contact Sales — Eman Bakeries',
    '/legal/privacy':'Privacy Policy — Eman Bakeries',
    '/legal/terms':'Terms of Service — Eman Bakeries',
    '/legal/cookies':'Cookie Policy — Eman Bakeries',
    '/sitemap':'Sitemap — Eman Bakeries'
  };
  return map[path] || 'Eman Bakeries';
}

function updateActiveNav(path){
  document.querySelectorAll('.main-nav a').forEach(a=>{
    const href = a.getAttribute('href').replace('#','');
    a.classList.toggle('active', href === path || (href!=='/' && path.startsWith(href)));
  });
}

function closeMobileNav(){
  document.getElementById('mainNav').classList.remove('active');
  document.getElementById('navToggle').setAttribute('aria-expanded','false');
}

// ============ HELPERS ============
function icon(cls){ return `<i class="fa-solid ${cls}"></i>`; }

function catLabel(cat){
  return {bread:"Bread", pastries:"Pastries", "industrial-mixes":"Industrial Mixes", "private-label":"Private Label Solutions"}[cat] || cat;
}

function productCardHTML(p){
  return `
  <div class="product-card reveal" onclick="location.hash='#/products/${p.category}/${p.slug}'">
    <div class="product-thumb">${icon('fa-bread-slice')}</div>
    <div class="product-body">
      <span class="product-tag">${catLabel(p.category)}</span>
      <h4>${p.name}</h4>
      <p>${p.tagline}</p>
      <div class="product-meta">
        <span>SKU: ${p.sku}</span>
        <span>${p.shelfLife.split('/')[0].trim()}</span>
      </div>
    </div>
  </div>`;
}

function newsCardHTML(n){
  return `
  <div class="news-card reveal" onclick="location.hash='#/news/${n.slug}'">
    <div class="news-thumb">${icon('fa-newspaper')}</div>
    <div class="news-body">
      <span class="news-date">${formatDate(n.date)} · ${n.category}</span>
      <h4>${n.title}</h4>
      <p>${n.excerpt}</p>
      <span class="news-link">Read More ${icon('fa-arrow-right')}</span>
    </div>
  </div>`;
}

function formatDate(d){
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
}

// ============ HOME PAGE ============
function homePage(){
  return `
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="hero-eyebrow">${icon('fa-award')} Trusted Industrial Bakery Supplier</span>
        <h1>The Taste of <span class="accent">Tradition</span> — Built for Industry</h1>
        <p class="hero-sub">Wholesale bakery products, industrial mixes, and trusted supply for retail and foodservice across the Kingdom.</p>
        <p class="hero-meta">CR: 4030331653 &nbsp;•&nbsp; VAT: 312028501300003</p>
        <div class="hero-cta">
          <a href="#/contact" class="btn btn-primary" data-link>Contact Sales</a>
          <a href="#/products" class="btn btn-outline" data-link>View Products</a>
        </div>
        <div class="hero-stats">
          <div><strong>15+</strong><span>Years of Operation</span></div>
          <div><strong>200+</strong><span>Wholesale Partners</span></div>
          <div><strong>50+</strong><span>Product SKUs</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card">${icon('fa-wheat-awn')}</div>
        <div class="floating-badge badge-1">${icon('fa-shield-halved')} ISO 22000</div>
        <div class="floating-badge badge-2">${icon('fa-certificate')} Halal Certified</div>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <div class="section-head reveal">
        <span class="tag">Why Eman Bakeries</span>
        <h2>Enterprise-Ready Bakery Partner</h2>
        <p>Built on food safety, scale, and dependable logistics.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card reveal">
          <div class="feature-icon">${icon('fa-industry')}</div>
          <h3>Industrial Capacity</h3>
          <p>Large-scale production with consistent quality and HACCP controls.</p>
        </div>
        <div class="feature-card reveal">
          <div class="feature-icon">${icon('fa-certificate')}</div>
          <h3>Certified & Halal</h3>
          <p>ISO 22000 and Halal certified facilities.</p>
        </div>
        <div class="feature-card reveal">
          <div class="feature-icon">${icon('fa-truck-fast')}</div>
          <h3>Nationwide Distribution</h3>
          <p>Reliable logistics across Saudi Arabia and GCC.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="news-teasers">
    <div class="container">
      <div class="section-head reveal">
        <span class="tag">Latest Updates</span>
        <h2>News & Insights</h2>
      </div>
      <div class="news-grid">
        ${NEWS.slice(0,3).map(newsCardHTML).join('')}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-banner reveal">
        <h2>Ready to Scale With Eman Bakeries?</h2>
        <p>Join our nationwide distribution network and bring industrial-grade bakery products to your market.</p>
        <div class="cta-actions">
          <a href="#/distribution" class="btn btn-white" data-link>Become a Distributor</a>
          <a href="#/contact" class="btn btn-outline" style="border-color:#fff;color:#fff" data-link>Contact Sales</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

// ============ ABOUT PAGE ============
function aboutPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / About</p>
      <h1>Our Story</h1>
      <p>How a commitment to tradition and food safety became an industrial-scale bakery supplier.</p>
    </div>
  </section>
  <section>
    <div class="container about-grid">
      <div class="about-visual reveal">${icon('fa-book-open')}</div>
      <div class="about-text reveal">
        <h2>Our Story</h2>
        <p>Eman Bakeries was founded to bring high-quality, consistent baked goods to commercial and retail partners. With an emphasis on food safety and scalable production, we combine traditional recipes with industrial-grade processes to serve modern supply chains.</p>
        <h2 style="margin-top:32px">Our Mission</h2>
        <p>To deliver dependable, certified, and great-tasting bakery products at industrial scale — enabling our distribution and retail partners to grow with confidence.</p>
        <a href="#/about/certifications" class="btn btn-outline" data-link>View Certifications</a>
      </div>
    </div>
  </section>
  <section class="section-tight" style="background:var(--color-cream)">
    <div class="container">
      <div class="section-head reveal"><span class="tag">Our Journey</span><h2>Milestones</h2></div>
      <div class="timeline" style="max-width:720px;margin:0 auto">
        <div class="timeline-item reveal">
          <div class="timeline-dot">${icon('fa-flag')}</div>
          <div class="timeline-content"><h4>Established</h4><p>Eman Bakeries founded with a commitment to traditional recipes and quality.</p></div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot">${icon('fa-industry')}</div>
          <div class="timeline-content"><h4>Factory Built</h4><p>Purpose-built industrial facility established to scale production capacity.</p></div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot">${icon('fa-certificate')}</div>
          <div class="timeline-content"><h4>ISO 22000 Certified</h4><p>Achieved ISO 22000 food safety management certification.</p></div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot">${icon('fa-truck-fast')}</div>
          <div class="timeline-content"><h4>Distribution Expansion</h4><p>Expanded logistics network across Saudi Arabia and GCC markets.</p></div>
        </div>
      </div>
    </div>
  </section>
  `;
}

function certificationsPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / <a href="#/about" data-link>About</a> / Certifications</p>
      <h1>Certifications & Food Safety</h1>
      <p>Our facilities and processes are audited and certified to enterprise-grade standards.</p>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="cert-grid">
        <div class="cert-card reveal">${icon('fa-shield-halved')}<h4>ISO 22000</h4><p>Food safety management system certification covering our full production process.</p></div>
        <div class="cert-card reveal">${icon('fa-moon')}<h4>Halal Certification</h4><p>All products and processes certified Halal by an accredited certifying body.</p></div>
        <div class="cert-card reveal">${icon('fa-building-shield')}<h4>Municipal Permits</h4><p>Local municipal operating and food-handling permits maintained and current.</p></div>
      </div>
      <div class="notice-box reveal">
        <strong>${icon('fa-circle-info')} Verification Notice:</strong> Official documents are available on request or via our verification portal. <a href="#/verification" data-link>Visit Verification →</a>
      </div>
    </div>
  </section>
  `;
}

// ============ PRODUCTS LIST ============
function productsPage(){
  const categories = [
    {slug:'bread', icon:'fa-bread-slice', label:'Bread'},
    {slug:'pastries', icon:'fa-cookie', label:'Pastries'},
    {slug:'industrial-mixes', icon:'fa-industry', label:'Industrial Mixes'},
    {slug:'private-label', icon:'fa-tags', label:'Private Label Solutions'}
  ];
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / Products</p>
      <h1>Product Catalog</h1>
      <p>Explore our commercial product lines — bread, pastries, mixes and refrigerated goods. Contact our sales team for specifications, pricing and custom orders.</p>
    </div>
  </section>
  <section class="section-tight">
    <div class="container">
      <div class="category-tiles">
        ${categories.map(c=>`
          <div class="category-tile reveal" onclick="location.hash='#/products/${c.slug}'">
            ${icon(c.icon)}<h4>${c.label}</h4>
          </div>`).join('')}
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="filters-bar reveal">
        <input type="text" id="prodSearch" placeholder="Search products..." oninput="filterProducts()">
        <select id="prodCategory" onchange="filterProducts()">
          <option value="">All Categories</option>
          ${categories.map(c=>`<option value="${c.slug}">${c.label}</option>`).join('')}
        </select>
        <select id="prodShelf" onchange="filterProducts()">
          <option value="">Fresh / Frozen (all)</option>
          <option value="frozen">Frozen</option>
          <option value="ambient">Ambient / Fresh</option>
        </select>
      </div>
      <div class="product-grid" id="productGrid">
        ${PRODUCTS.map(productCardHTML).join('')}
      </div>
    </div>
  </section>
  `;
}

function filterProducts(){
  const q = document.getElementById('prodSearch').value.toLowerCase();
  const cat = document.getElementById('prodCategory').value;
  const shelf = document.getElementById('prodShelf').value;
  const filtered = PRODUCTS.filter(p=>{
    const matchQ = p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
    const matchCat = !cat || p.category === cat;
    const matchShelf = !shelf || (shelf==='frozen' ? p.shelfLife.toLowerCase().includes('frozen') : !p.shelfLife.toLowerCase().includes('frozen') || p.shelfLife.toLowerCase().includes('ambient'));
    return matchQ && matchCat && matchShelf;
  });
  document.getElementById('productGrid').innerHTML = filtered.length ? filtered.map(productCardHTML).join('') : `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-light);padding:40px">No products match your filters.</p>`;
}

function productCategoryPage(params){
  const cat = params.category;
  const list = PRODUCTS.filter(p=>p.category===cat);
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / <a href="#/products" data-link>Products</a> / ${catLabel(cat)}</p>
      <h1>${catLabel(cat)}</h1>
      <p>Browse our ${catLabel(cat).toLowerCase()} product range built for enterprise and retail supply.</p>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="product-grid">
        ${list.length ? list.map(productCardHTML).join('') : `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-light)">No products found in this category yet.</p>`}
      </div>
    </div>
  </section>
  `;
}

// ============ PRODUCT DETAIL ============
function productDetailPage(params){
  const p = PRODUCTS.find(x=>x.slug===params.slug);
  if (!p) return notFoundPage();
  return `
  <section class="page-hero" style="padding-bottom:0">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / <a href="#/products" data-link>Products</a> / <a href="#/products/${p.category}" data-link>${catLabel(p.category)}</a> / ${p.name}</p>
    </div>
  </section>
  <section class="section-tight">
    <div class="container product-detail-grid">
      <div class="product-visual reveal">${icon('fa-bread-slice')}</div>
      <div class="reveal">
        <span class="product-sku">SKU: ${p.sku}</span>
        <h1>${p.name}</h1>
        <p class="tagline">${p.tagline}</p>
        <div class="cert-icons">
          ${p.certifications.includes('halal') ? `<span title="Halal Certified">${icon('fa-moon')}</span>` : ''}
          ${p.certifications.includes('iso') ? `<span title="ISO 22000">${icon('fa-shield-halved')}</span>` : ''}
        </div>
        <div class="attr-list">
          <div class="attr-item"><h5>Pack Sizes</h5><p>${p.packSizes.join(', ')}</p></div>
          <div class="attr-item"><h5>Shelf Life</h5><p>${p.shelfLife}</p></div>
          <div class="attr-item"><h5>Allergens</h5><p>${p.allergens}</p></div>
          <div class="attr-item"><h5>Storage</h5><p>${p.storage}</p></div>
        </div>
        <p style="font-size:0.9rem;color:var(--color-text-light)"><strong>Ingredients:</strong> ${p.ingredients}</p>
        <table class="spec-table">
          <tr><th>Weight</th><td>${p.specs.weight}</td></tr>
          <tr><th>Dimensions</th><td>${p.specs.dims}</td></tr>
          <tr><th>Palletization</th><td>${p.specs.palletization}</td></tr>
        </table>
        <div class="detail-cta">
          <button class="btn btn-primary" onclick="openModal('${p.name}')">Request Pricing</button>
          <a href="${p.tds}" class="btn btn-outline" onclick="showToast('Technical Data Sheet requires secure access. Please contact sales.'); return false;">${icon('fa-file-arrow-down')} Download TDS</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

// ============ DISTRIBUTION ============
function distributionPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / Distribution</p>
      <h1>Distribution & Wholesale</h1>
      <p>Partner with Eman Bakeries for reliable supply across KSA and GCC.</p>
    </div>
  </section>
  <section>
    <div class="container distribution-grid">
      <div class="reveal">
        <h2>Why Partner With Us</h2>
        <p style="color:var(--color-text-light);margin-top:12px">Our distribution program is built for scale — combining consistent product quality with dependable logistics and dedicated account support.</p>
        <div class="info-list">
          <div class="info-list-item">${icon('fa-boxes-stacked')}<div><h4>Minimum Order Quantity</h4><p>Flexible MOQs based on product line and region, scaled for growing distributors.</p></div></div>
          <div class="info-list-item">${icon('fa-clock')}<div><h4>Lead Times</h4><p>Standard lead times of 5-10 business days depending on order volume and destination.</p></div></div>
          <div class="info-list-item">${icon('fa-route')}<div><h4>Logistics</h4><p>Nationwide cold-chain and ambient logistics network covering Saudi Arabia and GCC.</p></div></div>
        </div>
        <div id="resources" style="margin-top:40px">
          <h2>Distributor Resources</h2>
          <p style="color:var(--color-text-light);margin-top:12px">Access product catalogs, pricing sheets, and marketing materials once approved as a partner. Contact sales to request access.</p>
        </div>
      </div>
      <div class="reveal">
        <form class="app-form" id="distributorForm">
          <h3 style="margin-bottom:6px">Become a Distributor</h3>
          <p style="color:var(--color-text-light);font-size:0.9rem;margin-bottom:10px">Tell us about your business and we'll follow up within 48 hours.</p>
          <label>Company Name<input type="text" name="companyName" required></label>
          <label>CR Number<input type="text" name="crNumber" required></label>
          <div class="form-row">
            <label>Contact Person<input type="text" name="contactPerson" required></label>
            <label>Phone<input type="tel" name="phone" required></label>
          </div>
          <label>Email<input type="email" name="email" required></label>
          <label>Required Markets<input type="text" name="markets" placeholder="e.g. Riyadh, Eastern Province"></label>
          <label class="checkbox-row"><input type="checkbox" name="sampleRequest"> Request product samples</label>
          <button type="submit" class="btn btn-primary btn-block">Submit Application</button>
          <p class="form-success" id="distributorSuccess">Thank you — our sales team will contact you within 48 hours.</p>
        </form>
      </div>
    </div>
  </section>
  `;
}

// ============ VERIFICATION ============
function verificationPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / Verification</p>
      <h1>Official Verification</h1>
      <p>Corporate registration and tax details for procurement and compliance teams.</p>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="verify-box reveal">
        <h3>Corporate Information</h3>
        <div class="verify-numbers">
          <div><span>Commercial Registration</span><strong>4030331653</strong></div>
          <div><span>VAT Number</span><strong>312028501300003</strong></div>
        </div>
        <p style="color:var(--color-text-light);font-size:0.92rem">For official verification, contact <a href="mailto:info@emanbakeries.com">info@emanbakeries.com</a> for secure delivery of document scans.</p>
        <div class="notice-box" style="margin-bottom:30px">
          ${icon('fa-lock')} Sensitive documents are not published publicly. Please submit a verification request below and our team will securely deliver requested documents.
        </div>
        <form class="app-form" id="verificationForm" style="padding:0;border:none">
          <h3>Official Document Request — Verification Team</h3>
          <label>Requester Company<input type="text" name="requesterCompany" required></label>
          <label>Requester Email<input type="email" name="requesterEmail" required></label>
          <label>Reason for Request<textarea name="reason" rows="3" required></textarea></label>
          <label>Verifier Contact<input type="text" name="verifierContact" placeholder="Name / email / phone"></label>
          <label class="checkbox-row"><input type="checkbox" name="secureTransfer" required> I agree to secure document transfer terms</label>
          <button type="submit" class="btn btn-primary btn-block">Submit Verification Request</button>
          <p class="form-success" id="verificationSuccess">Thank you — our verification team will respond within 2 business days.</p>
        </form>
      </div>
    </div>
  </section>
  `;
}

// ============ NEWS ============
function newsPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / News & Insights</p>
      <h1>News & Insights</h1>
      <p>Industry perspectives, recipes, and company updates from Eman Bakeries.</p>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="news-cat-filter reveal">
        <button class="active" onclick="filterNews('all', this)">All</button>
        <button onclick="filterNews('Industry', this)">Industry</button>
        <button onclick="filterNews('Recipes', this)">Recipes</button>
        <button onclick="filterNews('Company News', this)">Company News</button>
      </div>
      <div class="news-full-grid" id="newsGrid">
        ${NEWS.map(newsCardHTML).join('')}
      </div>
    </div>
  </section>
  `;
}

function filterNews(cat, btn){
  document.querySelectorAll('.news-cat-filter button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const list = cat === 'all' ? NEWS : NEWS.filter(n=>n.category===cat);
  document.getElementById('newsGrid').innerHTML = list.length ? list.map(newsCardHTML).join('') : `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-light);padding:40px">No posts in this category yet.</p>`;
}

function newsDetailPage(params){
  const n = NEWS.find(x=>x.slug===params.slug);
  if (!n) return notFoundPage();
  const related = NEWS.filter(x=>x.slug!==n.slug).slice(0,2);
  return `
  <section class="page-hero" style="padding-bottom:0">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / <a href="#/news" data-link>News</a> / ${n.title}</p>
    </div>
  </section>
  <section class="section-tight">
    <div class="container post-detail">
      <p class="post-meta">${formatDate(n.date)} · ${n.author} · ${n.category}</p>
      <h1>${n.title}</h1>
      <div class="post-hero">${icon('fa-newspaper')}</div>
      <div class="post-body">
        ${n.body.split('\\n\\n').map(p=>`<p>${p}</p>`).join('')}
      </div>
      <div style="margin-top:50px">
        <h3 style="margin-bottom:20px">Related Posts</h3>
        <div class="news-grid" style="grid-template-columns:repeat(2,1fr)">
          ${related.map(newsCardHTML).join('')}
        </div>
      </div>
    </div>
  </section>
  `;
}

// ============ CAREERS ============
const JOBS = [
  {title:"Production Supervisor", type:"Full-time", location:"Jeddah, KSA", desc:"Oversee daily bakery production operations, ensuring quality and safety standards are met across shifts."},
  {title:"Quality Assurance Specialist", type:"Full-time", location:"Jeddah, KSA", desc:"Manage HACCP documentation, audits, and certification compliance across our production facility."},
  {title:"B2B Sales Executive", type:"Full-time", location:"Jeddah, KSA", desc:"Develop and manage relationships with distribution partners and enterprise foodservice clients."},
  {title:"Logistics Coordinator", type:"Full-time", location:"Jeddah, KSA", desc:"Coordinate cold-chain and ambient distribution logistics across Saudi Arabia and GCC markets."}
];

function careersPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / Careers</p>
      <h1>Careers at Eman Bakeries</h1>
      <p>Join a team building industrial-scale bakery excellence across the Kingdom.</p>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="reveal" style="max-width:720px;margin:0 auto 40px;text-align:center">
        <p style="color:var(--color-text-light)">We're a growing team combining traditional baking craft with modern industrial process. We value quality, safety, and continuous improvement in everything we do.</p>
      </div>
      <div class="job-list">
        ${JOBS.map(j=>`
          <div class="job-item reveal">
            <div>
              <h4>${j.title}</h4>
              <p>${j.desc}</p>
              <div class="job-tags"><span>${j.type}</span><span>${j.location}</span></div>
            </div>
            <a href="mailto:info@emanbakeries.com?subject=Application: ${encodeURIComponent(j.title)}" class="btn btn-outline btn-sm">Apply Now</a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  `;
}

// ============ CONTACT ============
function contactPage(){
  return `
  <section class="page-hero">
    <div class="container">
      <p class="breadcrumb"><a href="#/" data-link>Home</a> / Contact</p>
      <h1>Contact Sales / General Inquiries</h1>
      <p>We typically respond within 2 business days.</p>
    </div>
  </section>
  <section>
    <div class="container contact-grid">
      <div class="contact-info-card reveal">
        <h3>Get in Touch</h3>
        <div class="info-list">
          <div class="info-list-item">${icon('fa-location-dot')}<div><h4>Address</h4><p>2790 Hira, An Nahdah Dist., Jeddah 23523, Kingdom of Saudi Arabia</p></div></div>
          <div class="info-list-item">${icon('fa-phone')}<div><h4>Phone</h4><p><a href="tel:+966506079191" style="color:rgba(255,255,255,0.85)">+966 506079191</a></p></div></div>
          <div class="info-list-item">${icon('fa-envelope')}<div><h4>Email</h4><p><a href="mailto:info@emanbakeries.com" style="color:rgba(255,255,255,0.85)">info@emanbakeries.com</a></p></div></div>
        </div>
        <div class="sla-note">We typically respond within 2 business days. For distribution inquiries, please use the Distribution page for a faster routing.</div>
      </div>
      <div class="reveal">
        <form class="app-form" id="contactForm">
          <div class="form-row">
            <label>Name<input type="text" name="name" required></label>
            <label>Company<input type="text" name="company"></label>
          </div>
          <div class="form-row">
            <label>Email<input type="email" name="email" required></label>
            <label>Phone<input type="tel" name="phone"></label>
          </div>
          <label>Inquiry Type
            <select name="inquiryType" required>
              <option value="">Select type</option>
              <option>General</option>
              <option>Distribution</option>
              <option>Quality</option>
              <option>Press</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="4" required></textarea></label>
          <label>Attachments (optional)<input type="file" name="attachment"></label>
          <button type="submit" class="btn btn-primary btn-block">Send Message</button>
          <p class="form-success" id="contactSuccess">Thank you — our sales team will contact you within 48 hours.</p>
        </form>
      </div>
    </div>
  </section>
  `;
}

// ============ LEGAL / SITEMAP / 404 ============
function legalPage(type){
  const titles = { privacy:"Privacy Policy", terms:"Terms of Service", cookies:"Cookie Policy" };
  const title = titles[type] || "Legal";
  return `
  <section class="page-hero">
    <div class="container"><p class="breadcrumb"><a href="#/" data-link>Home</a> / ${title}</p><h1>${title}</h1></div>
  </section>
  <section>
    <div class="container legal-content reveal">
      <p>This is placeholder legal content for the ${title}. Eman Bakeries is committed to protecting your privacy and handling your data responsibly in accordance with applicable Saudi Arabian regulations.</p>
      <h2>1. Overview</h2>
      <p>This document outlines our practices regarding data collection, use, and disclosure as it relates to visitors and business partners of emanbakeries.com.</p>
      <h2>2. Contact</h2>
      <p>For questions regarding this policy, please contact <a href="mailto:info@emanbakeries.com">info@emanbakeries.com</a>.</p>
    </div>
  </section>
  `;
}

function sitemapPage(){
  const links = [
    ['/', 'Home'], ['/about','About'], ['/about/certifications','Certifications & Quality'],
    ['/products','Products'], ['/products/bread','Products — Bread'], ['/products/pastries','Products — Pastries'],
    ['/products/industrial-mixes','Products — Industrial Mixes'], ['/products/private-label','Products — Private Label'],
    ['/distribution','Distribution'], ['/verification','Verification'], ['/news','News & Insights'],
    ['/careers','Careers'], ['/contact','Contact'], ['/legal/privacy','Privacy Policy'],
    ['/legal/terms','Terms of Service'], ['/legal/cookies','Cookie Policy']
  ];
  return `
  <section class="page-hero">
    <div class="container"><p class="breadcrumb"><a href="#/" data-link>Home</a> / Sitemap</p><h1>Sitemap</h1></div>
  </section>
  <section>
    <div class="container sitemap-list reveal">
      ${links.map(([href,label])=>`<a href="#${href}" data-link>${label}</a>`).join('')}
    </div>
  </section>
  `;
}

function notFoundPage(){
  return `
  <section class="notfound">
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p style="color:var(--color-text-light);margin:16px 0 30px">The page you're looking for doesn't exist or has moved.</p>
      <a href="#/" class="btn btn-primary" data-link>Back to Home</a>
    </div>
  </section>
  `;
}

// ============ REGISTER ROUTES ============
defineRoute('/', homePage);
defineRoute('/about', aboutPage);
defineRoute('/about/certifications', certificationsPage);
defineRoute('/products', productsPage);
defineRoute('/products/:category', productCategoryPage);
defineRoute('/products/:category/:slug', productDetailPage);
defineRoute('/distribution', distributionPage);
defineRoute('/verification', verificationPage);
defineRoute('/news', newsPage);
defineRoute('/news/:slug', newsDetailPage);
defineRoute('/careers', careersPage);
defineRoute('/contact', contactPage);
defineRoute('/legal/privacy', ()=>legalPage('privacy'));
defineRoute('/legal/terms', ()=>legalPage('terms'));
defineRoute('/legal/cookies', ()=>legalPage('cookies'));
defineRoute('/sitemap', sitemapPage);

// ============ PAGE-SPECIFIC SCRIPTS (form bindings after render) ============
function initPageScripts(path){
  bindForm('contactForm', 'contactSuccess');
  bindForm('distributorForm', 'distributorSuccess');
  bindForm('verificationForm', 'verificationSuccess');
}

function bindForm(formId, successId){
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById(successId);
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    setTimeout(()=>{
      success.classList.add('show');
      form.reset();
      btn.disabled = false;
      btn.textContent = btn.dataset.originalText || btn.textContent;
      showToast('Your submission has been received.');
    }, 900);
  });
}

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalForm = document.getElementById('modalForm');
function openModal(productName){
  document.getElementById('modalProductField').value = productName || '';
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('modalSuccess').classList.remove('show');
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e)=>{ if (e.target === modalOverlay) closeModal(); });
modalForm.addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('modalSuccess').classList.add('show');
  showToast('Pricing request submitted successfully.');
  setTimeout(()=>{ closeModal(); modalForm.reset(); }, 1600);
});

// Hook "Contact Sales" generic buttons that aren't plain nav links (none currently override, reserved for future use)

// ============ TOAST ============
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 3200);
}

// ============ HEADER SCROLL / PROGRESS ============
const siteHeader = document.getElementById('siteHeader');
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', ()=>{
  siteHeader.classList.toggle('scrolled', window.scrollY > 20);
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = (scrollPercent || 0) + '%';
});

// ============ MOBILE NAV ============
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', ()=>{
  const isOpen = mainNav.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.has-dropdown > a').forEach(a=>{
  a.addEventListener('click', function(e){
    if (window.innerWidth <= 768){
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    }
  });
});
document.addEventListener('click', function(e){
  if (e.target.matches('[data-link]') && window.innerWidth <= 768){
    if (!e.target.closest('.has-dropdown')) closeMobileNav();
  }
});

// ============ SMOOTH ANCHOR + LINK HANDLING ============
document.addEventListener('click', function(e){
  const link = e.target.closest('a[data-link]');
  if (link){
    // allow default hash navigation; router will pick it up via hashchange
  }
});

// ============ REVEAL ANIMATIONS ============
function initRevealAnimations(){
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item=> observer.observe(item));
}

// ============ INIT ============
document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
router();

const center = window.POKEMON_CENTERS?.[window.CENTER_KEY];
const root = document.querySelector("#center-page-root");

if (!center || !root) {
  throw new Error("Center data missing.");
}

const merchandiseCards = [
  {
    tag: "店鋪主題",
    title: `${center.city} 主題周邊`,
    description: "可優先留意結合城市印象、地標氛圍或店裝視覺延伸的主題商品。"
  },
  {
    tag: "伴手禮",
    title: "旅遊型收藏小物",
    description: "文具、鑰匙圈、托特包與收納小物通常最適合當旅行伴手禮。"
  },
  {
    tag: "檔期焦點",
    title: "活動與季節陳列",
    description: "實際展售內容會依季節活動、新品檔期與官方公告調整。"
  },
  {
    tag: "提醒",
    title: "限定商品展示區",
    description: "若你要找真正的當期限定款，建議出發前同步查看官方 Staff Voice 與店鋪消息。"
  }
];

root.innerHTML = `
  <section class="detail-hero">
    <div class="detail-copy">
      <p class="eyebrow">Store Profile</p>
      <h1>${center.name}</h1>
      <p class="detail-text">${center.overview}</p>
      ${center.statusNote ? `<p class="status-note">${center.statusNote}</p>` : ""}
    </div>

    <aside class="info-panel">
      <p class="info-title">店鋪資訊</p>
      <dl class="info-list">
        <div>
          <dt>營業時間</dt>
          <dd>${center.hours}</dd>
        </div>
        <div>
          <dt>地址</dt>
          <dd>${center.address}</dd>
        </div>
        <div>
          <dt>地區</dt>
          <dd>${center.region}</dd>
        </div>
      </dl>
      <a class="secondary-link" href="${center.officialUrl}" target="_blank" rel="noreferrer">官方資訊頁</a>
    </aside>
  </section>

  <section class="content-grid">
    <article class="content-card">
      <div class="section-heading">
        <p class="card-label">Mini Map</p>
        <h2>Google 地圖小視窗</h2>
      </div>
      <div class="map-frame">
        <iframe
          title="${center.name} map"
          src="https://www.google.com/maps?q=${encodeURIComponent(center.mapQuery)}&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>

    <article class="content-card">
      <div class="section-heading">
        <p class="card-label">Visit Notes</p>
        <h2>到店重點</h2>
      </div>
      <ul class="feature-list tall-list">
        ${center.tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    </article>
  </section>

  <section class="merch-section">
    <div class="section-heading">
      <p class="card-label">Merch Display</p>
      <h2>${center.name} 商品陳列重點</h2>
      <p class="section-intro">
        這一區整理的是適合在該店鋪留意的商品展示方向。實際上架內容可能依活動、季節與補貨情況變動。
      </p>
    </div>
    <div class="merch-grid">
      ${merchandiseCards
        .map(
          (item) => `
            <article class="merch-card">
              <span class="merch-tag">${item.tag}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </article>
          `
        )
        .join("")}
      <article class="merch-card highlight-card">
        <span class="merch-tag">Back Link</span>
        <h3>回到原始地圖首頁</h3>
        <p>點擊下方按鈕會直接返回你指定的 Webflow 地圖首頁。</p>
        <a href="https://willysawesomesite.webflow.io/">前往 Webflow 首頁</a>
      </article>
    </div>
  </section>

  <section class="source-section">
    <div class="section-heading">
      <p class="card-label">Source Notes</p>
      <h2>資料來源</h2>
    </div>
    <ul class="source-list">
      <li><a href="${center.officialUrl}" target="_blank" rel="noreferrer">該店鋪官方資訊頁</a></li>
      <li><a href="https://www.pokemon.co.jp/shop/sc/" target="_blank" rel="noreferrer">Pokémon Center 官方 shop list</a></li>
    </ul>
  </section>
`;

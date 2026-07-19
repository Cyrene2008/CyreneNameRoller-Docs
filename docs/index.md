---
home: true
config:
  - type: doc-hero
    background: tint-plate
    hero:
      name: Cyreneの随机点名器
      text: 随机点名桌面应用
      tagline: 基于 Vue 3 + Tauri/Electron 构建，采用 Windows 11 Fluent Design 设计语言，支持随机点名、翻牌点名、数据管理等功能
      image: /images/Cyrene.png
      actions:
        - theme: brand
          text: 下载客户端
          icon: lucide:download
          link: https://github.com/Cyrene2008/CyreneNameRoller/releases
        - theme: brand
          text: 线上使用
          icon: lucide:globe
          link: https://web点名器.昔涟.cn
        - theme: alt
          text: 阅读文档
          icon: lucide:list-start
          link: /doc/guide/start
        - theme: alt
          text: GitHub 仓库
          icon: fa-brands:github
          link: https://github.com/Cyrene2008/CyreneNameRoller

  - type: features
    features:
      - title: 随机点名
        icon: lucide:shuffle
        details: 支持单人、多人、小组模式和禁止重复抽取，固定公平算法逐抽更新状态
      - title: 翻牌点名
        icon: lucide:layers
        details: 3D 翻转卡牌动画，一键多抽，自动洗牌+翻牌，收牌历史持久化
      - title: 数据管理
        icon: lucide:database
        details: 数据统计、抽取记录、名单管理，支持批量删除、导入导出，SHA-256 密码保护
      - title: 个性化设置
        icon: lucide:settings
        details: UI 缩放、字体大小调整、深色/浅色模式、中/英文切换，平衡算法开关
      - title: 现代界面
        icon: lucide:sparkles
        details: 采用 Windows 11 Fluent Design 设计语言，界面简洁现代，操作直观
      - title: 概率平衡
        icon: lucide:scale
        details: 以绝对次数极差 2 为固定软目标，所有候选者始终保留非零概率，公平参数不可篡改

  - type: markdown
    content: |
      ## 技术特点

      <div class="tech-grid">
        <div class="tech-card">
          <h3 class="tech-subtitle">基于 Vue 3 + Tauri/Electron</h3>
          <p class="tech-description">
            使用现代前端技术栈，构建高性能桌面应用，提供流畅的用户体验
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">Windows 11 Fluent Design</h3>
          <p class="tech-description">
            采用微软 Fluent Design 设计语言，界面简洁现代，符合 Windows 用户习惯
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">平衡算法</h3>
          <p class="tech-description">
            以绝对次数极差 2 为固定软目标，逐抽更新状态，在长期公平与真实随机机会之间取得平衡
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">本地数据存储</h3>
          <p class="tech-description">
            所有数据本地存储，保护隐私安全，支持自动备份和恢复功能
          </p>
        </div>
      </div>

      ## 快速开始

      <div class="quick-start-card">
        <div class="quick-start-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">下载应用</h3>
              <p class="step-description">
                从 GitHub Releases 页面下载最新版本的 Cyreneの随机点名器
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">安装客户端</h3>
              <p class="step-description">
                运行 Tauri 或 Electron 的 Windows 安装程序，按提示完成安装
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">开始使用</h3>
              <p class="step-description">
                添加名单，选择点名模式，开始随机抽取
              </p>
            </div>
          </div>
        </div>
        <div class="quick-start-actions">
          <a href="/doc/guide/start" class="btn btn-primary">
            查看详细指南
          </a>
          <a href="https://github.com/Cyrene2008/CyreneNameRoller/releases" class="btn btn-secondary">
            立即下载
          </a>
        </div>
      </div>

      <style>
      /* Global link styles */
      a {
        color: #ff6b8b !important;
      }

      a:hover {
        color: #ff527b !important;
      }

      /* Hero section text */
      .vp-hero .name {
        color: #ff6b8b !important;
      }

      /* Tech section */
      .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
      }

      .tech-card {
        background: white;
        border-radius: 0.75rem;
        padding: 2rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .tech-card:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      .tech-subtitle {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #ff6b8b;
      }

      .tech-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 0;
      }

      /* Quick start section */
      .quick-start-card {
        background: white;
        border-radius: 0.75rem;
        padding: 2.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
        margin: 3rem 0;
      }

      .quick-start-steps {
        margin-bottom: 2.5rem;
      }

      .step {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        gap: 1.5rem;
      }

      .step:last-child {
        margin-bottom: 0;
      }

      .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffb7c5 0%, #ff6b8b 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.125rem;
        flex-shrink: 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }

      .step-content {
        flex: 1;
      }

      .step-title {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #1f2937;
      }

      .step-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 0;
      }

      .quick-start-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-size: 1rem;
      }

      .btn-primary {
        background: #ff6b8b;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px -1px rgba(0, 0, 0, 0.15);
        background: #ff527b;
      }

      .btn-secondary {
        background: rgba(255, 107, 139, 0.1);
        color: #ff6b8b;
        border: 1px solid rgba(255, 107, 139, 0.3);
      }

      .btn-secondary:hover {
        background: rgba(255, 107, 139, 0.2);
        transform: translateY(-2px);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .tech-grid {
          grid-template-columns: 1fr;
        }

        .quick-start-card {
          padding: 1.5rem;
        }

        .step {
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .step-number {
          width: 36px;
          height: 36px;
          font-size: 1rem;
        }

        .quick-start-actions {
          flex-direction: column;
          align-items: center;
          padding-top: 1.5rem;
        }

        .btn {
          width: 200px;
          justify-content: center;
        }
      }

      /* Dark mode support */
      html.dark .tech-card {
        background: #1f2937;
        border-color: #374151;
      }

      html.dark .tech-subtitle {
        color: #ff8fab;
      }

      html.dark .tech-description {
        color: #d1d5db;
      }

      html.dark .quick-start-card {
        background: #1f2937;
        border-color: #374151;
      }

      html.dark .step-title {
        color: #f3f4f6;
      }

      html.dark .step-description {
        color: #d1d5db;
      }

      html.dark .quick-start-actions {
        border-top-color: #374151;
      }

      html.dark .btn-secondary {
        background: rgba(255, 138, 171, 0.1);
        color: #ff8fab;
        border-color: rgba(255, 138, 171, 0.3);
      }

      html.dark .btn-secondary:hover {
        background: rgba(255, 138, 171, 0.2);
      }

      /* Dark mode link styles */
      html.dark a {
        color: #ff8fab !important;
      }

      html.dark a:hover {
        color: #ff7aa3 !important;
      }

      html.dark .vp-hero .name {
        color: #ff8fab !important;
      }
      </style>

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Themed Dummy Text Generator</title>
  <meta name="description" content="We collect zero personal data. All text generation happens entirely in your browser — nothing is sent to servers." />
  <meta property="og:title" content="Privacy Policy | AxelBase Themed Dummy Text Generator" />
  <meta property="og:description" content="100% client-side themed text generator. No tracking, no cookies, no data collection — ever." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <nav class="breadcrumbs mb-4">
        <a href="{base}/">Home</a> <span>/</span> <span>Privacy Policy</span>
      </nav>

      <header class="text-center mb-5">
        <h1>Privacy Policy</h1>
        <p class="post-meta">Effective Date: December 9, 2025</p>
      </header>

      <div class="prose">
        <p>Welcome to the <strong>AxelBase Themed Dummy Text Generator</strong>, a completely <strong>client-side web utility</strong> that generates themed placeholder text (Hipster, Zombie, Cat, Yoda, and Corporate) directly in your browser. We are deeply committed to your privacy and have designed this tool from the ground up to collect <strong>absolutely no personal data whatsoever</strong>.</p>

        <p><strong>We do not collect, store, transmit, or process any information about you or your usage.</strong> Every word generated — whether it's "brains", "purr", or "synergy" — is created instantly on your device and never leaves it.</p>

        <h2>No Data Collection</h2>
        <p>This tool operates entirely in your browser using JavaScript. When you select a theme and click "Generate", all processing happens locally. We do not:</p>
        <ul>
          <li>Track your IP address or location</li>
          <li>Log which themes you prefer</li>
          <li>Use cookies, localStorage, or any persistent tracking</li>
          <li>Employ analytics tools (Google Analytics, Plausible, etc.)</li>
          <li>Load third-party scripts that monitor behavior</li>
        </ul>

        <h2>How Your Privacy Is Protected</h2>
        <p>The generator runs 100% offline-capable after the initial page load. You can even disconnect from the internet and continue generating themed text. All themes and word pools are embedded directly in the code — no external requests are made during generation.</p>

        <p><em>Your generated text — no matter how many paragraphs of Zombie apocalypse or Cat zoomies — stays exclusively on your device.</em></p>

        <h2>Third-Party Services</h2>
        <p>We use only trusted CDNs (Bootstrap, Google Fonts) to deliver styling and fonts. These services may set minimal technical cookies for performance, but we do not use any marketing, advertising, or analytics services.</p>

        <h2>Security & Responsibility</h2>
        <p>Since no data is transmitted, there is no server to breach. Your privacy is protected by design, not by policy alone.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy if new features are added. Any changes will be clearly dated at the top of this page.</p>

        <p class="italic-note text-center mt-5">
          <strong>Your privacy is not negotiable.</strong> This tool exists to help designers and developers — not to harvest data. You can use it with complete confidence.
        </p>
      </div>

      <div class="text-center mt-5">
        <a href="{base}/" class="btn btn-outline-primary">← Back to Generator</a>
      </div>
    </div>
  </div>
</article>

<style>
  .breadcrumbs { font-size: 0.95rem; color: #666; }
  .breadcrumbs a { color: #4361ee; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .post-meta { color: #888; font-size: 0.95rem; }
  .prose { line-height: 1.8; font-size: 1.1rem; }
  .prose h2 { font-size: 1.9rem; margin: 2.5rem 0 1rem; color: #212529; border-bottom: 2px solid #4361ee; padding-bottom: 0.5rem; }
  .prose p { margin-bottom: 1.3rem; color: #444; }
  .prose ul { padding-left: 1.5rem; }
  .prose ul li { margin-bottom: 0.6rem; }
  .italic-note { font-style: italic; color: #555; }
</style>
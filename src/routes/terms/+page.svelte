<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | AxelBase Themed Dummy Text Generator</title>
  <meta name="description" content="Terms of use for the free, client-side themed dummy text generator featuring Hipster, Zombie, Cat, Yoda, and Corporate themes." />
  <meta property="og:title" content="Terms & Conditions | AxelBase Themed Dummy Text Generator" />
  <meta property="og:description" content="Free to use forever. No attribution required. Generate themed placeholder text with confidence." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <nav class="breadcrumbs mb-4">
        <a href="{base}/">Home</a> <span>/</span> <span>Terms & Conditions</span>
      </nav>

      <header class="text-center mb-5">
        <h1>Terms & Conditions</h1>
        <p class="post-meta">Last Updated: December 9, 2025</p>
      </header>

      <div class="prose">
        <p>By using the <strong>AxelBase Themed Dummy Text Generator</strong>, you agree to these simple, fair, and transparent terms.</p>

        <h2>Free Forever</h2>
        <p>This tool is and will always be <strong>completely free</strong> for personal and commercial use. Generate as much Hipster, Zombie, Cat, Yoda, or Corporate text as you need — no limits, no sign-up, no paywalls.</p>

        <h2>Permitted Use</h2>
        <p>You may freely use generated text in:</p>
        <ul>
          <li>Website prototypes and mockups</li>
          <li>Design presentations and client work</li>
          <li>Print materials, apps, games, and videos</li>
          <li>Educational projects and tutorials</li>
          <li>Any personal or commercial project</li>
        </ul>
        <p><strong>No attribution is required</strong> — though it’s always appreciated!</p>

        <h2>License</h2>
        <p>All generated text is released into the <strong>public domain</strong> (CC0). You own full rights to use, modify, and distribute it however you wish, forever.</p>

        <h2>Prohibited Use</h2>
        <p>You may not:</p>
        <ul>
          <li>Resell access to this exact generator as a paid service</li>
          <li>Claim the tool itself as your original work</li>
          <li>Use it to generate harmful, illegal, or abusive content</li>
        </ul>

        <h2>No Warranty</h2>
        <p>This tool is provided <strong>"as is"</strong> without warranty of any kind. While we strive for accuracy and fun, we’re not responsible for typos in your Cat theme or existential dread from Zombie text.</p>

        <h2>Availability</h2>
        <p>We aim to keep the generator online and fast, but cannot guarantee 100% uptime. It may occasionally be down for updates or cosmic interference.</p>

        <h2>Changes to Terms</h2>
        <p>We may update these terms. Continued use after changes constitutes acceptance.</p>

        <p class="italic-note text-center mt-5">
          <strong>This tool exists to make your work more fun and creative.</strong><br>
          Use it freely, share it widely, and may your prototypes always have personality.
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
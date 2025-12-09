<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | AxelBase Themed Text Generator</title>
  <meta name="description" content="Oops! The page you're looking for doesn't exist. But don't worry — plenty of Hipster, Zombie, Cat, Yoda, and Corporate text is still waiting for you!" />
  <meta property="og:title" content="404 – Page Not Found | AxelBase" />
  <meta property="og:description" content="Lost in the void? Return to the themed text generator and generate some personality!" />
  <meta property="og:url" content="{base}/404" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="container py-5 min-vh-100 d-flex align-items-center">
  <div class="row justify-content-center text-center">
    <div class="col-lg-8">
      <!-- Fun 404 Header -->
      <h1 class="display-1 fw-bold text-primary mb-4">404</h1>
      <h2 class="display-5 mb-4">This Page Has Vanished Into the Void</h2>
      
      <p class="lead text-muted mb-5">
        The URL you requested doesn’t exist. It might have been eaten by zombies, stolen by a cat, or simply never existed in this timeline.
      </p>

      <!-- Zombie-style illustration text -->
      <div class="bg-light border rounded-3 p-4 mb-5 fs-4 fw-medium text-danger">
        “Brains… not found… groan…”
      </div>

      <p class="mb-4">
        Don’t worry — the generator is still alive and ready to serve you fresh <strong>Hipster</strong>, <strong>Zombie</strong>, <strong>Cat</strong>, <strong>Yoda</strong>, or <strong>Corporate</strong> text whenever you need it.
      </p>

      <!-- Action Buttons -->
      <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
        <a href="{base}/" class="btn btn-primary btn-lg px-5">
          Back to Generator
        </a>
        <a href="{base}/blog" class="btn btn-outline-secondary btn-lg px-5">
          Read the Blog
        </a>
      </div>

      <!-- Helpful Links -->
      <div class="mt-5 text-muted small">
        <p>Or try one of these:</p>
        <a href="{base}/privacy" class="d-block mb-1">Privacy Policy</a>
        <a href="{base}/terms" class="d-block mb-1">Terms & Conditions</a>
        <a href="https://github.com/yourusername/themed-lorem-generator" target="_blank" class="d-block">
          View Source on GitHub
        </a>
      </div>

      <!-- Fun closing note -->
      <p class="italic-note text-center mt-5 text-muted">
        <em>“Lost a page? Generate a thousand more.”</em><br>
        — Ancient prototyping wisdom
      </p>
    </div>
  </div>
</article>

<style>
  .display-1 {
    font-size: 8rem;
    line-height: 1;
  }
  @media (max-width: 576px) {
    .display-1 { font-size: 5rem; }
    h2.display-5 { font-size: 2rem; }
  }
  .btn-primary {
    background: #4361ee;
    border: none;
  }
  .btn-primary:hover {
    background: #3a56d4;
  }
  .italic-note {
    font-style: italic;
    color: #666;
  }
</style>
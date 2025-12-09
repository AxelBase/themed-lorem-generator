<script lang="ts">
  import { base } from '$app/paths';
  // Note: Ensure $lib/generator exists or mock it. 
  // Assuming the imports provided in your prompt are correct for your structure.
  import { availableThemes, generateText } from '$lib/generator';

  let selectedTheme: string = 'Hipster'; // Default
  let paragraphs: number = 3;
  let generatedText = '';
  let error = '';

  // Type safety for the themes object if needed, otherwise string key is fine
  function generate() {
    error = '';
    paragraphs = Math.round(paragraphs);
    if (paragraphs < 1 || paragraphs > 10) {
      error = 'Please enter a number between 1 and 10.';
      return;
    }
    // Passing theme and count
    generatedText = generateText(selectedTheme as any, paragraphs);
  }

  // Initial generation on load
  generate();
</script>

<main>
  <section class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold mb-3" style="color: var(--color-primary);">Themed Dummy Text</h1>
      <p class="lead text-muted">Generate smooth, bubbly filler text for your next project.</p>
    </div>

    <div class="row g-5">
      <div class="col-lg-4">
        <div class="card h-100 border-0 p-3">
          <div class="card-body">
            <h5 class="card-title mb-4 fw-bold">Configuration</h5>
            
            <div class="mb-4">
              <label for="theme" class="form-label fw-semibold text-muted small text-uppercase">Select Theme</label>
              <select id="theme" class="form-select form-select-lg shadow-sm" bind:value={selectedTheme}>
                {#each availableThemes as theme}
                  <option value={theme}>{theme}</option>
                {/each}
              </select>
            </div>

            <div class="mb-4">
              <label for="paras" class="form-label fw-semibold text-muted small text-uppercase">Paragraphs (1–10)</label>
              <input id="paras" type="number" class="form-control form-control-lg shadow-sm"
                     bind:value={paragraphs} min="1" max="10" />
            </div>

            <button class="btn btn-primary btn-lg w-100 mt-2" on:click={generate}>
              Generate Text
            </button>

            {#if error}
              <div class="alert alert-danger mt-3 rounded-4">{error}</div>
            {/if}
          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="h5 mb-0 fw-bold text-secondary">Result: <span style="color: var(--color-primary)">{selectedTheme}</span></h2>
          <span class="badge rounded-pill bg-light text-dark border">{paragraphs} paragraphs</span>
        </div>
        
        <div class="output-box p-4 p-md-5">
          {generatedText}
        </div>
      </div>
    </div>
  </section>

  <div class="container my-5">
    <hr style="opacity: 0.1">
  </div>

<!-- ABOUT SECTION -->
<section id="about" class="container py-5">
  <div class="row justify-content-center text-center">
    <div class="col-lg-8">
      <h2 class="fw-bold mb-4 display-5">About AxelBase Themed Text Generator</h2>
      <p class="lead text-muted mb-4">
        Tired of lifeless Lorem Ipsum? Welcome to a new era of placeholder text — one that actually has personality.
      </p>
      <p class="fs-5 text-muted lh-lg">
        AxelBase was created for designers, developers, and content creators who believe prototypes should feel alive from day one. Instead of neutral Latin filler that tells stakeholders nothing about tone or voice, we give you five carefully crafted themes: <strong>Hipster</strong>, <strong>Zombie</strong>, <strong>Cat</strong>, <strong>Yoda</strong>, and <strong>Corporate</strong>. Each one instantly communicates mood, audience, and energy — long before real copy exists.
      </p>
      <p class="fs-5 text-muted lh-lg">
        Traditional dummy text hides the emotional impact of a design. Themed text reveals it. A landing page filled with Corporate buzzwords screams enterprise software. A horror game mockup dripping with Zombie groans sets dread from the first glance. A pet brand bathed in Cat-speak feels playful and warm before a single photo is added. This isn’t just filler — it’s a prototyping superpower.
      </p>
      <p class="fs-5 text-muted lh-lg">
        Built as a 100% client-side static web app, AxelBase requires no accounts, no tracking, and no data collection. Everything happens in your browser. Your generated text never leaves your device. It works offline, loads instantly, and is completely free forever — for personal and commercial use. No attribution required (though always appreciated).
      </p>
      <p class="fs-5 text-muted lh-lg">
        Whether you're pitching a startup deck in Hipster-speak, testing a meditation app with Yoda wisdom, or mocking up a Halloween campaign with undead prose — AxelBase helps you design with intent, not indifference.
      </p>
      <div class="mt-5">
        <a href="{base}/blog" class="btn btn-outline-primary">Read the Blog</a>
        <a href="{base}/privacy" class="btn btn-link text-muted">Privacy Policy</a>
      </div>
    </div>
  </div>
</section>

<!-- HOW TO USE SECTION -->
<section id="how-to" class="container py-5 bg-light rounded-4">
  <div class="row justify-content-center text-center">
    <div class="col-lg-8">
      <h2 class="fw-bold mb-4 display-5">How to Use AxelBase</h2>
      <p class="lead text-muted mb-5">
        Three simple steps to better prototypes — no signup, no limits, no nonsense.
      </p>

      <div class="row g-4 mb-5">
        <div class="col-md-4">
          <div class="text-primary fs-1 mb-3">1</div>
          <h4>Choose Your Theme</h4>
          <p class="text-muted">
            Pick from five distinct voices: <strong>Hipster</strong> (trendy & ironic), <strong>Zombie</strong> (horror & survival), <strong>Cat</strong> (playful internet speak), <strong>Yoda</strong> (wise inverted syntax), or <strong>Corporate</strong> (buzzword maximum).
          </p>
        </div>
        <div class="col-md-4">
          <div class="text-primary fs-1 mb-3">2</div>
          <h4>Set Paragraph Count</h4>
          <p class="text-muted">
            Adjust the slider or type a number (1–10) to control text length. Need a short tagline? One paragraph. Building a full page mockup? Go for ten.
          </p>
        </div>
        <div class="col-md-4">
          <div class="text-primary fs-1 mb-3">3</div>
          <h4>Generate & Copy</h4>
          <p class="text-muted">
            Click “Generate New Text” and watch themed placeholder content appear instantly. Click anywhere in the output box or use the copy button to grab it for your design tool.
          </p>
        </div>
      </div>

      <p class="fs-5 text-muted lh-lg">
        That’s it. Every generation is unique thanks to smart randomization within curated word pools. The Yoda theme even applies authentic syntax reversal. The Cat theme celebrates chonks and bleps. The Corporate theme maximizes synergy per square inch.
      </p>
      <p class="fs-5 text-muted lh-lg">
        Use it in Figma, Adobe XD, Webflow, PowerPoint, Notion — anywhere you need text that communicates before real content exists. Works perfectly offline after first load.
      </p>
      <p class="mt-4">
        <strong>Pro tip:</strong> Generate multiple versions and compare how different themes affect perceived tone. Your stakeholders will thank you.
      </p>
    </div>
  </div>
</section>

<!-- FAQ SECTION -->
<section id="faq" class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <h2 class="fw-bold mb-5 text-center display-5">Frequently Asked Questions</h2>

      <div class="accordion accordion-flush" id="faqAccordion">
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
              Is AxelBase really free?
            </button>
          </h3>
          <div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes — <strong>100% free forever</strong>, for personal and commercial use. No limits, no ads, no account required.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
              Can I use the generated text in client work?
            </button>
          </h3>
          <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Absolutely. All generated text is released into the <strong>public domain (CC0)</strong>. Use it in client projects, pitch decks, apps, games — no attribution needed.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
              Is my data private?
            </button>
          </h3>
          <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Completely. The entire tool runs in your browser. <strong>We collect zero data</strong> — no analytics, no cookies, no tracking. Your text never leaves your device.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
              Can I add my own themes?
            </button>
          </h3>
          <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes! The source code is open on GitHub. Fork it, add your own word pools in <code>generator.ts</code>, and deploy your custom version.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
              Why only five themes?
            </button>
          </h3>
          <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Quality over quantity. Each theme is hand-curated and algorithmically enhanced (like Yoda’s syntax reversal) to deliver maximum personality and readability. More themes coming in future updates!
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6">
              Does it work offline?
            </button>
          </h3>
          <div id="q6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes! After the first visit, the entire app is cached. Disconnect from the internet and keep generating themed text.
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-muted mt-5">
        Still have questions? <a href="{base}/blog">Check out the blog</a> or open an issue on GitHub.
      </p>
    </div>
  </div>
</section>
</main>
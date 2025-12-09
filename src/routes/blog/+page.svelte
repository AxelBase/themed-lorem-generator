<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why Themed Dummy Text Beats Lorem Ipsum',
      description: 'Discover how themed placeholder text improves design feedback, mood setting, and client presentations compared to traditional Latin filler.'
    },
    {
      href: '/blog/posts/post2',
      title: 'The Science Behind Random Word Pools',
      description: 'How carefully curated word pools create authentic-sounding themed text while maintaining grammatical flow and readability.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Mastering the Yoda Theme: Syntax Reversal Explained',
      description: 'A deep dive into the client-side word order transformation that gives the Yoda theme its distinctive inverted sentence structure.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Cat Theme: The Psychology of Internet Speak',
      description: 'Why "meow", "purr", and "zooms" resonate so strongly — and how this theme became one of the most popular options.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Corporate Buzzword Density: Finding the Balance',
      description: 'Exploring how the Corporate theme achieves maximum buzzword saturation without breaking natural paragraph rhythm.'
    },
    {
      href: '/blog/posts/post6',
      title: 'When to Use Zombie Text (And When Not To)',
      description: 'Best practices for deploying undead-themed placeholder content in horror games, Halloween sites, and survival prototypes.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Combining Themes for Advanced Prototyping',
      description: 'Creative techniques for mixing Hipster, Cat, and Corporate themes to simulate real user-generated content in demos.'
    }
  ];
</script>

<svelte:head>
  <title>Blog – AxelBase Themed Text Insights</title>
  <meta name="description" content="In-depth articles about themed dummy text, generation techniques, and creative uses of Hipster, Zombie, Cat, Yoda, and Corporate placeholder content." />
</svelte:head>

<main class="container py-5">
  <header class="text-center mb-5">
    <h1 class="display-5 fw-bold mb-3">AxelBase Blog</h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Thoughts, techniques, and deep dives into the art and science of themed placeholder text.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none">
          <div class="card h-100 shadow-sm hover-shadow transition-all border-0">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold text-primary mb-3">
                {post.title}
              </h3>
              <p class="card-text text-muted flex-grow-1 small">
                {post.description}
              </p>
              <span class="text-primary fw-semibold mt-3">
                Read more →
              </span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>

<style>
  .hover-shadow {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .hover-shadow:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
  }
  .transition-all {
    transition: all 0.3s ease;
  }
</style>
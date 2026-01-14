<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();

  // Buy me a coffee dropdown logic
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click outside helper
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<div class="d-flex flex-column min-vh-100">

  <header class="custom-navbar">
    <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">

      <div style="display: flex; align-items: center; gap: 1rem;">
        <a href="{base}/" aria-label="Home">
          <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        </a>
        <a class="navbar-brand-text" href="{base}/" style="text-decoration: none;">AxelBase</a>
      </div>

      <div style="display: flex; align-items: center; gap: 2rem;">

        <!-- Buy me a Coffee + Bitcoin Dropdown -->
        <div class="bmac-nav-item position-relative" use:clickOutside on:click_outside={closeDropdown}>
          <button
            class="bmac-button d-flex align-items-center gap-2"
            on:click={toggleDropdown}
            aria-label="Support options"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
            </svg>
            <span>Buy me a coffee</span>
          </button>

          {#if isDropdownOpen}
            <div
              class="bmac-dropdown mt-2"
              transition:fly={{ y: -10, duration: 250 }}
            >
              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
              >
                <span class="amount">$3</span> One Coffee
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
              >
                <span class="amount">$5</span> Two Coffees
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
              >
                <span class="amount">$10</span> Three Coffees
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
                class="custom-amount"
              >
                Custom Amount
              </a>

              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
                class="custom-amount bitcoin-option"
              >
                Buy via Crypto (Bitcoin)
              </a>
            </div>
          {/if}
        </div>

        <ul style="list-style: none; display: flex; align-items: center; gap: 2rem; margin: 0; padding: 0;">
          <li><a class="nav-link-custom" href="{base}/">Home</a></li>
          <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
          <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
          <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
          <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
        </ul>

      </div>
    </nav>
  </header>

  <div style="flex: 1;">
    <slot />
  </div>

  <footer>
    <div class="container text-center">
      <p class="mb-2 fs-5 fw-bold" style="color: white;">AxelBase</p>
      <p class="mb-3 small">
        AxelBase Themed Dummy Text Generator – {currentYear}
      </p>
      <div class="d-flex justify-content-center gap-4 small">
        <a href="{base}/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="{base}/terms">Terms of Service</a>
      </div>
    </div>
  </footer>

</div>

<style>
  /* ── Buy me a coffee overrides / adaptations for File 2 theme ── */

  .bmac-button {
    background: white;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 50px;
    padding: 0.55rem 1.3rem;
    font-weight: 700;
    font-size: 0.92rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .bmac-button:hover {
    background: var(--color-primary);
    color: white;
    transform: scale(1.04);
    box-shadow: 0 5px 15px rgba(174, 160, 75, 0.3);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 12px 32px rgba(174, 160, 75, 0.18);
    overflow: hidden;
    border: 1px solid rgba(174, 160, 75, 0.15);
    padding: 0.5rem 0;
    z-index: 1040;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 20px;
    color: var(--color-text-dark);
    text-decoration: none;
    font-size: 0.97rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: #fcfbf6;
    color: var(--color-primary);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: var(--color-primary);
    font-size: 1.12rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--color-primary);
    border-top: 1px solid rgba(174, 160, 75, 0.12);
    justify-content: center !important;
    margin-top: 6px;
    padding-top: 14px;
  }

  .bitcoin-option {
    color: #f7931a !important; /* bitcoin orange */
    font-weight: 700 !important;
  }

  .bitcoin-option:hover {
    background: #fff9f0 !important;
    color: #e07b00 !important;
  }
</style>
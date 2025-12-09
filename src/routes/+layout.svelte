<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition'; // Needed for the animation
  import '../app.css';

  // --- PayPal / Dropdown Logic ---
  const paypalUsername = 'AxelLab427'; // TODO: Update this later
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click Outside Action
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

  // Type definition for the custom event to satisfy TypeScript
  import type { Action } from 'svelte/action';
  const clickOutsideAction: Action = clickOutside;
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
        
        <div class="bmac-nav-item" use:clickOutsideAction on:click_outside={closeDropdown}>
          <button class="bmac-button" on:click={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
            </svg>
            Buy me a coffee
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
              {#each donationAmounts as amount}
                <a
                  href="https://paypal.me/{paypalUsername}/{amount}"
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={closeDropdown}
                >
                  ${amount}
                </a>
              {/each}
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
        AxelBase Themed Dummy Text Generator – {new Date().getFullYear()}
      </p>
      <div class="d-flex justify-content-center gap-4 small">
        <a href="{base}/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="{base}/terms">Terms of Service</a>
      </div>
    </div>
  </footer>

</div>
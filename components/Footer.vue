<template>
  <!-- Footer -->
  <footer
    class="relative pt-16 pb-32 px-6 overflow-hidden"
    role="contentinfo"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Pied de page</h2>
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4 mb-12">
        <!-- Left: logo -->
        <div class="flex items-center gap-2 justify-center md:justify-start">
            <div
            class="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center"
          >
            <img
              src="/img/Vector.png"
              alt="logo"
              class="w-8 h-8 object-contain"
            />
          </div>
          <span class="text-xl font-bold text-text-primary">Jeobran k</span>
        </div>

        <!-- Center: nav -->
        <nav class="flex justify-center order-last md:order-none">
          <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <a
              href="#accueil"
              class="text-text-secondary hover:text-text-primary transition-colors"
              >Accueil</a
            >
            <a
              href="#apropos"
              class="text-text-secondary hover:text-text-primary transition-colors"
              >A propos</a
            >
            <a
              href="#projets"
              class="text-text-secondary hover:text-text-primary transition-colors"
              >Projets</a
            >
          </div>
        </nav>

        <!-- Right: credit -->
        <div class="text-center md:text-right text-text-secondary text-sm">
          <p>Développé par : Jeobran Nathanael Kombou</p>
          <p>Designé par : Romaric Njollo</p>
        </div>
      </div>
    </div>

    <!-- Large background text spanning full width, behind content -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center z-0 overflow-hidden"
    >
      <div
        class="footer-bg select-none whitespace-nowrap text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold text-text-muted leading-[0.7]"
      >
        Jeobran k
      </div>

      <!-- overlay pour atténuer le bas du texte (theme-aware via CSS below) -->
      <div
        class="footer-overlay absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
      ></div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer is static for now. Exported as a component to keep pages clean.
</script>

<style>
/* Footer background text: theme-aware opacity + responsive sizing */
.footer-bg {
  /* Use explicit color so the big text remains visible in both themes */
  color: rgba(0, 0, 0, 0.12);
  transition:
    color 180ms ease,
    opacity 180ms ease;
  opacity: 1;
}
.light .footer-bg {
  color: rgba(0, 0, 0, 0.18);
}
.dark .footer-bg {
  /* light white tint on dark backgrounds for subtle visibility */
  color: rgba(255, 255, 255, 0.1);
}

/* Overlay fades the bottom of the big text to the page background depending on theme */
.footer-overlay {
  /* Neutral default: fade to page bg (fall back to white) */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
.light .footer-overlay {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
.dark .footer-overlay {
  /* soften the dark overlay so it doesn't fully obscure the big text */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
}

/* Responsive sizing is now handled via Tailwind classes in the template */
</style>

<template>
  <div class="min-h-screen bg-neutral-50">
    <DSNavigation sticky brand-name="Design System">
      <template #links>
        <DSLink to="#buttons">Buttons</DSLink>
        <DSLink to="#cards">Cards</DSLink>
        <DSLink to="#forms">Forms</DSLink>
        <DSLink to="#typography">Typography</DSLink>
      </template>
      <template #actions>
        <DSButton variant="outline" size="sm">Sign In</DSButton>
        <DSButton size="sm">Get Started</DSButton>
      </template>
    </DSNavigation>

    <DSContainer centered padding="lg" class="py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <DSHeading level="1" align="center" class="mb-4">
          Design System Components
        </DSHeading>
        <DSText size="xl" color="muted" align="center">
          A comprehensive collection of reusable UI components for your portfolio
        </DSText>
      </div>

      <!-- Buttons Section -->
      <section id="buttons" class="mb-16">
        <DSHeading level="2" class="mb-6">Buttons</DSHeading>
        
        <DSCard variant="elevated" padding="lg" class="mb-8">
          <DSHeading level="3" size="lg" class="mb-4">Button Variants</DSHeading>
          <div class="flex flex-wrap gap-4">
            <DSButton variant="primary">Primary</DSButton>
            <DSButton variant="secondary">Secondary</DSButton>
            <DSButton variant="outline">Outline</DSButton>
            <DSButton variant="ghost">Ghost</DSButton>
            <DSButton variant="danger">Danger</DSButton>
          </div>
        </DSCard>

        <DSCard variant="elevated" padding="lg" class="mb-8">
          <DSHeading level="3" size="lg" class="mb-4">Button Sizes</DSHeading>
          <div class="flex flex-wrap items-center gap-4">
            <DSButton size="sm">Small</DSButton>
            <DSButton size="md">Medium</DSButton>
            <DSButton size="lg">Large</DSButton>
          </div>
        </DSCard>

        <DSCard variant="elevated" padding="lg">
          <DSHeading level="3" size="lg" class="mb-4">Button States</DSHeading>
          <div class="flex flex-wrap gap-4">
            <DSButton disabled>Disabled</DSButton>
            <DSButton loading>Loading</DSButton>
            <DSButton full-width>Full Width</DSButton>
          </div>
        </DSCard>
      </section>

      <!-- Cards Section -->
      <section id="cards" class="mb-16">
        <DSHeading level="2" class="mb-6">Cards</DSHeading>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DSCard variant="default" padding="md">
            <DSHeading level="4" class="mb-2">Default Card</DSHeading>
            <DSText color="muted">
              A simple card with default styling
            </DSText>
          </DSCard>

          <DSCard variant="bordered" padding="md">
            <DSHeading level="4" class="mb-2">Bordered Card</DSHeading>
            <DSText color="muted">
              A card with a border
            </DSText>
          </DSCard>

          <DSCard variant="elevated" padding="md" hoverable>
            <DSHeading level="4" class="mb-2">Elevated Card</DSHeading>
            <DSText color="muted">
              A card with shadow that lifts on hover
            </DSText>
          </DSCard>
        </div>

        <DSCard variant="elevated" title="Card with Header and Footer" padding="md">
          <DSText>
            This is a card with a header and footer. The header contains the title,
            and the footer can contain actions or additional information.
          </DSText>
          <template #footer>
            <div class="flex justify-end gap-2">
              <DSButton variant="ghost" size="sm">Cancel</DSButton>
              <DSButton size="sm">Save</DSButton>
            </div>
          </template>
        </DSCard>
      </section>

      <!-- Forms Section -->
      <section id="forms" class="mb-16">
        <DSHeading level="2" class="mb-6">Form Components</DSHeading>
        
        <DSCard variant="elevated" padding="lg">
          <DSHeading level="3" size="lg" class="mb-6">Contact Form Example</DSHeading>
          
          <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DSInput
                v-model="form.name"
                label="Full Name"
                placeholder="John Doe"
                required
              />
              
              <DSInput
                v-model="form.email"
                type="email"
                label="Email"
                placeholder="john@example.com"
                required
              />
            </div>

            <DSInput
              v-model="form.subject"
              label="Subject"
              placeholder="What is this about?"
            />

            <DSTextarea
              v-model="form.message"
              label="Message"
              placeholder="Your message here..."
              :rows="6"
              required
            />

            <div class="flex justify-end gap-2">
              <DSButton variant="outline">Clear</DSButton>
              <DSButton>Send Message</DSButton>
            </div>
          </div>
        </DSCard>
      </section>

      <!-- Typography Section -->
      <section id="typography" class="mb-16">
        <DSHeading level="2" class="mb-6">Typography</DSHeading>
        
        <DSCard variant="elevated" padding="lg" class="mb-8">
          <DSHeading level="3" size="lg" class="mb-4">Headings</DSHeading>
          <div class="space-y-2">
            <DSHeading level="1">Heading 1</DSHeading>
            <DSHeading level="2">Heading 2</DSHeading>
            <DSHeading level="3">Heading 3</DSHeading>
            <DSHeading level="4">Heading 4</DSHeading>
            <DSHeading level="5">Heading 5</DSHeading>
            <DSHeading level="6">Heading 6</DSHeading>
          </div>
        </DSCard>

        <DSCard variant="elevated" padding="lg" class="mb-8">
          <DSHeading level="3" size="lg" class="mb-4">Text Variants</DSHeading>
          <div class="space-y-2">
            <DSText>Default text</DSText>
            <DSText color="primary">Primary colored text</DSText>
            <DSText color="secondary">Secondary colored text</DSText>
            <DSText color="muted">Muted text</DSText>
            <DSText weight="bold">Bold text</DSText>
            <DSText italic>Italic text</DSText>
          </div>
        </DSCard>

        <DSCard variant="elevated" padding="lg">
          <DSHeading level="3" size="lg" class="mb-4">Badges</DSHeading>
          <div class="flex flex-wrap gap-2">
            <DSBadge variant="default">Default</DSBadge>
            <DSBadge variant="primary">Primary</DSBadge>
            <DSBadge variant="secondary">Secondary</DSBadge>
            <DSBadge variant="success">Success</DSBadge>
            <DSBadge variant="warning">Warning</DSBadge>
            <DSBadge variant="danger">Danger</DSBadge>
            <DSBadge variant="info" rounded>Info</DSBadge>
          </div>
        </DSCard>
      </section>

      <!-- Links Section -->
      <section id="links" class="mb-16">
        <DSHeading level="2" class="mb-6">Links</DSHeading>
        
        <DSCard variant="elevated" padding="lg">
          <div class="space-y-3">
            <div>
              <DSLink href="#" variant="default">Default Link</DSLink>
            </div>
            <div>
              <DSLink href="#" variant="primary">Primary Link</DSLink>
            </div>
            <div>
              <DSLink href="#" variant="secondary">Secondary Link</DSLink>
            </div>
            <div>
              <DSLink href="https://example.com" external>External Link</DSLink>
            </div>
          </div>
        </DSCard>
      </section>
    </DSContainer>

    <!-- Footer -->
    <footer class="bg-white border-t border-neutral-200 py-8 mt-16">
      <DSContainer centered>
        <DSText align="center" color="muted">
          © 2026 Design System. Built with Nuxt 3 and Tailwind CSS.
        </DSText>
      </DSContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})
</script>

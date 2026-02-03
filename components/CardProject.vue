<template>
  <div class="bg-background rounded-2xl p-6 border border-border-light transition-all duration-300 group">
    <!-- Header with date badge -->
    <div class="flex justify-between items-start mb-4">
      <div class="flex-1">
        <slot name="header" />
      </div>
  <Badge v-if="date" type="date" :variant="dateVariant">
        {{ date }}
      </Badge>
    </div>
    
    <!-- Image placeholder -->
  <div v-if="hasImage" class="w-full h-80 bg-background rounded-xl mb-4 overflow-hidden">
      <slot name="image" />
    </div>
    
    <!-- Content -->
    <div class="mb-4">
  <h3 class="text-xl font-bold text-text-primary mb-2 font-satoshi">
        <slot name="title" />
      </h3>
      <p class="text-text-secondary text-sm leading-relaxed">
        <slot name="description" />
      </p>
    </div>
    
    <!-- Tech stack badges -->
    <div v-if="$slots.technologies" class="flex flex-wrap gap-2 mb-4">
      <slot name="technologies" />
    </div>
    
    <!-- Footer with actions -->
    <div v-if="$slots.actions" class="flex gap-3 pt-4 border-t border-border-light">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  date?: string
  dateVariant?: 'primary' | 'secondary' | 'muted'
  hasImage?: boolean
}

withDefaults(defineProps<Props>(), {
  date: undefined,
  dateVariant: 'primary',
  hasImage: true,
})
</script>

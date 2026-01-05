# Design System Documentation

This design system provides a comprehensive set of reusable UI components for the portfolio application.

## Components

### DSButton
A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `disabled`: boolean (default: false)
- `loading`: boolean (default: false)
- `fullWidth`: boolean (default: false)

**Usage:**
```vue
<DSButton variant="primary" size="md" @click="handleClick">
  Click me
</DSButton>
```

### DSCard
A card container component with header and footer slots.

**Props:**
- `variant`: 'default' | 'bordered' | 'elevated' (default: 'default')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `title`: string (optional)
- `hoverable`: boolean (default: false)

**Slots:**
- `default`: Main content
- `header`: Card header (optional)
- `footer`: Card footer (optional)

**Usage:**
```vue
<DSCard variant="elevated" title="Card Title" padding="lg">
  Card content goes here
  <template #footer>
    <DSButton>Action</DSButton>
  </template>
</DSCard>
```

### DSInput
A text input component with label, hint, and error support.

**Props:**
- `modelValue`: string | number
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' (default: 'text')
- `label`: string (optional)
- `placeholder`: string (optional)
- `hint`: string (optional)
- `error`: string (optional)
- `disabled`: boolean (default: false)
- `required`: boolean (default: false)
- `size`: 'sm' | 'md' | 'lg' (default: 'md')

**Slots:**
- `prefix`: Icon or text before input
- `suffix`: Icon or text after input

**Usage:**
```vue
<DSInput
  v-model="email"
  type="email"
  label="Email Address"
  placeholder="john@example.com"
  required
/>
```

### DSTextarea
A multiline text input component.

**Props:**
- `modelValue`: string
- `label`: string (optional)
- `placeholder`: string (optional)
- `hint`: string (optional)
- `error`: string (optional)
- `disabled`: boolean (default: false)
- `required`: boolean (default: false)
- `rows`: number (default: 4)

**Usage:**
```vue
<DSTextarea
  v-model="message"
  label="Message"
  placeholder="Enter your message"
  :rows="6"
/>
```

### DSHeading
A heading component with customizable level and styling.

**Props:**
- `level`: '1' | '2' | '3' | '4' | '5' | '6' (default: '1')
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' (optional)
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold' (default: 'bold')
- `align`: 'left' | 'center' | 'right' (default: 'left')
- `color`: 'default' | 'primary' | 'secondary' | 'muted' (default: 'default')

**Usage:**
```vue
<DSHeading level="1" color="primary">
  Page Title
</DSHeading>
```

### DSText
A text component with customizable styling.

**Props:**
- `tag`: 'p' | 'span' | 'div' | 'label' (default: 'p')
- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' (default: 'base')
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold' (default: 'normal')
- `align`: 'left' | 'center' | 'right' | 'justify' (default: 'left')
- `color`: 'default' | 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'danger' (default: 'default')
- `italic`: boolean (default: false)

**Usage:**
```vue
<DSText size="lg" color="muted">
  This is a text paragraph
</DSText>
```

### DSBadge
A badge component for labels and tags.

**Props:**
- `variant`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' (default: 'default')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `rounded`: boolean (default: false)

**Usage:**
```vue
<DSBadge variant="success">Active</DSBadge>
```

### DSLink
A link component supporting both internal (NuxtLink) and external links.

**Props:**
- `to`: string (for internal routes)
- `href`: string (for external links)
- `variant`: 'default' | 'primary' | 'secondary' | 'muted' (default: 'default')
- `underline`: 'always' | 'hover' | 'none' (default: 'hover')
- `external`: boolean (default: false)

**Usage:**
```vue
<DSLink to="/about" variant="primary">About</DSLink>
<DSLink href="https://example.com" external>External Site</DSLink>
```

### DSContainer
A container component for consistent page layouts.

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'lg')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `centered`: boolean (default: false)

**Usage:**
```vue
<DSContainer centered padding="lg">
  Page content
</DSContainer>
```

### DSNavigation
A responsive navigation component.

**Props:**
- `variant`: 'default' | 'transparent' | 'bordered' (default: 'default')
- `sticky`: boolean (default: false)
- `brandName`: string (default: 'Portfolio')

**Slots:**
- `logo`: Custom logo (optional)
- `links`: Navigation links
- `actions`: Action buttons
- `mobile-links`: Mobile menu links

**Usage:**
```vue
<DSNavigation sticky brand-name="My Portfolio">
  <template #links>
    <DSLink to="/">Home</DSLink>
    <DSLink to="/about">About</DSLink>
  </template>
  <template #actions>
    <DSButton>Contact</DSButton>
  </template>
</DSNavigation>
```

## Design Tokens

### Colors

#### Primary Colors
- `primary-50` to `primary-900`: Main brand colors (blue scale)

#### Secondary Colors
- `secondary-50` to `secondary-900`: Accent colors (purple scale)

#### Neutral Colors
- `neutral-50` to `neutral-900`: Gray scale for text and backgrounds

### Typography

- **Font Families:**
  - `font-sans`: Inter, system-ui, sans-serif
  - `font-mono`: Fira Code, monospace

### Spacing
Custom spacing values: 18 (4.5rem), 88 (22rem), 128 (32rem)

### Border Radius
- `rounded-xl`: 1rem
- `rounded-2xl`: 1.5rem

### Box Shadows
- `shadow-soft`: Subtle shadow for cards
- `shadow-medium`: Medium shadow for elevated elements
- `shadow-strong`: Strong shadow for prominent elements

## Demo

To see all components in action, run the development server and visit the homepage:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

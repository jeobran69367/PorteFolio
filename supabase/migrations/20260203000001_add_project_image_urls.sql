-- Add image_urls column to projects to store gallery of image URLs
alter table if exists public.projects
add column if not exists image_urls text[];

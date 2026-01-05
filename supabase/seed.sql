-- Seed data for portfolio database (for testing and development)

-- Sample projects
INSERT INTO projects (title, description, long_description, technologies, category, featured, status, order_index) VALUES
('Portfolio Website', 'Personal portfolio website built with Nuxt.js and Supabase', 'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built using Nuxt.js for the frontend and Supabase for the backend database and authentication.', '["Nuxt.js", "Vue.js", "TypeScript", "Supabase", "TailwindCSS"]'::jsonb, 'Web Development', true, 'completed', 1),
('E-commerce Platform', 'Full-stack e-commerce solution with payment integration', 'A complete e-commerce platform featuring product catalog, shopping cart, secure checkout, and order management. Integrated with Stripe for payment processing.', '["React", "Node.js", "Express", "MongoDB", "Stripe"]'::jsonb, 'Web Development', true, 'completed', 2),
('Task Management App', 'Collaborative task management application', 'A collaborative task management tool allowing teams to organize projects, assign tasks, and track progress in real-time.', '["Vue.js", "Firebase", "Vuex", "TailwindCSS"]'::jsonb, 'Web Development', false, 'completed', 3);

-- Sample skills
INSERT INTO skills (name, category, proficiency_level, years_of_experience, order_index) VALUES
-- Frontend
('Vue.js', 'Frontend', 5, 3.5, 1),
('React', 'Frontend', 4, 2.5, 2),
('TypeScript', 'Frontend', 4, 3.0, 3),
('HTML/CSS', 'Frontend', 5, 5.0, 4),
('TailwindCSS', 'Frontend', 4, 2.0, 5),
-- Backend
('Node.js', 'Backend', 4, 3.0, 6),
('Express.js', 'Backend', 4, 2.5, 7),
('PostgreSQL', 'Backend', 4, 2.0, 8),
('MongoDB', 'Backend', 3, 1.5, 9),
-- Tools
('Git', 'Tools', 5, 4.0, 10),
('Docker', 'Tools', 3, 1.5, 11),
('Supabase', 'Tools', 4, 1.0, 12);

-- Sample experience
INSERT INTO experience (company_name, position, description, start_date, end_date, is_current, location, achievements) VALUES
('Tech Company Inc.', 'Full Stack Developer', 'Developed and maintained web applications using modern JavaScript frameworks.', '2022-01-01', NULL, true, 'Paris, France', '["Led migration to Nuxt.js framework", "Improved application performance by 40%", "Mentored junior developers"]'::jsonb),
('Startup XYZ', 'Frontend Developer', 'Built responsive user interfaces and implemented new features.', '2020-06-01', '2021-12-31', false, 'Remote', '["Implemented design system", "Reduced page load time by 30%", "Collaborated with design team"]'::jsonb);

-- Sample education
INSERT INTO education (institution, degree, field_of_study, description, start_date, end_date, is_current, location) VALUES
('University of Technology', 'Master''s Degree', 'Computer Science', 'Specialized in software engineering and web development.', '2018-09-01', '2020-06-30', false, 'Paris, France'),
('Engineering School', 'Bachelor''s Degree', 'Information Technology', 'Studied fundamentals of computer science and programming.', '2015-09-01', '2018-06-30', false, 'Lyon, France');

-- Note: Contact messages are not seeded as they should come from actual user submissions

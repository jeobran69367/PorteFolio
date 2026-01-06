-- Enable Row Level Security on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Projects: Public read access, authenticated write access
CREATE POLICY "Allow public read access on projects"
    ON projects FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert on projects"
    ON projects FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on projects"
    ON projects FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on projects"
    ON projects FOR DELETE
    USING (auth.role() = 'authenticated');

-- Skills: Public read access, authenticated write access
CREATE POLICY "Allow public read access on skills"
    ON skills FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert on skills"
    ON skills FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on skills"
    ON skills FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on skills"
    ON skills FOR DELETE
    USING (auth.role() = 'authenticated');

-- Experience: Public read access, authenticated write access
CREATE POLICY "Allow public read access on experience"
    ON experience FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert on experience"
    ON experience FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on experience"
    ON experience FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on experience"
    ON experience FOR DELETE
    USING (auth.role() = 'authenticated');

-- Education: Public read access, authenticated write access
CREATE POLICY "Allow public read access on education"
    ON education FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert on education"
    ON education FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on education"
    ON education FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on education"
    ON education FOR DELETE
    USING (auth.role() = 'authenticated');

-- Contact messages: Public can insert, only authenticated can read/update/delete
CREATE POLICY "Allow public insert on contact_messages"
    ON contact_messages FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contact_messages"
    ON contact_messages FOR SELECT
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on contact_messages"
    ON contact_messages FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on contact_messages"
    ON contact_messages FOR DELETE
    USING (auth.role() = 'authenticated');

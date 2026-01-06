-- Row Level Security policies for services table

-- Enable RLS on services table
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Services: Public read access, authenticated write access
CREATE POLICY "Allow public read access on services"
    ON services FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert on services"
    ON services FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on services"
    ON services FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on services"
    ON services FOR DELETE
    USING (auth.role() = 'authenticated');

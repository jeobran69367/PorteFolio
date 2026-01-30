-- Add services table for portfolio services page

-- Services table - professional services offered
CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    subtitle TEXT,
    description TEXT NOT NULL,
    icon_url TEXT,
    
    -- Problems addressed by this service
    problems_addressed JSONB DEFAULT '[]'::jsonb,
    
    -- Solutions proposed
    solutions JSONB DEFAULT '[]'::jsonb,
    
    -- Client benefits
    benefits JSONB DEFAULT '[]'::jsonb,
    
    -- Technical stack (for technical services)
    tech_stack JSONB DEFAULT '[]'::jsonb,
    
    -- Approach/methodology details
    approach JSONB DEFAULT '[]'::jsonb,
    
    -- Status: active, in_development, coming_soon
    status VARCHAR(50) DEFAULT 'active',
    
    -- Display settings
    featured BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    
    -- Additional metadata
    metadata JSONB DEFAULT '{}'::jsonb,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_status ON services(status);
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(featured);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_order_index ON services(order_index);

-- Create trigger for updating updated_at
CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add comment to table for documentation
COMMENT ON TABLE services IS 'Professional services offered on the portfolio';
COMMENT ON COLUMN services.problems_addressed IS 'Array of problems that this service addresses';
COMMENT ON COLUMN services.solutions IS 'Array of solutions provided by this service';
COMMENT ON COLUMN services.benefits IS 'Array of client benefits from this service';
COMMENT ON COLUMN services.tech_stack IS 'Technical stack used (for technical services)';
COMMENT ON COLUMN services.approach IS 'Methodology and approach details';
COMMENT ON COLUMN services.metadata IS 'Additional flexible metadata for service-specific data';

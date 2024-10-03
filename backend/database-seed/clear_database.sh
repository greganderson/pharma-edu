read -p "WARNING: This is a destructive action! This will completely clear the database of all tables and records. Are you sure you want to proceed? (y | n) " choice

case "$choice" in
  y|Y ) echo "Proceeding to clear the database.";;
  n|N )
    echo "Aborting..."
    exit 1
    ;;
  * ) echo "Invalid input, aborting..."; exit 1;;
esac


DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pharma-db

psql $DATABASE_URL -c "DO \$\$
DECLARE
    r RECORD;
BEGIN
    -- Drop all tables
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;

    -- Drop all views
    FOR r IN (SELECT viewname FROM pg_views WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP VIEW IF EXISTS ' || quote_ident(r.viewname) || ' CASCADE';
    END LOOP;

    -- Drop all sequences
    FOR r IN (SELECT sequencename FROM pg_sequences WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP SEQUENCE IF EXISTS ' || quote_ident(r.sequencename) || ' CASCADE';
    END LOOP;

     -- Drop all custom types (ENUM types)
    FOR r IN (SELECT typname FROM pg_type 
              WHERE typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public') 
              AND typtype = 'e') LOOP
        EXECUTE 'DROP TYPE IF EXISTS ' || quote_ident(r.typname) || ' CASCADE';
    END LOOP;
END
\$\$;"

echo "Database successfully cleared."

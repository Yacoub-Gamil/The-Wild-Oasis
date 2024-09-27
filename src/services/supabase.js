import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uajlqifgmrmgdmbhwqkl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhamxxaWZnbXJtZ2RtYmh3cWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTMwNDcsImV4cCI6MjA0MjY4OTA0N30.XHAXBf7uycpZTAXlY2LUhrbuOKyCiFYT9tDzoIPXJ7U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

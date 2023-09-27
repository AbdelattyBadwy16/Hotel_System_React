import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zobjdydkxiaahomsmxfv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvYmpkeWRreGlhYWhvbXNteGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4NDMxODksImV4cCI6MjAxMTQxOTE4OX0._1Ak0gbYBHpzP0yPnBXytTe0sMUKO0bFdDLtJOpwfh0";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pzrldjuaicmwkkeyplyv.supabase.co';

const supabaseKey = 'sb_publishable_0miLs6FrJvq3KRx268CiSw_ljbudpPQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
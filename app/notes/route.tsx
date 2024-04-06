import {NextResponse} from 'next/server'
import { createClient } from '@/utils/supabase/server';

export async function GET() {
    const supabase = createClient();


    let { data: Clubs, error } = await supabase
    .from('Clubs')
    .select('*')
    return NextResponse.json(Clubs);
    
}
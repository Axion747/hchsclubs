import {NextResponse} from 'next/server'
import { createClient } from '@/utils/supabase/server';

export async function GET() {
    const supabase = createClient();

    supabase.auth.getUser();
    let { data: Clubs, error } = await supabase
        .from('Clubs')
        .select('*')
    process.on('uncaughtException', function (err) {
        console.log(err);
    }); 
    return NextResponse.json(Clubs);
    
}
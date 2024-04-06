
import { ClubInfo, columns } from "../../components/columns"
import { DataTable } from "../../components/data-table"
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link'
async function getData(): Promise<ClubInfo[]> {
    const clubs: ClubInfo[] = await fetch('https://hchsclubs-fb54a0jss-axion747s-projects.vercel.app/notes').then((res) => res.json());
    return (clubs)
    
}
 
export default async function searchPage() {
    const data = await getData();
    return (
        <div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>



        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* <div className="flex lg:flex-1">
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-normal">
            {/* <Link
                    href="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Home
            </Link> */}
                <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 px-2">
                    <span aria-hidden="true">←</span>  Return Home
                </Link>
          </div>
        </nav>


        <div className=" h-screen mx-auto py-10 px-10">
            <DataTable columns={columns} data={data} />
        </div>


    </div>

    )
}
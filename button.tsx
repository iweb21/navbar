

import Link from 'next/link';
export default function Button ({props}:any) {
    return (

        
        <div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                {props}
            </button>
                    </div>
        
    )
}
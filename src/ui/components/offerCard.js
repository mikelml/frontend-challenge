export default function OfferCard ({name, cashBack, address, expires}) {
    return (
        <div class="card relative px-4 mb-5 on-over">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>

                <div class="mt-1">
                    {cashBack}<span class="text-gray-600 text-sm"> /DESC</span>
                </div>
                <div class="mt-4 flex">
                    <span class="text-md font-semibold flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {address}
                    </span>
                    <span class="text-sm text-gray-600">&nbsp; ({expires})</span>
                </div>
            </div>
        </div>
    )
}
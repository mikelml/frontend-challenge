export default function OrderButton ({filter_key, order, filter, onSetOrder, child}) {
    return (
        <button type="button" onClick={() => onSetOrder(filter_key, order == 'asc' ? 'desc' : 'asc' )} class="ml-2 bg-white w-auto flex justify-end items-center p-2 hover:text-blue-400">
            {child}
            {
                filter == filter_key ? 
                    <svg xmlns="http://www.w3.org/2000/svg" style={`${order == 'desc' ? 'transform: rotate(0.5turn);' : ''}`} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                : null
            }
        </button>
    )
}
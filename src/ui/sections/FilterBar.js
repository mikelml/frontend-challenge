import OrderButton from "../components/orderButton";
import SearchField from "../components/searchField";

export default function FilterBar({
    onSearch,
    filter,
    order,
    onSetOrder,
    ...props
}) {
    const orderButtons = [
        {
            filter_key: "dv_name",
            content: "A-z",
        },
        {
            filter_key: "discount",
            content: "Desc %",
        },
        {
            filter_key: "dv_address",
            content: (
                <>
                    A-z
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </>
            ),
        },
    ];
    const [value, setValue] = useState("");

    const onSetValue = e => {
        setValue(e.currentTarget.value);
        if (e.currentTarget.value == "") onSearch("");
    };

    const submitSearch = e => {
        e.preventDefault();
        e.stopPropagation();

        onSearch(value);
    };

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            onSearch(value);
        }
    };

    return (
        <div class="filter-bar shadow pt-1 pb-1 pl-2 pr-2">
            <SearchField
                handleKeyDown={handleKeyDown}
                submitSearch={submitSearch}
                onSetValue={onSetValue}
                value={value}
            />
            <span>
                {orderButtons.map(button => (
                    <OrderButton
                        order={order}
                        filter={filter}
                        onSetOrder={onSetOrder}
                        filter_key={button.filter_key}
                        child={button.content}
                    />
                ))}
            </span>
        </div>
    );
}

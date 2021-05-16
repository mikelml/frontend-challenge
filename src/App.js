import { useEffect, useRef, useState } from "react";
import DirectoryList from "ui/sections/DirectoryList";
import FilterBar from "./ui/sections/FilterBar";
import LoadingIcon from "./ui/components/loadingIcon";

import { compareValues } from "./utils/compareValues";

const fetchOffersList = parameters => {
    return fetch(
        `https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?${
            parameters || ""
        }`,
    )
        .then(res => res.json())
        .then(({ data }) => data);
};

export default function App() {
    const [offers, _setOffers] = useState([]);
    const [counter, _setCounter] = useState(1);
    const [filter, setFilter] = useState("");
    const [order, setOrder] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // refs used just for scroll handler
    const myCounter = useRef(counter);
    const setCounter = data => {
        myCounter.current = data;
        _setCounter(data);
    };

    const myOffers = useRef(offers);
    const setOffers = data => {
        myOffers.current = data;
        _setOffers(data);
    };

    useEffect(() => {
        fetchOffersList("epp=18&p=1").then(Offers => setOffers(Offers));

        window.document.getElementById("directory-list").onscroll = scroll => {
            onScrollY(scroll);
        };
    }, []);

    const onScrollY = scroll => {
        const scrollY = scroll.currentTarget.scrollTop;
        const scrollHeight = window.document.getElementById("directory-list")
            .scrollHeight;
        const offsetHeight = window.document.getElementById("directory-list")
            .offsetHeight;

        if (
            scrollY + offsetHeight >= scrollHeight - 10 &&
            myCounter.current < parseInt(scrollHeight / (offsetHeight - 65))
        ) {
            setCounter(myCounter.current + 1);
            setIsLoading(true);
            fetchOffersList(`epp=18&p=${myCounter.current + 1}`).then(
                Offers => {
                    setIsLoading(false);
                    const updatedOffers = [...myOffers.current, ...Offers];
                    setOffers(updatedOffers);
                },
            );
        }
    };

    const searchOffer = offer => {
        setIsLoading(true);
        fetchOffersList(`epp=18&p=1&name=${offer}`).then(data => {
            setOffers(data);
            setFilter("");
            setOrder("");
            setCounter(1);
            setIsLoading(false);
        });
    };

    const orderBy = (filter, order) => {
        const sortedOffers = offers.sort(compareValues(filter, order));
        setOffers(sortedOffers);
        setFilter(filter);
        setOrder(order);
    };

    return (
        <>
            <FilterBar
                onSearch={searchOffer}
                onSetOrder={orderBy}
                order={order}
                filter={filter}
            />
            <DirectoryList offerList={offers} />
            {isLoading ? <LoadingIcon /> : null}
        </>
    );
}

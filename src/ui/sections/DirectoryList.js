import OfferCard from '../components/offerCard'
export default function DirectoryList({ offerList, ...props }) {

	return (
		<div id="directory-list" class="container mt-4 mx-auto max-w-6xl overflow-scroll height-70vh">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
				{
					offerList.map(offer =>
						<OfferCard 
							name={offer.dv_name}
							cashBack={offer.dv_cashback}
							address={offer.dv_address}
							expires={offer.dv_expires}
						/>
					)
				}
			</div>
		</div>
	)
}

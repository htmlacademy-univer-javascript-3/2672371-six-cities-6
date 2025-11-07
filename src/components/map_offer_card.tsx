import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useRef, useMemo } from 'react'
import {useMap} from '../hooks/useMap'
import Offer from '../types/offer'
interface MapProps {
	city: {
		latitude: number;
		longitude: number;
	}
	points: Offer[];
	activePoints?: Offer[];
}
function MapOfferCard({city, points, activePoints = []}: MapProps): JSX.Element {
	const mapRef = useRef<HTMLDivElement>(null);
	const map = useMap({mapRef, city});

	const defaultCustomIcon = useMemo(() => L.icon({
		iconUrl: '/img/pin.svg',
		iconSize: [40, 40],
		iconAnchor: [20,40]
	}), [])

	const currentCustomIcon = useMemo(() => L.icon({
		iconUrl: '/img/pin-active.svg',
		iconSize: [40,40],
		iconAnchor: [20,40]
	}), [])

	useEffect (() => {
		if (map) {
			map.eachLayer((layer) => {
				if (layer instanceof L.Marker) {
					map.removeLayer(layer);
				}
			});
			points.forEach((point) => {
				const isActive = activePoints.some(activePoint =>
					activePoint.id === point.id
				);
				L.marker([
					point.latitude,
					point.longitude
				], {
					icon: isActive
					? currentCustomIcon
					: defaultCustomIcon
				})
				.addTo(map);
			})
		}
	}, [map, points, activePoints, defaultCustomIcon, currentCustomIcon]);
	return(
		<div
			style={{ 
				height: '750px',
				width: '80%',
				position: 'relative',
				margin: '0 auto',
				display: 'block',
				border: '1px solid #ccc',
				borderRadius: '8px'
			}}
			ref={mapRef}
		/>
	);
}

export default MapOfferCard;

import {useEffect, useState, useRef} from 'react'
import L, {Map} from 'leaflet'

interface UseMapProps{
	mapRef: React.RefObject<HTMLDivElement>;
	city: {
		latitude: number;
		longitude: number;
	};
}
export function useMap({mapRef, city}: UseMapProps) {
	const [map, setMap] = useState<Map | null>(null);
	const isRenderedRef = useRef(false)

	useEffect(() => {
		if (mapRef.current !== null && !isRenderedRef.current){
			const mapInstance = L.map(mapRef.current, {
				center: [city.latitude, city.longitude],
				zoom: 10
			});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(mapInstance);

			setMap(mapInstance);
			isRenderedRef.current = true;
		}
	}, [mapRef, city]);
	return map;
}

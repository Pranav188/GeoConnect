import React from 'react';
import { useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:"p1",
        title:"empire state bldg",
        description:"old bldg",
        imageUrl:"https://en.wikipedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_(cropped2).jpg",
        address:"papdy, vasai",
        location: {
            lat:1,
            lng:2
        },
        creator:"u1"
    },
    {
        id:"p2",
        title:"empire state bldg",
        description:"old bldg",
        imageUrl:"https://en.wikipedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_(cropped2).jpg",
        address:"papdy, vasai",
        location: {
            lat:1,
            lng:2
        },
        creator:"u2"
    }
]

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator == userId)
    return <PlaceList items={loadedPlaces} />;

};

export default UserPlaces;
var config = {
    style: 'mapbox://styles/xg298/clodswoh7001h01pf0z5g8is7',
    accessToken: 'pk.eyJ1IjoieGcyOTgiLCJhIjoiY2xvZnZybDdiMGRkMTJrcmt0NWtxOGh3bCJ9.iFCcl0YymjvPMJDElFxsTw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The extent of flooding in 4 big cities',
    subtitle: 'Major cities in the United States are being hit by floods. Let us look at how four major cities in the north-central, southeast, northeast, and west of the United States are affected by floods spatially.',
    byline: 'By Xi Guan',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'New York',
            image: 'images/source.png',
            description: 'The extent of flooding in New York City',
            location: {
                center: [-74.00348, 40.71299],
                zoom: 15.84,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Atlanta',
            image: '/Users/guanxi/Documents/GitHub/countermapping-webmaps/Lab10/images/source2.png',
            description: 'The extent of flooding in Atlanta',
            location: {
                center: [-84.43815, 33.75303],
                zoom: 10.32,
                pitch: 45,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco',
            image: 'images/source3.png',
            description: 'The extent of flooding in San Francisco',
            location: {
                center: [-122.42285, 37.76869],
                zoom: 11.01,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: ' Detroit',
            image: 'images/source4.png',
            description: 'The extent of flooding in Detroit',
            location: {
                center: [-83.09917, 42.35279],
                zoom: 10.92,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: ' Red Hook in NYC',
            image: 'images/source5.png',
            description: 'flood-related damages to the Red Hook Houses',
            location: {
                center: [-74.00915, 40.67551],
                zoom: 13.92,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

mapboxgl.accessToken = 'pk.eyJ1IjoieGcyOTgiLCJhIjoiY2xvZnZybDdiMGRkMTJrcmt0NWtxOGh3bCJ9.iFCcl0YymjvPMJDElFxsTw';
var map = new mapboxgl.Map({
	container:'xg298',
	style:'mapbox://styles/xg298/clofvsffe004g01pdgf5ogutn?access_token=pk.eyJ1IjoieGcyOTgiLCJhIjoiY2xvZnZybDdiMGRkMTJrcmt0NWtxOGh3bCJ9.iFCcl0YymjvPMJDElFxsTw',
	center:[-122.43796, 37.60837],
	zoom:14
})

map.on('load',function(){
    map.addLayer({
    	id:'inspections',
    	type:'fill',
    	source:{
    		type:'vector',
    		tiles:['mapbox://tilesets/xg298.9usrvevf/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoieGcyOTgiLCJhIjoiY2xvZnZybDdiMGRkMTJrcmt0NWtxOGh3bCJ9.iFCcl0YymjvPMJDElFxsTw']

     	},
        
        paint:{
        	'fill-color':'#008F8C',
        	'fill-opacity':0.5

        },

        'source-layer':'Historical_Restaurant_Scores_-1b3zkl',
    	
    	})
    console.log('My name is Xi');
})

map.on('click', (e) => {
    console.log('Click Coordinates:', e.lngLat);
});

// 假设你有一个名为 'inspections' 的图层
map.on('mouseenter', 'inspections', (e) => {
    // 获取鼠标指针下的要素
    console.log(e.features);
    const features = e.features;

    // 从每个要素中提取名称
    const names = features.map(feature => feature.properties.name);

    // 在 "Restaurant Name" 下方显示名称
    const restaurantNameDiv = document.getElementById('restName');
    if (restaurantNameDiv) {
        restaurantNameDiv.innerHTML = '<h4>' + names.join(', ') + '</h4>';
    }
});



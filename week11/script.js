mapboxgl.accessToken = 'pk.eyJ1IjoieGcyOTgiLCJhIjoiY2xvZnZybDdiMGRkMTJrcmt0NWtxOGh3bCJ9.iFCcl0YymjvPMJDElFxsTw';
var map = new mapboxgl.Map({
	container:'xg298',
	style:'mapbox://styles/xg298/clofvsffe004g01pdgf5ogutn',
	center:[-122.43796, 37.60837],
	zoom:10
})

map.on('load',function(){
    map.addLayer({
    	id:' inspection-layer',
    	source:{
    		type:'vector',
    		url:'//studio.mapbox.com/tilesets/xg298.7povdqba'
     	},
     	
     	'source-layer':'Historical_Restaurant_Scores_-6lme2b',
        
        paint:{
        	'fill-color':'#008F8C',
        	'fill-opacity':0.5

        }
    	
    	})
    
})


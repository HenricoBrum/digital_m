


/*

function onLoad()
			{
				initScene();
				function initScene() 
				{
					var container = document.getElementById("container");  
					renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setSize(window.innerWidth, window.innerHeight);
					container.appendChild(renderer.domElement);
				
				  
					scene = new THREE.Scene();
					camera = new THREE.PerspectiveCamera(75,container.offsetWidth / container.offsetHeight,1, 1000);
					camera.position.z = 10;
					scene.add(camera);
					
					controls = new THREE.TrackballControls(camera,renderer.domElement);
					controls.rotateSpeed = 1.0;
					controls.zoomSpeed = 1.2;
					controls.panSpeed = 0.2;
					 
					controls.noZoom = false;
					controls.noPan = false;
					 
					controls.staticMoving = false;
					controls.dynamicDampingFactor = 0.3;
					 
					controls.minDistance = 1.1;
					controls.maxDistance = 100;
					 
					controls.keys = [16, 17, 18]; // [ rotateKey, zoomKey, panKey ]
				
					var dirLight = new THREE.DirectionalLight(0xffffff, 0.95);
					dirLight.position.set(-3, 3, 7);
					dirLight.position.normalize();
					scene.add(dirLight);
					 
					var pointLight = new THREE.PointLight(0xFFFFFF, 5, 50);
					pointLight.position.set(10, 20, -10);
					scene.add(pointLight);
					var jsonLoader = new THREE.JSONLoader();
					jsonLoader.load( "models/teapot.js", function( geometry ) { 
						  var hemostat = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
						  scene.add(hemostat);
					} );
				}
			}
			animate();
			function animate()
			{
			  requestAnimationFrame(animate);
			  render();
			}
			function render()
			{
			  controls.update(); //for cameras
			  renderer.render(scene,camera);
			}
*/
function onLoad(){
      initScene();
      function initScene() {
        var container = document.getElementById("container");
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild( renderer.domElement );
      
		scene = new THREE.Scene();
		
		camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 1, 1000 );
		camera.position.z = 10;
		scene.add( camera );
		 
		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.rotateSpeed = 1.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.2;
		 
		controls.noZoom = false;
		controls.noPan = false;
		 
		controls.staticMoving = false;
		controls.dynamicDampingFactor = 0.3;
		 
		controls.minDistance = 1.1;
		controls.maxDistance = 100;
		 
		controls.keys = [ 16, 17, 18 ]; // [ rotateKey, zoomKey, panKey ]
		
		var dirLight = new THREE.DirectionalLight(0xffffff, 0.95);
		dirLight.position.set(-3, 3, 7);
		dirLight.position.normalize();
		scene.add(dirLight);

		var pointLight = new THREE.PointLight(0xFFFFFF, 5, 50);
		pointLight.position.set(10, 20, -10);
		scene.add(pointLight);
		
		var jsonLoader = new THREE.JSONLoader();
		jsonLoader.load( "models/teapot.js", function( geometry ) {
			var hemostat = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
			scene.add(hemostat);
		} );	
		animate();
	}
	function animate() {
		requestAnimationFrame( animate );
		render();
	}

	function render() {
		controls.update(); //for cameras
		renderer.render( scene, camera );
	}
}

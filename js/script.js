// Как только все загружено, мы запускаем наш материал Three.js.
$(function () {
    /**** Определили сцену, камеру и визуализатор *********/
    var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45 
		, window.innerWidth / window.innerHeight , 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);
    /***********************************************/
    /**** Добавляем вспомогательные оси и плоскость *******/
	var axes = new THREE.AxisHelper( 20 );
	scene.add(axes);
	var planeGeometry = new THREE.PlaneGeometry(70,30,1,1);
	var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
	var plane = new THREE.Mesh(planeGeometry,planeMaterial);
	plane.rotation.x = -0.5*Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;
	scene.add(plane);
    /********************************/
    /******* Добавлем куб *******/
	var cubeGeometry = new THREE.CubeGeometry(4,4,4);
	var cubeMaterial = new THREE.MeshBasicMaterial(
		{color: 0xff0000, wireframe: true});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;
	scene.add(cube);
    /**********************/
    /***** Добавляем сферу *********/
	var sphereGeometry = new THREE.SphereGeometry(4,20,20);
	var sphereMaterial = new THREE.MeshBasicMaterial(
		{color: 0x7777ff, wireframe: true});
	var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;
	scene.add(sphere);
    /******************************/
    /****** Позиционируем камеру и запускаем рендер ******/
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);
	$("#WebGL-output").append(renderer.domElement);
	renderer.render(scene, camera);
    /******************************/
});


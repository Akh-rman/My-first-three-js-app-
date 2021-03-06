$(function () {
    /**** Определили сцену, камеру и визуализатор *********/
    var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45 
		, window.innerWidth / window.innerHeight , 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    //renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    /***********************************************/
    /******* Добавляем вспомогательные оси и плоскость *******/
	var axes = new THREE.AxisHelper(20);
	scene.add(axes);
	var planeGeometry = new THREE.PlaneGeometry(70, 30);
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
	var plane = new THREE.Mesh(planeGeometry,planeMaterial);
	plane.rotation.x = -0.5*Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;
    plane.receiveShadow = true;
	scene.add(plane);
    /******************************/
    /******* Добавлем куб *******/
	var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
	var cubeMaterial = new THREE.MeshLambertMaterial(
		{color: 0xff0000, wireframe: false});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;
    cube.castShadow = true;
	scene.add(cube);
    /******************************/
    /******* Добавляем сферу *********/
	var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	var sphereMaterial = new THREE.MeshLambertMaterial(
		{color: 0x7777ff, wireframe: false});
	var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;
    sphere.castShadow = true;
	scene.add(sphere);
    /******************************/
    /****** Добавляем освещение *******/
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    /******************************/
    /****** Позиционируем камеру и запускаем рендер ******/
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);
	$("#WebGL-output").append(renderer.domElement);
	//renderer.render(scene, camera);
    var step=0;
    render();
    /******************************/
    /***** Функция обрабатывающая рендеринг ****/
    function render() {
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        cube.rotation.z += 0.02;
        step+=0.04;
        sphere.position.x = 20 + (10 * (Math.cos(step)));
        sphere.position.y = 2 + (10 * Math.abs(Math.sin(step))); 
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
});
/****** Функция выводящая статистику(FPS) ******/
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()
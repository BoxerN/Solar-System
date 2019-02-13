 var scene = new THREE.Scene();

  var aspect_ratio = window.innerWidth / window.innerHeight;
  var above_cam = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 1e6);
  above_cam.position.z = 1000;
  scene.add(above_cam);

  var earth_cam = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 1e6);
  scene.add(earth_cam);

  var camera = above_cam;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  document.body.style.backgroundColor = 'black';
  
  function MEGO() {
scoreboard.help(
    ' Mercury is the closest planet to the sun.' +
    ' One Mercury year is 88 Earth days.' + 
    ' Mercury Has no moons.' + 
    ' Mercury is the smallest planet in solar system.' 
  );
  }
  
  function AC() {
 camera = above_cam;
  }
  
   function MENGO() {
 window.location="index.html"
  }
  
  function EC() {
camera = earth_cam;
  }
  
  function VGO() {
scoreboard.help(
    ' A venus year is 243 Earth days.' +
    ' There are more volcanos on venus than any other planet.' + 
    ' Venus is the closest planet to Earth and is "Earths Twin"' + 
    ' Venus is the brightest planet.' 
  );
  }
  
   function EGO() {
scoreboard.help(
    ' Earth is the only planet we know that is Life sustaining.' +
    ' Earth is the only planet we know that has an atmosphere containing 21 percent oxygen.' + 
    ' Earth is the only inner planet (Mercury, Venus, Earth and Mars) to have one large satellite, the Moon.' + 
    ' Earth is 4.54 years old.' 
  );
  }
  
  function MAGO() {
scoreboard.help(
    ' Mars years are 668 Earth years.' +
    ' Only 18 missions to Mars have been successful.' + 
    ' On Mars the Sun appears about half the size as it does on Earth.' + 
    ' Mars has the tallest volcano in the solar system.' 
  );
  }
  
 function JGO() {
scoreboard.help(
    ' Jupiter has the largest landmass out of all the planets in the solar system' +
    ' Jupiter has a "Great Red Spot" that is accually a hurricane twice the size of Earth.' + 
    ' Jupiter is the first "Gas Giant" in our solar system.' + 
    ' Jupiter years are 4,300 Earth days.' 
  );
  } 
  
   function SGO() {
scoreboard.help(
    ' There are 11,000 Earth days in a year.' +
    ' Saturn has rings made out of ice and rock.' + 
    ' Saturn has sixtey-two moons.' + 
    ' Saturn can be seen with the naked eye.' 
  );
  } 
  
   function UGO() {
scoreboard.help(
    ' There are 31,000 Earth days in a year.' +
    ' Uranus is tipped with an axial tilt of 98 degrees.' + 
    ' Uranus was officially discovered by Sir William Herschel in 1781.' + 
    ' Only one spacecraft has flown by Uranus.' 
  );
  } 
  
  function NGO() {
scoreboard.help(
    ' It takes 60,200 Earth Days for a Neptune year.' +
    ' Neptune was discovered by Jean Joseph Le Verrier.' + 
    ' Neptune is the Roman god of the sea or Posiden in Greece.' + 
    ' Neptune is also the second biggest planet in our solar system.' 
  );
  }

 var scoreboard = new Scoreboard();
  scoreboard.help(
    ' Press E or click the button to view from earth.' +
    ' Press A or click the button to view from above.' +
    ' Click on the buttons, press ? if help is off, and scroll up to get information about each planet.'
  );



  var surface = new THREE.MeshPhongMaterial({ambient: 0xFFD700});
  var star = new THREE.SphereGeometry(50, 100, 999);
  var sun = new THREE.Mesh(star, surface);
  scene.add(sun);

  var ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);

  var sunlight = new THREE.PointLight(0xffffff, 5, 1000);
  sun.add(sunlight);

  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x0000cd});
  var planet = new THREE.SphereGeometry(20, 20, 15);
  var earth = new THREE.Mesh(planet, surface);
  earth.position.set(250, 0, 0);
  scene.add(earth);

  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xb22222});
  var planet = new THREE.SphereGeometry(20, 20, 15);
  var mars = new THREE.Mesh(planet, surface);
  
  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x725112});
  var planet = new THREE.SphereGeometry(15, 20, 15);
  var mercurey = new THREE.Mesh(planet, surface);

 mercurey.position.set(100, 0, 0);
  scene.add(mercurey);

  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xff1900});
  var planet = new THREE.SphereGeometry(20, 20, 15);
  var venus = new THREE.Mesh(planet, surface);
 

 venus.position.set(170, 0, 0);
  scene.add(venus);
  
  
  mars.position.set(310, 0, 0);
  scene.add(mars);

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff});
  var planet = new THREE.SphereGeometry(7, 30, 25);
  var moon = new THREE.Mesh(planet, surface);
var moon_orbit = new THREE.Object3D();
  earth.add(moon_orbit);
  moon_orbit.add(moon);
  moon.position.set(0, 30, 0);

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xc90404});
  var planet = new THREE.SphereGeometry(40, 20, 15);
  var jupiter = new THREE.Mesh(planet, surface);

 jupiter.position.set(425, 0, 0);
  scene.add(jupiter);
  
  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xa804c9});
  var planet = new THREE.SphereGeometry(30, 20, 15);
  var saturn = new THREE.Mesh(planet, surface);

 saturn.position.set(515, 0, 0);
  scene.add(saturn);
  
   var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x0ca09b});
  var planet = new THREE.SphereGeometry(30, 20, 15);
  var uranus = new THREE.Mesh(planet, surface);

 uranus.position.set(580, 0, 0);
  scene.add(uranus);
  
var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x3013a3});
  var planet = new THREE.SphereGeometry(35, 20, 15);
  var neptune = new THREE.Mesh(planet, surface);

 neptune.position.set(665, 0, 0);
  scene.add(neptune); 

  clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    var time = clock.getElapsedTime();

    var e_angle = time * 0.8;
    earth.position.set(250* Math.cos(e_angle), 240* Math.sin(e_angle), 0);

    var m_angle = time * 0.6;
    mars.position.set(320* Math.cos(m_angle), 320* Math.sin(m_angle), 0);
    
    var me_angle = time * 1.5;
    mercurey.position.set(90* Math.cos(me_angle), 90* Math.sin(me_angle), 0);
    
    var mo_angle = time * 8;
    moon_orbit.rotation.set(0, 0, mo_angle);
    
     var v_angle = time * 1;
    venus.position.set(150* Math.cos(v_angle), 150* Math.sin(v_angle), 0);
    
    var j_angle = time * 0.3;
    jupiter.position.set(400* Math.cos(j_angle), 400* Math.sin(j_angle), 0);

    var s_angle = time * 0.27;
    saturn.position.set(490* Math.cos(s_angle), 490* Math.sin(s_angle), 0);
    
     var u_angle = time * 0.25;
    uranus.position.set(565* Math.cos(u_angle), 565* Math.sin(u_angle), 0);
    
    var n_angle = time * 0.22;
    neptune.position.set(645* Math.cos(n_angle), 645* Math.sin(n_angle), 0);

    var y_diff = mars.position.y - earth.position.y,
        x_diff = mars.position.x - earth.position.x,
        angle = Math.atan2(x_diff, y_diff);

    earth_cam.rotation.set(Math.PI/2, -angle, 0);
    earth_cam.position.set(earth.position.x, earth.position.y, 22);

    renderer.render(scene, camera);
  }

  animate();

  var stars = new THREE.Geometry();
  while (stars.vertices.length < 1e4) {
    var lat = Math.PI * Math.random() - Math.PI/2;
    var lon = 2*Math.PI * Math.random();

    stars.vertices.push(new THREE.Vector3(
      1e5 * Math.cos(lon) * Math.cos(lat),
      1e5 * Math.sin(lon) * Math.cos(lat),
      1e5 * Math.sin(lat)
    ));
  }
  var star_stuff = new THREE.ParticleBasicMaterial({size: 500});
  var star_system = new THREE.ParticleSystem(stars, star_stuff);
  scene.add(star_system);

  document.addEventListener("keydown", function(event) {
    var code = event.keyCode;

    if (code == 65) { // A
      camera = above_cam;
    }
    if (code == 69) { // E
      camera = earth_cam;
    }
  });
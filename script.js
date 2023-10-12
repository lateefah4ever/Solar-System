var content = document.getElementsByClassName('content')[0];
var width = content.offsetWidth;
var height = content.offsetHeight;
var verticalKaificent = 0.2;
		deltaMerc = 0;
		deltaVenus = 0;
		deltaEarth = 0;
		deltaMars = 0;
		deltaJupiter = 0;
		deltaSaturn = 0;
		deltaUranus = 0;
		deltaNeptune = 0;
		deltaMoon = 0;
		n = 20;
spacePosition();
drawCircles();
scaleHandler();
$(window).scrollTop($(window).height());
$(window).scrollLeft($(window).width()/2);

var timeId;
var $mercuryContainer = $('.mercury-container').eq(0);
var mercuryX = width/2 - mercuryContainer.offsetWidth /2;
var mercuryY = height/2 - mercuryContainer.offsetHeight /2;
var mercury = $('.shadow-mercury').eq(0);

var $venusCntainer = $('.venus-container').eq(0);
var venusX = width/2 - venusContainer.offsetWidth /2;
var venusY = height/2 - venusContainer.offsetHeight /2;
var venus = $('.shadow-venus').eq(0);

var $earthMoonContainer = $('.earth-moon-container').eq(0);
var earthX = width/2 - earthMoonContainer.offsetWidth /2;
var earthY = height/2 - earthMoonContainer.offsetHeight /2;
var earth = $('.shadow-earth').eq(0);

var $moon = $('.moon').eq(0);
var moonX = earthMoonContainer.offsetWidth /2  - moon.offsetWidth/2;
var moonY = earthMoonContainer.offsetHeight /2 - moon.offsetHeight/2;

var $marsContainer = $('.mars-container').eq(0);
var marsX = width/2 - marsContainer.offsetWidth /2;
var marsY = height/2 - marsContainer.offsetHeight /2;
var mars = $('.shadow-mars').eq(0);

var $jupiterContainer = $('.jupiter-container').eq(0);
var jupiterX = width/2 - jupiterContainer.offsetWidth /2;
var jupiterY = height/2 - jupiterContainer.offsetHeight /2;
var jupiter = $('.shadow-jupiter').eq(0);

var $saturnRingContainer = $('.saturn-ring-container').eq(0);
var saturnX = width/2 - saturnRingContainer.offsetWidth /2;
var saturnY = height/2 - saturnRingContainer.offsetHeight /2;
var saturn = $('.shadow-saturn').eq(0);	

var $ringContainer = $('.ring-container').eq(0);

var $uranusContainer = $('.uranus-container').eq(0);
var uranusX = width/2 - uranusContainer.offsetWidth /2;
var uranusY = height/2 - uranusContainer.offsetHeight /2;
var uranus = $('.shadow-uranus').eq(0);	

var $neptuneContainer = $('.neptune-container').eq(0);
var neptuneX = width/2 - neptuneContainer.offsetWidth /2;
var neptuneY = height/2 - neptuneContainer.offsetHeight /2;
var neptune = $('.shadow-neptune').eq(0);

function spacePosition(){
	sun = document.getElementsByClassName('sun')[0];

	sun.style.top = (height/2 - sun.offsetHeight /2 ) + 'px';
    sun.style.left = (width/2 - sun.offsetWidth /2 ) + 'px';

	mercuryContainer = document.getElementsByClassName('mercury-container')[0];
    mercury = 90;
    mercuryContainer.style.top = (height/2 - mercuryContainer.offsetHeight /2 ) + 'px';
    mercuryContainer.style.left = (width/2 - mercuryContainer.offsetWidth /2 + Rmercury ) + 'px';

	venusContainer = document.getElementsByClassName('venus-container')[0];
  	Rvenus = 130;
  	venusContainer.style.top = (height/2 - venusContainer.offsetHeight /2 ) + 'px';
 	venusContainer.style.left = (width/2 - venusContainer.offsetWidth /2 + Rvenus ) + 'px';

	earthMoonContainer = document.getElementsByClassName('earth-moon-container')[0];
	Rearth = 185;
	earthMoonContainer.style.top = (height/2 - earthMoonContainer.offsetHeight /2 ) + 'px';
	earthMoonContainer.style.left = (width/2 - earthMoonContainer.offsetWidth /2 + Rearth ) + 'px';

	moon = document.getElementsByClassName('moon')[0];
  	Rmoon = 28;
  	moon.style.top = (earthMoonContainer.offsetHeight /2  - moon.offsetHeight/2) + 'px';
  	moon.style.left = (earthMoonContainer.offsetWidth /2 - moon.offsetWidth/2 + Rmoon ) + 'px';

	marsContainer = document.getElementsByClassName('mars-container')[0];
	Rmars = 240;
	marsContainer.style.top = (height/2 - marsContainer.offsetHeight /2 ) + 'px';
	marsContainer.style.left = (width/2 - marsContainer.offsetWidth /2 + Rmars ) + 'px';

	jupiterContainer = document.getElementsByClassName('jupiter-container')[0];
  	Rjupiter = 320;
  	jupiterContainer.style.top = (height/2 - jupiterContainer.offsetHeight /2 ) + 'px';
  	jupiterContainer.style.left = (width/2 - jupiterContainer.offsetWidth /2 + Rjupiter ) + 'px';

	Rsaturn = 430;
	saturnRingContainer = document.getElementsByClassName('saturn-ring-container')[0];
	saturnRingContainer.style.top = (height/2 - saturnRingContainer.offsetHeight /2 ) + 'px';
	saturnRingContainer.style.left = (width/2 - saturnRingContainer.offsetWidth /2 + Rsaturn ) + 'px';
	Rring = 60;

	uranusContainer = document.getElementsByClassName('uranus-container')[0];
	Ruranus = 510;
  	uranusContainer.style.top = (height/2 - uranusContainer.offsetHeight /2 ) + 'px';
  	uranusContainer.style.left = (width/2 - uranusContainer.offsetWidth /2 + Ruranus ) + 'px';

	neptuneContainer = document.getElementsByClassName('neptune-container')[0];
	Rneptune = 560;
	neptuneContainer.style.top = (height/2 - neptuneContainer.offsetHeight /2 ) + 'px';
	neptuneContainer.style.left = (width/2 - neptuneContainer.offsetWidth /2 + Rneptune ) + 'px';
}

var start = document.getElementById('start');
start.onclick = function(){
	clearInterval(timerId);
}
function move(){
	moveEarth();
	moveMercury();
	moveVenus();
	moveMars();
	moveJupiter();
	moveSaturn();
	moveUranus();
	moveNeptune();
	moveMoon();
}

function moveMercury(){
	var alpha = Math.PI*deltaMerc/180;
	$mercuryContainer.css('top', mercuryY + Rmercury * Math.sin(alpha)*verticalKaificent);
	$mercuryContainer.css('left', mercuryX + Rmercury * Math.cos(alpha));
	mercury.css('transform', 'rotate(' + deltaMerc + 'deg)');
	if (deltaMerc<180) {
		$mercuryContainer.css('z-index', 11);
	}else{
		$mercuryContainer.css('z-index', 9);
	}
	deltaMerc+=47.87/n;	
 	if(deltaMerc>360){deltaMerc-=360;}
}

function moveVenus(){
    var alpha = Math.PI*deltaVenus/180;
 	$venusContainer.css('top', venusY + Rvenus * Math.sin(alpha)* verticalKaificent);
 	$venusContainer.css('left', venusX + Rvenus * Math.cos(alpha));

	venus.css('transform','rotate(' + deltaVenus + 'deg)');
	if (deltaVenus<180) {
	 	$venusContainer.css('z-index', 12);
	}else{
		$venusContainer.css('z-index', 8);
	}
 	deltaVenus+=35.02/n;	
 	if(deltaVenus>360){deltaVenus-=360;}
}
































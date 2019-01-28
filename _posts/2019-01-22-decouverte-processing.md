---
layout: post
title:  "Joies du Processing"
date:   2019-01-22 10:20:20 +0200
permalink: debuts_processing
cover: debuts_processing/processing_sample.png
categories: dev
tags: processing art
draft: false
---

{% include image.html name="debuts_processing/processing_sample.png" %}

J'ai enfin essayé le <a href="https://fr.wikipedia.org/wiki/Processing" target='_blank'>Processing</a>, un langage informatique dédié à la création graphique interactive. On m'en avait beaucoup parlé, et c'était fait pour me plaire.

Lors de mon dernier après-midi de formation chez <a href="https://ut7.fr" target='_blank'>UT7</a>, on m'a laissé le choix du langage, et j'ai demandé à faire du Processing. En binôme avec <a href="https://twitter.com/jonathanperret" target='_blank'>Jonathan Perret</a>, nous avons codé un saut dans l'hyperespace.
<!--more-->

<div id='p5-hyperspeed-container' class='p5-embed-container'></div>

On peut voir cette animation en plein écran <a href="http://inventif.fr/hyperspeed" target='_blank'>ici</a>, et le code est <a href="https://github.com/Ruff9/inventif/blob/master/assets/javascript/p5/hyperspeed.js" target='_blank'>là</a>. C'était un très bon début, très enthousiasmant. Je découvre à ce moment là qu'on peut faire beaucoup de choses en peu de temps avec cette techno.

Nous avons utilisé <a href="http://p5js.org/" target='_blank'>p5.js</a>, une librairie javascript qui adapte le processing pour les navigateurs web. Une fois la librairie chargée, la structure du code est simple: chaque animation (ou sketch) contient deux fonctions, `setup()` et `draw()`. Le code placé dans la fonction `setup()` est exécuté avant le lancement de l'animation, et celui placé dans `draw()` est ensuite exécuté soixante fois par seconde.

```javascript
function setup() {
  background(0,0,20);
}

function draw() {
  ellipse(50, 50, random(5, 10), random(5, 10));
}
```

C'est plutôt facile à prendre en main, une fois qu'on a intégré le fonctionnement de `draw()`.

Lors de mes recherches, un mot est beaucoup revenu: particules. Un mode de composition qui est beaucoup utilisé, et que j'ai donc voulu essayer. J'ai copié-collé un tutoriel, j'ai commencé à bricoler et ça a donné ça:

<div id='p5-particles-container' class='p5-embed-container'></div>

{:.centered-paragraph}
(<a href="http://inventif.fr/particles" target='_blank'>plein écran</a>, <a href="https://github.com/Ruff9/inventif/blob/master/assets/javascript/p5/particles.js" target='_blank'>code</a>)

Pour faire rebondir ces particules dans un cercle, j'ai dû réapprendre des math de lycée. Pour toi lecteur·rice c'est certainement évident que la distance entre un point(x, y) et un point(a,b) est définie par la racine carrée de (x − a)² + (y − b)², mais perso j'ai eu besoin d'une recherche Google. C'est au programme de seconde.

Je suis développeur web, et pour coder un serveur web on n'a pas besoin de math. Mais autre chose est apparu, que je connais beaucoup mieux: la programmation orientée objet.

```javascript
var Particle = function(position) {
  this.velocity = createVector(5, 5);
  this.position = position.copy();
  this.garbage = false;
};

Particle.prototype.run = function() {
  this.move();
  this.display();
};

Particle.prototype.display = function() {
  strokeWeight(2);
  fill(255);
  ellipse(this.position.x, this.position.y, 10, 10);
};
```

Cet extrait du code montre comment on peut organiser le fonctionnement d'une particule. Une méthode couramment utilisée dans la communauté, et assez naturelle dans ce cas précis.

En réutilisant tout ce que j'avais appris, j'ai ensuite voulu m'essayer à l'interactivité. Vous pouvez survoler l'animation suivante avec votre souris, et obtenir un autre effet en gardant le bouton gauche appuyé.

<div id='p5-colors-container' class='p5-embed-container'></div>

{:.centered-paragraph}
(<a href="http://inventif.fr/colors" target='_blank'>plein écran</a>, <a href="https://github.com/Ruff9/inventif/blob/master/assets/javascript/p5/colors.js" target='_blank'>code</a>)

J'ai réalisé que ce qui m'amusait, c'était de jouer avec l'aléatoire. Ce qu'on voit ici, ce sont des cases de couleur aléatoire, dans une certaine gamme, qui se rafraîchissent aléatoirement pour prendre une nouvelle couleur aléatoire. La première animation, le saut dans l'hyperespace, est basée sur des étoiles de taille et de couleur aléatoires positionnées aléatoirement. C'est incroyablement riche et fun de travailler sur une base changeante, et cet aspect restera présent dans mes futures expériences.

Dès le premier test chez UT7, on m'a fait découvrir <a href="https://www.openprocessing.org" target='_blank'>OpenProcessing</a>. C'est un réseau social qui permet de partager des animations et leur code. J'ai créé <a href="https://www.openprocessing.org/user/158204#sketches" target='_blank'>mon compte</a>, et gagné mes premiers likes.

L'animation suivante est une de celles qui m'a le plus marquée, au point que l'image de couverture de ce post en est une capture d'écran. Il faut le survoler à la souris en gardant le bouton gauche appuyé pour l'activer, et appuyer sur n'importe quelle touche permet de changer la texture.

<div class='p5-embed-container'>
  <iframe src="https://www.openprocessing.org/sketch/413567/embed/" height="450" style="width: 100%;"></iframe>
</div>

Je suis encore très loin de ce niveau, mais je prends beaucoup de plaisir à débuter avec cet outil, ce qui rend optimiste. D'ici un an ou deux, tout sera possible.

Le Processing est arrivé au bon moment pour moi. Je suis freelance, actuellement entre deux missions. Ce langage me permet de faire de petits projets, sur une journée voire quelque heures, ce qui m'arrange bien dans cette période où je ne maîtrise pas mon agenda. Il est possible que je commence une mission très rapidement, et je ne veux pas me lancer dans des projets plus ambitieux.

J'ai mis en place <a href="https://github.com/Ruff9/p5js_sandbox" target='_blank'>une sandbox</a> avec un livereload, pour pouvoir expérimenter facilement dans le navigateur. Ce qui me permet de me lancer rapidement sur une nouvelle animation.

Pour quelques heures, coder pour le plaisir.

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.js"></script>

<script type="text/javascript" src="{{ site.baseurl }}/assets/javascript/p5/post_processing.js"></script>
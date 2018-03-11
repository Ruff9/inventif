---
layout: post
title:  "Emporté par l'inertie"
date:   2018-03-11 20:20:20 +0200
categories: tonfa
---

<img src="/assets/images/retro_tonfa/resultat.JPG"/>

J'ai toujours du mal à expliquer ce projet. Pour ça il faut une première phrase, et j'ai mis du temps à la trouver. Cette première description a même changé en cours de route. Mes motivations ont changées, j'ai changé, et le projet a évolué pour rester intéressant. C'est surtout une histoire de fablabs, mais l'inspiration est venue d'ailleurs.

<!--more-->

En février 2011, j'ai assisté à une réunion de jongleurs de feu, sur le parvis du palais de Tokyo. Beaucoup de bolas, des épées enflammées et quelques expériences. J'ai passé quelques minutes à fixer un homme qui avait monté des lumières clignotantes aux extrémités de ses nunchakus. Je m'en suis lassé très vite. Il devait garder une vitesse constante pour que la chaîne reste tendue, ce qui limitait ses mouvements et les formes de lumière possibles. Ce problème se retrouve dans l'utilisation des bolas enflammés.

En regardant cet homme et ses nunchakus clignotants, je me dis que cela fonctionnerait bien mieux avec des tonfas. J'avais pratiqué le Viet Vo Dao, je savais ce que c'était et vaguement comment ça se manipule.

<img src="/assets/images/retro_tonfa/tonfa_bois.JPG"/>

C'est mécanique : avec un objet rigide, on peut ralentir et même être immobile. On pourrait contrôler la lumière avec un bouton placé dans la poignée, ce qui permettrait plusieurs choses impossibles lorsqu'on jongle avec une boule de feu au bout d'une chaîne:

- faire des lignes droites
- allumer/éteindre la lumière en cours de mouvement
- faire varier la vitesse

Ces idées sont restées là quelques temps. Un an plus tard, j'ai acheté un tonfa en bois et un outil de signalisation d'aéroport. Au cours d'une soirée, dans le jardin d'un ami, j'ai scotché le deuxième au premier et j'ai fait des mouvements au hasard.

<img src="/assets/images/postLT1erProto/schema1.jpg"/>

Ce soir là une amie m'a dit que je devrais m'intéresser aux mouvements de mon corps. Que je m'éclairais, que déplacer un bâton lumineux autour de moi me mettait dans la lumière. A ce moment là je pense plutôt aux trainées lumineuses des armes dans Soulcalibur 2, et aux bras/tonfas de Gally dans Gunnm.

J'ai cherché comment fabriquer un premier protoype. La solution la plus simple: ajouter une poignée à mon bâton lumineux d'aéroport. Comme je ne savais rien faire et que je n'avais aucun matériel, j'ai cherché un fablab. Je m'intéressais à ce milieu depuis longtemps, et maintenant je savais quoi y faire.

J'ai trouvé le [Artlab](https://www.digitalarti.com/fr/artlab/)<sup>1</sup>. Un lieu de prototypage pour oeuvre d'arts numériques. Je me suis présenté avec mon idée de tonfa lumineux et ils m'ont laissé travailler chez eux. Quelques après-midis de bricolage plus tard, j'avais un protoype dans les mains.

<img src="/assets/images/postLT1erProto/LTpremierProto1.jpg"/>
<span class='photo-legend'>[Post de blog](http://www.inventif.fr/posts/light-tonfa-premier-prototype)</span>

C'est très grossier, et pas vraiment fiable. Un outil de signalisation d'aéroport, trois morceaux de tuyau de plomberie, quelques fils et un bouton au bout de la poignée. Avec des vis, des soudures et du scotch.

Dans cette période, quand on me demande sur quoi je travaille, j'explique que je construis un outil pour le light painting. La photo est une utilisation naturelle pour des tubes lumineux. Le dégradé de lumière dans créé des effets de volumes, ce qui donne une impression de sculpture lumineuse, avec une certaine rondeur. Un pieds, un temps de pose entre 1 et 2 secondes, quelques tests, et c'est vite spectaculaire. On peut créer des rendus tellement nets qu'ils semblent générés numériquement.

<img src="/assets/images/retro_tonfa/cata.JPG"/>

On peut envisager le tonfa comme une troisième partie du bras, avec les mains qui servent d'articulation pour un membre beaucoup plus grand. On ajoute environ 40cm à la longueur du bras, ce qui permet de couvrir un volume respectable. Mais ça limite les possibilités pour trouver un lieu adapté. 4 mètres sous plafond et dans une relative obscurité, ce n'est pas courant à Paris. Beaucoup plus ailleurs.

Ce qui a marqué la fin de cette période, c'est la photo suivante, prise à l'été 2013 dans une petite crique sur la presqu'île de Quiberon.

<img src="/assets/images/LTquiberon/quibLast.JPG"/>
<span class='photo-legend'>[Séance photo](http://www.inventif.fr/posts/quiberon-14-juin-2013)</span>

Je l'ai regardée pendant des heures. Les volumes de cette abstraction lumineuse m'ont captivés, cette photo m'a donné envie de continuer.

En 2014, ce projet est resté épisodique, avec quelque séances photos freinées par des problèmes d'instabilité du prototype. L'ampoule à incandescence de l'outil de base supportait mal les chocs, j'ai dû en casser deux.

J'ai décidé de reconstruire un tonfa avec des tuyaux de plomberie et des pièces imprimées en 3D.

<img src="/assets/images/residence/fablab.jpg"/>

Le lieu où c'est arrivé, c'est le [Carrefour Numérique<sup>2</sup>](http://www.cite-sciences.fr/fr/au-programme/lieux-ressources/carrefour-numerique2/). Fin juin 2015, j'y ai réalisé ma [première impression en 3D](http://www.inventif.fr/posts/premire-impression-en-3d). J'ai mis du temps à trouver cet endroit, mais je m'y suis rapidement senti très à l'aise. Tout ce dont j'avais besoin dans une seule pièce: du matériel, une communauté, une cafetière.

J'ai pu tout apprendre sur place. Dans ce genre d'endroit il y a toujours quelqu'un qui sait comment faire. Avec le temps, ça a été mon tour et j'ai fini par expliquer l'impression 3D à de nouveaux arrivants. L'esprit du lieu est comme ça.

<img src="/assets/images/v1enCours.jpg"/>

Pour la conception 3D, j'avais quelques vagues souvenirs de cours de CAO, des connaissances inutilisées depuis plus de 10 ans. Le logiciel que j'ai choisi, OpenScad, a été une bonne surprise. Il est libre, gratuit, adapté à mes besoins et facile à prendre en main pour un développeur.

Ce code juste ci-dessus, c'est bout de fonction utilisée plusieurs fois dans la pièce modélisée au dessus. Tous les fichiers 3D sont disponibles sous licence [Creative Commons](https://creativecommons.org/licenses/by-sa/3.0/fr/). C'est un projet libre: les fichiers de conception et les rendus 3D sont disponibles sur la [page Github](https://github.com/Ruff9/Light) du projet.

<img src="/assets/images/retro_tonfa/openscad_retro.png"/>

<img src="/assets/images/retro_tonfa/openscad_code.png"/>

Une fois à l'aise avec le processus, on passe facilement d'un dessin sur une feuille à une modélisation 3D qui s'imprime facilement. L'idée de coder de la matière est vraiment fascinante. Certaines personnes sont certainement habituées, mais je reste excité comme un gosse en voyant mes dessins devenir des objets.

La conception a été plus compliquée que la technique. Je n'aurais pas cru: Il s'agit de créer une lampe en forme de matraque, rien à voir avec de la technologie de pointe. Quand on pense à ce qu'on peut construire aujourd'hui dans un fablab, mon objectif de départ à l'air assez raisonnable.

En septembre 2016, un animateur du fablab évalue le temps restant à 10h de travail. J'ai fini dix mois plus tard.

<img src="/assets/images/6moisDeFablab/6m_couv.jpg"/>

Du cahier des charges de départ, certains principes sont restés. Pour être transportable l'objet doit être démontable.La lumière doit être assez puissante pour suffire à m'éclairer dans l'obscurité. Ces tonfas doivent pouvoir être la seule source lumineuse.

J'ai fait des compromis sur quasiment tout le reste. L'appareil fonctionne à piles, et non avec une batterie Li-ion. J'ai longtemps voulu avoir deux modes d'utilisation. J'ai essayé de construire moi-même la source lumineuse, au final j'ai utilisé des spots Leds prévus pour l'ameublement.

J'ai essayé d'être agile. Comme dans mon travail, j'ai constamment redéfini les objectifs en fonction de la complexité pour arriver quelque part. J'ai beaucoup râlé à chaque renoncement, mais ça a finit par se faire. Je n'ai jamais réalisé que ça allait me prendre autant de temps. Au final, entre des samedi après-midi et deux résidences, cela m'aura pris deux ans.

<img src="/assets/images/residence/produit_final.jpg"/>

En mars 2017, j'ai été en résidence trois semaines au fablab, et il fallait que ça se termine. J'ai pu régler les derniers problèmes de conception, et sortir un nouveau prototype complêtement fonctionnel. On a pu recommencer à prendre des photos.

<img src="/assets/images/residence/agora1.jpg"/><span class='photo-legend'>[Compte-rendu résidence](http://www.inventif.fr/posts/en-rsidence)</span>

Le light painting m'intéressait de moins en moins. Mais ces images permettent de reproduire l'effet de la persistence rétinienne. Quand on regarde ces tonfas en mouvement, les trainées de lumières créent des rubans lumineux, c'est assez scotchant. Dans la pratique cela entraîne une concentration sur le trait au détriment du corps. Sur beaucoup des premières photos, on voit que mes pieds ne bougent pas.

<img src="/assets/images/McCall_zone_piquenique/DSC_0216.jpg"/><span class='photo-legend'>[Séance photo](http://www.inventif.fr/posts/zone-pique-nique-3-juin-2017)</span>

Ce qui est ressorti de cette séance, c'est l'image du corps fantômatique. En modifiant sa vitesse de déplacement et en réfléchissant à sa position par rapport à la lumière, on peut utiliser le corps dans une composition de light-painting.

Et le corps, dans cette période, c'est devenu un sujet. Je parlais de ce projet à une amie, de mon intérêt pour le mouvement entre les deux lumières, et elle m'a parlé de son école de danse et a dit la phrase: "Viens, il y a un cours d'essai."

<img src="/assets/images/tonfa_nilanthi/DSC00175.JPG"/><span class='photo-legend'>[Séance photo](http://www.inventif.fr/posts/studio-nilanthi-4-avril-2017)</span>

Depuis le premier cours que j'ai pris en septembre 2014, la danse contemporaine a dévoré mon emploi du temps. J'ai accroché très vite, et je danse toutes les semaines dans deux merveilleuses associations: [Mouvement contemporain](http://mouvementcontemporain.com/) et [l'Air Ivre](http://air-ivre.fr/).

Cette pratique a confirmé ce que je sentais depuis longtemps et j'ai changé la description du projet: je travaille sur un outil de scénographie pour la danse. Un accessoire pour danseur nocturne.

Si ça m'intéresse, c'est d'abord pour le poids. Chaque tonfa pèse 650 grammes, et c'est suffisant pour disposer d'une inertie différente. En étant plus lourd, on peux prendre plus d'élan, et imaginer des mouvements qu'on ne pourrait pas faire sans cette inertie. Modifier le poids, c'est modifier le corps qui danse, ce qui ouvre beaucoup de possibilités. Avec plus d'élan, on peut sauter plus haut.

<img src="/assets/images/tonfa_jardin_alice/DSC00575.jpeg"/><span class='photo-legend'>[Séance photo](http://www.inventif.fr/posts/jardin-dalice-6-fvrier-2018)</span>

Il y a aussi la mise en scène. Choisir les moments qu'on éclaire, montrer ses parties de mouvement préférées. Découper le mouvement peut fonctionner naturellement avec le popping, mais on peut aller plus loin, par exemple en apportant des décalages de vitesse entre les moments éclairés et les autres. On peut créer des surprises et des suspensions. Il devrait être possible de manipuler la perception du temps du public. Un ami qui me filmait m'a dit qu'il avait l'impression de voir du montage dans mon impro.

Et toujours la persistence rétinienne. C'est une réflexion sur deux niveaux, le corps en mouvement et le trait lumineux. Les chorégraphies devront tenir compte des deux niveaux de lecture. C'est la direction de ce projet aujourd'hui, un mouvement qui passe du ruban aux ailes de lumières.

Nous avons donc commencé à faire des essais vidéos. Dans un salon, dans un parc, toujours dans l'improvisation.

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2jIeeYb-4-Y?rel=0&amp;showinfo=0?ecver=1" frameborder="0" allowfullscreen></iframe>
</div>

Cette vidéo m'a laissé frustré, parce que mon pote qui tient la caméra bouge plus que moi. Je ne danse pas du tout, je jongle. C'est à ce moment là que j'ai mesuré la quantité de travail requise pour inventer une nouvelle pratique de danse, avec un nouveau vocabulaire à chercher. Il faut que je me détache de l'influence des arts martiaux pour libérer mes mouvements.

Ces réfexions se ressentent dans l'essai suivant. Je bouge plus, ça commence à ressembler à de la danse. C'est toujours de l'impro et je suis encore loin d'une vidéo chorégraphiée et construite, mais l'utilisation de l'obscurité me permet de mieux expliquer mes objectifs pour la scénographie.

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/pTmGH78RpVk?rel=0&amp;showinfo=0?ecver=1" frameborder="0"allowfullscreen></iframe>
</div>

Ce vidéos me sont très utiles pour la communication autour de ce projet, et pour le développer, j'ai besoin de communiquer. L'objectif d'un projet open source, c'est que d'autres personnes se l'approprient. Si personne ne s'y intéresse, c'est juste du folklore de fablab. Du point de vue de l'open-source, un projet avec un seul contributeur est un échec, une inutilité.

J'aimerais donc que d'autres personnes s'intéressent à ces tonfas. Ils peuvent être utilisés comme des bolas enflammés, avec quelques avantages. Plus de possibilités, pas de produits toxiques. Une puissance lumineuse correcte et des photos très facilement spectaculaires.

<img src="/assets/images/retro_tonfa/resultat1.JPG"/>

Je me dit que ça pourrait intéresser des danseur.se.s, des jongleur.se.s, des praticien.ne.s d'arts martiaux. Toute personne qui a déjà joué avec un ruban de gymnastique comprend très bien l'intérêt. L'idée est arrivée dans une réunion de jongleurs, et c'est dans ce genre d'évènement que j'aimerais que le résultat retourne.

Je rêve de partager des vidéos réalisées par des inconnu.e.s qui auraient eux-même assemblés leurs tonfas sur mesure. Pour travailler dans cette direction, il faudrait écrire une vraie notice de montage et réaliser des vidéos tutoriels pour la construction des tonfas. Le [wiki](http://carrefour-numerique.cite-sciences.fr/fablab/wiki/doku.php?id=projets:light_tonfa) du Carrefour Numérique n'attend que ça.

<img src="/assets/images/tonfaAssemblage/etalage.JPG"/>

La dernière surprise de 2017 est arrivée quand j'ai voulu fabriquer deux exemplaires neufs. Chacun des tonfas nécessite 32h d'impression 3D. Je ne m'en étais pas rendu compte en travaillant les pièces une par une. C'est vraiment trop long, et faire les deux m'a pris tout l'été.

C'est ce qui limite mes espoirs d'accueillir d'autres personnes dans le projet. 64 heures d'impression, sans compter l'assemblage et tous les apprentissages nécessaires, c'est beaucoup demander. Durant toute cette période je suis resté concentré sur l'idée que les pièces devaient être bon marché, je n'avais pas pensé à l'investissement en temps.

Donner envie à d'autres, c'est certainement possible, je vois ce que devrait faire. Travailler la pratique de danse, produire des vidéos, écrire des tutoriels, filmer des tutoriels et des exercices de danse. Communiquer sur tout ça. Ce texte est un premier pas.

J'ai commencé la recherche sur la danse dans une salle de répétition du [Jardin d'Alice](https://www.lejardindalice.org/)<sup>3</sup>, à Montreuil. Je ne sais pas du tout jusqu'où cela va me mener, certainement au tournage de quelques vidéos supplémentaires.

Dans un certain périmètre, ce projet est terminé, et c'est un succès. Je possède deux jouets uniques et construits sur-mesure. J'ai appris beaucoup, je dispose de nouveaux moyens techniques et j'ai fait de belles rencontres. J'ai déjà été plus loin que je n'aurais cru. Je n'ai pas trouvé de nom plus funky que 'tonfas' pour cet objet, mais à vrai dire, j'ai arrété de chercher depuis longtemps.

Ce projet est redevenu intermittent depuis quelques mois. Je n'ai pas pris de vacances en 2017 et j'ai vraiment envie de le faire en 2018. Je partirais certainement avec les tonfas dans mon sac et il est possible que je demande à certains d'entre vous de prendre des photos ou des vidéos.

Je n'ai pas encore envie d'arrêter.

<hr/>

<sup>1</sup> Merci à Quentin pour les photos, à Jason et à Alexandre pour le soutien technique :)

<sup>2</sup> Merci à Thierry, Mathieu, Rachid, Olivier, Thierry, Hélène, David, Isabelle, Mélissa, David, Fabrice et particulièrement à Yves pour l'initiation à l'impression 3D :)

<sup>3</sup> Merci à Fabien du hackerspace pour avoir sauvé une séance photo en bricolant avec le sourire :)

<hr/>

Un remerciement spécifique pour Lilian Hardouineau, qui a pris toutes les vidéos et plusieurs séances photos. Ce projet ne serait pas le même sans lui, merci !

<hr/>
Note 1: N'hésitez pas à passer du temps dans des fablabs ou des hackerspaces, les gens sont adorables !

Note 2: La documentation c'est la vie, ils vous en parlerons tous. Apparement la plupart des gens n'aiment pas en écrire, mais l'intérêt de ce projet réside beaucoup dans sa documentation. Je l'ai faite aussi épisodiquement que le reste, mais ça m'a permis d'avoir toute la matière pour ce post.

Note 3: Je suis toujours en recherche de lieux pour répéter et prendre des photos :)
---
layout: post
title:  "Déployer un blog Jekyll sur OVH"
date:   2018-09-07 10:20:20 +0200
permalink: jekyll-ovh
cover: jekyllOnOVH/jekyll.jpg
categories: dev
tags: jekyll shell ops
---

{% include image.html name="jekyllOnOVH/jekyll.jpg" %}

J'ai un deuxième blog, et j'ai envie qu'il reste privé. Je n'ai donc pas hébergé son code sur Github mais sur Bitbucket. Ce qui pose immédiatement un problème: je ne peux pas utiliser Github pages, le service le plus efficace pour mettre en ligne un blog Jekyll.

Je me suis souvenu qu'OVH fourni un serveur minimal gratuitement avec ses noms de domaines. Exactement ce qu'il me faut, mon site statique n'a pas besoin de beaucoup d'espace. Et 8,40 euros par an, domaine compris, c'est un budget acceptable.

<!--more-->

Mais en utilisant ce service pour la première fois, j'ai découvert que la connection en SSH au serveur est réservée aux plans payants... La seule option proposée est d'utiliser un FTP. J'ai donc ouvert FileZilla pour la première fois depuis longtemps, et j'ai pu mettre en ligne mon blog.

Cette solution ne me convient pas du tout. Je suis habitué à mettre en ligne mes sites plus rapidement que ça, ouvrir une application et déplacer des fichiers à la souris... je ne peux pas m'empêcher de trouver ça obsolète. Pour mettre en ligne un site de manière professionnelle, je ne connais que deux commandes: `git push` ou `bin/deploy`. J'ai donc cherché une méthode pour faire la même opération en console, pour pouvoir la scripter.

Après un peu de temps sur Google j'ai trouvé [lftp](https://doc.ubuntu-fr.org/lftp), un client FTP en ligne de commande. Sur Ubuntu on peut l'installer comme ça:

```shell
$ sudo apt-get update
$ sudo apt-get install lftp
```

Cet outil m'a permis d'écrire mon fichier `bin/deploy`:

```shell
#!/bin/sh

set -e

. ./.env

local_path=/home/user/repo/_site

jekyll build

lftp ftp://$user:$pwd@$host -e "
  mirror --reverse $local_path /www \
         --scan-all-first
         --delete \
         --verbose ;
  quit"
```

La ligne `. ./.env` reproduit le fonctionnement de [dotenv](https://github.com/motdotla/dotenv), elle me permet d'extraire les credentials que je ne veux pas versionner dans un autre fichier. Et donc de placer ce fichier dans mon `.gitignore`.

Le fichier `.env` est lui-même un script shell, qui ressemble à ça:

```shell
#!/bin/sh

export host=ftp.moncluster.hosting.ovh.net
export user=monlogin
export pwd=monmotdepasse
```

La variable `local_path` contient le chemin du dossier dans lequel Jekyll construit le site statique, une opération réalisée par la commande `jekyll build`.

La commande `lftp` elle-même comprend plusieurs parties. D'abord on se connecte, en utilisant les variables définies dans le fichier `.env`. Puis on passe une commande qui va faire le travail via une string, avec l'option `-e`.

La ligne suivante, `ls -R` est un hack qui évite que les fichiers dans les sous-dossiers soient ignorés. Je ne sais pas pourquoi, sur ce coup là, [merci Stackoverflow](https://serverfault.com/questions/742459/lftp-reverse-mirror-silently-skips-files-in-subfolders).

La fonction principale est `mirror`, elle reproduit l'état d'un dossier local vers un dossier distant, c'est à dire `/www` sur mon hébergement OVH. L'option `reverse` permet que le transfert se déroule dans ce sens là, `mirror` ayant été conçue pour sauvegarder des fichiers distants localement. `--scan-all-first` permet de s'assurer que tous les fichiers soient transférés quelque soit la profondeur de l'arborescence, et `--delete` permet de gérer le suppressions de fichiers.

Et voilà. Après avoir rendu exécutables les deux scripts (`chmod +x chemin/du/fichier`), je peux déployer mon blog avec la commande `bin/deploy`. Je suis content de retrouver mes standards habituels, et je pense que lftp va me permettre de ne plus jamais utiliser Filezilla.

*Update 30/09/2018*

On m'a fait remarquer que mon script n'utilisait pas ftps, n'était donc pas sécurisé et exposait mes identifiants à une attaque man-in-the-middle. Il est totalement possible de paramétrer lftp pour utiliser le protocole ftps, comme décrit dans ce [post de blog](https://www.tutodidacte.com/connexion-ftps-avec-lftp).

Ce post a donné lieu à mon premier talk pour [Paris.rb](https://rubyparis.org/). La présentation est déployée [ici](https://ruff9.github.io/pres_Jekyll_OVH/).
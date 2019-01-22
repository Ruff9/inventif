---
layout: post
title:  "Rails 5 et Kubernetes: retour d'expérience"
date:   2019-01-16 10:20:20 +0200
permalink: kubernetes
cover: jekyllOnOVH/jekyll.jpg
categories: dev
tags: kubernetes gcp script ops
draft: true
---

- intro, présentation perso, contexte
- concepts de base kubernetes
- environnement de dev (docker compose)
- CI, staging
- prod et script de mise en prod
- retour d'expérience généraux

En mars 2017 j'ai été recruté par Quelleenergie, en tant que développeur Ruby, et on m'a confié le développement d'un nouveau projet. Le CEO de l'époque m'a demandé de le déployer sur Google Cloud Platform (GCP) avec Kubernetes, pour faire une première expérience avant de migrer tous les sites du groupe. J'étais ravi, c'était une occasion parfaite pour découvrir une nouvelle techno.

<!--more-->

Dans mon boulot précédent, j'ai été en contact avec Docker, et je ne voyais pas l'intérêt. L'intérêt, c'est l'orchestration. C'est la prod.

Kubernetes ne fonctionne qu'avec Docker. Ce qui lui a été reproché.

Kubernetes a créé de nouveaux concepts.

# Une collection de nouveaux concepts

# Un environnement de dev au plus proche de la prod

# CI et staging

# LE script de mise en prod

# Impressions

Beaucoup d'apprentissage, beaucoup de mise en place, mais une fois lancé, ça marche tout seul.


Pas de capture d'écran de GCP, pas le plus intéressant. Mais surement le plus galère: mal documenté, interface pas très bien faite


Fichiers:

- config circleCI
- Dockerfile
- docker-compose
- config kubernetes
- script de déploiement en prod
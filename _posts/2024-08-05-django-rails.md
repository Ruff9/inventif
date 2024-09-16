---
layout: post
title: "Django et Rails, deux communautés divergentes"
date: 2024-08-05 10:20:20 +0200
permalink: django-rails
cover: rails_vs_django.png
categories: dev
tags: django rails backend
---

{% include image.html name="rails_vs_django.png" %}

Le 17 septembre, j'ai donné un talk dans le cadre du meetup Django Paris. Ce post vient compléter la présentation en donnant toutes les références et tous les liens cités.

Dans ce talk j'utilise mon vécu de développeur Ruby on Rails pour comparer ce framework à Django. Ces deux projets ont des périmètres et des résultats très proches, mais des communautés qui fonctionnent très différement.

<!--more-->

Vous pouvez retrouver la présentation [déployée ici](https://ruff9.github.io/presentation-django-rails/), et son code sur [ce repo Github](https://github.com/Ruff9/presentation-django-rails). Les infos concernant le meetup sont sur sa [page officielle](https://www.meetup.com/fr-FR/django-paris/).

## Général

- Etude sur les librairies utilisées par les développeurs [Python](https://www.jetbrains.com/lp/devecosystem-2023/python/)

- Etude sur les librairies utilisées par les développeurs [Ruby](https://www.jetbrains.com/lp/devecosystem-2023/ruby/)

- Repo Github de Django : [github.com/django](https://github.com/django/django)

- Repo Github de Ruby on Rails : [github.com/rails](https://github.com/rails/rails)

## Architecture

- Documentation Django : Design Philosophies [docs.djangoproject.com](https://docs.djangoproject.com/en/5.1/misc/design-philosophies/)

- Doctrine Rails [rubyonrails.org/doctrine](https://rubyonrails.org/doctrine)

- Wiki Django : Removing the magic [code.djangoproject.com/wiki](https://code.djangoproject.com/wiki/RemovingTheMagic)

- DHH : The One person framework [world.hey.com/dhh/the-one-person-framework](https://world.hey.com/dhh/the-one-person-framework-711e6318)

- Rails : documentation Asset Pipeline [guides.rubyonrails.org](https://guides.rubyonrails.org/asset_pipeline.html)

- Rails : documentation Action Mailer [guides.rubyonrails.org](https://guides.rubyonrails.org/action_mailer_basics.html)

## Histoire de Rails

- Ruby on Rails : the origin story [cult.honeypot.io](https://cult.honeypot.io/reads/ruby-on-rails-the-origin-story/)

- Interview de DHH en 2006 [dev.mysql.com](https://web.archive.org/web/20130225091835/http://dev.mysql.com/tech-resources/interviews/david-heinemeier-hansson-rails.html)

- Equipe core de Rails en 2006 [web.archive.org](https://web.archive.org/web/20060110033032/http://rubyonrails.org/core)

- Rails fusionne avec Merb [computerworld.com](https://www.computerworld.com/article/1568950/rails-and-merb-frameworks-agree-to-merge.html)

- Twitter said to be abandoning Ruby on Rails [techcrunch.com](https://techcrunch.com/2008/05/01/twitter-said-to-be-abandoning-ruby-on-rails/)

- Twitter shifts more code to JVM [infoq.com](https://www.infoq.com/articles/twitter-java-use/)

## Histoire de Django

- Simon Willison : History of the Django Web framework [quora.com](https://www.quora.com/What-is-the-history-of-the-Django-web-framework-Why-has-it-been-described-as-developed-in-a-newsroom/answer/Simon-Willison)

- Django : the original team [waltercruz.github.io](https://waltercruz.github.io/django-l10n-portuguese/internals/committers.html)

## DHH et crise chez Basecamp

- Site personnel David Heinemeier Hansson [dhh.dk](https://dhh.dk/)

- Platformer : What really happened at Basecamp [platformer.news](https://www.platformer.news/-what-really-happened-at-basecamp/)

- The Verge : Inside the Basecamp meeting [theverge.com](https://www.theverge.com/2021/5/3/22418208/basecamp-all-hands-meeting-employee-resignations-buyouts-implosion)

- DHH : No RailsConf [world.hey.com/dhh](https://world.hey.com/dhh/no-railsconf-faa7935e)

- Kasper Timm Hansen resigns from Rails Core [reddit.com](https://www.reddit.com/r/rails/comments/t9h0d3/kasper_timm_hansen_resigns_from_rails_core/)

- Ruby on Rails confronts its founding bully [masterwp.com](https://masterwp.com/ruby-on-rails-confronts-its-founding-bully/)

- Duke University : Why We’re Dropping Basecamp [blogs.library.duke.edu](https://blogs.library.duke.edu/blog/2023/11/30/why-were-dropping-basecamp/)

## Gouvernance Django

- Documentation Django : Organisation [docs.djangoproject.com](https://docs.djangoproject.com/en/dev/internals/organization/)

- Post de James Bennet : Core no more [b-list.org](https://www.b-list.org/weblog/2018/nov/20/core/)

- Annonce officielle : New governance model for the Django project [djangoproject.com/weblog](https://www.djangoproject.com/weblog/2020/mar/12/governance/)

- Post de Jacob Kaplan-Moss : Django’s new governance model [jacobian.org](https://jacobian.org/2020/mar/12/django-governance/)

- Documentation du changement : DEP0010 New governance for the Django project [github.com/django](https://github.com/django/deps/blob/main/final/0010-new-governance.rst)

## Gouvernance Rails

- Documentation Rails : Communauté [rubyonrails.org/community](https://rubyonrails.org/community)

- Communication de crise sur la gouvernance [rubyonrails.org](https://rubyonrails.org/2021/5/2/rails-governance)

- Demande d'un changement de gouvernance par les utilisateurs [discuss.rubyonrails.org](https://discuss.rubyonrails.org/t/effect-of-the-last-week-on-ruby-on-rails/77702)

- Annonce de la création de la Rails Foundation [rubyonrails.org](https://rubyonrails.org/2022/11/14/the-rails-foundation)

- Programme de Rails World 2023 [rubyonrails.org/world](https://rubyonrails.org/world/2023/agenda/day-1/2-david-hansson-session)

- How Rails gets made [schneems.com](https://www.schneems.com/2021/05/12/the-room-where-it-happens-how-rails-gets-made/)

## Conclusion

- DHH : Open source is neither a community nor a democracy [world.hey.com/dhh](https://world.hey.com/dhh/open-source-is-neither-a-community-nor-a-democracy-606abdab)

> "Elitism is good, when it comes to open source. You absolutely want projects to be driven by the people who show up to do the work, demonstrate their superior dedication and competence, and are thus responsible for keeping the gift factory churning out new updates, features, and releases. Productive effort is the correct moral basis of power in these projects."

- Jacob Kaplan-Moss : Retiring as BDFLs [jacobian.org](https://jacobian.org/2014/jan/13/retiring-as-bdfls/)

> "Kings, presidents, and BDFLs have their place, and there are models of community that are aided by having them. But the longer I observe the Django community, the more I realize that our community doesn’t need them."

- Rails Doctrine [rubyonrails.org/doctrine](https://rubyonrails.org/doctrine)

> "Part of the Rails mission is to swing its machete at the thick, and ever growing, jungle of recurring decisions that face developers creating information systems for the web. There are thousands of such decisions that just need to be made once, and if someone else can do it for you, all the better."

---------

Source image de couverture : [django vs ruby on rails](https://ositcom.com/blog/django-vs-ruby-on-rails/)

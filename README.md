# planningDemo

Je n'ai pas fini projet car j'ai utilisé une librairie pour le planning. 
La modification du template pour les boutons qui servent a ajouter ou supprimer les meeting sont trop compliqué à changer.

Sur le planning on peut ajouter ( pas en bdd ) suprimer / modifier , deplacer un rendez vous. 

j'ai mis comme exemple trois type de rendez vous, un qui bloque une duree dans le planning pour montre le cas ou cette horaire est plus disponible.
Un autre type represente la reservation d'un client autre, qui est visible mais pas modifiable, cependant il reste de la pace sur cette horaire on peut donc ajouter un rendez vous sur cette horaire.

Le dernier type represente un rendez vous classique que l'on vient de faire.

le calendrier a différente vue, par jour, mois, année , jour ouvré de la semaine. On peut aussi voir les planning par salon différent.

lancement des plateformes 

ng serve pour le client 

node index.js pour le serveur 
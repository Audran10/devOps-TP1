# Lancement du projet

1. git clone "https://github.com/Audran10/devOps-TP1.git"
2. On se dirige vers le repertoire du projet : cd /chemin/vers/devOps-TP1
3. On a besoin de npm : npm init -y
4. On lance le serveur : npm run start

Si on se dirige vers /ping, les headers seront affichés. A l'inverse cela provoquera une 404. C'est vérifiable en faisant dans un autre terminal la commande "curl http://localhost:port -v" en changeant "port" par le numéro du port sur lequel le serveur web est lancé. 
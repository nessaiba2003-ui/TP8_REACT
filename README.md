Ce travail pratique se concentre sur les deux méthodes principales pour récupérer des données externes dans une application React : l'API native fetch() et la bibliothèque Axios.
Points clés à retenir :
fetch() : Une fonction native intégrée aux navigateurs modernes, ne nécessitant aucune installation.
Axios : Une bibliothèque externe (npm install axios) souvent préférée pour sa syntaxe plus simple et ses fonctionnalités avancées (gestion automatique du JSON, intercepteurs, etc.).
États indispensables : Pour chaque appel API, il est crucial de gérer trois états dans votre composant :
Chargement (loading) : Pour afficher un indicateur (spinner) pendant que les données arrivent.
Erreurs (error) : Pour gérer les problèmes de réseau ou de serveur.
Données : Pour stocker et afficher les résultats reçus.
Structure des étapes
Le menu de gauche détaille le processus de mise en œuvre :
Objectifs : Comprendre comment lier React à des données réelles.
Création du projet : Initialisation d'un nouvel environnement React.
Installation d'Axios : Préparation de l'outil via le gestionnaire de paquets.
Composant avec fetch() : Mise en pratique avec la solution native.
Composant avec Axios : Mise en pratique avec la bibliothèque tierce.

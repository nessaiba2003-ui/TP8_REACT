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
<img width="891" height="429" alt="Screenshot 2026-03-11 123858" src="https://github.com/user-attachments/assets/bfdb83a1-2bd6-4ce5-a2ce-9922f2ce1562" />
<img width="686" height="874" alt="Screenshot 2026-03-11 124045" src="https://github.com/user-attachments/assets/515d2455-af46-4ef3-9f8a-74d3a5e9cf4c" />
<img width="821" height="917" alt="Screenshot 2026-03-11 125635" src="https://github.com/user-attachments/assets/ea4ee4d5-8dc0-4490-bab7-15f94e6b87d9" />
<img width="805" height="418" alt="Screenshot 2026-03-11 125649" src="https://github.com/user-attachments/assets/e7e2328b-f85d-40d4-9b27-0d49ca05cfd3" />
<img width="859" height="549" alt="Screenshot 2026-03-11 130728" src="https://github.com/user-attachments/assets/af5f4ed9-0241-4f2f-985b-025a03397717" />
<img width="987" height="520" alt="Screenshot 2026-03-11 130738" src="https://github.com/user-attachments/assets/c56554fc-8b65-4bae-9da4-99b2ac30e7d2" />
<img width="932" height="540" alt="Screenshot 2026-03-11 131630" src="https://github.com/user-attachments/assets/d7cc54a0-5315-45d4-96c9-b778b3edadd6" />
<img width="868" height="556" alt="Screenshot 2026-03-11 131639" src="https://github.com/user-attachments/assets/6c9d916c-759d-440e-bb0d-88eab888ea93" />
<img width="895" height="538" alt="Screenshot 2026-03-11 131910" src="https://github.com/user-attachments/assets/394ea52e-a622-4694-b228-4f015043807c" />
   <img width="285" height="652" alt="image" src="https://github.com/user-attachments/assets/e39bde4a-a51b-4096-8a48-1b6d71d6e893" />




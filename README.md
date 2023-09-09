# Initiation a React-Native

## Prerequis a l'utilisation de React-Native

### Environnement Node

- Intaller NodeJS

- Installer NPM

Pour les utilisateur Ubuntu, suivez le lien :
*https://www.vultr.com/docs/installing-node-js-and-express-on-ubuntu-20-04/*


### Environnement JAVA 

- Installer la JDK ou openJDK (pour linux)

- Verifier que Gradle est installer et l'installer sinon


### Configuration et creation d'un projet React-Native

- Vous pouvez installer le CLI react-native globalement via la commande : `` npm install -g react-native-cli ``

- Pour creer le projet, executer : ``npx react-native init <name app>``


### Compilation du projet

Il existe plusieurs methodes pour executer un projet react-native. Celle decrite ici se base sur un telephone externe

- Sur le telephone :
    
    - Activer le *Mode Developpeur*

    - Activer l'*installation via USB*

    - Activer le *debogage USB*

- Executer les commande suivante :

    - ``adb devices`` : visualiser les appareil actuellement connecter sur votre machine (apres avoir biensur brancher votre telephone)

    - ``-react-native run-android`` : compile et execute l'application sur votre telephone

    - ``npx react-native start`` : initie le serveur *react*

## Prise en main de la Techno React-Native

## Les bases

- ``Text`` : est la un composant importer pour saisir du texte

- ``View`` : est le composant equivqlent de ``div`` pour de la programmation Web

- ``StyleSheet`` : composant pour la saisir du style avec verification des element saisie


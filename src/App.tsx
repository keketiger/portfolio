import { BrowserRouter, Route, Routes } from 'react-router';

import Button from './components/Button';
import Card from './components/Card';
import { motion } from 'framer-motion';
import { MotionSection } from './components/Motion';
import ImgCarousel from './components/ImgCarousel';
import { useCarousel } from './context/Carousel';

import './App.css';

import { Download, Globe, Image, Info, Mail, Phone } from 'lucide-react';
import Github from './assets/icons/github.svg';
import LinkedIn from './assets/icons/linkedin.svg';
import UnionDarkRP from './pages/UnionDarkRP';

function App() {
  const { openCarousel } = useCarousel();

  const tigerRadioImages = [
    '/projets/tiger-radio/preview1.webp',
    '/projets/tiger-radio/preview2.webp'
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='min-h-screen bg-gray-50 text-gray-800'>
            <header className='p-6 bg-white shadow-md flex flex-col md:flex-row justify-between items-center'>
              <h1 className='text-2xl font-bold'>Portfolio de Kevin Fort</h1>
              <nav className='space-x-4'>
                <a href='#competences' className='hover:text-blue-600'>Compétences</a>
                <a href='#projets' className='hover:text-blue-600'>Projets</a>
                <a href='#contact' className='hover:text-blue-600'>Contact</a>
              </nav>
            </header>

            <section className='relative flex flex-col items-center justify-center'>
              <div
                className='absolute bottom-0 left-0 w-full h-full z-0'
                style={{
                  background: "url('/assets/layered-wave.svg') no-repeat center bottom",
                  backgroundSize: 'cover'
                }}
              />

              <div className='z-1 flex flex-col items-center justify-center py-20 px-6 text-center'>
                <motion.img
                  src='https://avatars.githubusercontent.com/u/34973659?v=4'
                  alt='Photo de profil'
                  className='size-32 rounded-full border-4 border-blue-500 mb-4'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <h2 className='text-3xl font-bold text-shadow-md'>Technicien Supérieur Systèmes & Réseaux</h2>
                <p className='text-gray-100 text-shadow-md max-w-xl mt-4'>
                  Passionné d'informatique depuis toujours, spécialisé en systèmes, réseaux, virtualisation et développement web.
                </p>
                <div className='flex flex-col md:flex-row gap-4 mt-6'>
                  <Button href='/cv.pdf' download iconLeft={<Download />}>Télécharger CV</Button>
                  <Button href='#contact' iconLeft={<Mail />}>Me contacter</Button>
                </div>
              </div>
            </section>

            <MotionSection id='competences' className='py-16 px-6 bg-white'>
              <h3 className='text-2xl font-bold text-center mb-10 uppercase'>Compétences</h3>
              <div className='grid justify-center md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                <Card>
                  <h4 className='text-lg font-semibold mb-2'>Systèmes & Réseaux</h4>
                  <p className='text-gray-300'>Windows, Linux (Debian, Ubuntu), Virtualisation (VMware, Hyper-V, VirtualBox, Docker), Sécurité réseau (VPN, pare-feu).</p>
                </Card>
                <Card variant='secondary'>
                  <h4 className='text-lg font-semibold mb-2'>Développement</h4>
                  <p className='text-gray-300'>Python, Java, .NET, PHP, React, Bash, PowerShell, SQL, HTML/CSS/JS, Typescript, Lua, Json, XML, YAML.</p>
                </Card>
                <Card>
                  <h4 className='text-lg font-semibold mb-2'>Outils</h4>
                  <p className='text-gray-300'>Git/GitHub, VS Code, Photoshop, Blender, Unreal Engine, VirtualBox, MobXterm, WinSCP/FileZilla.</p>
                </Card>
              </div>
            </MotionSection>

            <MotionSection id='projets' className='py-16 px-6 bg-gray-50'>
              <h3 className='text-2xl font-bold text-center mb-10 uppercase'>Projets</h3>
              <div className='max-w-7xl mx-auto space-y-6'>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>La Cabane Informatique – Société de services informatiques</h4>
                      <small className='text-gray-300'>
                        <i>Développeur Web - Depuis <time dateTime='2025'>2025</time></i>
                      </small>
                      <p className='my-3 pr-20'>
                        La Cabane Informatique est une jeune société de services informatiques destinée aussi bien aux professionnels qu'aux particuliers. Elle propose des prestations variées : interventions rapides, conception et montage de PC sur mesure, réparations à domicile et maintenance de matériel informatique.
                        <br />
                        <br />
                        J'ai conçu le site internet en FullStack, en respectant une maquette fournie par le PDG. J'ai également apporté des conseils pour optimiser l'interface et améliorer l'expérience utilisateur. J'ai accompagné le PDG dans le choix de l'hébergement web et la définition de ses besoins techniques.
                        <br />
                        <br />
                        Sur le plan technique, le site a été développé avec <b>React</b>, <b>TypeScript</b>, <b>Next.js</b> et <b>MariaDB</b>. La base de données permet une gestion simple et rapide des tarifs et des services proposés.
                      </p>
                      <div className='mt-5 space-x-4 space-y-4 md:space-y-0'>
                        <Button href='https://lacabaneinformatique.fr/' target='_blank' rel='noopener noreferrer' iconLeft={<Globe />}>Site Internet</Button>
                        <Button href='tel:0952343769' iconLeft={<Phone />}>09 52 34 37 69</Button>
                      </div>
                    </div>
                    <motion.img
                      src='/projets/lacabaneinformatique/logo.webp'
                      alt='Logo de La Cabane Informatique'
                      className='size-32'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>TigerRadio – Application Radio légère</h4>
                      <small className='text-gray-300'>
                        <i>Développeur – Depuis <time dateTime='2022'>2022</time></i>
                      </small>
                      <p className='my-3 pr-20'>
                        TigerRadio est ma toute première application développée en <b>WPF</b>, conçue en 2022. Ce projet m'a permis de découvrir et de pratiquer le développement en <b>.NET Framework 4.8</b>.
                        <br />
                        <br />
                        Mon objectif était de créer une application légère, rapide et simple d'utilisation, permettant d'écouter facilement des flux radios français et internationaux. L'application propose actuellement une trentaine de radios accessibles en un clic.
                        <br />
                        <br />
                        J'ai également intégré une section permettant de lire les fichiers audio présents dans le dossier Musique de Windows.
                        <br />
                        <br />
                        Ce projet m'a permis de travailler avec les langages et technologies suivants : <b>C#</b> et <b>WPF/XAML</b>.
                      </p>
                      <div className='mt-5 space-x-4 space-y-4 md:space-y-0'>
                        <Button
                          onClick={() => openCarousel(0)}
                          iconLeft={<Image />}
                        >
                          Voir les images
                        </Button>
                      </div>
                    </div>
                    <motion.img
                      src='/projets/tiger-radio/logo.webp'
                      alt='Logo de TigerRadio'
                      className='size-32'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>Altrada – Communauté de joueurs</h4>
                      <small className='text-gray-300'>
                        <i>Fondateur & Développeur principal - Depuis <time dateTime='2021'>2021</time></i>
                      </small>
                      <p className='my-3 pr-20'>
                        Fondée en 2021, Altrada est une communauté de joueurs passionnés que j'ai cofondée avec quatre amis. Nous organisons régulièrement des sessions de jeu variées, et nous gérons également un serveur FiveM dédié au rôleplay sur <i>Grand Theft Auto V</i>.
                        <br />
                        <br />
                        Je suis responsable du développement technique, du maquettage graphique (notamment via Photoshop, Figma, Canva), ainsi que de l'étude et de l'intégration de nouvelles fonctionnalités.
                        <br />
                        <br />
                        Je travaille activement sur le site internet de la communauté ainsi que sur le serveur FiveM, principalement avec les technologies suivantes : <b>React</b>, <b>TypeScript</b>, <b>Vite.js</b>, <b>CSS</b>, <b>Next.js</b>, <b>Lua</b>, <b>JSON</b>, <b>SQL</b> et <b>XML</b>.
                        <br />
                        <br />
                        Je réalise également de la modélisation 3D avec <b>Blender</b>, afin de créer ou modifier des bâtiments et des éléments de décor personnalisés pour enrichir l'univers de jeu sur <i>Grand Theft Auto V</i>.
                      </p>
                      <div className='mt-5 space-x-4 space-y-4 md:space-y-0'>
                        <Button href='https://altrada.net/' target='_blank' rel='noopener noreferrer' iconLeft={<Globe />}>Site Internet</Button>
                        <Button href='/projets/altrada' iconLeft={<Info />}>En savoir plus</Button>
                      </div>
                    </div>
                    <motion.img
                      src='https://altrada.net/images/altrada_logo_ts.png'
                      alt='Logo de Altrada'
                      className='size-32'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>Union DarkRP – Serveur Garry's Mod Roleplay</h4>
                      <small className='text-gray-300'>
                        <i>Développeur Web – <time dateTime='2020'>2020</time></i>
                      </small>
                      <p className='my-3 pr-20'>
                        J'ai conçu et déployé le <b>site internet</b> pour le serveur <i>Union DarkRP</i>, un serveur <i>Garry's Mod</i> orienté roleplay. Le site incluait un <b>forum communautaire</b> basé sur <b>MyBB</b>, un CMS open source, entièrement installé et configuré par mes soins.
                        <br />
                        <br />
                        J'ai également mis en place une <b>boutique en ligne</b>, connectée au serveur de jeu via un plugin tiers spécifique à <i>Garry's Mod</i>. L'ensemble de l'infrastructure web était hébergé sur un serveur <b>Debian</b> avec un stack <b>LEMP</b> : <b>Linux</b>, <b>Nginx</b>, <b>MariaDB</b> et <b>PHP</b>.
                        <br />
                        <br />
                        Langages utilisés : <b>PHP</b>, <b>SQL</b>, <b>JSON</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>.<br />
                        Logiciel utilisé : <b>Visual Studio Code</b>.
                      </p>
                      <div className='mt-5 space-x-4 space-y-4 md:space-y-0'>
                        <Button href='/projets/union-darkrp' iconLeft={<Info />}>Prévisualiser</Button>
                      </div>
                    </div>
                    <motion.img
                      src='/projets/union-darkrp/logo.webp'
                      alt='Logo de Union DarkRP'
                      className='size-32 rounded-full'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>Oroka – Serveur FiveM</h4>
                      <small className='text-gray-300'>
                        <i>Développeur & Créateur de contenu – De <time dateTime='2019'>2019</time> à <time dateTime='2021'>2021</time></i>
                      </small>
                      <p className='my-3 pr-20'>
                        Oroka était un serveur <i>FiveM</i> sur lequel j'ai été responsable du développement, de la création de contenu personnalisé, ainsi que de l'optimisation des scripts et de l'environnement de jeu.
                        <br />
                        <br />
                        J'ai utilisé <b>Blender</b> pour corriger et modifier certains bâtiments en 3D, en intégrant ces modifications dans l'univers du serveur. J'ai également développé et configuré un <b>site web</b> ainsi qu'un <b>forum XenForo</b> pour la communauté.
                        <br />
                        <br />
                        J'ai occasionnellement contribué à la <b>création graphique</b>, notamment en réalisant le dernier logo du projet.
                        <br />
                        <br />
                        Technologies & langages utilisés : <b>Lua</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>PHP</b>, <b>JSON</b>, <b>SQL</b>.
                        <br />
                        Environnements de travail : <b>Visual Studio Code</b>, <b>Blender</b>, <b>HeidiSQL</b>.
                      </p>
                    </div>
                    <motion.img
                      src='/projets/oroka/logo.webp'
                      alt='Logo de Oroka'
                      className='size-32'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>CrossRP – Serveur Garry's Mod Roleplay</h4>
                      <small className='text-gray-300'>
                        <i>Développeur & Modérateur – De <time dateTime='2017'>2017</time> à <time dateTime='2018'>2018</time></i>
                      </small>
                      <p className='my-3 pr-20'>
                        CrossRP était un serveur <i>Garry's Mod</i> orienté <b>jeu de rôle</b>, développé en collaboration avec un ami. Le serveur proposait différents métiers et activités immersives permettant aux joueurs de s'immerger dans un univers RP structuré.
                        <br />
                        <br />
                        J'étais en charge de la création des scripts en <b>Lua</b> pour chaque métier et de la configuration complète de l'environnement serveur. J'ai installé et maintenu le serveur sur une machine tournant sous <b>Debian 7</b> avec une base de données <b>MySQL</b>.
                        <br />
                        <br />
                        En plus du développement, je gérais également la <b>modération</b> du serveur, assurant le respect des règles et une bonne ambiance entre les joueurs.
                        <br />
                        <br />
                        Technologies & langages utilisés : <b>Lua</b>, <b>MySQL</b>.<br />
                        Environnements : <b>Debian 7</b>.
                      </p>
                    </div>
                    <motion.img
                      src='/projets/crossrp/logo.webp'
                      alt='Logo de CrossRP'
                      className='size-32 rounded-full'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
                <Card className='!max-w-full'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div>
                      <h4 className='text-xl font-bold'>IceLand – Serveur Minecraft multi-jeux</h4>
                      <small className='text-gray-300'>
                        <i>Développeur & Administrateur – De <time dateTime='2017'>2017</time> à <time dateTime='2019'>2019</time></i>
                      </small>
                      <p className='my-3'>
                        IceLand était un serveur <i>Minecraft</i> multi-jeux composé de plusieurs serveurs interconnectés via un proxy. Ce système permettait aux joueurs de naviguer entre les différents modes sans avoir à changer manuellement d'adresse IP.
                        <br />
                        <br />
                        Le projet proposait plusieurs expériences de jeu :
                      </p>
                      <ul className='list-disc list-inside mt-2'>
                        <li>Un mode survie classique</li>
                        <li>Un mode survie avec ressources x2 et PVP activé</li>
                        <li>Un mode <i>Skyblock</i>, où le joueur commence sur une île minuscule à agrandir</li>
                      </ul>
                      <p>
                        <br />
                        Je me suis occupé du développement et de la configuration des plugins, ainsi que de la mise en place complète de l'architecture des serveurs sous <b>Debian 7</b> avec <b>MySQL</b> administré via <b>phpMyAdmin</b>.
                        <br />
                        <br />
                        Technologies & langages utilisés : <b>Java</b>, <b>YAML</b>, <b>JSON</b>.
                        <br />
                        Logiciels utilisés : <b>Eclipse IDE</b>, <b>Notepad++</b>.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </MotionSection>

            <MotionSection id='contact' className='py-16 px-6 bg-white text-center'>
              <h3 className='text-2xl font-bold mb-6 uppercase'>Contact</h3>
              <Button href='mailto:kevinfort000@gmail.com' iconLeft={<Mail />} className='!text-blue-200'>kevinfort000@gmail.com</Button>
              <div className='flex justify-center gap-6 mt-5'>
                <Button href='https://github.com/keketiger' target='_blank' rel='noopener noreferrer'><img src={Github} alt='Logo Github' className='size-6' /></Button>
                <Button href='https://www.linkedin.com/in/fort-kevin/' target='_blank' rel='noopener noreferrer'><img src={LinkedIn} alt='Logo LinkedIn' className='size-6' /></Button>
              </div>
            </MotionSection>

            <footer className='p-6 text-center text-gray-500 text-sm'>
              <p>© {new Date().getFullYear()} Portfolio de Kevin Fort. Tous droits réservés.</p>
            </footer>
          </div>
        } />

        <Route path='/projets/union-darkrp' element={<UnionDarkRP />} />
      </Routes>

      <ImgCarousel images={tigerRadioImages} />
    </BrowserRouter>
  );
};

export default App;

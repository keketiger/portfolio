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

function App() {
  const { openCarousel } = useCarousel();

  const tigerRadioImages = [
    '/projets/tiger-radio/preview1.webp',
    '/projets/tiger-radio/preview2.webp'
  ];

  return (
    <>
      <div className='min-h-screen bg-gray-50 text-gray-800'>
        <header className='p-6 bg-white shadow-md flex flex-col md:flex-row justify-between items-center'>
          <h1 className='text-2xl font-bold'>Portfolio de Kevin Fort</h1>
          <nav className='space-x-4'>
            <a href='#competences' className='hover:text-blue-600'>Compétences</a>
            <a href='#projets' className='hover:text-blue-600'>Projets</a>
            <a href='#contact' className='hover:text-blue-600'>Contact</a>
          </nav>
        </header>

        <section className='flex flex-col items-center justify-center text-center py-20 px-6'>
          <motion.img
            src='https://avatars.githubusercontent.com/u/34973659?v=4'
            alt='Photo de profil'
            className='size-32 rounded-full border-4 border-blue-500 mb-4'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h2 className='text-3xl font-bold'>Technicien Supérieur Systèmes & Réseaux</h2>
          <p className='text-gray-600 max-w-xl mt-4'>
            Passionné d'informatique depuis toujours, spécialisé en systèmes, réseaux, virtualisation et développement web.
          </p>
          <div className='flex flex-col md:flex-row gap-4 mt-6'>
            <Button href='/cv.pdf' download iconLeft={<Download />}>Télécharger CV</Button>
            <Button href='#contact' iconLeft={<Mail />}>Me contacter</Button>
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
                    <i>Fondateur & Développeur principal - Depuis <time dateTime='2019'>2019</time></i>
                  </small>
                  <p className='my-3 pr-20'>
                    Fondée en 2019, Altrada est une communauté de joueurs passionnés que j'ai cofondée avec quatre amis. Nous organisons régulièrement des sessions de jeu variées, et nous gérons également un serveur FiveM dédié au rôleplay sur <i>Grand Theft Auto V</i>.
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

      <ImgCarousel images={tigerRadioImages} />
    </>
  );
};

export default App;

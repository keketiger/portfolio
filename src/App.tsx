import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Button from './components/Button';
import Card from './components/Card';
import './App.css';
import Github from './assets/icons/github.svg';
import LinkedIn from './assets/icons/linkedin.svg';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      <header className='p-6 bg-white shadow-md flex justify-between items-center'>
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
        <div className='flex gap-4 mt-6'>
          <Button href='/cv.pdf' download iconLeft={<Download />}>Télécharger CV</Button>
          <Button href='#contact' iconLeft={<Mail />}>Me contacter</Button>
        </div>
      </section>

      <section id='competences' className='py-16 px-6 bg-white'>
        <h3 className='text-2xl font-bold text-center mb-10 uppercase'>Compétences</h3>
        <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          <Card>
            <h4 className='text-lg font-semibold mb-2'>Systèmes & Réseaux</h4>
            <p className='text-gray-300'>Windows, Linux (Debian, Ubuntu), Virtualisation (VMware, Hyper-V, VirtualBox, Docker), Sécurité réseau (VPN, pare-feu).</p>
          </Card>
          <Card>
            <h4 className='text-lg font-semibold mb-2'>Développement</h4>
            <p className='text-gray-300'>Python, Java, .NET, PHP, React, Bash, PowerShell, SQL, HTML/CSS/JS, Typescript, Lua, Json, XML, YAML.</p>
          </Card>
          <Card>
            <h4 className='text-lg font-semibold mb-2'>Outils</h4>
            <p className='text-gray-300'>Git/GitHub, VS Code, Photoshop, Blender, Unreal Engine, VirtualBox, MobXterm, WinSCP/FileZilla.</p>
          </Card>
        </div>
      </section>

      <section id='projets' className='py-16 px-6 bg-gray-50'>
        <h3 className='text-2xl font-bold text-center mb-10 uppercase'>Projets</h3>
        <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          <Card>
            <h4 className='text-lg font-semibold mb-2'>Serveur Linux Sécurisé</h4>
            <p className='text-gray-300'>Installation et configuration d'un serveur Debian avec gestion des accès SSH, VPN et pare-feu.</p>
          </Card>
          <Card>
            <h4 className='text-lg font-semibold mb-2'>Site Web Vitrine</h4>
            <p className='text-gray-300'>Développement d'un site vitrine responsive avec ReactJS et hébergé sur GitHub Pages.</p>
          </Card>
          <Card>
            <h4 className='text-lg font-semibold mb-2'>Outils</h4>
            <p className='text-gray-300'>PowerShell pour la gestion automatique des utilisateurs et sauvegardes sur Windows Server.</p>
          </Card>
        </div>
      </section>

      <section id='contact' className='py-16 px-6 bg-white text-center'>
        <h3 className='text-2xl font-bold mb-6 uppercase'>Contact</h3>
        <Button href='mailto:kevinfort000@gmail.com' iconLeft={<Mail />} className='!text-blue-200'>kevinfort000@gmail.com</Button>
        <div className='flex justify-center gap-6 mt-5'>
          <Button href='https://github.com/keketiger' target='_blank' rel='noopener noreferrer'><img src={Github} alt='Logo Github' className='size-6' /></Button>
          <Button href='https://www.linkedin.com/in/fort-kevin/' target='_blank' rel='noopener noreferrer'><img src={LinkedIn} alt='Logo LinkedIn' className='size-6' /></Button>
        </div>
      </section>

      <footer className='p-6 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} Portfolio de Kevin Fort. Tous droits réservés.
      </footer>
    </div>
  );
};

export default App;

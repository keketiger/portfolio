import { motion } from 'framer-motion';
import { MotionSection } from '../components/elements/Motion';
import Button from '../components/elements/Button';
// import Card from '../components/elements/Card';
// import { useCarousel } from '../context/Carousel';
// import ImgCarousel from '../components/ImgCarousel';
// import ScrollLink from '../components/elements/ScrollLink';
import TextIcon from '../components/elements/TextIcon';
import ActionButton from '../components/elements/ActionButton';
import { BriefcaseBusiness, Circle, Clock, Code, FileText, Mail, MapPin, Menu, SquareArrowDown, SquareArrowUp } from 'lucide-react';
import Github from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Wave from '../assets/icons/wave.svg';
import WaveAnimate from '../assets/waves-animate.svg?react';
import Illustation from '../assets/illustration.webp';
import IconSvg from '../components/elements/IconSvg';
import { useState } from 'react';
import clsx from 'clsx';
import { scrollToElementById } from '../utils/helper';
import projects from '../config/projects';
import { languages, tools } from '../config/skills';
import ProjectCard from '../components/ProjectCard';

function Home() {
  const [sideMenuState, setSideMenuState] = useState(false);
  const [navMenuState, setNavMenuState] = useState(false);

  // const { openCarousel } = useCarousel();

  // const tigerRadioImages = [
  //   './projets/tiger-radio/preview1.webp',
  //   './projets/tiger-radio/preview2.webp'
  // ];

  const handleSideMenuBtn = () => {
    setSideMenuState(!sideMenuState);
    if (!sideMenuState) scrollToElementById('left-side');
  };

  return (
    <>
      <div className='min-h-screen bg-linear-to-b from-sky-200 to-white p-5 text-gray-800'>
        <div className='flex flex-col lg:flex-row mx-auto max-w-7xl rounded-xl bg-white'>
          <aside id='left-side'
            className={clsx(
              'hidden lg:flex flex-col justify-between w-full lg:max-w-xs overflow-hidden rounded-md shadow-xl',
              { '!flex bg-sky-100/50 backdrop-blur-md': sideMenuState }
            )}
          >
            <div className='p-5'>
              <div className='flex flex-col items-center gap-2 select-none'>
                <motion.img
                  src='./profil.webp'
                  alt='Photo de profil'
                  className='size-40 rounded-full mb-4'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  draggable={false}
                />
                <h2 className='text-3xl font-bold text-shadow-md'>Kevin FORT</h2>
                <TextIcon
                  text="Développeur d'application & Web"
                  className='font-medium'
                  icon={Code}
                  pos='right'
                />
                <p className='mt-2.5 text-center text-sm px-5'>
                  Je crée des expériences web modernes, rapides et accessibles.
                </p>
                <img src={Wave} alt='Wave divider' className='size-20' draggable={false} />
              </div>

              <h4 className='font-bold uppercase text-sm mb-3'>Contact</h4>
              <div className='space-y-4 ml-4'>
                <a href='mailto:kevinfort000@gmail.com' className='block'>
                  <TextIcon
                    text="kevinfort000@gmail.com"
                    className='font-medium'
                    icon={Mail}
                    iconClass='size-6 text-sky-600'
                    pos='left'
                  />
                </a>
                <TextIcon
                  text="Agde, France"
                  className='font-medium'
                  icon={MapPin}
                  iconClass='size-6 text-sky-600'
                  pos='left'
                />
              </div>

              <img src={Wave} alt='Wave divider' className='size-20 mx-auto select-none' draggable={false} />

              <h4 className='font-bold uppercase text-sm mb-3'>Liens</h4>
              <div className='space-y-4'>
                <ActionButton
                  icon={<img src={LinkedIn} alt='Logo LinkedIn' className='size-7' draggable={false} />}
                  title='LinkedIn'
                  description='linkedin.com/in/fort-kevin'
                  href='https://www.linkedin.com/in/fort-kevin/'
                />

                <ActionButton
                  icon={<img src={Github} alt='Logo Github' className='size-7' draggable={false} />}
                  title='GitHub'
                  description='github.com/keketiger'
                  href='https://github.com/keketiger'
                />

                <ActionButton
                  icon={<FileText className="h-6 w-6 text-blue-500" />}
                  title='Mon CV'
                  description='Télécharger le PDF'
                  downloadFile='./kevin_fort_cv.pdf'
                />
              </div>
            </div>

            <div className='w-full'>
              <WaveAnimate className='block' />
            </div>
          </aside>

          <main className='w-full py-5 px-8 space-y-5'>
            <div className='space-x-3'>
              <div
                className='inline-block lg:hidden w-fit p-2 rounded-full border-1 border-sky-300'
                onClick={handleSideMenuBtn}
              >
                {sideMenuState ? <SquareArrowDown /> : <SquareArrowUp />}
              </div>
              <div
                className='inline-block lg:hidden w-fit p-2 rounded-full border-1 border-sky-300'
                onClick={() => setNavMenuState(!navMenuState)}
              >
                <Menu />
              </div>
            </div>

            <nav>
              <ul
                className={clsx(
                  'hidden lg:flex flex-col lg:flex-row justify-end gap-2 lg:gap-5',
                  { '!flex': navMenuState }
                )}
              >
                <li>
                  <Button className='text-xs !py-2' href='/'>Accueil</Button>
                </li>
                <li>
                  <Button className='text-xs !py-2' href='#about'>À propos</Button>
                </li>
                <li>
                  <Button className='text-xs !py-2' href="#skills">Compétences</Button>
                </li>
                <li>
                  <Button className='text-xs !py-2' href="#projects">Projets</Button>
                </li>
                <li>
                  <Button className='text-xs !py-2' href="#">Contact</Button>
                </li>
              </ul>
            </nav>

            <div className='space-y-8'>
              <MotionSection id='about' className='flex gap-5 select-none'>
                <div>
                  <TextIcon
                    text='À propos de moi'
                    className='font-bold uppercase text-xs'
                    icon={Circle}
                    iconClass='fill-sky-400 text-sky-400 size-3'
                    pos='left'
                  />

                  <h2 className='text-2xl font-bold my-2'>
                    Salut, moi c'est <span className='text-blue-700'>Kevin</span> !
                  </h2>

                  <p>
                    Développeur passionné par la création de solutions web utiles, esthétiques et performantes. J'aime transformer des idées en projets concrets.
                    <br />
                    <br />
                    Curieux, autonome et rigoureux, je suis toujours à la recherche de nouveaux défis pour apprendre et progresser.
                  </p>

                  <div className='space-x-3 space-y-3 mt-5'>
                    <div className='inline-flex gap-3 p-3 shadow-lg border border-gray-200 rounded-lg'>
                      <Clock className='text-blue-500' />
                      <div>
                        <h4 className='text-sm text-gray-600 font-medium mb-1'>Disponibilité</h4>
                        <TextIcon
                          text='Disponible'
                          className='font-bold text-[0.85rem] leading-5'
                          icon={Circle}
                          iconClass='fill-green-500 text-green-500 size-2.5'
                          pos='left'
                        />
                      </div>
                    </div>

                    <div className='inline-flex gap-3 p-3 shadow-lg border border-gray-200 rounded-lg'>
                      <BriefcaseBusiness className='text-blue-500' />
                      <div>
                        <h4 className='text-sm text-gray-600 font-medium mb-1'>Expérience</h4>
                        <p className='font-bold text-[0.85rem] leading-5'>5+ ans</p>
                      </div>
                    </div>

                    <div className='inline-flex gap-2 p-3 shadow-lg border border-gray-200 rounded-lg'>
                      <MapPin className='text-blue-500' />
                      <div>
                        <h4 className='text-sm text-gray-600 font-medium mb-1'>Localisation</h4>
                        <p className='font-bold text-[0.85rem] leading-5'>Agde, France</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='hidden lg:block w-[90%]'>
                  <img src={Illustation} alt='Illustation développement' draggable={false} />
                </div>
              </MotionSection>

              <MotionSection id='skills' className='select-none space-y-5'>
                <TextIcon
                  text='Mes compétences'
                  className='font-bold uppercase text-xs'
                  icon={Circle}
                  iconClass='fill-sky-400 text-sky-400 size-3'
                  pos='left'
                />

                <h4 className='font-bold text-xs'>Langages & Frameworks</h4>
                <div className='space-x-3 space-y-3'>
                  {languages.map((item, i) => (
                    <div key={i} className='inline-flex items-center gap-3 p-3 shadow-lg border border-gray-200 rounded-lg'>
                      <IconSvg icon={item.icon} size={24} />
                      <h4 className='text-sm text-gray-600 font-medium mb-1'>{item.label}</h4>
                    </div>
                  ))}
                </div>

                <h4 className='font-bold text-xs'>Outils & Technologies</h4>
                <div className='space-x-3 space-y-3'>
                  {tools.map((item, i) => (
                    <div key={i} className='inline-flex items-center gap-3 p-3 shadow-lg border border-gray-200 rounded-lg'>
                      {item.icon && <IconSvg icon={item.icon} size={24} />}
                      {item.svg && <img src={item.svg} alt={item.label} className='size-6' draggable={false} />}
                      <h4 className='text-sm text-gray-600 font-medium mb-1'>{item.label}</h4>
                    </div>
                  ))}
                </div>
              </MotionSection>

              <MotionSection id='projects' className='select-none mt-2'>
                <TextIcon
                  text='Mes projets'
                  className='font-bold uppercase text-xs'
                  icon={Circle}
                  iconClass='fill-sky-400 text-sky-400 size-3'
                  pos='left'
                />

                <div className='mt-5 space-y-3'>
                  {projects.map((item, i) => <ProjectCard key={i} {...item} />)}
                </div>
              </MotionSection>
            </div>

            <footer className='px-6 text-center text-gray-500 text-sm select-none'>
              <p>© {new Date().getFullYear()} Kevin Fort - Tous droits réservés.</p>
            </footer>
          </main>
        </div>
      </div>

      {/* <ImgCarousel images={tigerRadioImages} /> */}
    </>
  );
};

export default Home;

import type { ProjetProps } from '../types';
import Button from './elements/Button';
import { Calendar, Eye, Image, SquareArrowOutUpRight } from 'lucide-react';
import TextIcon from './elements/TextIcon';

const ProjectCard = ({ image, title, date, description, skills, buttons }: ProjetProps) => {
  return (
    <div className='flex flex-col lg:flex-row p-3 shadow-lg border border-gray-200 rounded-lg hover:scale-102 transition-transform duration-200'>
      <img src={image} alt={title} draggable={false} className='rounded-md aspect-3/2 object-cover w-72' />

      <div className='flex flex-col lg:flex-row space-y-5'>
        <div className='px-4 py-1'>
          <h3 className='font-bold text-lg'>{title}</h3>
          <TextIcon
            text={date}
            className='font-medium uppercase text-xs text-blue-500'
            icon={Calendar}
            iconClass='text-blue-500 size-4'
            pos='left'
          />
          <p className='font-light text-sm mt-4'>{description}</p>
          <div className='space-x-3 space-y-3 mt-5'>
            {skills.map((item, i) => (
              <div key={i} className='inline-block p-3 shadow-lg border border-gray-200 rounded-lg text-xs font-medium'>{item}</div>
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          {buttons?.url && <Button className='w-40 !justify-between text-[0.85rem] leading-4' iconRight={<SquareArrowOutUpRight />} href={buttons.url} target='_blank'>Voir le projet</Button>}
          {buttons?.preview && <Button className='w-40 !justify-between text-[0.85rem] leading-4' to={buttons.preview} iconRight={<Eye />}>Prévisualiser</Button>}
          {buttons?.images && <Button className='w-40 !justify-between text-[0.85rem] leading-4' iconRight={<Image />}>Aperçu</Button>}
          {buttons?.github && <Button className='w-40 !justify-between text-[0.85rem] leading-4' iconRight={<Image />} href={buttons.github} target='_blank'>GitHub</Button>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

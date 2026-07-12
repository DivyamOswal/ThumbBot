import React from 'react'
import { thumbnailStyles, type ThumbnailStyle } from '../assets/assets';
import { ChevronDownIcon, CpuIcon, ImageIcon, PenToolIcon, SparkleIcon, SquareIcon, CheckIcon } from 'lucide-react';

const StyleSelector = ({value, onChange, isOpen, setIsOpen}: {value: ThumbnailStyle; onChange: (style: ThumbnailStyle)=> void; isOpen: boolean; setIsOpen: (open: boolean)=> void}) => {

  const styleDescription: Record<ThumbnailStyle, string> = {
    "Bold & Graphic": "High Contrast, bold typography, striking visuals",
    "Minimalist": "Clean simple, lots of white space",
    "Photorealistic": "Photo-based, natural looking",
    "Illustrated": "Hand-drawn, artistic, creative",
    "Tech/Futuristic": "Modern, sleek, tech-inspired",
  }

  const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
    "Bold & Graphic": <SparkleIcon className='h-4 w-4'/>,
    "Minimalist": <SquareIcon className='h-4 w-4'/>,
    "Photorealistic": <ImageIcon className='h-4 w-4'/>,
    "Illustrated": <PenToolIcon className='h-4 w-4'/>,
    "Tech/Futuristic": <CpuIcon className='h-4 w-4'/>,
  }

  return (
    <div className='relative space-y-3'>
      <label className='block text-sm font-medium text-slate-200'>Thumbnail Style</label>
      <button type='button' onClick={()=> setIsOpen(!isOpen)} className='flex w-full items-center justify-between rounded-md border px-4 py-3 text-left transition bg-black/40 border-slate-700 text-slate-200 hover:border-slate-600'>
        <div className='space-y-1'>
          <div className='flex items-center gap-2 font-medium'>
            {styleIcons[value]}
            <span>{value}</span>
          </div>
          <p className='text-xs text-slate-400'>{styleDescription[value]}</p>
        </div>
        <ChevronDownIcon className={['h-5 w-5 text-slate-400 transition-transform', isOpen && 'rotate-180'].join(' ')}/>
      </button>
      {isOpen && (
        <div className='absolute top-full z-50 mt-1 w-full rounded-md border border-slate-700 bg-slate-950 backdrop-blur-3xl shadow-lg'>
        {thumbnailStyles.map((style)=>{
          const selected = value === style
          return (
          <button key={style} type='button' onClick={()=> {onChange(style); setIsOpen(false)}} className={`flex w-full items-start gap-3 px-4 py-3 text-left transition ${selected ? 'bg-blue-600/15' : 'hover:bg-white/5'}`}>
            <div className={`mt-0.5 ${selected ? 'text-blue-400' : 'text-slate-400'}`}>{styleIcons[style]}</div>
            <div>
              <p className={`font-medium ${selected ? 'text-blue-400' : 'text-slate-200'}`}>{style}</p>
              <p className='text-xs text-slate-400'>{styleDescription[style]}</p>
            </div>
            {selected && <CheckIcon className='h-4 w-4 text-blue-400 shrink-0 mt-0.5 ml-auto'/>}
          </button>
          )
        })}
        </div>
      )}
    </div>
  )
}

export default StyleSelector
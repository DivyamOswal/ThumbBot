import React from 'react'
import { colorSchemes } from '../assets/assets';

const ColorSchemeSelector = ({value, onchange}: {value: string; onchange: (color: string)=> void}) => {
  return (
    <div className='space-y-3'>
        <label className='block text-sm font-medium text-slate-200'>
            Color Schema
        </label>
        <div className='grid grid-cols-6 gap-3'>
            {colorSchemes.map((scheme)=>(
                <button key={scheme.id} onClick={()=> onchange(scheme.id)} className={`relative rounded-lg transition-all ${value === scheme.id ? 'ring-2 ring-blue-500' : ''}`} title={scheme.name}>
                    <div className='flex h-10 rounded-lg overflow-hidden'>
                        {scheme.colors.map((color, i)=>(
                            <div key={i} className='flex-1' style={{backgroundColor: color}}></div>
                        ))}
                    </div>
                </button>
            ))}
        </div>
        <p className='text-xs text-slate-400'>Selected: {colorSchemes.find((s)=> s.id === value)?.name}</p>
    </div>
  )
}

export default ColorSchemeSelector
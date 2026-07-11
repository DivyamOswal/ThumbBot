import React from 'react'
import { aspectRatios, type AspectRatio } from '../assets/assets'
import { RectangleHorizontal, RectangleVertical, Square } from 'lucide-react';

const AspectRatioSelector = ({ value, onChange }: { value: AspectRatio; onChange: (ratio: AspectRatio) => void }) => {
    const iconMap = {
        '16-9': <RectangleHorizontal className='size-5' />,
        '1:1': <Square className='size-5' />,
        '9:16': <RectangleVertical className='size-5' />,
    } as Record<AspectRatio, React.ReactNode>

    return (
        <div className='space-y-3'>
            <label className='block text-sm font-medium text-slate-200'>Aspect Ratio</label>
            <div className='flex flex-wrap gap-2'>
                {aspectRatios.map((ratio) => {
                    const selected = value === ratio;
                    return (
                        <button
                            key={ratio}
                            type='button'
                            onClick={() => onChange(ratio)}
                            className={`flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm transition-colors ${
                                selected
                                    ? "border-blue-600 bg-blue-600/15 text-blue-400"
                                    : "border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-white/5"
                            }`}
                        >
                            {iconMap[ratio]}
                            <span className='tracking-widest'>{ratio}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default AspectRatioSelector
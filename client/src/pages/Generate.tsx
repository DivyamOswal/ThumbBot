import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { colorSchemes, type AspectRatio, type IThumbnail, type ThumbnailStyle } from '../assets/assets'
import AspectRatioSelector from '../components/AspectRationSelector'
import StyleSelector from '../components/StyleSelector'
import ColorSchemeSelector from '../components/ColorSchemeSelector'
import { ImageIcon } from 'lucide-react'


const Generate = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [additionalDetails, setAdditionalDetails] = useState('')
    const [thumbnail, setThumbnail] = useState<IThumbnail| null>(null)
    const [loading, setLoading] = useState(false)

    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9')
    const [colorSchemeId, setColorSchemeId] = useState<string>(colorSchemes[0].id)
    const [style, setStyle] = useState<ThumbnailStyle>('Bold & Graphic')
    const [styleDropdownOpen, setStyleDropdownOpen] = useState(false)

    const handleGenerate = () => {
        setLoading(true)
        // TODO: wire up actual generation API call
    }

  return (
    <div className='pt-24 min-h-screen'>
        <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-8 lg:pb-8'>
            <div className='grid lg:grid-cols-[400px_1fr] gap-8'>
                {/* Left panel */}
                <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
                    <div className='p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6'>
                    <div>
                       <h2 className='text-2xl font-bold text-white mb-1'>Create Your Thumbnail</h2>
                       <p className='text-sm text-slate-400'>Describe your vision and let AI bring it to life</p> 
                    </div>
                    <div className='space-y-5'>
                        {/* Title Input */}
                        <label className='block text-sm font-medium text-slate-200'>Title or Topic</label>
                         <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} maxLength={100} placeholder='e.g./ 10 Tips for Better Sleep' className='w-full px-4 py-3 rounded-lg border border-slate-700 bg-black/40 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                         <div className='flex justify-end'>
                            <span className='text-xs text-slate-400'>{title.length}/100</span>
                         </div>
                    </div>
                   {/* AspectRatioSelector */}
                   <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio}/>
                   {/* StyleSelector */}
                   <StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen}/>
                   {/* ColorSchemeSelector */}
                   <ColorSchemeSelector value={colorSchemeId} onchange={setColorSchemeId}/>
                   {/* Details */}
                   <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-200'>
                        Additional Prompts <span className='text-slate-400 text-xs'>(optional)</span>
                    </label>
                    <textarea value={additionalDetails} onChange={(e)=> setAdditionalDetails(e.target.value)} rows={3} placeholder='Add any specific elements, mood, or style preferences...' className='w-full px-4 py-3 rounded-lg border border-slate-700 bg-black/40 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'></textarea>
                   </div>
                    {/* Button */}
                    {!id && (
                        <button onClick={handleGenerate} disabled={loading} className='text-[15px] w-full py-3.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors'>
                            {loading ? "Generating..." : 'Generate Thumbnail'}
                        </button>
                    )}
                    </div>
                </div>
                {/* Right panel */}
                <div className='p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex items-center justify-center min-h-96'>
                    {thumbnail ? (
                        <img src={thumbnail.imageUrl} alt={thumbnail.title} className='max-w-full max-h-full rounded-lg' />
                    ) : (
                        <div className='flex flex-col items-center gap-3 text-slate-500'>
                            <ImageIcon className='size-10' />
                            <p className='text-sm'>Your generated thumbnail will appear here</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Generate
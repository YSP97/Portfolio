import { SlideBlock } from '@/types/project';

interface SlideBlockRendererProps {
  block: SlideBlock;
}

export default function SlideBlockRenderer({ block }: SlideBlockRendererProps) {
  switch (block.type) {
    case 'H2':
      return <h2 className="text-lg font-bold mt-4 mb-2">{block.text}</h2>;

    case 'H3':
      return <h3 className="text-md font-semibold text-gray-800 mt-3 mb-1">{block.text}</h3>;

    case 'paragraph':
      return <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-3">{block.text}</p>;

    case 'image':
      return (
        <div className="my-4 flex flex-col items-center">
          <div className="w-full max-h-[300px] overflow-hidden rounded bg-zinc-800 flex items-center justify-center">
            {/* 실제 이미지가 없을 때 예시 플레이스홀더 처리 */}
            {block.src === '/' ? (
              <div className="p-8 text-zinc-500 text-sm text-center">
                📷 {block.caption || '이미지 영역 (와이어프레임)'}
              </div>
            ) : (
              <img 
                src={block.src} 
                alt={block.caption || 'slide image'} 
                className={`w-full h-full ${block.size === 'cover' ? 'object-cover' : 'object-contain'}`}
              />
            )}
          </div>
          {block.caption && <span className="text-xs text-zinc-500 mt-1.5">{block.caption}</span>}
        </div>
      );

    case 'paragraphBox':
      const isObject = typeof block.paragraph === 'object';
      return (
        <div className="border-2 border-gray-200 rounded-lg p-4 my-3 flex gap-3 items-start text-gray-600">
          {block.icon &&  <span className="text-xl">{block.icon}</span>}
          <div>
            {isObject ? (
              <>
                <h4 className="font-semibold text-sm mb-1">{(block.paragraph as any).title}</h4>
                <p className="text-xs leading-relaxed">{(block.paragraph as any).paragraph}</p>
              </>
            ) : (
              <p className="text-xs leading-relaxed">{block.paragraph as string}</p>
            )}
          </div>
        </div>
      );

    case 'flowChart':
      return (
        <div>
          {block.title && <h4 className="text-sm font-semibold text-gray-600 my-5">📍 {block.title}</h4>}
          <div className="flex flex-col md:flex-row md:items-center gap-1 pb-2">
            {block.items.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 flex-1 min-w-[140px]">
                <div className={`p-3 rounded border-2 border-gray-200 flex-1 ${
                  item.highlight 
                    ? 'bg-blue-600/25' 
                    : ''
                }`}>
                  <div className="text-sm font-bold">{item.label}</div>
                  {item.sublabel && <div className="text-[11px] mt-0.5">{item.sublabel}</div>}
                  {item.note && <div className="text-[10px] text-amber-400 mt-1 font-mono">{item.note}</div>}
                  {item.caption && <div className="text-[10px] text-zinc-500 mt-1">{item.caption}</div>}
                </div>
                {idx < block.items.length - 1 && (
                  <div className="text-center text-zinc-600 font-bold max-md:rotate-90 py-1 md:px-1">▶</div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 'stacks':
      return (
        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3 my-3">
          {block.items.map((item, idx) => (
            <div key={idx} className="p-3 flex gap-3 max-sm:max-w-[200px]">
              {/* {item.icon && 
              <svg className="w-6 h-6 fill-current text-white">
                <use href="/sprite.svg#ReadMore" />
              </svg>
              } */}
              <div>
                <span className=" font-bold flex justify-center">{item.name}</span>
                <p className="text-xs text-zinc-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case 'badge':
      return (
        <div className="inline-flex flex-col bg-zinc-800 border border-zinc-700 rounded px-2.5 py-1 m-1">
          <span className="text-xs font-medium text-zinc-200">{block.text}</span>
          {block.description && <span className="text-[10px] text-zinc-400">{block.description}</span>}
        </div>
      );

    default:
      return null;
  }
}
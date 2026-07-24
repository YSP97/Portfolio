import { SlideBlock } from '@/types/project';

type ParagraphType = Extract<SlideBlock, { type: 'paragraphBox' }>;

interface SlideParagraphProps {
  block: ParagraphType;
}

export default function SlideParagraph({ block }: SlideParagraphProps) {
  const isObject = typeof block.paragraph === 'object' && block.paragraph !== null;
  const paragraphObj = isObject ? (block.paragraph as { title?: string; paragraph: string }) : null;

  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 my-3 flex gap-3 items-start text-gray-600">
      {block.icon && <span className="text-xl">{block.icon}</span>}
      <div>
        {paragraphObj ? (
          <>
            {paragraphObj.title && (
              <h4 className="font-semibold text-[16px] mb-1">
                {paragraphObj.title}
              </h4>
            )}
            <p className="text-[14px] leading-relaxed whitespace-pre-line">
              {paragraphObj.paragraph}
            </p>
          </>
        ) : (
          <p className="text-xs leading-relaxed whitespace-pre-line">
            {block.paragraph as string}
          </p>
        )}
      </div>
    </div>
  );
}
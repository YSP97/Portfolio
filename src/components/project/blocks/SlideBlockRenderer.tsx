import { SlideBlock } from '@/types/project';
import {
  SlideImage,
  SlideParagraph,
  SlideFlowChart,
  SlideStacks,
  SlideBadge,
  SlideCircleSummary,
} from '@/components';

interface SlideBlockRendererProps {
  block: SlideBlock;
}

export default function SlideBlockRenderer({ block }: SlideBlockRendererProps) {
  switch (block.type) {
    case 'H2':
      return <h2 className="text-lg font-bold mt-4 mb-2">{block.text}</h2>;

    case 'H3':
      return (
        <h3 className="text-md font-semibold text-gray-800 mt-3 mb-1">
          {block.text}
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-3">
          {block.text}
        </p>
      );

    case 'image':
      return <SlideImage block={block} />;

    case 'paragraphBox':
      return <SlideParagraph block={block} />;

    case 'flowChart':
      return <SlideFlowChart block={block} />;

    case 'stacks':
      return <SlideStacks block={block} />;

    case 'badge':
      return <SlideBadge block={block} />;

    case 'circleSummary':
      return <SlideCircleSummary block={block} />;

    default:
      return null;
  }
}

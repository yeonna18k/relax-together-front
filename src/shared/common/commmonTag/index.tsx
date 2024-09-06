import { Badge } from 'lucide-react';
import React from 'react';

interface TagProps {
  label: string;
  type?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Tag: React.FC<TagProps> = ({
  label,
  type = 'default',
  size = 'medium',
}) => {
  let tagClass = '';

  switch (type) {
    case 'primary':
      tagClass += 'bg-blue-500 text-white ';
      break;
    case 'secondary':
      tagClass += 'bg-gray-500 text-white ';
      break;
    default:
      tagClass += 'bg-gray-200 text-black ';
      break;
  }

  switch (size) {
    case 'small':
      tagClass += 'px-2 py-1 text-sm ';
      break;
    case 'large':
      tagClass += 'px-4 py-2 text-lg ';
      break;
    default:
      tagClass += 'px-3 py-1 text-base ';
      break;
  }

  return (
    <Badge className={`rounded ${tagClass}`}>
      {' '}
      {/* ShardCN의 Badge 컴포넌트 사용 */}
      {label}
    </Badge>
  );
};

export default Tag;

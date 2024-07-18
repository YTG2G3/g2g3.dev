import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { GraduationCapIcon } from 'lucide-react';
import Link from 'next/link';

export default function CVLinks() {
  return (
    <div className="flex space-x-5">
      <Link href="https://scholar.google.com/citations?user=npsnbVEAAAAJ">
        <div className="flex space-x-1 items-center">
          <GraduationCapIcon className="w-[20px] h-[20px]" />
          <span className="underline">Taeksoo Kwon</span>
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/taeksoo-kwon/">
        <div className="flex space-x-1 items-center">
          <LinkedInLogoIcon className="w-[20px] h-[20px]" />
          <span className="underline">taeksoo-kwon</span>
        </div>
      </Link>
      <Link href="https://github.com/YTG2G3">
        <div className="flex space-x-1 items-center">
          <GitHubLogoIcon className="w-[20px] h-[20px]" />
          <span className="underline">YTG2G3</span>
        </div>
      </Link>
    </div>
  );
}

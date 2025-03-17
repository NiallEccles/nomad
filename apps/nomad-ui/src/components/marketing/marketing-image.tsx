import marketingImage from '@/assets/marketing.jpg';
import {Button, Link} from "@heroui/react";


export const MarketingImage = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <div
    className="h-full min-h-svh flex-1 bg-cover bg-top hidden md:block"
    style={{ backgroundImage: 'url(' + marketingImage.src + ')' }}>
    <div className='absolute right-3 bottom-3'>
      <Button as={Link} size={'sm'} isExternal showAnchorIcon href="https://unsplash.com/@seefromthesky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Photo by Ishan @seefromthesky
      </Button>
    </div>
  </div>
);

// Photo by <a href="https://unsplash.com/@seefromthesky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ishan @seefromthesky</a> on <a href="https://unsplash.com/photos/aerial-view-of-two-blue-boats-LNdpi8Yzi34?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


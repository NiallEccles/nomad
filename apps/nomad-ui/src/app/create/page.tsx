import { BasicInfo } from '@/components/basic-info/basic-info';
import { MarketingImage } from '@/components/marketing/marketing-image';
import { BackButton } from '@/components/back-button/back-button';


export default function Index() {
  return (
      <div className='flex flex-row min-h-screen relative'>
        <div className='flex flex-1 flex-col p-3 items-center justify-center'>
          <div className='absolute top-3 left-3'>
            <BackButton/>
          </div>
          <BasicInfo/>
        </div>
        <MarketingImage/>
      </div>
  );
}

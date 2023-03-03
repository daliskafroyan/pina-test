import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import { Chip } from "@/components/common/chips/Chip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs/FaintTabs";
import Typography from "@/components/common/typography/Typography";

import BlueChipLogo from '~/svg/BlueChip.svg'
import EnergyLogo from '~/svg/Energy.svg'
import MineLogo from '~/svg/Mining.svg'
import TLKMLogo from '~/svg/TLKM.svg'

export const useIsServerSide = () => {
  const [isServerSide, setIsServerSide] = useState(true);

  useEffect(() => {
    setIsServerSide(false);
  }, [setIsServerSide]);

  return isServerSide;
};

export function GraphSection({ chartData, isLoading }: { chartData: Array<{ name: string, pv: number }>, isLoading: boolean }) {
  const isServerSide = useIsServerSide();
  if (isServerSide) return null;

  return (<div className='flex flex-col  w-full  bg-white rounded-lg p-5'>
    <div className="flex justify-between">
      <div className='flex items-center'>
        <TLKMLogo className="h-[32px] w-[32px]" />

        <div className='flex flex-col ml-4'>
          <Typography variant='t1'>BBCA</Typography>
          <Typography variant='st2'>Bank Central Asia</Typography>
        </div>
      </div>
      <div className='flex flex-col'>
        <Typography variant='t1' className='ml-auto'>7.726,19</Typography>
        <Typography variant='t5' className='text-green-500'>+48,83 (+0.68%)</Typography>
      </div>
    </div>
    <div className="inline-flex gap-2 mt-2">
      <Chip icon={<EnergyLogo className="h-4 w-4" />} title="Energi" />
      <Chip icon={<MineLogo className="h-4 w-4" />} title="Batu Bara" />
      <Chip icon={<BlueChipLogo className="h-4 w-4" />} title="Blue Chip" />
    </div>
    <Tabs defaultValue='ytd' className='mt-4'>
      <TabsList>
        <TabsTrigger value='1d'>
          1D
        </TabsTrigger>
        <TabsTrigger value='1m'>
          1M
        </TabsTrigger>
        <TabsTrigger value='6m'>
          6M
        </TabsTrigger>
        <TabsTrigger value='ytd'>
          YTD
        </TabsTrigger>
        <TabsTrigger value='1y'>
          1Y
        </TabsTrigger>
        <TabsTrigger value='5y'>
          5Y
        </TabsTrigger>
        <TabsTrigger value='all'>
          All
        </TabsTrigger>
      </TabsList>
      <TabsContent value='1d'>
        <div className='p-5'>
          <div className='bg-primary-100'>
            Placeholder 1
          </div>
        </div>
      </TabsContent>
      <TabsContent value='1m'>
        <div className='p-5'>
          <div className='bg-primary-100'>
            Placeholder 2
          </div>
        </div>
      </TabsContent>
      <TabsContent value='6m'>
        <div className='p-5'>
          <div className='bg-primary-100'>
            Placeholder 3
          </div>
        </div>
      </TabsContent>
      <TabsContent value='ytd'>
        <AreaChart width={730} height={250} id="areaChart" data={chartData}
          margin={{ top: 10, right: 0, left: 20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#7BCC29" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#7BCC29" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis orientation='right' axisLine={false} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="linear" dataKey="pv" stroke="#7BCC29" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </TabsContent>
      <TabsContent value='1y'>
        <div className='p-5'>
          <div className='bg-primary-100'>
            Placeholder 4
          </div>
        </div>
      </TabsContent>
      <TabsContent value='5y'>
        <div className='p-5'>
          <div className='bg-primary-100'>
            Placeholder 5
          </div>
        </div>
      </TabsContent>
      <TabsContent value='all'>
        <div className='p-5'>
          <div className='bg-primary-100'>
            Placeholder 6
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>)
}
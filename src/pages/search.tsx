import * as React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { GraphSection } from '@/components/pages/search/GraphSection';
import { StatisticSection } from '@/components/pages/search/StatisticSection';
import { TransactionSection } from '@/components/pages/search/TransactionSection';


const data =
{
  profile: [
    { name: 'Market Cap', value: '86.682 B' },
    { name: 'P/E (Annualized)', value: '6.7' },
    { name: 'PBV', value: '1.51' },
    { name: 'Dividend Yield', value: '8.12%' },
    { name: '52W High', value: '3.270' },
    { name: '52W Low', value: '1.160' },
  ],
  fundamental: [
    { name: 'Cash Equivalent', value: '25.859 B' },
    { name: 'Total Assets', value: '108.326 B' },
    { name: 'Total Liabilitas', value: '44.670 B' },
    { name: 'Total Equity', value: '59.065 B' },
  ],
  earning: [
    { name: 'Earning Per Share (Annualized)', value: '416.70' },
    { name: 'Book Value Per Share', value: '1846.59' },
  ],
  profitability: [
    { name: 'Gross Profit Margin', value: '56.2%' },
    { name: 'Operating Profit Margin', value: '53.8%' },
    { name: 'Net Profit Margin', value: '36.1%' },
    { name: 'ROA', value: '12.3%' },
    { name: 'ROE', value: '22.6%' },
  ],
}

const chartData = [
  {
    "name": "Jun",
    "pv": 2400,
  },
  {
    "name": "Jul",
    "pv": 1398,
  },
  {
    "name": "Aug",
    "pv": 9800,
  },
  {
    "name": "Sept",
    "pv": 3908,
  },
  {
    "name": "Oct",
    "pv": 4800,
  },
  {
    "name": "Nov",
    "pv": 3800,
  },
  {
    "name": "Dec",
    "pv": 4300,
  }
]


export default function SearchPage() {
  return (
    <>
      <DashboardLayout>
        <div className='flex gap-5 items-start'>
          <div className="flex flex-col w-full max-w-[780px] gap-5">
            <GraphSection chartData={chartData} isLoading={false} />
            <StatisticSection data={data} isLoading={false} />
          </div>
          <TransactionSection />
        </div>
      </DashboardLayout>
    </>
  );
}

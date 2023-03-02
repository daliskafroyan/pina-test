import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs/Tabs"
import Typography from "@/components/typography/Typography"

export interface StatisticSectionProps {
  data: {
    profile: Profile[]
    fundamental: Fundamental[]
    earning: Earning[]
    profitability: Profitability[]
  },
  isLoading: boolean
}

export interface Profile {
  name: string
  value: string
}

export interface Fundamental {
  name: string
  value: string
}

export interface Earning {
  name: string
  value: string
}

export interface Profitability {
  name: string
  value: string
}
export function StatisticSection({ data, isLoading }: StatisticSectionProps) {
  return (<div className='flex flex-col w-full  bg-white rounded-lg p-5'>
    <Tabs defaultValue="statistic" >
      <TabsList>
        <TabsTrigger value="statistic">Statistik</TabsTrigger>
        <TabsTrigger value="action">Corp Action</TabsTrigger>
        <TabsTrigger value="news">Berita</TabsTrigger>
        <TabsTrigger value="financial">Laporan Keuangan</TabsTrigger>
        <TabsTrigger value="about">Tentang Perusahaan</TabsTrigger>
      </TabsList>
      <TabsContent value="statistic">
        <div className="flex gap-6">
          <div className='flex flex-col gap-5 w-full'>
            <div className="flex flex-col gap-1 ">
              <Typography variant='t1' className="mb-1">
                Profile
              </Typography>
              {data.profile.map(individualData => {
                return (<div className="flex justify-between" key={individualData.name}>
                  <Typography variant='st1'>{individualData.name}</Typography>
                  <Typography variant='t3'>{individualData.value}</Typography>
                </div>)
              })}
            </div>

            <div className="flex flex-col gap-1 ">
              <Typography variant='t1' className="mb-1">
                Fundamental
              </Typography>
              {data.fundamental.map(individualData => {
                return (<div className="flex justify-between" key={individualData.name}>
                  <Typography variant='st1'>{individualData.name}</Typography>
                  <Typography variant='t3'>{individualData.value}</Typography>
                </div>)
              })}
            </div>
          </div>

          <div className='flex flex-col gap-5 w-full'>
            <div className="flex flex-col gap-1 ">
              <Typography variant='t1' className="mb-1">
                Earning
              </Typography>
              {data.earning.map(individualData => {
                return (<div className="flex justify-between" key={individualData.name}>
                  <Typography variant='st1'>{individualData.name}</Typography>
                  <Typography variant='t3'>{individualData.value}</Typography>
                </div>)
              })}
            </div>

            <div className="flex flex-col gap-1 ">
              <Typography variant='t1' className="mb-1">
                Profitability
              </Typography>
              {data.profitability.map(individualData => {
                return (<div className="flex justify-between" key={individualData.name}>
                  <Typography variant='st1'>{individualData.name}</Typography>
                  <Typography variant='t3'>{individualData.value}</Typography>
                </div>)
              })}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>)
}
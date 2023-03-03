import Image from "next/image";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HiMinus, HiPlus } from "react-icons/hi";

import Button from "@/components/common/buttons/Button";
import IconButton from "@/components/common/buttons/IconButton";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/common/dialog/Dialog";
import Input from "@/components/common/forms/Input";
import { Separator } from "@/components/common/separator/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs/TransactionTabs";
import Typography from "@/components/common/typography/Typography";

import Pineapple from '~/svg/Pineapple.png'

const data = {
  stock: 'ADRO',
  action: 'Buy',
  price: '2500',
  lot: '1',
  totalPrice: '20000',
  totalAmount: '158000'
}

export function TransactionSection() {
  const [lot, setLot] = useState<number>(0)
  const [price, setPrice] = useState<number>(12000)

  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========
  return (
    <div className='flex flex-col w-[380px]  bg-white rounded-lg p-5'>
      <Tabs defaultValue='buy'>
        <TabsList>
          <TabsTrigger value='buy'>
            Beli
          </TabsTrigger>
          <TabsTrigger value='sell'>
            Jual
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <FormProvider {...methods}>
            <form onSubmit={(res) => console.log(res)}>
              <Typography variant="st3">Dana yang tersedia</Typography>
              <Typography variant="t1">IDR 1.250.000</Typography>
              <div className="flex flex-col gap-1 py-2">
                <div>
                  <Typography variant="st3">Jumlah Lot</Typography>
                  <Input inputClassName="h-12 text-center" label={null} value={lot} id='lotInput' rightNode={<IconButton onClick={() => setLot(lot + 1)} variant="outline" icon={HiPlus} />} leftNode={<IconButton onClick={() => setLot(lot + 1)} variant="outline" icon={HiMinus} />} />
                </div>
                <div>
                  <Typography variant="st3">Harga Per Saham</Typography>
                  <Input inputClassName="h-12 text-center" label={null} value={price} id='priceInput' rightNode={<IconButton onClick={() => setPrice(price * 2)} variant="outline" icon={HiPlus} />} leftNode={<IconButton onClick={() => setPrice(price / 2)} variant="outline" icon={HiMinus} />} />
                </div>
              </div>
              <Separator className="mt-[10px]" />
              <div className="flex justify-between py-1" >
                <Typography variant="st2" > Total Pembelian </Typography>
                <Typography variant="t1" > {lot * price} </Typography>
              </div>
              <div className="flex flex-col gap-[6px]">
                <Separator />
                <Separator />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='w-full mt-[18px]'> Beli </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <Image className="w-[144px] absolute left-[116px] bottom-[367px]" alt="pineapple image" src={Pineapple} />
                    <Typography variant="t1" className="text-center">Mohon cek kembali order kamu</Typography>
                    <Typography variant="st1" className="text-center">No Order: PI213123123DHEX</Typography>
                    <Separator />
                    <DialogDescription className='flex flex-col gap-2'>
                      <div className="flex justify-between">
                        <Typography variant='st1'>Stock</Typography>
                        <Typography variant='t3'>{data.stock}</Typography>
                      </div>
                      <div className="flex justify-between">
                        <Typography variant='st1'>Action</Typography>
                        <Typography variant='t3' className="text-primary-200">{data.action}</Typography>
                      </div>
                      <div className="flex justify-between">
                        <Typography variant='st1'>Harga</Typography>
                        <Typography variant='t3'>{data.price}</Typography>
                      </div>
                      <div className="flex justify-between">
                        <Typography variant='st1'>Lot</Typography>
                        <Typography variant='t3'>{data.lot}</Typography>
                      </div>
                      <div className="flex justify-between">
                        <Typography variant='st1'>Biaya</Typography>
                        <Typography variant='t3'>{data.totalPrice}</Typography>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <Typography variant='st1'>Total Amount</Typography>
                        <Typography variant='t3'>{data.totalAmount}</Typography>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <Separator />
                        <Separator />
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="submit" className="w-full">Konfirmasi</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </form>
          </FormProvider>
        </TabsContent>
        <TabsContent value="sell">
          <Button className='w-full'> Jual </Button>
        </TabsContent>
      </Tabs>
    </div>)
}
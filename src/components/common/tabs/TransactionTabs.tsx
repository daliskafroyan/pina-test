import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import clsxm from '@/lib/clsxm';

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={clsxm(
      "shrink-0 flex",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={clsxm(
      "border-b-2 border-grey-200 data-[state=active]:border-b-4 data-[state=active]:border-primary-200 bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md  data-[state=active]:text-primary-200 data-[state=active]:focus:relative outline-none cursor-default",
      className
    )}
    {...props}
    ref={ref}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={clsxm(
      "mt-5",
      className
    )}
    {...props}
    ref={ref}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
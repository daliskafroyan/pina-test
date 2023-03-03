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
      "flex items-center justify-center gap-2",
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
      "inline-flex flex-grow whitespace-nowrap bg-grey-100 items-center justify-center rounded-[10px] px-3 py-1.5  text-sm font-normal text-dark transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary-100 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm ",
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
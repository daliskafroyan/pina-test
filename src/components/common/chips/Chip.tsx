import Typography from "@/components/common/typography/Typography";

interface ChipProps {
  icon: React.ReactNode
  title: string
}

export function Chip({ icon, title }: ChipProps) {
  return (
    <div className="px-2 py-1 rounded-full border border-[#E1E1E1] flex items-center">
      {icon}
      <Typography variant="t2" className="ml-1">
        {title}
      </Typography>
    </div>
  )
}
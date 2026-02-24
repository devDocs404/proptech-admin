import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
}

const StatsCard = ({ title, value, icon: Icon }: StatsCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-card-foreground">
            {value.toLocaleString()}
          </p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

import {
  FileSpreadsheet,
  Briefcase,
  Receipt,
  BookOpen,
  ShieldCheck,
  MessageSquare,
  Users,
  TrendingUp,
  Check,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  FileText,
  Calculator,
  Building2,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  "file-spreadsheet": FileSpreadsheet,
  briefcase: Briefcase,
  receipt: Receipt,
  "book-open": BookOpen,
  "shield-check": ShieldCheck,
  "message-square": MessageSquare,
  users: Users,
  "trending-up": TrendingUp,
  check: Check,
  "external-link": ExternalLink,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  "file-text": FileText,
  calculator: Calculator,
  "building-2": Building2,
} as const;

export type IconName = keyof typeof ICONS;

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = ICONS[name as IconName];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}

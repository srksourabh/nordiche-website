import {
  ArrowRight,
  Award,
  BatteryCharging,
  Bolt,
  Building2,
  Car,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cpu,
  Download,
  Factory,
  FileText,
  Layers3,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  RadioTower,
  RefreshCw,
  Settings2,
  ShieldCheck,
  SunMedium,
  Thermometer,
  type LucideIcon,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  certificate: Award,
  checkCircle: CheckCircle2,
  factory: Factory,
  leaf: Leaf,
  battery: BatteryCharging,
  bolt: Bolt,
  settings: Settings2,
  zap: Zap,
  refreshCw: RefreshCw,
  cpu: Cpu,
  thermometer: Thermometer,
  car: Car,
  sunMedium: SunMedium,
  radioTower: RadioTower,
  building: Building2,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  x: X,
  chevronRight: ChevronRight,
  file: FileText,
  download: Download,
  menu: Menu,
  arrowRight: ArrowRight,
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock3,
  quote: Quote,
  layers: Layers3,
  workflow: Workflow,
  check: Check,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Zap;
}

export function toWhatsAppHref(phone: string) {
  return `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
}

"use client"

import {
  Menu as LucideMenu,
  Search as LucideSearch,
  Settings as LucideSettings,
  Plus as LucidePlus,
  Minus as LucideMinus,
  Check as LucideCheck,
  X as LucideX,
  ChevronDown as LucideChevronDown,
  Home as LucideHome,
  Briefcase as LucideBriefcase,
  UploadCloud as LucideUpload,
  Trash2 as LucideTrash,
  Share2 as LucideShare,
  Info as LucideInfo,
  Copy as LucideCopy,
  MoreHorizontal as LucideMore,
  ArrowLeft as LucideArrowLeft,
  ArrowRight as LucideArrowRight,
  Sun as LucideSun,
  Folder as LucideFolder,
  LayoutGrid as LucideGrid,
  Mail as LucideMail,
  Bell as LucideBell,
  Lock as LucideLock,
  CreditCard as LucideCard,
  HelpCircle as LucideHelp,
} from "lucide-react"
import {
  IconMenu2,
  IconSearch,
  IconSettings,
  IconPlus,
  IconMinus,
  IconCheck,
  IconX,
  IconChevronDown,
  IconHome,
  IconBriefcase,
  IconUpload,
  IconTrash,
  IconShare,
  IconInfoCircle,
  IconCopy,
  IconDots,
  IconArrowLeft,
  IconArrowRight,
  IconSun,
  IconFolder,
  IconLayoutGrid,
  IconMail,
  IconBell,
  IconLock,
  IconCreditCard,
  IconHelpCircle,
} from "@tabler/icons-react"
import {
  List,
  MagnifyingGlass,
  Gear,
  Plus as PhPlus,
  Minus as PhMinus,
  Check as PhCheck,
  X as PhX,
  CaretDown,
  House,
  Briefcase as PhBriefcase,
  UploadSimple,
  Trash as PhTrash,
  ShareNetwork,
  Info as PhInfo,
  Copy as PhCopy,
  DotsThree,
  ArrowLeft as PhArrowLeft,
  ArrowRight as PhArrowRight,
  Sun as PhSun,
  Folder as PhFolder,
  SquaresFour,
  Envelope,
  Bell as PhBell,
  Lock as PhLock,
  CreditCard as PhCard,
  Question,
} from "@phosphor-icons/react"
import {
  RiMenuLine,
  RiSearchLine,
  RiSettings3Line,
  RiAddLine,
  RiSubtractLine,
  RiCheckLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiHomeLine,
  RiBriefcaseLine,
  RiUploadLine,
  RiDeleteBinLine,
  RiShareLine,
  RiInformationLine,
  RiFileCopyLine,
  RiMoreLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSunLine,
  RiFolderLine,
  RiLayoutGridLine,
  RiMailLine,
  RiNotificationLine,
  RiLockLine,
  RiBankCardLine,
  RiQuestionLine,
} from "@remixicon/react"
import {
  Menu01Icon,
  Search01Icon,
  Settings01Icon,
  PlusSignIcon,
  MinusSignIcon,
  Tick01Icon,
  Cancel01Icon,
  ArrowDown01Icon,
  Home01Icon,
  Briefcase01Icon,
  Upload01Icon,
  Delete02Icon,
  Share01Icon,
  InformationCircleIcon,
  Copy01Icon,
  MoreHorizontalIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Sun01Icon,
  Folder01Icon,
  GridViewIcon,
  Mail01Icon,
  Notification01Icon,
  SquareLock01Icon,
  CreditCardIcon,
  HelpCircleIcon,
} from "hugeicons-react"
import { iconLibraries } from "@/lib/theme-presets"

export type IconLibrary = (typeof iconLibraries)[number]

export type IconName =
  | "menu"
  | "search"
  | "settings"
  | "plus"
  | "minus"
  | "check"
  | "x"
  | "chevronDown"
  | "home"
  | "briefcase"
  | "upload"
  | "trash"
  | "share"
  | "info"
  | "copy"
  | "more"
  | "arrowLeft"
  | "arrowRight"
  | "sun"
  | "folder"
  | "grid"
  | "mail"
  | "bell"
  | "lock"
  | "card"
  | "help"

type IconComponent = React.ComponentType<{ className?: string }>

const iconMap: Record<IconLibrary, Record<IconName, IconComponent>> = {
  Lucide: {
    menu: LucideMenu,
    search: LucideSearch,
    settings: LucideSettings,
    plus: LucidePlus,
    minus: LucideMinus,
    check: LucideCheck,
    x: LucideX,
    chevronDown: LucideChevronDown,
    home: LucideHome,
    briefcase: LucideBriefcase,
    upload: LucideUpload,
    trash: LucideTrash,
    share: LucideShare,
    info: LucideInfo,
    copy: LucideCopy,
    more: LucideMore,
    arrowLeft: LucideArrowLeft,
    arrowRight: LucideArrowRight,
    sun: LucideSun,
    folder: LucideFolder,
    grid: LucideGrid,
    mail: LucideMail,
    bell: LucideBell,
    lock: LucideLock,
    card: LucideCard,
    help: LucideHelp,
  },
  "Tabler Icons": {
    menu: IconMenu2,
    search: IconSearch,
    settings: IconSettings,
    plus: IconPlus,
    minus: IconMinus,
    check: IconCheck,
    x: IconX,
    chevronDown: IconChevronDown,
    home: IconHome,
    briefcase: IconBriefcase,
    upload: IconUpload,
    trash: IconTrash,
    share: IconShare,
    info: IconInfoCircle,
    copy: IconCopy,
    more: IconDots,
    arrowLeft: IconArrowLeft,
    arrowRight: IconArrowRight,
    sun: IconSun,
    folder: IconFolder,
    grid: IconLayoutGrid,
    mail: IconMail,
    bell: IconBell,
    lock: IconLock,
    card: IconCreditCard,
    help: IconHelpCircle,
  },
  "Phosphor Icons": {
    menu: List,
    search: MagnifyingGlass,
    settings: Gear,
    plus: PhPlus,
    minus: PhMinus,
    check: PhCheck,
    x: PhX,
    chevronDown: CaretDown,
    home: House,
    briefcase: PhBriefcase,
    upload: UploadSimple,
    trash: PhTrash,
    share: ShareNetwork,
    info: PhInfo,
    copy: PhCopy,
    more: DotsThree,
    arrowLeft: PhArrowLeft,
    arrowRight: PhArrowRight,
    sun: PhSun,
    folder: PhFolder,
    grid: SquaresFour,
    mail: Envelope,
    bell: PhBell,
    lock: PhLock,
    card: PhCard,
    help: Question,
  },
  "Remix Icon": {
    menu: RiMenuLine,
    search: RiSearchLine,
    settings: RiSettings3Line,
    plus: RiAddLine,
    minus: RiSubtractLine,
    check: RiCheckLine,
    x: RiCloseLine,
    chevronDown: RiArrowDownSLine,
    home: RiHomeLine,
    briefcase: RiBriefcaseLine,
    upload: RiUploadLine,
    trash: RiDeleteBinLine,
    share: RiShareLine,
    info: RiInformationLine,
    copy: RiFileCopyLine,
    more: RiMoreLine,
    arrowLeft: RiArrowLeftLine,
    arrowRight: RiArrowRightLine,
    sun: RiSunLine,
    folder: RiFolderLine,
    grid: RiLayoutGridLine,
    mail: RiMailLine,
    bell: RiNotificationLine,
    lock: RiLockLine,
    card: RiBankCardLine,
    help: RiQuestionLine,
  },
  Hugeicons: {
    menu: Menu01Icon,
    search: Search01Icon,
    settings: Settings01Icon,
    plus: PlusSignIcon,
    minus: MinusSignIcon,
    check: Tick01Icon,
    x: Cancel01Icon,
    chevronDown: ArrowDown01Icon,
    home: Home01Icon,
    briefcase: Briefcase01Icon,
    upload: Upload01Icon,
    trash: Delete02Icon,
    share: Share01Icon,
    info: InformationCircleIcon,
    copy: Copy01Icon,
    more: MoreHorizontalIcon,
    arrowLeft: ArrowLeft01Icon,
    arrowRight: ArrowRight01Icon,
    sun: Sun01Icon,
    folder: Folder01Icon,
    grid: GridViewIcon,
    mail: Mail01Icon,
    bell: Notification01Icon,
    lock: SquareLock01Icon,
    card: CreditCardIcon,
    help: HelpCircleIcon,
  },
}

export function DynamicIcon({
  name,
  library,
  className,
}: {
  name: IconName
  library: IconLibrary
  className?: string
}) {
  const Icon = iconMap[library][name] ?? iconMap.Lucide[name]
  return <Icon className={className} />
}

export function MenuIcon({ library, className }: { library: IconLibrary; className?: string }) {
  return <DynamicIcon name="menu" library={library} className={className} />
}

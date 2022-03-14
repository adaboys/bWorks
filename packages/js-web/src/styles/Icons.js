import React from 'react';
import { renderToString } from 'react-dom/server';
import get from 'lodash/get';
let cache = {};
// eslint-disable-next-line
export const iconToMap = ({iconElement, color='#3f51b5', viewBox = '0 0 24 24', width = 32, height = width}) => {
  let fixIcon = typeof iconElement === 'function' ? React.createElement(iconElement) : iconElement;
  let key = get(fixIcon, 'props.cache') ? fixIcon.props.cache + color + viewBox + width + height : null;
  if (key && cache[key]) return cache[key];

  let data = renderToString(
    React.cloneElement(fixIcon, { xmlns: 'http://www.w3.org/2000/svg', width, height, viewBox }),
  );
  let style = `<style> svg {fill: ${color};} </style>`;
  // eslint-disable-next-line
  data = 'data:image/svg+xml;utf-8,' + data.replace(/<svg(.*?)>/g, math => {
      return math + style;
    });
  data = encodeURI(data);
  if (key) {
    cache[key] = data;
  }
  return data;
};

export {
  Dashboard as DashboardIcon,
  Map as epochIcon,
  AccountBox as AppUserIcon,
  Group as PermissionIcon,
  SettingsOverscan as DesignSetupIcon,
  Polymer as ParentMenuMatIcon,
  InsertChart as ManageMatIcon,
  ViewList as StatisticMatInStkIcon,
  ViewList as StatisticMatByepochIcon,
  ViewList as StatisticMatByLifeSpanIcon,
  Eject as ExportStockIcon,
  Print as PrintIcon,
  Stop as StopIcon,
  PlayArrow as ResumeIcon,
  Add as AdepochtTypeIcon,
  ViewList as MatDetailTypeIcon,
  Memory as OtherIcon,
  Transform as StatisticButtonIcon,
  InsertChart as ParentMenuStatisticIcon,
  Settings as ConfigurationIcon,
  Web as MonitoringIcon,
  InsertChart as EmploymentIcon,
  InsertChart as TaskboardIcon,
  Error as RestoreMatIcon,
  CompareArrows as ReturnMatForStockIcon,
  FormatColorReset as bworksLossIcon,
  Opacity as QuantityIcon,
  LocationCity as FactoryIcon,
  NetworkCheck as timeIcon,
  BubbleChart as FlowRateIcon,
  Timeline as StatusIcon,
  LowPriority as bworksFlowtimeIcon,
  AccessTime as LogTimeIcon,
  BubbleChart as transactionfeeOnMapIcon,
  Map as GeoIcon,
  LocationCity as GeoChildIcon,
  InsertChartOutlined as StatisticIcon,
  DeviceHub as employerbudgetIcon,
  Filter8 as employerbudgetNumberIcon,
  PersonAdd as employerRegisterIcon,
  HowToReg as employerContractIcon,
  Create as WritebudgetNumberIcon,
  LooksOne as ListemployerbudgetIcon,
  Build as employerRequestIcon,
  ChromeReaderMode as CtmTemplateIcon,
  People as employerIcon,
  Money as FormulaIcon,
  Build as ParentMenuSettingIcon,
  Build as ChangeemployerbudgetIcon,
  Add as SetupemployerbudgetIcon,
  Create as EditemployerbudgetIcon,
  Lockcon,
  Map as ParentMenuMapIcon,
  DeviceHub as employerDistributionMapIcon,
  Lock as InvoiceLockIcon,
  History as InvoiceHistory,
  FileCopy as InvoiceExport,
  PeopleRounded as CustomerIcon,
  DeviceHub as employerWritePayMapIcon,
  Home as CtmCompanyIcon,
  RecentActors as ReportQuantityemployerIcon,
  ArtTrack as ParentMenuReportIcon,
  LibraryBooks as ReportDebtemployerIcon,
  Subtitles as ReportRevenueLossemployerIcon,
  Web as ReportIncomeIcon,
  PlaylistPlay as ReportRevenueLossbworksIcon,
  AttachMoney as RevenueIcon,
  CloudUpload as ImportIcon,
  InsertDriveFile as TemplateIcon,
  CloudDownload as ExportIcon,
  Business as BusinessIcon,
  Payment as InvoicePaymentIcon,
  DoneAll as SelectedsIcons,
  MonetizationOn as employerDebtIcon,
  Done as CompleteIcon,
  Opacity as WidgetbworksQuantityIcon,
  Grain as WidgetbworksLossIcon,
  Email as TicketSupportIcon,
  Call as CommunicationIcon,
  Message as AnnouncementIcon,
  Business as ParentMenuEnterpriseIcon,
  Message as AgentIcon,
  Payment as PartnerIcon,
  DoneAll as QuotabworksIcon,
  Group as InstallationTeamIcon,
  Functions as RootbudgetIcon,
  TableChart as ReportemployerbudgetIcon,
  LockOpen as ActiveButtonIcon,
  Warning as WarningIcon,
  Usb as InterfaceStandardIcon,
  Opacity as MeasureMethodIcon,
  SettingsOverscan as ParentMenuDesignIcon,
  SpellCheck as ParentMenuStandardIcon,
  DoneOutline as bworksStandardIcon,
  FormatListNumbered as bworksParabudgetIcon,
  FlipToBack as bworksSourceGroupIcon,
  WavesRounded as bworksSourceIcon,
  BorderColor as auto-matcherIcon,
  Devices as DataloadIcon,
  AddAlert as AlertThresholdIcon,
  NotificationImportant as AlertbworksSourceIcon,
  DoneAll as NormalbworksSourceIcon,
  Repeat as ReportFlowIcon,
  PlaylistAddCheck as ReportQualityIcon,
  BarChart as ReportVolumeIcon,
  Opacity as ReportSummarizedQualityIcon,
  ViewHeadline as SourceFlowRateIcon,
  FormatListBulleted as ReporttransactionfeeIcon,
  ChromeReaderMode as SourceTemplateIcon,
  Category as GisDesignIcon,
  Timeline as LineChartIcon,
  BarChart as BarChartIcon,
  DragIndicator as DetailIcon,
  BubbleChart as BubbleChartIcon,
  PowerInput as DesignPipeIcon,
  RoundedCorner as MapPipeIcon,
  Search as MonitorIcon,
} from '@transactionfee-ui/icons';

export { default as FilterIcon } from './svgs/FilterIcon';
export { default as FlowloadIcon } from './svgs/FlowloadIcon';
export { default as budgetIcon } from './svgs/budgetIcon';
export { default as NodeIcon } from './svgs/NodeIcon';
export { default as PipeIcon } from './svgs/PipeIcon';
export { default as timeReducingIcon } from './svgs/timeReducingIcon';
export { default as loadIcon } from './svgs/loadIcon';
export { default as QualityloadIcon } from './svgs/QualityloadIcon';
export { default as TankIcon } from './svgs/TankIcon';
export { default as ValveIcon } from './svgs/ValveIcon';
export { default as AddTaskboardIcon } from './svgs/AddTaskboardIcon';
export default {};

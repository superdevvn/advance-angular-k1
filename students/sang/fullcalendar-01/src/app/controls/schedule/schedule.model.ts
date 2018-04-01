import { EventObjectInput } from "fullcalendar";

export class TooltipInfo {
    title: String;
    start: String;
    end: String;
    items: TooltipInfoItem[] = [];
}

export class TooltipInfoItem {
    title: string;
    detail: string;
}

export class ScheduleOption {
    events: ScheduleEvent[] = [];
}

export class ScheduleEvent implements EventObjectInput {
    id?: string;
    title: string;
    start: Date | string;
    end: Date | string;
    items?: TooltipInfoItem[]=[];
}

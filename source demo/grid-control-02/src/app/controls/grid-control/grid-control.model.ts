export interface IGridCommand{
    icon: string;
    click: Function;
}

export interface IGridColumn{
    field: string;
    title: string;
    width: string;
}

export interface IGridOption{
    data: any[],
    commands: IGridCommand[],
    columns: IGridColumn[]
}
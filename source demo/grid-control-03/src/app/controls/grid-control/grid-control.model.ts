export interface IGridCommand {
    icon: string;
    click: Function;
}

export interface IGridColumn {
    field: string;
    title: string;
    width: string;
    type: 'string' | 'number' | 'bool' | 'date' | 'datetime',
    trueValue?: string;
    falseValue?: string;
}

export interface IGridOption {
    url?: string;
    data?: any[];
    commands?: IGridCommand[];
    columns: IGridColumn[];
}

export class GridOption implements IGridOption{
    url?: string;
    data?: any[] = [];
    commands: IGridCommand[];
    columns: IGridColumn[] = [];
    pageSize: number;
    pageNumber: number;
    pageCount: number;
    orderBy: string;
    orderDirection: 'ASC' | 'DESC';
    total: number;
    constructor(){
        this.pageSize = 10;
        this.pageNumber = 1;
        this.orderBy = 'Id';
        this.orderDirection = 'DESC';
    }
}
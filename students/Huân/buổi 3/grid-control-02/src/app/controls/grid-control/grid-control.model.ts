export interface IGridCommand {
    icon: string;
    click: Function;
}

export interface IGridColumn {
    field: string;
    title: string;
    width: string;
    type: 'string' | 'number' | 'bool' | 'date' | 'datetime';
    trueValue?: string;
    falseValue?: string;

}

export class IGridColumn implements IGridColumn {
    field: string;
    title: string;
    width: string;
    type: 'string' | 'number' | 'bool' | 'date' | 'datetime';
    trueValue?: string;
    falseValue?: string;
    filterValue?: string;
}

export interface IGridOption {
    url?: string;
    data?: any[],
    commands?: IGridCommand[],
    columns: IGridColumn[],
}
export class GridOption implements IGridOption {
    url?: string;
    data?: any[]=[];
    commands: IGridCommand[];
    columns: IGridColumn[] = [];
    pageSize: number;
    pageNumber: number;
    orderBy: string;
    orderDirection: 'ASC' | 'DESC';
    total: number;
    pageCount: number;
    constructor() {
        this.pageSize = 2;
        this.pageNumber = 1;
        this.orderBy = 'Id';
        this.orderDirection = 'DESC';
    }
}
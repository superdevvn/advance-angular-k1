export interface iGridCommand{
    icon: string;
    click: Function;
}

export interface iGridColumn{
    field: string;
    title: string;
    width: string;
    type: "string" | "number" | "bool" | "datetime";
    trueValue?: string;
    falseValue?: string;
    filterValue?: string;
}

export interface iGridOption{
    url?: string;
    data?: any[];
    commands?: iGridCommand[];
    columns: iGridColumn[];
}

export class GridCommand{
    icon: string;
    click: Function;
}

export class GridColumn implements iGridColumn{
    field: string;
    title: string;
    width: string;
    type: "string" | "number" | "bool" | "datetime";
    trueValue?: string;
    falseValue?: string;
    filterValue?: string;
}

export class GridOption implements iGridOption{
    url?: string;
    data?: any[] = [];
    total: number;
    commands?: iGridCommand[];
    columns: GridColumn[] =[];
    pageSize: number;
    pageNumber: number;
    orderBy: string;
    orderDirection: string;
    pageCount: number;
    constructor(){
        this.pageSize = 5;
        this.pageNumber=1;
        this.orderBy= 'Id';
        this.orderDirection= 'DESC';
    }
}
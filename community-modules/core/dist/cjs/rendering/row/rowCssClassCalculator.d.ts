// Type definitions for @ag-grid-community/core v25.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowNode } from "../../entities/rowNode";
import { GridOptionsWrapper } from "../../gridOptionsWrapper";
import { StylingService } from "../../styling/stylingService";
export interface RowCssClassCalculatorParams {
    rowNode: RowNode;
    rowIsEven: boolean;
    rowLevel: number;
    fullWidthRow?: boolean;
    firstRowOnPage: boolean;
    lastRowOnPage: boolean;
    printLayout: boolean;
    expandable: boolean;
    extraCssClass?: string;
    rowFocused?: boolean;
    fadeRowIn?: boolean;
    scope?: any;
}
/**
 * Common logic for RowComp and AutoHeightCalculator
 */
export declare class RowCssClassCalculator {
    stylingService: StylingService;
    gridOptionsWrapper: GridOptionsWrapper;
    getInitialRowClasses(params: RowCssClassCalculatorParams): string[];
    processClassesFromGridOptions(rowNode: RowNode): string[];
    private preProcessRowClassRules;
    processRowClassRules(rowNode: RowNode, scope: any, onApplicableClass: (className: string) => void, onNotApplicableClass?: (className: string) => void): void;
    calculateRowLevel(rowNode: RowNode): number;
}

// Type definitions for @ag-grid-community/core v25.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../../context/beanStub";
import { HeaderContainer } from "../headerContainer";
import { HeaderPosition } from "./headerPosition";
import { ColumnGroup } from "../../entities/columnGroup";
import { Column } from "../../entities/column";
import { HeaderRowType } from "../headerRowComp";
import { GridPanel } from "../../gridPanel/gridPanel";
import { HeaderRootComp, HeaderContainerPosition } from "../headerRootComp";
export declare enum HeaderNavigationDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3
}
export declare class HeaderNavigationService extends BeanStub {
    private focusController;
    private headerPositionUtils;
    private animationFrameService;
    private gridPanel;
    private headerRoot;
    registerGridComp(gridPanel: GridPanel): void;
    registerHeaderRoot(headerRoot: HeaderRootComp): void;
    getHeaderRowCount(): number;
    getHeaderRowType(idx: number): HeaderRowType;
    getHeaderContainer(position?: HeaderContainerPosition): HeaderContainer;
    navigateVertically(direction: HeaderNavigationDirection, fromHeader: HeaderPosition | null, event: KeyboardEvent): boolean;
    navigateHorizontally(direction: HeaderNavigationDirection, fromTab: boolean, event: KeyboardEvent): boolean;
    private focusNextHeaderRow;
    scrollToColumn(column: Column | ColumnGroup, direction?: 'Before' | 'After'): void;
}

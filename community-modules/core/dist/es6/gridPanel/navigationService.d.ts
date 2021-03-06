// Type definitions for @ag-grid-community/core v25.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridPanel } from "./gridPanel";
import { BeanStub } from "../context/beanStub";
export declare class NavigationService extends BeanStub {
    private mouseEventService;
    private paginationProxy;
    private focusController;
    private animationFrameService;
    private rangeController;
    private columnController;
    private gridPanel;
    private timeLastPageEventProcessed;
    registerGridComp(gridPanel: GridPanel): void;
    handlePageScrollingKey(event: KeyboardEvent): boolean;
    private isTimeSinceLastPageEventToRecent;
    private setTimeLastPageEventProcessed;
    private onPageDown;
    private onPageUp;
    private navigateTo;
    private onCtrlUpOrDown;
    private onCtrlLeftOrRight;
    private onHomeOrEndKey;
}

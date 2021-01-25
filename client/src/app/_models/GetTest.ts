import { GetBreakage } from "./GetBreakage";
import { GetTag } from "./GetTag";

export interface GetTest {
    id: number;
    name: string;
    tags: GetTag[];
    testLinkTest: string;
    breakage: GetBreakage;
}
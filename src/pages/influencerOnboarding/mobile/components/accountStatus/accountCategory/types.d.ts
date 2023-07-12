import { CategoryI, InstagramUserI } from "../types";

export interface AccountCategoryPropsI {
    instagram: InstagramUserI;
    editHandler: () => void;
    categories: CategoryI[];
    categoriesHandler: (categories: CategoryI[]) => void;
}

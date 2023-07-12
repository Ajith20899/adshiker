export interface AccountDetailsPropsI {
    userList: InstagramUserI[];
    userListHandler: (userList: InstagramUserI[]) => void;
    selected: number;
    selectedHandler: (selected: number) => void;
}

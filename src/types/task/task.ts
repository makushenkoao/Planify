export interface ITask {
    uid: string;
    userId: string;
    checked: boolean;
    category: string;
    deadline: Date;
    title: string;
}

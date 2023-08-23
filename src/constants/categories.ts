export interface Category {
    value: string;
    label: string;
}

export const categories: Category[] = [
    {
        label: 'Quick task',
        value: 'quick_task',
    },
    {
        label: 'Urgent',
        value: 'urgent',
    },
    {
        label: 'Important',
        value: 'important',
    },
    {
        label: 'Nice to Have',
        value: 'nice_to_have',
    },
    {
        label: 'Low Priority',
        value: 'low_priority',
    },
];

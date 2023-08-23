import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface ITask {
    uid?: string;
    userId: string;
    checked: boolean;
    category: string;
    deadline: FirebaseFirestoreTypes.Timestamp;
    title: string;
}

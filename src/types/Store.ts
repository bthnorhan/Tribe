import { Store } from '@/redux';

export type RootStateType = ReturnType<typeof Store.getState>;
export type AppDispatchType = typeof Store.dispatch;

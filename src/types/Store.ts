import { Store } from '@/state';

export type RootStateType = ReturnType<typeof Store.getState>;
export type AppDispatchType = typeof Store.dispatch;

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromStudent from './student.reducer';
import * as fromCourse from './course.reducer';
import * as fromTask from './task.reducer';

export interface State {
  student: fromStudent.State;
  course: fromCourse.State;
  task: fromTask.State;
}

export const reducers: ActionReducerMap<State> = {
  student: fromStudent.reducer,
  course: fromCourse.reducer,
  task: fromTask.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import {createSelector, createFeatureSelector} from "@ngrx/store";
import * as reducer from './student.reducer';

export const selectStudentState = createFeatureSelector<reducer.StudentState>('student');
export const getStudentDetails = createSelector(selectStudentState, reducer.getStudentDetails);
export const getCourses = createSelector(selectStudentState, reducer.getCourses);

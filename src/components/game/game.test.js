import configureStore from 'redux-mock-store' //ES6
// const { configureStore } = require('redux-mock-store') //before ES6
import { createAction, handleActions, combineActions } from 'redux-actions';
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Game from './game.js';
import {toggleSort,jumpTo,handleClick} from "../../actions/actions";
import {TOGGLE_SORT, JUMP, CLICK} from "../../constants/constants";


const middlewares = []
const mockStore = configureStore(middlewares)
//const store = mockStore()
describe('Test the Game component', () => {

    describe('Test the Action Creators', () => {

        it("should create an action to toggleSort", () => {
            const expectedAction = {
                type: TOGGLE_SORT,
                isAscending:true,
            }
            expect(toggleSort(true)).toEqual(expectedAction)
        });

        it("should create an action to jumpTo", () => {
            const expectedAction = {
                type: JUMP,
                move:'1',
            }
            expect(jumpTo('1')).toEqual(expectedAction)
        });

    });

    describe('Test the Action Dispatchers', () => {
        const initialState = {}
        let store ;

        beforeEach(() => {
            store = mockStore(initialState)
            store.clearActions();
        });

        it("should dispatch action 'toggleSort' correctly", () => {

            store.dispatch(toggleSort(true))

            const actions = store.getActions()

            const expectedPayload = {
                type: TOGGLE_SORT,
                isAscending:true,
            }
            expect(actions).toEqual([expectedPayload])
        });

        it("should dispatch action 'jumpTo' correctly", () => {

            store.dispatch(jumpTo('1'))

            const actions = store.getActions()

            const expectedPayload = {
                type: JUMP,
                move:'1',
            }
            expect(actions).toEqual([expectedPayload])
        });



        it("should dispatch action 'toggleSort' correctly", () => {

            const toggleSort = createAction(TOGGLE_SORT)
            store.dispatch(toggleSort({ isAscending:true}))

            const actions = store.getActions()

            expect(actions).toEqual([toggleSort({isAscending:true})])
        });

        it("should dispatch action 'jumpTo' correctly", () => {

            const jumpTo = createAction(JUMP)
            store.dispatch(jumpTo())

            const actions = store.getActions()

            expect(actions).toEqual([jumpTo()])
        });

        it("should dispatch action 'handleClick' correctly", () => {

            const handleClick = createAction(CLICK)
            store.dispatch(handleClick())

            const actions = store.getActions()

            expect(actions).toEqual([handleClick()])
        });

    });

});
import {configureStore, createSlice} from '@reduxjs/toolkit';

import image from '../img/dot-grassfields-west-north.jpg';

const tribeSlice = createSlice({
  name: 'tribe',
  initialState: [
    {id: 1, title: 'Bulu', src: image, unit: 400000},
    {id: 2, title: 'Bamileke', src: image, unit: 40000},
    {id: 3, title: 'Sawa', src: image, unit: 90000},
    {id: 4, title: 'Toupouri', src: image, unit: 50000},
    {id: 5, title: 'Bassa', src: image, unit: 105000},
    {id: 6, title: 'Eton', src: image, unit: 950000},
  ],
  reducers: {
    findTribe: (state, action) => {},
  },
});

const dowrySlice = createSlice({
  name: 'dowry',
  initialState: [
    {
      id: 1,
      tribe: 'Bulu',
      age: '21',
      virginity: true,
      charm: '3',
      academicLevel: '3',
      tint: '1',
      morphology: '2',
      tradition: true,
      knowledge: true,
      init: 400000,
      value: 0,
    },
  ],
  reducers: {
    addDowry: (state, action) => {
      const newDowry = {
        id: action.payload.id,
        tribe: action.payload.tribe,
        age: parseInt(action.payload.age, 10),
        virginity: action.payload.virginity ? 5 : 2,
        charm: parseInt(action.payload.charm, 10),
        academicLevel: parseInt(action.payload.academicLevel, 10),
        tint: parseInt(action.payload.tint, 10),
        morphology: parseInt(action.payload.morphology, 10),
        tradition: action.payload.tradition ? 5 : 1,
        knowledge: action.payload.knowledge ? 10 : 2,
        initial: action.payload.initial,
        value: 0,
      };

      state.push(newDowry);
    },

    calculateDowry: (state, action) => {
      const dowry = state.find(item => item.id === action.payload);

      let val = 0;
      if (dowry.age < 18) {
        val = 10;
      } else if (dowry.age < 25) {
        val = 30;
      } else if (dowry.age < 30) {
        val = 25;
      } else if (dowry.age < 35) {
        val = 20;
      } else if (dowry.age < 40) {
        val = 15;
      } else if (dowry.age < 50) {
        val = 10;
      } else if (dowry.age > 50) {
        val = 1;
      }

      const count =
        val +
        dowry.virginity +
        dowry.charm +
        dowry.academicLevel +
        dowry.tint +
        dowry.morphology +
        dowry.tradition +
        dowry.knowledge;

      const score = count * dowry.initial;
      dowry.value = score;
    },
  },
});

export const {addDowry, calculateDowry} = dowrySlice.actions;

export const store = configureStore({
  reducer: {
    tribe: tribeSlice.reducer,
    dowry: dowrySlice.reducer,
  },
});

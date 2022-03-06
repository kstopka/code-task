## create react app with redux and typescript

npx create-react-app code-task --template redux-typescript

## install react-table library

npm i react-table

## install react-table library with types

npm i @types/react-

## styles

To create the styles I used SASS

## API

The function fakeApi retrieves data from a JSON file

## HOOKS

hook useDataFromApi waits for data and checks it
hook useColumns is a helper function to the react-table library

## reducerData

reducer for downloaded data

## components

Loading - simple loader when loading data
Table - component creating table
WorkTable - Table page loader component contains loader, tables or error message

## App

App - file with application
App.d - file with types
App.hooks - file with hooks
store - file with store for redux

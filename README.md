# Vue To Do List

Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## Svolgimento

1. creo un array di oggetti, ogni oggetto rappresenta una task, la quale è formata da `text` e `done`
2. con un ciclo **v-for** stampo i task nell'array `todoList`
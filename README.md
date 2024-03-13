# Vue To Do List

Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

### Bonus:

1. esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri
2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3. rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente
4. Se la lista è vuota stampare “Non sono presenti task” al posto della lista

## Svolgimento

1. creo un array di oggetti, ogni oggetto rappresenta una task, la quale è formata da `text` e `done`
2. con un ciclo **v-for** stampo i task nell'array `todoList`
3. creo una variabile temporanea `newTask`
4. con un `v-model` nell'input collego il value con la variabile temporanea
5. al `click` del bottone o al `keyup.enter` faccio l' **unshift** di newTask dentro l'array, con tutti i controlli
6. se la task inserita non è lunga almeno 5 caratteri faccio comparire un messaggio di errore
7. attraverso il click sulla task, inverto il valore della booleana `done`, facendo il toggle della classe **done**
8. attraverso il click sull'icona del cestino, vado a fare lo `splice` della task con l'indice ottenuto con il ciclo v-for
9. con un `v-if` verifico se la lunghezza dell'array `todoList` è uguale 0, se è vero compare un messaggio al posto della lista

<ul>
  <li *for="#todo of todos">
    {{ todo }}
  </li>
</ul>

<input #todotext (keyup)="doneTyping($event)">
<button (click)="addTodo(todotext.value)">Add Todo</button>
import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.page.html',
  styleUrls: ['./todo-view.page.scss'],
})
export class TodoViewPage implements OnInit {

  todos: TaskI[];

  constructor(private todoService: TodoService){}
  
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
  onRemove(idTask:string){
    this.todoService.removeTodo(idTask);
  }

}

import { Component } from '@angular/core';
import { trigger,animate,style,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
       transition("void=> *",[style({transform:"translateX(300px)"}),
         animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
 
 
           transition("*=>void",[style({transform:"translateX(0px)"}),
         animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
  
           ]))])    
      
      ])
 
   ]
})
export class AppComponent {
  /*title = 'todo4';*/
  todoArray=[];
  tododoneArray=[];
  todo;
  tododone;

  addTodo(value){
    if(value!==""){
      this.todoArray.push(value)
      //todoForm.resetForm()
     //console.log(this.todos) 
   }else{
     alert('Field required **')
    
    //console.log(this.todoArray)
    }
  }
  
  deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }
  deleteDoneItem(tododone){
  	for(let i=0 ;i<= this.tododoneArray.length ;i++){
  		if(tododone== this.tododoneArray[i]){
        this.tododoneArray.splice(i,1)
        this.todoArray.splice(i,-1)
  		}
  	}
  }
  todoSubmit(value:any){
    if(value!==""){
   this.todoArray.push(value.todo)
    //this.todoForm.reset()
   }else{
     alert('Field required **')
   }
  }

  doneItem(tododone){
    for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(tododone == this.todoArray[i]){
        this.tododoneArray.push(tododone)
        //this.todoArray.splice(i,1)
      }
    }
  }
  }


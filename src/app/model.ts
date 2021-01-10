export class Model{
  user:any;
  items:any;
  constructor(){
    this.user="leman ibrahimli";
    this.items=[
       new TodoItem("data-1",false),
       new TodoItem("data-1",true),
       new TodoItem("data-1",false ),
       new TodoItem("data-1",true)
    ];
  }
}
export class TodoItem{
  description:any;
  action:any;
  constructor(description:any,action:any){
    this.description=description;
    this.action=action;
  }
}
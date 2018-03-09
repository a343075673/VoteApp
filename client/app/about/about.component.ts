import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  
})
export class AboutComponent {
  item={} ;
  items = [];
  isLoading = true;


  addItemForm: FormGroup;
  name = new FormControl('', Validators.required);
  vote = new FormControl('', Validators.required);
  


  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              private userService: UserService,
              private auth: AuthService) { }

  ngOnInit() {
    this.getItems();

    this.addItemForm = this.formBuilder.group({
      name: this.name,
      vote: this.vote
    });
  }

  getItems() {
    this.itemService.getItems().subscribe(
      data => this.items = data.sort((a,b) => (b.vote - a.vote)),
      error => console.log(error),
    
    );
    this.isLoading=false;
  }

  vote2(item){
    item.vote+=1
    this.itemService.editItem(item).subscribe(
      res => {
        this.item=res;
        this.toast.setMessage('you vote yes for '+ item.name, 'success');
        this.getItems();
      },
    );
    
  }
  unvote(item){
    item.vote-=1;
    this.itemService.editItem(item).subscribe(
      res => {
        this.item=res;
        this.toast.setMessage('you unvote for ' +item.name, 'warning');
        this.getItems();
      },
  
    );
  }



  addItem() {
    this.itemService.addItem(this.addItemForm.value).subscribe(
      res => {
        const newItem = res.json();
        this.items.push(newItem);
        this.addItemForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

}
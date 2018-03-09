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
  // item2=['apple','banna','orange','pineapple'];
  // voted=[];
 
  // isVoted= false;


  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              private userService: UserService,
              private auth: AuthService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(
      data => this.items = data.sort((a,b) => (b.vote - a.vote)) , 
      error => console.log(error),
    
    );
  }

  vote2(item){
    item.vote+=1
    this.itemService.editItem(item).subscribe(
      res => {
        this.item=res;
        this.toast.setMessage('you vote yes for'+ item.name, 'success');
      },
    );
    this.getItems();
  }
  unvote(item){
    item.vote-=1;
    this.itemService.editItem(item).subscribe(
      res => {
        this.item=res;
        this.toast.setMessage('item edited successfully.', 'success');
        
      },
  
    );
  }

}
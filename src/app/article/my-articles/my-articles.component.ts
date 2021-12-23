import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { Article } from 'src/app/shared/models/article.model';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { UserService } from 'src/app/user/service/user.service';
import { User } from 'src/app/user/user.model';
import { DeleteArticleComponent } from '../article-delete-dialog/delete-article/delete-article.component';
import { ArticlesService } from '../service/article.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss']
})
export class MyArticlesComponent implements OnInit {

  user: User | undefined;
  newArticleForm: any;
  error: boolean;
  title: FormControl;
  description: FormControl;

  @ViewChild('form', { static: false }) myNgForm: any = ''; // just to call resetForm method

  constructor(private articlesService: ArticlesService,
              private userService: UserService,
              private dialog: MatDialog,
              private utilsService: UtilsService,
              private formBuilder: FormBuilder,
              @Inject(ROUTES_CONFIG) public routesConfig: any) {
    this.error = false;
    this.title = new FormControl('', [Validators.required, Validators.maxLength(30)]);
    this.description = new FormControl('', [Validators.required, Validators.maxLength(300)]);
    this.newArticleForm = this.formBuilder.group({
      title: this.title,
      description: this.description
    });
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  createNewArticle() {
    if (this.newArticleForm.valid) {
      this.articlesService.createArticle(new Article(this.newArticleForm.value)).subscribe((response) => {
        if (!response.errors) {
          this.myNgForm.resetForm();
          this.utilsService.showSnackBar('Article created', 'info-snack-bar');
          this.loadUser();
        }
      });
    }
  }

  deleteArticle(article: Article) {
    const dialogRef = this.dialog.open(DeleteArticleComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articlesService.removeArticle(article.id).subscribe((response) => {
          if (!response.errors) {
            this.utilsService.showSnackBar('Article removed', 'info-snack-bar');
            this.loadUser();
          } else {
            this.error = true;
          }
        });
      }
    });
  }

  trackByFn(index: any) {
    return index;
  }
}

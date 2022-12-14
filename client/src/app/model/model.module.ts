import { NgModule } from '@angular/core';
import { BookRepository} from './book.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { SurveyRepository } from './survey.repository';
import { Question, Survey, SurveyResponse } from './survey.model';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookRepository, SurveyRepository, StaticDataSource, Cart, Survey, Question, SurveyResponse,
  {provide: StaticDataSource, useClass: RestDataSource},
  RestDataSource, AuthService]
})
export class ModelModule {}

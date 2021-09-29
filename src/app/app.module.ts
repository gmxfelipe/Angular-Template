import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeElements } from './views/home-elements/home-elements.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BannerElementsComponent } from './components/project/organisms/banner-elements/banner-elements.component';
import { LineComponent } from './components/project/atoms/line/line.component';
import { TextHeadingComponent } from './components/project/atoms/text-heading/text-heading.component';
import { ParagraphComponent } from './components/project/atoms/paragraph/paragraph.component';
import { SubtitleComponent } from './components/project/atoms/subtitle/subtitle.component';

import { TableComponent } from './components/project/molecules/table/table.component';
import { ButtonsComponent } from './components/project/molecules/buttons/buttons.component';
import { CodeComponent } from './components/project/atoms/code/code.component';
import { BlockquoteComponent } from './components/project/atoms/blockquote/blockquote.component';
import { HeadingTagComponent } from './components/project/atoms/heading-tag/heading-tag.component';
import { MainElementsComponent } from './components/project/organisms/main-elements/main-elements.component';
import { ListIconsComponent } from './components/project/atoms/list-icons/list-icons.component';
import { ListOrderedComponent } from './components/project/atoms/list-ordered/list-ordered.component';
import { ListAlternateComponent } from './components/project/atoms/list-alternate/list-alternate.component';
import { ListUnorderedComponent } from './components/project/atoms/list-unordered/list-unordered.component';
import { ListsComponent } from './components/project/molecules/lists/lists.component';
import { TextWithImageComponent } from './components/project/atoms/text-with-image/text-with-image.component';
import { ImagesComponent } from './components/project/molecules/images/images.component';
import { ActionsComponent } from './components/project/molecules/actions/actions.component';
import { HomeComponent } from './views/home/home.component';
import { BannerComponent } from './components/project/organisms/banner/banner.component';
import { FormComponent } from './components/project/molecules/form/form.component';
import { ButtonComponent } from './components/project/atoms/button/button.component';
import { CardsComponent } from './components/project/molecules/cards/cards.component';
import { MainHomeComponent } from './components/project/organisms/main-home/main-home.component';
import { TextIconHomeComponent } from './components/project/molecules/text-icon-home/text-icon-home.component';
import { OptionsCardComponent } from './components/project/molecules/options-card/options-card.component';
import { ContactComponent } from './components/project/molecules/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeElements,
    FooterComponent,
    BannerElementsComponent,
    MainElementsComponent,
    LineComponent,
    TextHeadingComponent,
    ParagraphComponent,
    SubtitleComponent,
    TableComponent,
    ButtonsComponent,
    CodeComponent,
    BlockquoteComponent,
    HeadingTagComponent,
    ListIconsComponent,
    ListOrderedComponent,
    ListAlternateComponent,
    ListUnorderedComponent,
    ListsComponent,
    TextWithImageComponent,
    ImagesComponent,
    ActionsComponent,
    HomeComponent,
    BannerComponent,
    FormComponent,
    ButtonComponent,
    CardsComponent,
    MainHomeComponent,
    TextIconHomeComponent,
    OptionsCardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

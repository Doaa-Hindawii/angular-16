import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'الرئيسية', type: 'link', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'المواد الخام', icon: 'local_drink' },
  { state: 'grid', type: 'link', name: 'المنتجات', icon: 'local_cafe' },
  { state: 'lists', type: 'link', name: 'الوظائف', icon: 'work' },
  { state: 'menu', type: 'link', name: 'الموظفين', icon: 'people' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

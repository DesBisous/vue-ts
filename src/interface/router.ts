import Vue from 'vue';

export interface Meta {
  title: string;
  icon?: string;
  showChildren?: boolean;
}

export interface Router {
  path: string;
  name: string;
  template?: string;
  component?: Vue;
  meta: Meta;
  children?: Router[];
}

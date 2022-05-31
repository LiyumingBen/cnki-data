export interface IMenuItem {
  title: string
  path: string
  icon?: string
  children?: Array<IMenuItem>
}

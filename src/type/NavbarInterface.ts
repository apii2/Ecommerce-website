export interface NavbarInterface {
  name: string,
  url?: string,
  children?: (Omit<NavbarInterface, 'children'>&{url: string})[]
}
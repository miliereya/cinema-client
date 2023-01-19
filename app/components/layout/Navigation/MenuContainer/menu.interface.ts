import { TypeMaterialIconName } from "@/shared/types/icon"

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
import { ICard } from "./ICard";


export interface IinitialState {
    cardList: Array<ICard>,
    selectedCard: ICard | null,
    score: number
}
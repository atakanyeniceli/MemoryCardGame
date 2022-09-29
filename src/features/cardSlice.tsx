import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import tempCardList from "../Components/cardList.tsx";
import { ICard } from "../Interfaces/ICard";
import { IinitialState } from "../Interfaces/IinitialState";



const initialState: IinitialState = {
    cardList: Array<ICard>(...tempCardList),
    selectedCard: null,
    score: tempCardList.length
}

export const cardSlice = createSlice(
    {
        name: 'card',
        initialState,
        reducers: {
            _select: (state: IinitialState, action: PayloadAction<ICard>) => {

                const tempCard = state.cardList.find((card) => card.key === action.payload.key)

                if (tempCard !== undefined) {

                    if (state.selectedCard === null) {
                        state.selectedCard = { ...tempCard }

                    } else {

                        if (state.selectedCard.image === tempCard.image) {
                            state.score++

                        } else {
                            state.score--
                            state.cardList = state.cardList.map((card) => {
                                if (card.key === state.selectedCard?.key || card.key === tempCard.key) {
                                    return { ...card, status: false }
                                } else {
                                    return card
                                }

                            })
                        }

                        state.selectedCard = null
                    }

                }
            }
        }
    }
)

export const { _select } = cardSlice.actions
import { ReduxActionTypes } from './rootReducer';
import { Item, ServerItem, serverItemToItem } from '../domain/item';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ReduxItemState } from './itemReducer';

export interface ReduxLoadItemsAction {
  type: ReduxActionTypes.LOAD_ITEMS;
  data: Item[];
}

export interface ReduxResetItemsAction {
  type: ReduxActionTypes.RESET_ITEMS;
}

export const loadItems = (): ThunkAction<
  Promise<ReduxLoadItemsAction>,
  ReduxItemState,
  undefined,
  ReduxLoadItemsAction
> => {
  return async (
    dispatch: ThunkDispatch<ReduxItemState, undefined, ReduxLoadItemsAction>
  ) => {
    let url =
      'https://questland-public-api.cfapps.io/items?sort=totalPotential,desc&filterArtifacts=true';
    const res = await fetch(url);
    const items: ServerItem[] = await res.json();

    return dispatch({
      type: ReduxActionTypes.LOAD_ITEMS as ReduxActionTypes.LOAD_ITEMS,
      data: items.map(serverItemToItem)
    });
  };
};

export const resetItems = (): ReduxResetItemsAction => ({
  type: ReduxActionTypes.RESET_ITEMS
});

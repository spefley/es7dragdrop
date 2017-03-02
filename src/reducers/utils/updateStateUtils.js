import { findIndex, each} from "lodash";

export const insertUuidIntoState = (state, uuid, afterId, insertInChildren) => {
    if (afterId == undefined) {
        state[0].children.push(uuid);
        return state;
    }

    if(uuid == afterId) {
        return state
    }

    let index;
    let newChildren;
    if (insertInChildren) {
        index = findIndex(state, (component) => { return component.id == afterId; });
        newChildren = [uuid, ...state[index].children];
        state[index].children = newChildren;
    } else {
        let indexInChildren;
        index = findIndex(state, (component) => {
            indexInChildren = findIndex(component.children, (child) => {
                console.log(child, child == afterId);
                return child == afterId;
            });
            console.log(indexInChildren);
            return indexInChildren > -1;
        });
        state[index].children.splice(indexInChildren + 1, 0, uuid);
    }

    return state
}
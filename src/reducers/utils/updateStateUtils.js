import { findIndex } from "lodash";

export const insertUuidIntoState = (state, action, insertInChildren) => {
    const {compProperties, afterId} = action;
    if (afterId == undefined) {
        state[0].children.push(compProperties.Uuid);
        return state;
    }

    var newState = state.map(component => Object.assign({},component))

    if(compProperties.Uuid == afterId) {
        return newState
    }

    let index;
    let newChildren;
    if (insertInChildren) {
        index = findIndex(newState, (component) => { return component.id == afterId; });
        newChildren = [compProperties.Uuid, ...newState[index].children];
        newState[index].children = newChildren;
    } else {
        let indexInChildren;
        index = findIndex(newState, (component) => {
            indexInChildren = findIndex(component.children, (child) => {
                console.log(child, child == afterId);
                return child == afterId;
            });
            console.log(indexInChildren);
            return indexInChildren > -1;
        });
        newChildren = newState[index].children.splice(indexInChildren + 1, 0, compProperties.Uuid);
    }

    return newState
}
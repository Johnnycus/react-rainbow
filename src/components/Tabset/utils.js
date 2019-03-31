export function getChildTabNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('a[role="tab"]');
    }
    return [];
}

function getRefIndex(nodes, ref) {
    return nodes.indexOf(ref);
}

function sortChildren(childrenRefs, nodes) {
    const [...newChildrenRefs] = childrenRefs;
    newChildrenRefs.sort(
        (refA, refB) => getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref),
    );
    return newChildrenRefs;
}

export function insertChildOrderly(childrenRefs, childRef, nodes) {
    const newChildrenRefs = childrenRefs.concat([childRef]);
    return sortChildren(newChildrenRefs, nodes);
}

export function getActiveTabIndex(tabChildren, activeTabName) {
    return tabChildren.findIndex(tab => tab.name === activeTabName);
}

function getTotalWidth(children) {
    let totalWidth = 0;
    children.forEach((child) => {
        totalWidth += child.ref.offsetWidth;
    });
    return totalWidth;
}

export function getChildrenTotalWidth(children) {
    return getTotalWidth(children);
}

export function getChildrenTotalWidthUpToClickedTab(children, index) {
    const childrenUpToClickedTab = children.slice(0, index);
    return getTotalWidth(childrenUpToClickedTab);
}

export function isNotSameChildren(children, prevChildren) {
    return children.some((child, index) => {
        if (child && prevChildren[index]) {
            return child.props.name !== prevChildren[index].props.name;
        }
        return false;
    });
}

export function getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate) {
    return tabsetChildren.map((child) => {
        if (child.name === nameToUpdate) {
            return tab;
        }
        return child;
    });
}
